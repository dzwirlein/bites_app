import React from "react";
import "./style.css";
import logo from "../Nav/logo-main-white.png"


function InnerNav () {

    return(

        <nav className="navbar">
            <a className="navbar-brand" href="#home" id="home-btn">
                <img className="logo" src={logo} alt="bites" />
            </a>
        </nav>

    );
}

export default InnerNav;