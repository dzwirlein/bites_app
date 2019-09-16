import axios from "axios";

export default {
  // getBooksGoogle: function(query) {
  //   const link = "https://www.googleapis.com/books/v1/volumes?q="+query
  //   return axios.get(link);
  // },
  // getBooks: function() {
  //   return axios.get("/api/books");
  // },
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  saveUser: function(userData) {
    return axios.post("/api/users/:id", userData);
  }
};