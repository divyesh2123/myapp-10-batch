import axios from 'axios';
var p = JSON.parse(localStorage.getItem("token"));


axios.defaults.baseURL = "http://localhost:4000/";
axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.headers.common['Authorization'] = `Bearer ${p.jwtToken}`