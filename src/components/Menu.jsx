import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faEuroSign, faPoundSign, faChevronDown, faHouseChimney } from '@fortawesome/free-solid-svg-icons'
import '../css/Menu.css'

import { useContext } from 'react'
import { TemplateContext } from '../App'

export default function Menu() {
  const { template, setTemplate } = useContext(TemplateContext);

  return (
    <div id="Menu" className="fixed top-0 left-0 z-50">
      <div className="flex items-center justify-center">
        <div className="relative inline-block text-left dropdown">
          
          <button title="Menu" type="button" className="fixed top-0 left-0" aria-haspopup="true" aria-expanded="true" aria-controls="headlessui-menu-items-117">
            <FontAwesomeIcon className="text-4xl m-3" icon={faBars} style={{color: "#4aaa4c",}} />
          </button>

          <aside className="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-left -translate-x-[50vw] scale-95">
            <div id="headlessui-menu-items-117" className="absolute left-0 w-[70vw] h-[100vh] origin-top-left bg-white border border-gray-200 divide-y divide-gray-100 shadow-lg outline-none" aria-labelledby="headlessui-menu-button-1" role="menu">
              <section className="flex flex-col" tabIndex="0">         
                <a href="#" onClick={() => setTemplate("Home")} className="text-lg leading-5 px-4 py-3 mt-1" role="menuitem">
                  <FontAwesomeIcon className="text-sm mr-3" icon={faHouseChimney}/>
                  <span>Home</span>
                </a>
                <a href="#" className="text-lg leading-5 px-4 py-3" role="menuitem">
                  <FontAwesomeIcon className="text-sm mr-3" icon={faChevronDown}/>
                  <span>Currency</span>
                </a>
              </section>
              <section className="py-1" tabIndex="1">
                <a href="#" className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"  role="menuitem">
                  <span className="ml-2">Euro</span>
                  <FontAwesomeIcon className="ml-3 mr-[15px]" icon={faEuroSign}/>
                </a>
                <a href="#" className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"  role="menuitem">
                  <span className="ml-2">GB Pound</span>
                  <FontAwesomeIcon className="ml-3 mr-[15px]" icon={faPoundSign}/>
                </a>
                <a href="#" className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"  role="menuitem">
                  <span className="ml-2">Zloty</span>
                  <i className="ml-3 mr-[15px] text-lg not-italic font-semibold -mt-1">zł</i>
                </a>
              </section>
            </div>
          </aside>

        </div>
      </div>
    </div>
  )
};