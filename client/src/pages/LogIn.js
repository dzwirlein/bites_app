import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import MapG from "../components/MapG"
import Alert from "../components/Alert"
import PoweredByGoogle from "../components/PoweredByGoogle"
import SaveBtn from "../components/SaveBtn"

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
  }

  handleSearchSubmit = event => {
    event.preventDefault();
    API.getPlacesGoogle(this.state.search)
    .then(res=>{
      console.log(res)
      this.setState({ places: res.data, search: ""})
    })
   .catch(err => console.log(err));
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
            <div style={{ opacity: this.state.signed ? 1 : 0 }}>
              <h1>Content for signed in users will go here</h1>
              <MapG />
              <Container fluid>
              <Row>
                <Col size="md-12">
                  <Jumbotron>
                    <h1>Search Places</h1>
                  </Jumbotron>
                  {/* <Alert style={{ opacity: this.state.alert ? 1 : 0 }} type="success" >
                  Book Saved
                  <DeleteBtn onClick={() => this.setState({alert: false})} />
                  </Alert> */}
                  <form>
                    <Input
                      value={this.state.search}
                      onChange={this.handleInputChange}
                      name="search"
                      placeholder="Search for"
                    />
                    <FormBtn disabled={!(this.state.search)}onClick={this.handleSearchSubmit}>
                      Search
                    </FormBtn>
                    <PoweredByGoogle />
                  </form>
                  <Jumbotron>
                    <h1>Google Places search results</h1>
                  </Jumbotron>
                  {this.state.places.length ? (
                    <List>
                      {this.state.places.map(place => (
                        <ListItem key={place.id}>
                            <Jumbotron>
                              <strong>
                                  {place.name} at {place.formatted_address}
                              <br />
                              </strong>
                              {place.photos[0].html_attributions[0]}
                              {/* <a href={book.volumeInfo.infoLink}>View</a> */}
                              <p>Rating: {place.rating}</p>
                              <br />
                              {/* <img src={book.volumeInfo.imageLinks.smallThumbnail} alt="Book" /> */}
                            </Jumbotron>
                            {/* <SaveBtn onClick={() => this.saveBook(book.volumeInfo)} /> */}
                        </ListItem>
                      ))}
                    </List>
                  ) : (
                  <h3>No Results to Display</h3>
                  )}
                </Col>
              </Row>
            </Container>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default LogIn;