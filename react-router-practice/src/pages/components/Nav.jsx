import React from "react";
import './Nav.css';
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <>  
            {/* using navlink, navlink has active class name property */}
            <NavLink exact activeClassName="active" to="/">About</NavLink>
            <NavLink exact activeClassName="active" to="/contact">Contact</NavLink>
            <br />
            {/* using Link */}
            <Link to="/">About</Link>
            <Link to="/contact">Contact</Link>
            <br />
            {/* using anchor tag */}
            <a href="/">About</a>
            <a href="/contact">Contact</a>
        </>
    );
}

export default Nav;