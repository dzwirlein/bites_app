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
import InnerNav from "../components/InnerNav";
import InnerFooter from "../components/InnerFooter";

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
        <InnerNav />

 {/* SEARCH BAR */}

          <section className="mt-5" id="search-section">
              <div className="container rounded bg-light p-3 border-light">
                  {/* <div className="row"> */}
                      <form className="">
                          <Input
                            value={this.state.search}
                            onChange={this.handleInputChange}
                            name="search"
                            placeholder="Search for"
                          />
                          <FormBtn disabled={!(this.state.search)}onClick={this.handleSearchSubmit}>
                            Search
                          </FormBtn>
                          <FormBtn>
                            Random Suggestion
                          </FormBtn>
                          <FormBtn>
                            History
                          </FormBtn>
                          {/* <PoweredByGoogle /> */}
                    </form>
                  {/* </div> */}
              </div>        
          </section>

{/* END SEARCH BAR */}

{/* MAP */}

          {this.state.search ? (
            <MapG search={this.state.search.replace(/ /g, '+').replace(/,/g, '')} />
          ) : (<MapG search="Milwaukee, WI"/>)}
    
{/* END MAP */}

{/* RESULTS SECTION */}

          <section className="my-3" id="results-section">
              <div className="container bg-light rounded p-4">
                  <div class="card my-0">
                      <div class="card-header">
                          Search Results
                      </div>
                      <div class="card-body">
                        {/* RESULTS 1 DIV */}
                        <div>
                          <div className="row">
                              <div className="col-md-4">
                                  <p>Put Results Name Here</p>
                              </div>
                              <div className="col-md-8">
                                  <p>Put Results Address Here</p>
                              </div>
                          </div>
                          <div className="row mt-3">
                              <div className="col-md-2">
                                <p>Rating:</p>
                                <p>Price Level:</p>
                              </div>
                              <div className="col-md-10">
                                <form>
                                  <div className="form-group">
                                    <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Comments..." rows="2"></textarea>
                                  </div>
                                  <button type="submit" className="btn btn-primary">Like</button>
                                  <button type="submit" className=" mx-3 btn btn-primary">Dislike</button>
                                  <button type="submit" className="btn btn-primary">Submit</button>
                                </form>
                              </div>
                          </div>
                          <hr />
                        </div>
                        {/* END RESULTS 1 DIV */}

                        {/* RESULTS 2 DIV */}
                        <div>
                          <div className="row">
                              <div className="col-md-4">
                                  <p>Put Results Name Here</p>
                              </div>
                              <div className="col-md-8">
                                  <p>Put Results Address Here</p>
                              </div>
                          </div>
                          <div className="row mt-3">
                              <div className="col-md-2">
                                <p>Rating:</p>
                                <p>Price Level:</p>
                              </div>
                              <div className="col-md-10">
                                <form>
                                  <div className="form-group">
                                    <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Comments..." rows="2"></textarea>
                                  </div>
                                  <button type="submit" className="btn btn-primary">Like</button>
                                  <button type="submit" className=" mx-3 btn btn-primary">Dislike</button>
                                  <button type="submit" className="btn btn-primary">Submit</button>
                                </form>
                              </div>
                          </div>
                          <hr />
                        </div>
                        {/* END RESULTS 2 DIV */}

                      </div>
                      {/* END CARD BODY */}
                  </div>
                  {/* END CARD */}
              </div>
          </section>

{/* END RESULTS SECTION */}

        {/* UPPER SEARCH AREA */}
        <div>
          <Container fluid>

            <Row>

              {/* Search Places DIV */}
              <Col size="md-12">
                
                {/* SEARCH RESULTS */}

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
{/* WHERE THE MAP WAS */}
            </Row>
          </Container>
        </div>
        {/* END SEARCH AREA 1 */}

        {/* HATED LOVED AREA */}
        <div style={{ opacity: this.state.signed ? 1 : 0 }}>

          {/* LOVED */}
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
          {/* END LOVED */}

          {/* HATED AREA */}
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
          {/* END LOVED HATED AREA */}
          
          <InnerFooter />
        </div>
      );
    }
  }

export default Dashboard;