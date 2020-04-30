import React from "react";
import ReactDOM from "react-dom";
import {useRoutes, A} from "hookrouter"

import App from "./components/app"
import Alphabetize from "./components/pages/alphabetize"
import EvenOrOdd from "./components/pages/evenOrOdd"

const routes = {
  "/": () => <App />,
  "/alphabetize": () => <Alphabetize />,
  "/evenOrOdd": () => <EvenOrOdd />,
  
};


function Main() {
  return (
    <div>
      <div className="navbar">
        <A href="/">HOME</A>
        <A href="/alphabetize">ALPHABETIZE</A>
        <A href="/evenOrOdd">EVEN or ODD</A>
        <A href="/fizzBuzz">FIZZBUZZ</A>
        <A href="/largestNum">LARGEST NUMBER</A>
        <A href="/pigLatin">PIG LATIN</A>
        <A href="/randomHex">RANDOM HEX</A>
        <A href="/removeFirstLast">REMOVE FIRST / LAST</A>
        <A href="/randomNumber">RANDOM NUMBER</A>

      </div>
      {useRoutes(routes)}
       {/* CURRYING */}
      {/* {useRoutes(routes)(loggedIn)} */}
    </div>
  )

}


ReactDOM.render(<Main />, document.querySelector(".app-wrapper"));

