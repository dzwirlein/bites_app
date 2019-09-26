import axios from "axios";
// https://maps.googleapis.com/maps/api/place/textsearch/xml?query=restaurants+in+Sydney&key=YOUR_API_KEY
export default {
  getPlacesGoogle: function(req){
    return axios.get("/api/search/:id", {
      params: req
    });
  },
  postHatedComment: function(id, comment, UserID){
    return axios.post("/api/hatedcomment/"+id, {body: comment, UserID: UserID});
  },
  postLovedComment: function(id, comment, UserID){
    return axios.post("/api/lovedcomment/"+id, {body: comment, UserID: UserID});
  },
  hatePlace: function(id, place) {
    return axios.post("/api/swipedleft/"+id, place);
  },
  lovePlace: function(id, place) {
    return axios.post("/api/swipedright/"+id, place);
  },
  saveUser: function(userData) {
    return axios.get("/api/users/", {params: userData});
  },
  deleteHatedPlace: function(id, UserID){
    return axios.delete("/api/hatedplaces/"+id, {params: UserID})
  },
  deleteLovedPlace: function(id, UserID){
    return axios.delete("/api/lovedplaces/"+id, {params: UserID})
  },
  findUser: function(req){
    return axios.get("/api/users/:id", {
      params: req
    });
  }
};