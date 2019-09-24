import React, { Component } from "react";
import API from "../../client/src/utils/API";
import { UserName, Password, ModalBtn } from "../ModalForm";
import Alert from "../../client/src/components/Alert"
import DeleteBtn from "../../client/src/components/DeleteBtn";
import "./style.css";

class LogInModal extends Component {
    state = {
      username: "",
      password: "",
      userID:"",
      signed: false,
      alert: false,
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
        API.findUser({
          username: this.state.username,
          password: this.state.password
        })
        .then(res => this.signIn(res))
        .catch(err => console.log(err));
      }
    };
  
    signIn =(res)=>{
      if(res.data) {
        this.setState({
          userinfo: res.data,
          signed: true,
          userID: res.data._id,
          lovedplaces: res.data.swipedright,
          hatedplaces: res.data.swipedleft
        })
      }
      else{
        this.setState({
          username: "",
          password: "",
          signed: false,
          alert: true,
          userinfo:[]
        })
      }
    }

    render() {
        return (
            <div className="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="loginModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-sm modal-dialog-centered" role="document">
                    <div className="modal-content bites-modals">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
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
                                        onChange={this.statehandleInputChange}
                                        name="username"
                                        placeholder="Username (required)"
                                    />
                                    {/* <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" /> */}
                                </div>
                                <div className="form-group">
                                    <small for="UserPW">Password</small>
                                    <Password
                                        value={this.state.password}
                                        onChange={this.handleInputChange}
                                        name="password"
                                        placeholder="Password (required)"
                                    />
                                    {/* <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" /> */}
                                </div>
                                <ModalBtn
                                    disabled={!(this.state.username && this.state.password)}
                                    onClick={this.handleFormSubmit}
                                >
                                    Log In
                                </ModalBtn>
                                {/* <button type="submit" className="btn btn-lg btn-block modal-submit mt-4 py-1">Submit</button> */}
                            </form>
                            <Alert style={{ opacity: this.state.alert ? 1 : 0 }} type="danger" >
                                Log In failed. Check your username and password.
                                <DeleteBtn onClick={() => this.setState({alert: false})} />
                            </Alert> 
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LogInModal;