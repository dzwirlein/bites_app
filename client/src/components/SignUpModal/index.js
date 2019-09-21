import React, { Component } from "react";
import "./style.css";
import API from "../../utils/API";
import { UserName, Password, ModalBtn } from "../ModalForm";

class SignUpModal extends Component {
    state = {
      username: "",
      password: "",
      signed: false
    };
  
    handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
    };
  
    handleFormSubmit = event => {
      event.preventDefault();
      if (this.state.username && this.state.password) {
        API.saveUser({
          username: this.state.username,
          password: this.state.password
        })
        .then(res => this.signIn())
        .catch(err => console.log(err));
      }
    };
  
    signIn =()=>{
      this.setState({
        signed: true
      })
    }
  
    render() {
      return (
            <div className="modal fade" id="signUpModal" tabindex="-1" role="dialog" aria-labelledby="signUpModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-sm modal-dialog-centered" role="document">
                    <div className="modal-content bites-modals">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" >
                            <i className="fas fa-times" aria-hidden="true"></i>
                            </button>
                        </div>
                        <div className="modal-body">
                            <h5 className="text-center">Log In</h5>
                            <form>

                                <div className="form-group">
                                    <small for="UserName">Username</small>
                                    <UserName
                                        value={this.state.username}
                                        onChange={this.handleInputChange}
                                        name="username"
                                        placeholder="Username (required)"
                                    />
                                    {/* <input type="text" className="form-control" id="exampleInputText" aria-describedby="textHelp" placeholder="Enter Username" required="required" /> */}
                                </div>
                                <div className="form-group">
                                    <small for="UserPW">Password</small>
                                    <Password 
                                        value={this.state.password}
                                        onChange={this.handleInputChange}
                                        name="password"
                                        placeholder="Password (required)"
                                    />
                                    {/* <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" required="required" /> */}
                                </div>
                                <ModalBtn
                                    disabled={!(this.state.username && this.state.password)}
                                    onClick={this.handleFormSubmit}
                                >
                                    Sign Up
                                </ModalBtn>
                                {/* <button type="submit" className="btn btn-lg btn-block modal-submit mt-4 py-1">Submit</button> */}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );  
    }
}

export default SignUpModal;