import Menu from '../components/Menu.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

function Cart() {

  
  const price = 12

  return (
    <NavBar />
  )
}

function NavBar() {

  const itemCount = 1;

  return (
    <div id="Cart" className="template-page bg-[#FFF7EB] min-h-[100vh]" display="true">
      <nav className="p-3 inline-flex items-center w-full px-6">
      <Menu />
        <h1 className="text-5xl ml-8 -mt-2">Basket</h1>
        <span className="ml-auto text-xl">Item count: {itemCount}</span>
      </nav>
    </div>
  )
}

function ItemsList() {
  return (
    <div>
      
    </div>
  )
}

export default Cart;