import React from "react";
import "./style.css";
import logo from "./logo-main-white.png"


function Nav () {

    return(

        <nav className="navbar fixed-top">
            <a className="navbar-brand" href="/" id="home-btn">
                <img className="logo" src={logo} alt="bites"/>
            </a>
            <ul className="d-inline my-auto" id="nav-btns">
                <li className="nav-item">
                    {/* Add the line below to <a> for modal
                data-toggle="modal" data-target="#loginModal" role="button"*/}

                    <a className="btn" id="login-btn-1" href="/login" >
                        <h5 className="my-auto" id="login-text">LOG IN</h5>
                    </a>
                </li>
                <li className="nav-item">
                    {/* Add the line below <a> for modal
                data-toggle="modal" data-target="#signUpModal" role="button" */}
                    <a className="btn" href="/signup" id="signUp-btn-1">
                        <h5 className="my-auto" id="signUp">Sign Up</h5>
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;