import React from "react";
import "./style.css";

function Card({children}) {

    return(        
        <div className="">
            <p className="">
                {children}
            </p>
            <hr />
        </div>
    )
}

export default Card;