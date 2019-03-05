import React, { Component } from "react";
import { Link } from "react-router-dom";

//Stateless component
const NavBar = ({ length }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link className="nav-item nav-link active" to="/calculator">
            Calculator <span className="sr-only">(current)</span>
          </Link>
          <Link className="nav-item nav-link" to="/counter">
            Counter
          </Link>
          <Link className="nav-item nav-link" to="/counter">
            Others
          </Link>
          <Link className="nav-item nav-link disabled" to="/todos">
            Todos
          </Link>
        </div>
      </div>
    </nav>
    // <nav className="navbar navbar-light bg-light">
    //   <Link className="navbar-brand" to="/calculator">
    //     Calculator
    //   </Link>
    //   <Link className="navbar-brand" to="/counter">
    //     Counter
    //   </Link>
    // </nav>
  );
};
export default NavBar;
