import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <Link exact="true" to="/">
        Home
      </Link>

        <div className="Btns">
          <Button id="btn1" to="/colorButton">ColorButton</Button>
          <Button id="btn2" to="/fizzBuzz">FizzBuzz</Button>
          <Button id="btn3" to="/popUpPic">PopUpPic</Button>
          <Button id="btn4" to="/sumNums">SumNums</Button>
        </div>
    </div>
  );
}

export default Navbar;