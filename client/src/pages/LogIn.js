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
      <Container fluid>
        <br /> 
        <br />
        <br />
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