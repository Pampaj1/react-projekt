import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

export default function Buy() {

  const total = 0;

  return (
    <div id="Buy" className="template-page min-h-[100vh]" display="true">
      <nav className="p-3 inline-flex">
        <button id="return">
          <FontAwesomeIcon className="text-4xl" icon={faArrowLeft} style={{color: "#4aaa4c",}} />
        </button>
        <h1 className="text-5xl ml-3 -mt-1">Address info</h1>
      </nav>
      <main className="p-3 mt-3">
        <form method="POST">
          <div className="w-full mb-6">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
              Full name
            </label>
            <input className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-100 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Forename Surname" />
          </div>
          <div className="w-full mb-6">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
              Phone number
            </label>
            <input className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-100 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" />
          </div>
          <div className="flex -mx-3">
            <div className="w-full w-[35vw] px-3 mb-3 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                Postal code
              </label>
              <input className="appearance-none block w-full bg-gray-100 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="XXX-XXX" />
              <p className="text-red-500 text-xs italic">Please fill out this field.</p>
            </div>
            <div className="w-full w-[65vw] px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                City
              </label>
              <input className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-100 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" />
            </div>
          </div>
          <div className="flex -mx-3">
            <div className="w-full w-[65vw] px-3 mb-3 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                Address line 1
              </label>
              <input className="appearance-none block w-full bg-gray-100 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" />
              <p className="text-red-500 text-xs italic">Please fill out this field.</p>
            </div>
            <div className="w-full w-[35vw] px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                House number
              </label>
              <input className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-100 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-2xl">Total: ${total}</span>
            <button type="submit" className="bg-green-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-blue-500 rounded">Confirm purchase</button>
          </div>
        </form>
      </main>
    </div>
  )
}