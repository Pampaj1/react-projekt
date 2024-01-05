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
          <button type="button" className="fixed top-0 left-0" aria-haspopup="true" aria-expanded="true" aria-controls="headlessui-menu-items-117">
            <FontAwesomeIcon className="text-4xl m-3" icon={faBars} style={{color: "#4aaa4c",}} />
          </button>

          <div className="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-left -translate-x-[50vw] scale-95">
            <div className="absolute left-0 w-[70vw] h-[100vh] origin-top-left bg-white border border-gray-200 divide-y divide-gray-100 shadow-lg outline-none" aria-labelledby="headlessui-menu-button-1" id="headlessui-menu-items-117" role="menu">
              <div className="px-4 py-3">         
                <a href="#" onClick={() => setTemplate("Home")} tabindex="0" className="flex justify-between w-full text-lg leading-5 text-left" role="menuitem">
                  <span><FontAwesomeIcon className="text-sm mr-3" icon={faHouseChimney}/>Home</span></a>
                <a href="#" tabindex="1" className="flex justify-between w-full pt-3 text-lg leading-5 text-left" role="menuitem">
                  <span><FontAwesomeIcon className="text-sm mr-3" icon={faChevronDown}/>Currency</span></a>
              </div>
              <div class="py-1">
                <a href="#" tabindex="0" className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"  role="menuitem">
                  <span className="ml-2">Euro</span><FontAwesomeIcon className="ml-3 mr-[15px]" icon={faEuroSign}/></a>
                <a href="#" tabindex="1" className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"  role="menuitem">
                  <span className="ml-2">GB Pound</span><FontAwesomeIcon className="ml-3 mr-[15px]" icon={faPoundSign}/></a>
                <a href="#" tabindex="2" className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"  role="menuitem">
                  <span className="ml-2">Zloty</span><i className="ml-3 mr-[15px] text-lg not-italic font-semibold">zł</i></a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
};