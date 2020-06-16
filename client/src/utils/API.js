import axios from "axios";

export default {
  createSession: (event) => {
    event.preventDefault();
    const values = event.target.elements;
    axios
      .post("/api/register", {
        name: values.name.value.trim(),
        zip: values.zip.value.trim(),
      })
      .then((res) => (window.location.href = "/app/user/" + res.data));
  },
  joinSession: (event) => {
    event.preventDefault();
    const values = event.target.elements;
    axios
      .post("/api/join", {
        id: values.id.value.trim(),
      })
      .then((res) => (window.location.href = "/group/" + res.data.uuid));
  },
  joinGroupSession: (event, groupID) => {
    event.preventDefault();
    const values = event.target.elements;
    axios
      .post("/api/join/group", {
        id: groupID,
        name: values.name.value.trim(),
      })
      .then((res) => (window.location.href = "/app/user/" + res.data));
  },
  getSession: (id) => {
    return axios.post("/api/join", {
      id: id,
    })
  },
  getBusinesses: function(id) {
    return axios.get("/api/businesses/", {params: {userid:id}});
  },
  getUser: function (id) {
    return axios.get("/api/user", { params: { id: id } });
  },
  getGroup: function (id) {
    return axios.get("/api/group", { params: { id: id } });
  },
  getBookmarks: function () {
    return axios.get("/api/businesses/bookmarks");
  },
  getMatches: function () {
    return axios.get("/api/businesses/matches");
  },
  // getBusiness: function(id) {
  //   return axios.get("/api/businesses/" + id);
  // },
  // deleteBusiness: function(id) {
  //   return axios.delete("/api/businesses/" + id);
  // },
  bookmark: function (userId, businessId) {
    const data = {
      id: userId,
      businessId: businessId
    }
    return axios.post("/api/businesses/bookmark", data);
  },
  removeBookmark: function (userId, businessId) {
    const data = {
      id: userId,
      businessId: businessId
    }
    return axios.delete("/api/businesses/bookmark/", { params: data});
  },
  yesBusiness: function (userId, businessId) {
    const data = {
      id: userId,
      businessId: businessId
    }
    return axios.post("/api/businesses/yes", data);
  },
  undoBusiness: function (userId, businessId) {
    const data = {
      id: userId,
      businessId: businessId
    }
    return axios.post("/api/businesses/undo", data);
  },
  noBusiness: function (userId, businessId) {
    const data = {
      id: userId,
      businessId: businessId
    }
    return axios.post("/api/businesses/no", data);
  },
};
