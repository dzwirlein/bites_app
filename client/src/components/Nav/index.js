import React from "react";
import "./style.css";



function Nav () {

return(

 
<nav className="navbar fixed-top">
        <div className="container">
            <a className="navbar-brand" href="#home" id="home-btn">
                <img class="logo" src="images/logo-main-white.png" alt="bites"/>
            </a>
            <ul className="d-inline my-auto">
                <li className="nav-item">
                    <a className="btn" href="#" data-toggle="modal" data-target="#loginModal" role="button" id="login-btn-1">
                        <h5 className="my-auto" id="login-text">LOG IN</h5>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="btn" href="#" data-toggle="modal" data-target="#signUpModal" role="button" id="signUp-btn-1">
                        <h5 className="my-auto" id="signUp">Sign Up</h5>
                    </a>
                </li>
            </ul>
         </div>
    </nav>



    );

    }

    export default Nav;