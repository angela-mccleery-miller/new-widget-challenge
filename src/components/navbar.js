import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <Link exact="true" to="/">
        Home
      </Link>

      <Link to="./fizzBuzz">FizzBuzz</Link>

      {/* <Link to="/comp-two">Comp Two</Link> */}
    </div>
  );
}

export default Navbar;