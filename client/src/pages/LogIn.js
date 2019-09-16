import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
// import Map from "../components/Map"
import Alert from "../components/Alert"

class LogIn extends Component {
  state = {
    username: "",
    password: "",
    signed: false,
    alert: false,
    userinfo:[]
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
        signed: true
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
    console.log(this.state)
  }

  render() {
    return (
      <Container fluid>
        <br /> <br /> <br /> <br /> <br /> <br /> <br />
        <Row>
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
                Log in
              </FormBtn>
            </form>
            <Alert style={{ opacity: this.state.alert ? 1 : 0 }} type="danger" >
              Log in failed. Check username and password.
              <DeleteBtn onClick={() => this.setState({alert: false})} />
            </Alert>
            <div style={{ opacity: this.state.signed ? 1 : 0 }}>
              <p>Content for signed in users will go here</p>
              {/* There is issue with how enviromental variable behave in dev mode. So this component won't work for now. To be solved. <Map /> */}
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default LogIn;