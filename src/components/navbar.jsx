import React, { Component } from "react";
import { Link } from "react-router-dom";

//Stateless component
const NavBar = ({ length }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link className="nav-item nav-link active" to="/news">
            News
          </Link>
          <Link className="nav-item nav-link active" to="/calculator">
            Calculator
          </Link>
          <Link className="nav-item nav-link active" to="/counter">
            Counter
          </Link>
          <Link className="nav-item nav-link active" to="/todos">
            Todos
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
