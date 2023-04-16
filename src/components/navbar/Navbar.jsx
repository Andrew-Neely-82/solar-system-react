import React from "react";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-brand">The Solar System</div>
      <div className="navbar-links">
        <ul>
          <li>
            <a href="#sun">Sun</a>
          </li>
          <li>
            <a href="#mercury">Mercury</a>
          </li>
          <li>
            <a href="#venus">Venus</a>
          </li>
          <li>
            <a href="#earth">Earth</a>
          </li>
          <li>
            <a href="#mars">Mars</a>
          </li>
          <li>
            <a href="#jupiter">Jupiter</a>
          </li>
          <li>
            <a href="#saturn">Saturn</a>
          </li>
          <li>
            <a href="#uranus">Uranus</a>
          </li>
          <li>
            <a href="#neptune">Neptune</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
