import axios from "axios";


const authFetch = axios.create( {
    baseURL : "http://localhost:4000"
});

authFetch.interceptors.request.use(
    (request) => {

      var myToken = JSON.parse(localStorage.getItem("token"));
      request.headers.Accept = 'application/json';
      request.headers.Authorization = `bearer ${myToken.jwtToken}`
      console.log('request sent');
      return request;
    },
    (error) => {
      //to handle or save data in cloud
      return Promise.reject(error);
    }
  );

  authFetch.interceptors.response.use(
    (response) => {
      console.log('got response');
      return response;
    },
    (error) => {
      console.log(error.response);
      
      return Promise.reject(error);
    }
  );

  export default authFetch;