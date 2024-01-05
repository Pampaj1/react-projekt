import burger from "../assets/images/burger.svg";
import nuggets from "../assets/images/nuggets.svg";
import wrap from "../assets/images/wrap.svg";

import { useEffect, useContext } from "react";
import { TemplateContext } from '../App'

function Loading() {
  return (
    <div id="Loading" className="template-page" display="true" style={{ "height": "100vh" }}>
      <div className="relative flex flex-row h-5/6 items-center justify-center">
        <img className="animate-bounce" width="200" src={nuggets} alt="nuggets.svg" style={{animationDelay: "-1.25s"}} />
        <img className="animate-bounce" width="200" src={wrap} alt="wrap.svg" style={{animationDelay: "-1.5s"}} />
        <img className="animate-bounce absolute" width="200" src={burger} alt="burger.svg" style={{animationDelay: "-1.75s"}} />
        <LoadingBar />
      </div>
    </div>
  );
}


function LoadingBar() {

  let percentage = 0;
  const { template, setTemplate } = useContext(TemplateContext);
  


  useEffect(() => {
    let progressBar = document.querySelector("div[name='progress-bar']");
    
    function hideLoadingAndDisplayHomeTemplate() {
      clearInterval(incrementLoadingBar);
      
      const images = document.querySelectorAll("#Loading img");
      const loadingBar = document.querySelector("div[name='loading-bar']");
      
      if (!loadingBar || !images) return;

      loadingBar.classList.add("fade-out");
      [...images].map(img => {
        img.classList.add("fade-out")
      });

      setTimeout(() => setTemplate("Home"), 500);
    }

    function incrementLoadingBar() {
      (percentage < 100)
      ? percentage++
      : setTimeout(hideLoadingAndDisplayHomeTemplate, 500);

      progressBar.style.width = percentage + '%';
    }

    clearInterval(incrementLoadingBar);
    setInterval(incrementLoadingBar, 10);
  })



  return (
    <div name="loading-bar" className="absolute mt-40">
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div name="progress-bar" className="h-2.5 rounded-full" style={{backgroundColor: "#4aaa4c"}}></div>
      </div><strong>Welcome to FlavorA</strong><span className="float-right ml-3">Loading...</span>
    </div>
  );
}

export default Loading;
