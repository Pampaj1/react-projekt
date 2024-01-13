import Menu from '../components/Menu.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import items from '../items.js'


function Cart() {

  
  const itemCount = 1;

  return (
    <div id="Cart" className="template-page bg-[#FFF7EB] min-h-[100vh]" display="true">
      <nav className="p-3 inline-flex items-center w-full px-6">
      <Menu />
        <h1 className="text-5xl ml-8 -mt-2">Basket</h1>
        <span className="ml-auto text-xl">Item count: {itemCount}</span>
      </nav>
      <div className="flex flex-col justify-center items-center">
        <ItemsList />
        <OptionMenu />
      </div>
    </div>
  )
}

function ItemsList() {
  return (
    <div className="">
      <Item />
      <Item />
    </div>
  )
}

function Item() {
  return (
    <div className="bg-[#ffff] w-[95vw] h-[100px] rounded-lg shadow-md my-5 p-3 md:w-[33.3vw]">
      <div className="">
      
      </div>
    </div>
  )
}

function OptionMenu() {

  const price = 120
  const shipping = 150

  const total = price + shipping

  return (
    <div className="mt-6 h-full w-[95vw] rounded-md border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
        <div className="mb-2 flex justify-between">
          <p className="text-gray-700">Subtotal</p>
          <p className="text-gray-700">${price} USD</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-700">Shipping</p>
          <p className="text-gray-700">${shipping} USD</p>
        </div>
        <hr className="my-4" />
        <div className="flex justify-between">
          <p className="text-lg font-bold">Total</p>
          <div className="">
            <p className="mb-1 text-lg font-bold">${total} USD</p>
            <p className="text-sm text-gray-700">including VAT</p>
          </div>
        </div>
        <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Check out</button>
      </div>
  )
}

export default Cart;