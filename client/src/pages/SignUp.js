import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

class SignUp extends Component {
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
      <Container fluid >
        <br /> <br /> <br /> <br /> <br /> <br /> <br />
        <Row  >
          <Col size="md-6">
            <form style={{ opacity: this.state.signed ? 0 : 1 }}>
              <Input
                value={this.state.username}
                onChange={this.handleInputChange}
                name="username"
                placeholder="Username (required)"
              />
              <Input
                value={this.state.password}
                onChange={this.handleInputChange}
                name="password"
                placeholder="Password (required)"
              />
              <FormBtn
                disabled={!(this.state.username && this.state.password)}
                onClick={this.handleFormSubmit}
              >
                Sign up
              </FormBtn>
            </form>
          </Col>
        </Row>
        <div style={{ opacity: this.state.signed ? 1 : 0 }}>Content for first time users will go here </div>
      </Container>
    );
  }
}

export default SignUp;