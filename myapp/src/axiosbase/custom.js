import axios from 'axios';

var p = JSON.parse(localStorage.getItem("token"));


const authFetch = axios.create({
  baseURL: 'http://localhost:4000',
  headers: {
    Accept: 'application/json',
    Authorization : `Bearer ${p.jwtToken}`
  }
});

export default authFetch;