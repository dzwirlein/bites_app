import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
import { Container } from "../components/Grid";
import { Input } from "../components/Form";
import InnerNav from "../components/InnerNav";
import Alert from "../components/Alert"


import {
  withRouter
} from 'react-router-dom'

class LogIn extends Component {
  state = {
    username: "",
    password: "",
    userID:"",
    signed: false,
    alert: false,
    userinfo:[],
    search: "",
    places: [],
    lovedplaces:[],
    hatedplaces:[],
    comment: ""
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
      this.props.history.push({
        pathname: '/Dashboard',
        state: this.state
        }
  )
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

      <div>
        <InnerNav />
        <Container>
            <div className="card login-form p-3">
              <div className="card-body">
                <h5 className="card-title text-center font-weight-bold mb-3">LOG IN</h5>
                <hr />
                  <form style={{ opacity: this.state.signed ? 0 : 1 }} >
                  <div class="form-group mb-4">
                      <small className="small-text" for="loginUsername">Username</small>
                      <Input
                        value={this.state.username}
                        onChange={this.handleInputChange}
                        name="username"
                        placeholder="Enter Username (required)"
                        id="loginUsername"
                      />
                  </div>
                  <div class="form-group mb-5">
                      <small for="loginPassword">Password</small>
                      <Input
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        type="password"
                        name="password"
                        placeholder="Password (required)"
                        id="loginPassword"
                      />
                  </div>
                  </form>
                  <button className="btn btn-lg btn-submit btn-block py-1"
                    disabled={!(this.state.username && this.state.password)}
                    onClick={this.handleFormSubmit}
                  >Submit
                  </button>
              </div>
            </div>
            <Alert style={{ opacity: this.state.alert ? 1 : 0 }} type="danger" >
              Log in failed. Check username and password.
              <DeleteBtn onClick={() => this.setState({alert: false})} />
            </Alert>
        </Container>
      </div>
    );
  }
}

export default withRouter(LogIn);