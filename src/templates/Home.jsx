import '../css/Home.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'

import { useEffect, useContext } from 'react'
import { TemplateContext } from '../App'

import Menu from '../components/Menu.jsx'
import banner from '../assets/images/background.png'
import items from '../items.js'



function Home() {
  const { template, setTemplate } = useContext(TemplateContext);

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
    <div id="Home" className="template-page bg-[#FFF7EB] min-h-[100vh] px-3" display="false">
      <header className="banner relative flex justify-center">
        <img className="h-[350px] max-w-[300px]" src={banner} alt="FlavorA banner" />
      </header>
      <nav>
        <a href="#" onClick={() => setTemplate("Cart")} className="fixed top-0 right-0 z-50" title="Cart">
          <FontAwesomeIcon icon={faBasketShopping} className="text-4xl m-3" style={{color: "#4aaa4c",}} />
        </a>
        <Menu />
      </nav>
      <main className="w-[100%] max-w-[1000px] mx-auto" tabIndex="0">
        <button type="button" title="promotion" className="promotion block my-5 mx-auto rounded-md w-full min-h-[150px] bg-[#df9b6a] shadow-xl"></button> 
        <section className="flex flex-wrap justify-center gap-3">
          { items.map(item => {
            itemDelay += .1; // seconds
            itemDelay = Number(itemDelay.toFixed(2));
            return (
              <button key={itemDelay} type="button" title={item.title} className="item rounded-md w-[150px] h-[150px] text-center shadow-xl translate-y-[500px]" style={{ animationDelay: `${itemDelay}s` }}>
                <img src={item.image} className="max-h-[100%] mx-auto" alt={item.title} /> 
              </button>
            );
          })}
        </section>
      </main>
    </div>
  );
}



function FoodItemContainer() {
  const items = [{
    "image": "../assets/images/items/Fresh beef burger isolated -1.png",
    "title": "burger",
    "description": "",
    "price": ""
  },
  {
    "image": "#",
    "title": "wrap",
    "description": "",
    "price": ""
  },
  {
    "image": "#",
    "title": "3",
    "description": "",
    "price": ""
  },
  {
    "image": "#",
    "title": "4",
    "description": "",
    "price": ""
  }];

  return (
    <div className="flex flex-wrap justify-center gap-3">
      { items.map(item => {
        return (
          <div className="item rounded-md w-[48%] min-h-[150px] bg-[#df9b6a] text-center shadow-xl">
            <img src="" /> 
          </div>
        );
      })}
    </div>
  );
}

export default Home;
