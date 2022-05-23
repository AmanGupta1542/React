import React from "react";
import { NavLink } from "react-router-dom";

import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Nav.css";

function Nav() {
  return (
    <div className="Container">
      <div className="row">
        <div className="col-3">
            <NavLink activeClassName="active" to="/">About</NavLink>
        </div>
        <div className="col-3">
            <NavLink activeClassName="active" to="/services">Services</NavLink>
        </div>
        <div className="col-3">
            <NavLink activeClassName="active" to="/user">User</NavLink>
        </div>
        <div className="col-3">
            <NavLink activeClassName="active" to="/contact">Contact</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Nav;
