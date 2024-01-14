import '../css/Home.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'

import { useEffect, useContext, useState } from 'react'
import { TemplateContext } from '../App'

import Menu from '../components/Menu.jsx'
import banner from '../assets/images/background.png'
import items from '../items.js'




function Home() {
  const { template, setTemplate } = useContext(TemplateContext);
  const [ clickedItem, setClickedItem ] = useState(null);


  const unselectClickedFoodItem = (event) => {
    const itemDetails = document.querySelector(".item .details") || null;
    if (!itemDetails) return;

    const foodItem = itemDetails.parentElement;
    const isClickInside = foodItem.contains(event.target);
    if (!isClickInside) setClickedItem(null);
  }


  const scrollToFoodItem = (foodItemID) => {
    const main = document.querySelector("#Home > main") || null;
    const foodItem = document.querySelector("#"+foodItemID) || null;
    if (!foodItem || !main) return;

    // Instantly space-out the (#Home > main) element
    // to make a smooth center-scroll-animation to the foodItem element 
    main.style.setProperty("margin-bottom", "100%");
    main.style.removeProperty("transition");
 
    setTimeout(() => {
      foodItem.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 0);
  }


  const onTemplateClick = (event) => {
    unselectClickedFoodItem(event);

    // IF itemDetails (.details) does not exist, THEN
    // Smoothly remove the: (#Home > main) element's bottom-margin
    setTimeout(() => {
      const main = document.querySelector("#Home > main") || null;
      const itemDetails = document.querySelector(".item .details") || null;
      if (!main || itemDetails) return;

      main.style.removeProperty("margin-bottom");
      main.style.setProperty("transition", "margin 1s linear");
    }, 100);
  }


  useEffect(() => {
    const templateHome = document.querySelector("#Home"); 
    const bannerImage = templateHome.querySelector(".banner img");
    const promotion = templateHome.querySelector(".promotion")
    
    templateHome.classList.add("opacity-0");
    templateHome.setAttribute("display", "true");

    setTimeout(() => {
      templateHome.classList.add("fade-in");
      bannerImage.classList.add("active");
      promotion.classList.add("active");
    }, 100);
  })


  let itemDelay = 0;

  return (
    <div id="Home" onClick={(event) => onTemplateClick(event)} className="template-page bg-[#FFF7EB] min-h-[100vh] px-3 pb-5" display="false">
      <header className="banner relative flex justify-center">
        <img className="h-[350px] max-w-[300px]" src={banner} alt="FlavorA banner" />
      </header>
      <nav>
        <a href="#" onClick={() => setTemplate("Cart")} className="fixed top-0 right-0 z-50" title="Cart">
          <FontAwesomeIcon icon={faBasketShopping} className="text-4xl m-3" style={{color: "#4aaa4c",}} />
        </a>
        <Menu />
      </nav>
      <main className="w-full max-w-[500px] mx-auto" tabIndex="0">
        <button type="button" title="promotion" className="promotion block my-5 mx-auto rounded-md w-full min-h-[150px] bg-[#df9b6a] shadow-xl"></button> 
        <section className="flex flex-wrap justify-center gap-3 relative">
          { items.map((item, index) => {
            itemDelay += .1; // seconds
            itemDelay = Number(itemDelay.toFixed(2));

            
            let itemClass = "item";
            let extendedContainer = null;

            if (clickedItem === index) {
              itemClass += " flex justify-center w-full";
              extendedContainer = (
                <section className="details max-h-[150px] bg-white h-full w-full overflow-hidden p-2 relative shadow-xl rounded-r-md">
                  <h1 className="item-title text-lg font-medium capitalize truncate">{item.title}</h1>
                  <hr></hr>
                  <p className="item-description text-sm break-all line-clamp-3 mb-10">{items[0].description/*item.description*/}</p>
                  <div className="absolute bottom-0 mb-[5px] w-[calc(100%-10px)]">
                    <span className="float-left item-title text-lg font-bold capitalize truncate">${(Math.random() * 100).toFixed(2)/*item.price*/}</span>
                    <button className="float-right mr-1 bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-4 rounded-md">ADD</button>
                  </div>
                </section>
              );
            }

            // ID is required for scrollToFoodItem()
            const id = "foodItem" + index;

            return (
              <div id={id} key={index} className={itemClass}>
                <button type="button" onClick={() => setTimeout(() => {setClickedItem(index); scrollToFoodItem(id)}, 0)} className="img rounded-md w-[150px] h-[150px] text-center shadow-xl translate-y-[500px]" style={{ animationDelay: `${itemDelay}s` }} title={item.title}>
                  <img src={item.image} className="max-h-[100%] mx-auto" alt={item.title} />
                </button>
                {extendedContainer}
              </div>
            );
          })}
        </section>
      </main>
    </div>
  );
}



export default Home;