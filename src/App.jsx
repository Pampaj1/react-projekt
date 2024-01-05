import './css/App.css';
import Home from './templates/Home.jsx'
import Loading from './templates/Loading.jsx'
import Cart from './templates/Cart.jsx'
import Buy from './templates/Buy.jsx'

import { createContext, useState } from 'react';


export const TemplateContext = createContext({
  template: "",
  setTemplate: () => {}
});


function App() {

  const [template, setTemplate] = useState("Loading");

  return (
    <TemplateContext.Provider value={{template, setTemplate}}>
      {template === "Loading" && <Loading />}
      {template === "Home" && <Home />}
      {template === "Cart" && <Cart />}
      {template === "Buy" && <Buy />}
    </TemplateContext.Provider>
  );
}


export default App;
