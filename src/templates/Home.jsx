import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping, faBars } from '@fortawesome/free-solid-svg-icons'

import banner from "../assets/media/background.png"

function Home() {

  return (
    <div id="Home" className="template-page bg-[#FFF7EB] min-h-[100vh] px-6" display="false">
      <header className="banner relative flex justify-center">
        <img className="h-[350px] max-w-[500px]" src={banner} />
      </header>
      <nav>
        <FontAwesomeIcon className="fixed top-0 right-0 text-4xl m-3" icon={faBasketShopping} style={{color: "#4aaa4c",}} />
        <FontAwesomeIcon className="fixed top-0 left-0 text-4xl m-3" icon={faBars} style={{color: "#4aaa4c",}} />
      </nav>
      <main className="w-[100%]">
        <div className="promotion my-5 mx-auto rounded-md  min-h-[100px] bg-[#df9b6a]"></div> 
        <FoodItemContainer />
      </main>
    </div>
  );
}

function FoodItemContainer() {
  const items = [{
    "image": "#",
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
          <div className="rounded-md w-[48%] min-h-[100px] bg-[#df9b6a] text-center">
            {item.title}
          </div>
        );
      })}
    </div>
  );
}

export default Home;
