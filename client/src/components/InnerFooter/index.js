import React from "react";
import "./style.css";

function InnerFooter() {

    return(
        <div>
            <footer className="d-flex justify-content-end" id="main-footer">
             <span id="footer-nav" className="">
                 bites &copy; 
                 <span id="year"></span>
             </span>
            </footer>
        </div>
    )

}

export default InnerFooter;