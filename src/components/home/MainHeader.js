import React from "react";
import { NavLink } from "react-router-dom";

export default function MainHeader() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="navbar-brand" to="#">
          Navbar
        </NavLink>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/" exact>
                Home <span className="sr-only"></span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/login">
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/dashboard">
                Dashboard
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
