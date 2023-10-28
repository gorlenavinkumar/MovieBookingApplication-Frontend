import axios from "axios";

const MOVIE_API_BASE_URL = "http://localhost:8080/api/v1.0/moviebooking";
//const ADMIN_TOKEN = sessionStorage.getItem('token');

class MovieService {

  login(credentials) {
    return axios.post(MOVIE_API_BASE_URL + '/login', credentials);
  }

  register(register) {
    return axios.post(MOVIE_API_BASE_URL + '/register', register);
  }

  resetPassword(credentials,loginId) {
    return axios.put(MOVIE_API_BASE_URL + "/"+loginId+ '/forgot', credentials);
  }

  saveMovie(movie) {
    return axios.post(MOVIE_API_BASE_URL + '/add', movie, {
      headers: {
        'Authorization': sessionStorage.getItem('token')
      }
    });
  }

  getMovies() {
    return axios.get(MOVIE_API_BASE_URL + '/all');
  }

  getMoviesByMovieName(movieName) {
    return axios.get(MOVIE_API_BASE_URL + '/movies'+'/searchwithcompletename/'+ movieName);
  }

  deleteMovie(movieName) {
    return axios.delete(MOVIE_API_BASE_URL +'/'+movieName+ '/delete/',  {
      headers: {
        'Authorization': sessionStorage.getItem('token')
      }
    });
  }

  getTheatersByMovieName(movieName) {
    return axios.get(MOVIE_API_BASE_URL + "/theaters/" + movieName ,{
      headers:{
        'Authorization' :sessionStorage.getItem('token')
      }
    });
  }

  updateMovie(movie, movieName) {
    return axios.put(MOVIE_API_BASE_URL + "/"+movieName+"/update", movie, {
      headers: {
        'Authorization': sessionStorage.getItem('token')
      }
    });
  }

  bookMovieTicket(moviebook, movieName) {
    return axios.post(MOVIE_API_BASE_URL + "/"+movieName+"/add", moviebook,{
      headers: {
        'Authorization': sessionStorage.getItem('token')
      }
    });
  }

  updateTheater(movie, movieName, theatreName, ticket) {
    return axios.put(MOVIE_API_BASE_URL + "/" + movieName + "/" +theatreName + "/update"+ ticket);
  }



getSeats(reqBody, movieName) {
  return axios.post(MOVIE_API_BASE_URL + "/"+movieName+"/add", reqBody,{
      headers: {
        'Authorization': sessionStorage.getItem('token')
      }
    });
}
}


export default new MovieService();
