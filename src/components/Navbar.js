import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li style={{ display: "inline", padding: "5px" }}>
              <NavLink to="/">Home</NavLink>
            </li>
            <li style={{ display: "inline", padding: "5px" }}>
              <NavLink to="/about">About</NavLink>
            </li>
            <li style={{ display: "inline", padding: "5px" }}>
              <NavLink to="/counter-example">Count</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
