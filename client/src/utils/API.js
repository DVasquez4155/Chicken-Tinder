import axios from "axios";

export default {
  getBusinesses: function() {
    return axios.get("/api/businesses/");
  },
  getBusiness: function(id) {
    return axios.get("/api/books/" + id);
  },
  deleteBusiness: function(id) {
    return axios.delete("/api/books/" + id);
  },
  saveBusiness: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
