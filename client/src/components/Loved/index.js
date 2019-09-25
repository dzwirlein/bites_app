import React from "react";
import { FormBtn } from "../Form";
import SaveBtn from "../SaveBtn";
import DeleteBtn from "../DeleteBtn";


function Loved(props) {
    
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
                    <textarea 
                        className="form-control" 
                        id="exampleFormControlTextarea1" 
                        value={this.state.comment}
                        onChange={this.handleInputChange}
                        name="comment"
                        placeholder="Comments..."
                        rows="2">
                    </textarea>
                  </div>
                  <FormBtn
                    disabled={!(this.state.comment)}
                    id={props.place._id}
                    onClick={this.handleLovedCommentSubmit}
                  >
                    Submit Comment
                  </FormBtn>
                </form>
              </div>
          </div>
        <hr />
      </div>
    )
  }

  export default Loved;