import React from "react";
import ReactDOM from "react-dom";
import {useRoutes, A} from "hookrouter"

import "./style/main.scss"
import App from "./components/app"
import ColorButton from "./components/pages/colorButton"
import FizzBuzz from "./components/pages/fizzBuzz"
import SumNums from "./components/pages/sumNums"
import PopUpPic from "./components/pages/popUpPic"

const routes = {
  "/": () => <App />,
  "/colorButton": () => <ColorButton />,
  "/fizzBuzz": () => <FizzBuzz />,
  "/sumNums": () => <SumNums />,
  "/popUpPic": () => <PopUpPic />,
  
};


function Main() {
  return (
    <div className="app">
      <div className="navbar">
        <A href="/"><button>HOME</button></A>
        <A href="/colorButton"><button>COLOR BUTTON</button></A>
        <A href="/sumNums"><button>SUM IT UP</button></A>
        <A href="/fizzBuzz"><button>FIZZ BUZZ</button></A>
        <A href="/popUpPic"><button>POP UP PIC</button></A>

       

      </div>
      {useRoutes(routes)}
       {/* CURRYING */}
      {/* {useRoutes(routes)(loggedIn)} */}
    </div>
  )

}


ReactDOM.render(<Main />, document.querySelector(".app-wrapper"));