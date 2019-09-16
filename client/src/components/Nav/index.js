import React from "react";
import "./style.css";
import logo from "./logo-main-white.png"


function Nav () {

    return(

        <nav className="navbar fixed-top">
            <div className="container">
                <a className="navbar-brand" href="/" id="home-btn">
                    <img className="logo" src={logo} alt="bites"/>
                </a>
                <ul className="d-inline my-auto">
                    <li className="nav-item">
                        {/* Had to simplify this buttons 'cause they weren't clicking proper. To be corrected. Hanna.

                        <a className="btn" href="/login" data-toggle="modal" data-target="#loginModal" role="button" id="login-btn-1">
                            <h5 className="my-auto" id="login-text">LOG IN</h5>
                        </a> */}
                        <a href="/login">
                            <h5 className="my-auto" id="login-text">LOG IN</h5>
                        </a>
                    </li>
                    <li className="nav-item">
                        {/* <a className="btn" href="/signup" data-toggle="modal" data-target="#signUpModal" role="button" id="signUp-btn-1">
                            <h5 className="my-auto" id="signUp">Sign Up</h5>
                        </a> */}
                        <a href="/signup">
                            <h5 className="my-auto" id="signUp">Sign Up</h5>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;