import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () =>{
return(
<>
<div className="container-fluid nav_bg">
    <div className="row">
        <div className="col-10 mx-auto">
<nav className="ml-auto navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">
     RakeshRight </NavLink>
    <button className="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarSupportedContent"
    aria-controls="navbarSupportContent"
    aria-expanded="false"
    aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
      </button>
    <div 
    className="collapse navbar-collapse"
     id="navbarSupportedContent">
      <ul
       className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink activeClassName='menu_actives'
          className="nav-link active"
           aria-current="page" to="/">Home
           </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" to="/about">
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" to="/services">
            Services
          </NavLink>
        </li>
        <li 
        className="nav-item">
          <NavLink className="nav-link active" to="/contact">
            Contact
          </NavLink>
        </li>
    </ul>
      </div>
      </div>
      </nav>
      </div>
    </div>
  </div>
</>

);
};
export default Navbar;