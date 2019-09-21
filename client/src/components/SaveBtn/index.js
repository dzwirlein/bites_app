import React from "react";
import "./style.css";

function SaveBtn(props) {
  return (
    <box-icon name='check' id="save-btn" {...props} animation='tada' rotate='180' color='#14e226' size="lg" role="button" pull="right"></box-icon>
  );
}

export default SaveBtn;