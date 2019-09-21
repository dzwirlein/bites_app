import React from "react";
import "./style.css";

function Card({children}) {

    return(
 
<div className="card">
  <div className="card-body" style={{ height: 200, clear: "both", textAlign: "center"}}>
      {children}
  </div>
</div>



    )
}

export default Card;