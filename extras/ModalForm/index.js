import React from "react";
import "./style.css";

export function UserName(props) {
  return (
    <input type="text" className="form-control" id="UserName" aria-describedby="textHelp" {...props} />
    // <div className="form-group">
    //   <input className="form-control" {...props} />
    // </div>
  );
}

export function Password(props) {
    return (
        <input type="password" className="form-control" id="userPW" {...props} />
      // <div className="form-group">
      //   <input className="form-control" {...props} />
      // </div>
    );
  }

export function ModalBtn(props) {
  return (
    <button type="submit" className="btn btn-lg btn-block modal-submit mt-4 py-1" {...props} />
    // <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
    //   {props.children}
    // </button>
  );
}