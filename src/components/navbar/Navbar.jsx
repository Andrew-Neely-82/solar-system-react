import { Link } from "react-router-dom";
import React from "react";
import "./navbar.scss";

const Navbar = () => {
  const DropDownMenu = () => {
    const PlanetListItems = () => {
      const planetNames = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];

      return planetNames.map((name) => (
        <li key={name}>
          <a className="dropdown-item" href={`#${name.toLowerCase()}`}>
            {name}
          </a>
        </li>
      ));
    };

    return (
      <li className="nav-item dropdown">
        <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Navigate To
        </Link>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          <li><a className="dropdown-item" href="#sun">The Sun</a><li><hr className="dropdown-divider"></hr></li></li>
          <PlanetListItems />
        </ul>
      </li>
    );
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark ">
        <div className="container-fluid">
          <span className="navbar-brand">The Solar System</span>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"><DropDownMenu /></ul>
            {/* figure out how to get this search to work as a way to find the celestial obj's */}
            {/* <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
