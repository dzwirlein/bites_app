import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Card from "../components/Card";
import API from "../utils/API";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import MapG from "../components/MapG";
import MapMarkers from "../components/MapMarkers";
import PoweredByGoogle from "../components/PoweredByGoogle";
import InnerNav from "../components/InnerNav";
import InnerFooter from "../components/InnerFooter";
import SaveBtn from "../components/SaveBtn";
// import ResultsTable from "../components/ResultsTable";

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
    API.postHatedComment(id, this.state.comment, this.state.userID)
    .then(res => {
      this.setState({
        hatedplaces: res.data.swipedleft,    
        comment: ""
      })
    })
    .catch(err => console.log(err));
  }

  handleLovedCommentSubmit = event => {
    const id = event.target.id
    event.preventDefault();
    API.postLovedComment(id, this.state.comment, this.state.userID)
    .then(res => {
      this.setState({
        lovedplaces: res.data.swipedright,        
        comment: ""
      })
    })
    .catch(err => console.log(err));
  }

  deleteHatedPlace = id =>{
    API.deleteHatedPlace(id, this.state.userID)
    .then(res => {
      this.setState({
        hatedplaces: res.data.swipedleft
      })
    })
    .catch(err => console.log(err));
  }

  deleteLovedPlace = id =>{
    API.deleteLovedPlace(id, this.state.userID)
    .then(res => {
      this.setState({        
        lovedplaces: res.data.swipedright
      })
    })
    .catch(err => console.log(err));
  };
   
  render() {
    return (
      <div>
        <InnerNav />

 {/* SEARCH BAR */}

        <section className="mt-5" id="search-section">
            <div className="container rounded bg-light p-3 border-light">
                <form className="">
                    <Input
                        value={this.state.search}
                        onChange={this.handleInputChange}
                        name="search"
                        placeholder="Search for"
                    />
                </form>
                <FormBtn
                    disabled={!(this.state.search)}onClick={this.handleSearchSubmit}>
                    Search
                </FormBtn>
                <PoweredByGoogle />
            </div>        
        </section>

{/* END SEARCH BAR */}

{/* MAP */}

        {this.state.search ? (
          <MapG search={this.state.search.replace(/ /g, '+').replace(/,/g, '')} />
        ) : (<MapG search="Milwaukee, WI"/>)}
    
{/* END MAP */}

{/* RESULTS TABLE */}

        <section className="my-3" id="results-section">
            <div className="container bg-light rounded p-4 section-div">
                <div className="card my-0">
                    <div className="card-header">
                        Search Results
                    </div>
                    <div className="card-body scrollable">
                        {this.state.places.length ? (
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Address</th>
                                        <th scope="col">Rating</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Love</th>
                                        <th scope="col">Hate</th>
                                    </tr>
                                </thead>
                                {this.state.places.map((place,index) => (
                                  <tbody>
                                  <tr>
                                      <th scope="row">{index}</th>
                                      <td>{place.name}</td>
                                      <td>{place.address}</td>
                                      <td>{place.rating}</td>
                                      <td>{place.level}</td>
                                      <td><SaveBtn onClick={() => this.lovePlace(place)} /></td>
                                      <td><DeleteBtn onClick={() => this.hatePlace(place)} /></td>
                                  </tr>
                              </tbody>
                                ))}
                            </table>
                        ) : (
                           <h3>No Results to Display</h3>
                        )}
                    </div>
                </div>
            </div>
        </section>

{/* END RESULTS TABLE */}

        {/* HISTORY MAP */}

        <section className="mt-5 mb-3" id="map-section">
            <div className="container rounded bg-light p-3">
                <div id="history-map">
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
        </section>

        {/* END HISTORY MAP */}

        {/* LOVED */}
        <section className="my-3" id="loved-section">
          <div className="container bg-light rounded p-4 section-div">
            <div className="card my-0">
              <div className="card-header">
                  Loved Restaurants
              </div>
              <div className="card-body scrollable">
                {this.state.lovedplaces.length ? (
                <div>
                  {this.state.lovedplaces.map(place => (
                    <ListItem key={place._id}>
                      <h3>{place.name}</h3>
                      <List>
                        {place.lovedcomment.map(comment =>(
                        <ListItem key={comment._id}>
                          <Card>
                            Comment: {comment.body}                            
                          </Card>
                        </ListItem>
                        ))}
                      </List>
                      <DeleteBtn onClick={() => this.deleteLovedPlace(place._id)} />
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
                      <hr />
                    </ListItem>
                  ))}
                </div>
                ): (
                <h3>No Results to Display</h3>)}
              </div>
            </div>
          </div>          
        </section>

        {/* END LOVED */}

        {/* HATED AREA */}

        <section className="my-3" id="loved-section">
          <div className="container bg-light rounded p-4 section-div">
            <div className="card my-0">
              <div className="card-header">
                  Hated Restaurants
              </div>
              <div className="card-body scrollable">
              {this.state.hatedplaces.length ? (
                <div>
                   {this.state.hatedplaces.map(place => (
                    <ListItem key={place._id}>
                      <h3>{place.name}</h3>
                      <List>
                      {place.hatedcomment.map(comment =>(
                        <ListItem key={comment._id}>
                          <Card>
                            Comment: {comment.body}                            
                          </Card>
                        </ListItem>
                        ))}
                      </List>
                      <DeleteBtn onClick={() => this.deleteHatedPlace(place._id)} />
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
                          onClick={this.handleHatedCommentSubmit}
                        >
                          Submit Comment
                        </FormBtn>
                      </form>
                      <hr />
                    </ListItem>
                  ))}
                </div>
                ): (
                <h3>No Results to Display</h3>)}
              </div>
            </div>
          </div>          
        </section>

        {/* END HATED AREA */}
          
        <InnerFooter />
      </div>
    );
  }
}

export default Dashboard;