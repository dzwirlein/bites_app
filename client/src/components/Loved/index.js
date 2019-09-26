import React from "react";
import { FormBtn } from "../Form";
import SaveBtn from "../SaveBtn";
import DeleteBtn from "../DeleteBtn";


export function LovedInfo(props) {
    
    const name = props.place.name;
    const address = props.place.formatted_address;
    const rating = props.place.rating;
    const level = props.place.price_level;

    return (

      <div>
          <div className="d-flex flex-row bd-highlight mb-3">
              <div class="p-2 bd-highlight"> {name}</div>
              <div class="p-2 bd-highlight">{address}</div>
              <div class="p-2 bd-highlight">Rating: {rating}</div>
              <div class="p-2 bd-highlight">Price Level: {level}</div>
          </div>
      </div>
    )
  }

  export function LovedComment(props) {

    return (
      <div>
          <div className="row mt-3">
            {props.place.lovedcomment.map(comment =>(
              <div className="col-md-6" key={comment._id}>
                <p> {comment.body}</p>
              </div>
            ))}
              <div className="col-md-6">
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
                  </form>
                  <FormBtn
                    disabled={!(this.state.comment)}
                    id={props.place._id}
                    onClick={this.handleLovedCommentSubmit}
                  >
                    Submit Comment
                  </FormBtn>
                  <DeleteBtn onClick={() => this.deletePlace(props.place._id)} />
              </div>
          <hr />
          </div>
      </div>
    )              
  }