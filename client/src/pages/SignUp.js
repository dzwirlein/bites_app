import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import InnerNav from "../components/InnerNav"
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import Alert from "../components/Alert";

class SignUp extends Component {
  state = {
    username: "",
    password: "",
    signed: false,
    alert: false
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (!this.state.username || !this.state.password) {
      alert("Fill out username and password");
    } else if (this.state.password.length < 6) {
      alert(`Password must be atleast 6 characters in length ${this.state.username}`)
    } else {
      API.saveUser({
        username: this.state.username,
        password: this.state.password
      })
      .then(res => {
        if(!res.data){
          this.setState({
            alert: true
          })
        }
        else{
          this.signIn()
        }
      })
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

      <div>
        <InnerNav />
        <Container>
            <div className="card login-form p-3">
              <div className="card-body">
                <h5 className="card-title text-center font-weight-bold mb-3">SIGN UP</h5>
                <hr />
                  <form style={{ opacity: this.state.signed ? 0 : 1 }} >
                  <div class="form-group mb-4">
                      <small className="small-text" for="loginUsername">Username</small>
                      <Input
                        value={this.state.username}
                        onChange={this.handleInputChange}
                        name="username"
                        placeholder="Enter Username (required)"
                        id="signUpUsername"
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
                        id="signUpPassword"
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
              This username is not available. Please try another.
              <DeleteBtn onClick={() => this.setState({alert: false})} />
            </Alert>
        </Container>
      </div>
    );
  }
}

export default SignUp;