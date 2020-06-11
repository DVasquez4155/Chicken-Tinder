import axios from "axios";

export default {
  createSession: (event) => {
    event.preventDefault();
    const values = event.target.elements;
    return axios.post("/api/register", {
      name: values.name.value.trim(),
      zip: values.zip.value.trim()
    });
  },
  getBusinesses: function() {
    return axios.get("/api/businesses/");
  },
  getFavorites: function() {
    return axios.get("/api/businesses/favorites");
  },
  getMatches: function() {
    return axios.get("/api/businesses/matches");
  },
  // getBusiness: function(id) {
  //   return axios.get("/api/businesses/" + id);
  // },
  // deleteBusiness: function(id) {
  //   return axios.delete("/api/businesses/" + id);
  // },
  bookmark: function(businessData) {
    
    return axios.post("/api/businesses/bookmark", businessData);
  },
  removeBookmark: function(id) {
    return axios.delete("/api/businesses/bookmark/" + id);
  },
  yesBusiness: function(businessData) {
    return axios.post("/api/businesses/yes", businessData);
  },
  maybeBusiness: function(businessData) {
    return axios.post("/api/businesses/maybe", businessData);
  },
  noBusiness: function(businessData) {
    return axios.post("/api/businesses/no", businessData);
  }
};
