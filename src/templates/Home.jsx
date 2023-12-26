import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'
import Menu from '../components/Menu.jsx'

import banner from "../assets/images/background.png"
import img from "../assets/images/wallpaper1.svg"

function Home() {

  const items = [{
    "image": img,
    "title": "burger",
    "description": "",
    "price": "",
    "delay": 0
  },
  {
    "image": "#",
    "title": "wrap",
    "description": "",
    "price": "",
    "delay": .1
  },
  {
    "image": "#",
    "title": "3",
    "description": "",
    "price": "",
    "delay": .2
  },
  {
    "image": "#",
    "title": "4",
    "description": "",
    "price": "",
    "delay": .3
  }];

  return (
    <div id="Home" className="template-page bg-[#FFF7EB] min-h-[100vh] px-6" display="false">
      <header className="banner relative flex justify-center">
        <img className="h-[350px] max-w-[500px]" src={banner} />
      </header>
      <nav>
        <FontAwesomeIcon className="fixed top-0 right-0 text-4xl m-3" icon={faBasketShopping} style={{color: "#4aaa4c",}} />
        <Menu />
      </nav>
      <main className="w-[100%]">
        <div className="promotion my-5 mx-auto rounded-md  min-h-[150px] bg-[#df9b6a] shadow-xl"></div> 
        <div className="flex flex-wrap justify-center gap-3">
          { items.map(item => {
            return (
              <div className="item rounded-md w-[48%] min-h-[150px] bg-[#df9b6a] text-center shadow-xl translate-y-[500px]" style={{ animationDelay: `${item.delay}s` }}>
                <img width="100%" src={item.image} className="rounded-md"/> 
              </div>
            );
          })}
        </div>
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
