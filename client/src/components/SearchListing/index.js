import React from "react";
import "./style.css";
import SaveBtn from "../SaveBtn";
import DeleteBtn from "../DeleteBtn";


function SearchListing(props) {
    
    const name = props.place.name;
    const address = props.place.formatted_address;
    const rating = props.place.rating;
    const level = props.place.price_level;

    return (
      <div>
          <div className="row">
              <div className="col-md-4">
                  <p> {name}</p>
              </div>
              <div className="col-md-8">
                  <p >{address}</p>
              </div>
          </div>
          <div className="row mt-3">
              <div className="col-md-2">
                <p>Rating: {rating}</p>
                <p>Price Level: {level}</p>
              </div>
              <div className="col-md-10">
                <form>
                  <div className="form-group">
                    <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Comments..." rows="2"></textarea>
                  </div>
                  <SaveBtn onClick={() => props.lovePlace(props.place)} />
                    <DeleteBtn onClick={() => props.hatePlace(props.place)} />
                </form>
              </div>
          </div>
        <hr />
      </div>
    )
  }

  export default SearchListing;