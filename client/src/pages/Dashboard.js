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


class Dashboard extends Component {
    state = this.props.location.state;
    
  
    handleInputChange = event => {
        console.log(this.state)
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
    };
  
  
  
    handleSearchSubmit = event => {
      event.preventDefault();
      console.log(this.state)
      API.getPlacesGoogle(this.state.search)
      .then(res=>{
        console.log(res)
        this.setState({ places: res.data, search: ""})
      })
     .catch(err => console.log(err));
    };
    
   

render() {
    console.log("dash state: ", this.state)
  return (

        <div >
              <h1>Content for signed in users will go here</h1>
              <MapG />
              <Container fluid>
              <Row>
                <Col size="md-12">
                  <Card>
                    <h1>Search Places</h1>
                  </Card>
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
                    <FormBtn disabled={!(this.state.search)} onClick={this.handleSearchSubmit}>
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
                              <img src ={ place.photos[0].html_attributions[0]}></img>
                              {/* <a href={book.volumeInfo.infoLink}>View</a> */}
                              <p>Rating: {place.rating}</p>
                              <br />
                              {/* <img src={book.volumeInfo.imageLinks.smallThumbnail} alt="Book" /> */}
                            </Card>
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
  );
}
}


export default Dashboard;