import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import InnerNav from "../components/InnerNav"
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import Alert from "../components/Alert";
import InnerFooter from "../components/InnerFooter";

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
    if (this.state.username && this.state.password) {
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
      <Container fluid >
        <InnerNav />
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
            <Alert style={{ opacity: this.state.alert ? 1 : 0 }} type="danger" >
              This username is not available. Be more original.
              <DeleteBtn onClick={() => this.setState({alert: false})} />
            </Alert>
          </Col>
        </Row>
        <div style={{ opacity: this.state.signed ? 1 : 0 }}>
          <p>Content for first time users will go here</p>
          <p>Bla-bla-bla. Particularly disclaimer that whilst we don't have intention to actively steal they info, our login method mainly serve the purpose to find part in database, not to secure. So no SSNs, credit cards and grandmothers maiden names, please. And Internet in general is dangerous place, whole credit bureaus are getting broken into.</p>
          <a href="/login">
            <h5 className="my-auto" id="login-text">And now link to Log In</h5>
          </a>
        </div>
        <InnerFooter />
      </Container>
    );
  }
}

export default SignUp;