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

    console.log("state: ", this.state)

    this.props.history.push({
          pathname: '/Dashboard',
          state: this.state
          }
        
    )
 
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

  handleSearchSubmit = event => {
    event.preventDefault();
    API.getPlacesGoogle(this.state.search)
    .then(res=>{
      this.setState({ places: res.data, search: ""})
    })
   .catch(err => console.log(err));
  };

  lovePlace = placeData => {
    API.lovePlace(this.state.userID, placeData)
    .then(res => {
      this.setState({        
        lovedplaces: res.data.swipedright
      })
    })
    .catch(err => console.log(err));
  };

  hatePlace = placeData => {
    API.hatePlace(this.state.userID, placeData)
    .then(res => {
      this.setState({
        hatedplaces: res.data.swipedleft
      })
    })
    .catch(err => console.log(err));
  };

  handleHatedCommentSubmit = event => {
    event.preventDefault();
    const id = event.target.id
    API.postHatedComment(id, this.state.comment)
    .then(res => {
      console.log(res)
      this.setState({     
        comment: ""
      })
    })
    .catch(err => console.log(err));
  }

  handleLovedCommentSubmit = event => {
    const id = event.target.id
    event.preventDefault();
    API.postLovedComment(id, this.state.comment)
    .then(res => {
      this.setState({        
        comment: ""
      })
    })
    .catch(err => console.log(err));
  }

  render() {
    return (
      // Enter username and password
      <Container fluid>
        <br /> <br /> <br /> <br /> <br /> <br /> <br />
        <Row>
          <Col size="md-6">
            <form style={{ display: this.state.signed ? "none" : "block" }}>
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
      {/* Page after Loggin In */}
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
                              <p>Price level: {place.price_level}</p>
                              <br />
                              {/* <img src={book.volumeInfo.imageLinks.smallThumbnail} alt="Book" /> */}
                            </Jumbotron>
                            {/* <SaveBtn onClick={() => this.saveBook(book.volumeInfo)} /> */}
                            <SaveBtn onClick={() => this.lovePlace(place)} />
                            <DeleteBtn onClick={() => this.hatePlace(place)} />
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
          <div style={{ opacity: this.state.signed ? 1 : 0 }}>
          <Col size="md-12" >
              <Container fluid>
                <Jumbotron>
                  <h1>Loved Places</h1>
                </Jumbotron>
                {this.state.lovedplaces.length ? (
                  <List>
                    {this.state.lovedplaces.map(place => (
                      <ListItem key={place._id}>
                        <Container>
                          <Jumbotron>
                            {place.name}
                          </Jumbotron>
                          <Jumbotron>
                            <List>
                              {place.lovedcomment.map(comment =>(
                                <ListItem key={comment._id}>
                                  <Jumbotron>
                                    Comment: {comment.body}
                                  </Jumbotron>
                                </ListItem>
                              ))}
                            </List>
                          </Jumbotron>
                          <DeleteBtn onClick={() => this.deletePlace(place._id)} />
                          <form>
                            <TextArea
                              value={this.state.comment}
                              onChange={this.handleInputChange}
                              name="comment"
                              placeholder="What is so good about it?"
                            />
                            <FormBtn
                              disabled={!(this.state.comment)}
                              id={place._id}
                              onClick={this.handleLovedCommentSubmit}
                            >
                              Submit Comment
                            </FormBtn>
                          </form>

                        </Container>
                      </ListItem>
                    ))}
                  </List>
                ): (
                <h3>No Results to Display</h3>)}
                </Container>  
            </Col>
            <Col size="md-12">
              <Container fluid>
                <Jumbotron>
                  <h1>Hated Places</h1>
                </Jumbotron>
                {this.state.hatedplaces.length ? (
                  <List>
                    {this.state.hatedplaces.map(place => (
                      <ListItem key={place._id}>
                        <div>
                          <Jumbotron>
                            {place.name}
                          </Jumbotron>
                          <Jumbotron>
                            <List>
                              {place.hatedcomment.map(comment =>(
                                <ListItem key={comment._id}>
                                  <Jumbotron>
                                    Comment: {comment.body}
                                  </Jumbotron>
                                </ListItem>
                              ))}
                            </List>
                          </Jumbotron>
                          <DeleteBtn onClick={() => this.deletePlace(place._id)} />
                          <form>
                            <TextArea
                              value={this.state.comment}
                              onChange={this.handleInputChange}
                              name="comment"
                              placeholder="Why did you hate it?"
                            />
                            <FormBtn
                              disabled={!(this.state.comment)}
                              id={place._id}
                              onClick={this.handleHatedCommentSubmit}
                            >
                              Submit Comment
                            </FormBtn>
                          </form>
                        </div>
                      </ListItem>
                    ))}
                  </List>
                ): (
                <h3>No Results to Display</h3>)}
                </Container> 
            </Col>
            </div>
          </Row>
      </Container>
    );
  }
}

export default withRouter(LogIn);