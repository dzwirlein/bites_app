import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Card from "../components/Card";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import MapG from "../components/MapG";
import MapMarkers from "../components/MapMarkers";
import Alert from "../components/Alert";
import PoweredByGoogle from "../components/PoweredByGoogle";
import SaveBtn from "../components/SaveBtn";

class Dashboard extends Component {

  state = this.props.location.state;
  
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSearchSubmit = event => {
    event.preventDefault();
    API.getPlacesGoogle(this.state.search.replace(/ /g, '+').replace(/,/g, ''))
    .then(res=>{
      this.setState({ places: res.data })
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

      <div>
        <div>
          <h1>Content for signed in users will go here</h1>
          <Container fluid>
            <Row>
              <Col size="md-12">
                <Card>
                  <h1>Search Places</h1>
                </Card>
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
                <Card>
                  <h1>Google Places search results</h1>
                </Card>
                {this.state.places.length ? (
                  <List>
                    {this.state.places.map(place => (
                      <ListItem key={place.id}>
                          <Card>
                            <strong>
                              {place.name} at {place.formatted_address}
                              <br />
                            </strong>
                            <p>Rating: {place.rating}</p>
                            <p>Price level: {place.price_level}</p>
                            <br />
                          </Card>
                          <SaveBtn onClick={() => this.lovePlace(place)} />
                          <DeleteBtn onClick={() => this.hatePlace(place)} />
                      </ListItem>
                    ))}
                  </List>
                ) : (
                  <h3>No Results to Display</h3>
                )}
              </Col>
              {this.state.search ? (
                <MapG search={this.state.search.replace(/ /g, '+').replace(/,/g, '')} />
              ) : (<div></div>)}
            </Row>
          </Container>
        </div>
        <div style={{ opacity: this.state.signed ? 1 : 0 }}>
          <Col size="md-12" >
            <Container fluid>
              <Card>
                <h1>Loved Places</h1>
              </Card>
              {this.state.lovedplaces.length ? (
                <List>
                  {this.state.lovedplaces.map(place => (
                    <ListItem key={place._id}>
                      <Container>
                        <Card>
                          {place.name}
                        </Card>
                        <Card>
                          <List>
                            {place.lovedcomment.map(comment =>(
                              <ListItem key={comment._id}>
                                <Card>
                                  Comment: {comment.body}
                                </Card>
                              </ListItem>
                            ))}
                          </List>
                        </Card>
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
              <Card>
                <h1>Hated Places</h1>
              </Card>
              {this.state.hatedplaces.length ? (
                <List>
                  {this.state.hatedplaces.map(place => (
                    <ListItem key={place._id}>
                      <div>
                        <Card>
                          {place.name}
                        </Card>
                        <Card>
                          <List>
                            {place.hatedcomment.map(comment =>(
                              <ListItem key={comment._id}>
                                <Card>
                                  Comment: {comment.body}
                                </Card>
                              </ListItem>
                            ))}
                          </List>
                        </Card>
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
                  <h3>No Results to Display</h3>
                )}
              </Container> 
            </Col>
            {(this.state.hatedplaces.length||this.state.lovedplaces.length) ? (
              <MapMarkers
                lovedplaces={this.state.lovedplaces}
                hatedplaces={this.state.hatedplaces}
              />
              ): (
                <div></div>
              )}
          </div>
        </div>
      );
    }
  }

export default Dashboard;