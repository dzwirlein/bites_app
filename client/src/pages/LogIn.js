import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Card from "../components/Card";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import MapG from "../components/MapG"
import Alert from "../components/Alert"
import PoweredByGoogle from "../components/PoweredByGoogle"
import SaveBtn from "../components/SaveBtn"


import {
  withRouter
} from 'react-router-dom'

class LogIn extends Component {
  state = {
    username: "",
    password: "",
    signed: false,
    alert: false,
    userinfo:[],
    search: "",
    places: []
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    this.props.history.push('/Dashboard')
 
  };

  


  render() {
    return (
      <Container fluid>
        <br /> 
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
          </Col>
        </Row>
      </Container>
    );
  }
}

export default withRouter(LogIn);