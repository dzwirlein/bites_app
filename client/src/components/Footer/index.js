import React from "react";
import "./style.css";

function Footer() {

    return(
        <div>
            <footer class="d-flex justify-content-end" id="main-footer">
             <span id="footer-nav" class="">bites &copy; <span id="year"></span>    | 
                <a class="btn footer-links" href="#" data-toggle="modal" data-target="#loginModal" role="button" id="">LOG IN</a>
                    | 
                <a class="btn footer-links" href="#" data-toggle="modal" data-target="#signUpModal" role="button" id="">Sign Up</a>
             </span>
            </footer>
        </div>
    )

}

export default Footer;