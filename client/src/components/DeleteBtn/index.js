import React from "react";
import "./style.css";

function DeleteBtn(props) {
  return (
    <box-icon name='x' id="delete-btn" {...props} animation='tada' rotate='180' color='#ee1008' size="lg" role="button" tabIndex="0" pull="left"></box-icon>
  );
}

export default DeleteBtn;