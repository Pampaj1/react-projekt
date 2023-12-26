import Menu from '../components/Menu.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

function Cart() {

  const itemCount = 1;
  const price = 12

  return (
    <div id="Cart" className="template-page bg-[#FFF7EB] min-h-[100vh]" display="true">
      <nav className="p-3 inline-flex items-center w-full px-6">
        <Menu />
        <h1 className="text-5xl ml-8 -mt-2">Basket</h1>
        <span className="ml-auto text-xl">Item count: {itemCount}</span>
      </nav>
      <main className=" mt-3">
        <section className="flex flex-col gap-2">
          <div className="item-info relative flex items-center p-3 w-full h-25  bg-white">
            <div className="photo bg-black w-[85px] h-[85px] rounded-lg"></div>
            <div className="info w-[70%] ml-3">
              <h1 className="font-bold">Title</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, placeat!</p>
            </div>

            <button className="absolute right-0 top-0 p-1 pr-2">
              <FontAwesomeIcon className="text-3xl" icon={faXmark} style={{color: "#AA0000",}} />
            </button>
            <span className="absolute right-0 bottom-0 p-1 pr-2 text-xl">${price}</span>
          </div>

          <div className="item-info relative flex items-center p-3 w-full h-25  bg-white">
            <div className="photo bg-black w-[85px] h-[85px] rounded-lg"></div>
            <div className="info w-[70%] ml-3">
              <h1 className="font-bold">Title</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, placeat!</p>
            </div>

            <button className="absolute right-0 top-0 p-1 pr-2">
              <FontAwesomeIcon className="text-3xl" icon={faXmark} style={{color: "#AA0000",}} />
            </button>
            <span className="absolute right-0 bottom-0 p-1 pr-2 text-xl">${price}</span>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Cart;