import axios from "axios";
import db from "../Example.json"

export default {
  getBusinesses: function() {
    return db.businesses;
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
