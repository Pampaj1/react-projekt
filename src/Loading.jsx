import burger from "./assets/media/burger.svg";
import nuggets from "./assets/media/nuggets.svg";
import wrap from "./assets/media/wrap.svg";

import {useState, useEffect } from "react";

function Loading() {
  return (
    <template-page name="Loading" display="true">
      <div className="relative flex flex-row h-5/6 items-center justify-center">
        <img className="animate-bounce" width="200" src={nuggets} alt="burger.svg" style={{animationDelay: "-1.25s"}} />
        <img className="animate-bounce" width="200" src={wrap} alt="wrap.svg" style={{animationDelay: "-1.5s"}} />
        <img className="animate-bounce absolute" width="200" src={burger} alt="nuggets.svg" style={{animationDelay: "-1.75s"}} />
        <LoadingBar />
      </div>
    </template-page>
  );
}

function LoadingBar() {
  let percentage = 0;
  
  useEffect(() => {
    let progressBar = document.querySelector("div[name='progress-bar']");
    
    function hideLoading() {
      clearInterval(incrementLoadingBar);

      const images = document.querySelectorAll("template-page[name='Loading'] img");
      const loadingBar = document.querySelector("div[name='loading-bar']");
      
      loadingBar.classList.add('fade-out');
      [...images].map(img => {
        img.classList.add('fade-out')
      });

      setTimeout(() => {
        let templateLoading = document.querySelector("template-page[name='Loading']");
        let templateHome = document.querySelector("template-page[name='Home']");

        templateLoading.setAttribute("display", "false");
        templateHome.setAttribute("display", "true");
      }, 300);
    }
    //
    function incrementLoadingBar() {
      (percentage < 100)
      ? percentage++
      : setTimeout(hideLoading, 500);

      progressBar.style.width = percentage + '%';
    }
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
