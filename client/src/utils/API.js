import axios from "axios";
// https://maps.googleapis.com/maps/api/place/textsearch/xml?query=restaurants+in+Sydney&key=YOUR_API_KEY
export default {
  getPlacesGoogle: function(req){
    return axios.get("/api/search/:id", {
      params: req
    });
  },
  postHatedComment: function(id, comment){
    return axios.post("/api/hatedcomment/"+id, {body: comment});
  },
  postLovedComment: function(id, comment){
    return axios.post("/api/lovedcomment/"+id, {body: comment});
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
  findUser: function(req){
    return axios.get("/api/users/:id", {
      params: req
    });
  }
};