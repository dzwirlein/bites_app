import axios from "axios";
// https://maps.googleapis.com/maps/api/place/textsearch/xml?query=restaurants+in+Sydney&key=YOUR_API_KEY
export default {
  getPlacesGoogle: function(req){
    return axios.get("/api/search/:id", {
      params: req
    });
  },
  // getBooks: function() {
  //   return axios.get("/api/books");
  // },
  hatePlace: function(id, place) {
    return axios.post("/api/swipedleft/"+id, place);
  },
  lovePlace: function(id, place) {
    return axios.post("/api/swipedright/"+id, place);
  },
  saveUser: function(userData) {
    return axios.post("/api/users/:id", userData);
  },
  findUser: function(req){
    return axios.get("/api/users/:id", {
      params: req
    });
  }
};