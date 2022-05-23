import React from "react";
import { NavLink } from "react-router-dom";

const Error = () => {
    return (
        <h1>
            Error 404. This page does not exist.
            <NavLink to="/">Home</NavLink>
        </h1>);
}

export default Error;