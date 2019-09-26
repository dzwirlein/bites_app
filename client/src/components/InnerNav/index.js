import React from "react";
import "./style.css";
import logo from "../Nav/logo-main-white.png"


function InnerNav () {

    return(

        <nav className="navbar">
            <a className="navbar-brand" href="/" id="home-btn">
                <img className="logo" src={logo} alt="bites" />
            </a>
            <ul className="d-inline my-auto" id="nav-btns">
                <li className="nav-item">
                    <a className="btn" href="/signup" id="signUp-btn-1">
                        <h5 className="my-auto" id="signUp">Sign Out</h5>
                    </a>
                </li>
            </ul>
        </nav>

    );
}

export default InnerNav;