import React, { Component } from "react";
import { FormBtn } from "../Form";
import SaveBtn from "../SaveBtn";
import DeleteBtn from "../DeleteBtn";

class LovedComment extends Component {
    render() {
        return (
            <>
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
            </>
          )        
    }
}

export default LovedComment;