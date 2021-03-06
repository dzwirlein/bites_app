import React from "react";
import "./style.css";

function Footer() {

    return(
        <div>
            <footer className="d-flex justify-content-end" id="main-footer">
                <span id="footer-nav" className="">
                    bites &copy; <span id="year"></span>    | 
                    <a className="btn footer-links" href="/login" data-toggle="modal" data-target="#loginModal" role="button" id="">LOG IN</a>
                        | 
                    <a className="btn footer-links" href="/signup" data-toggle="modal" data-target="#signUpModal" role="button" id="">Sign Up</a>
                </span>
            </footer>
        </div>
    )
}

export default Footer;