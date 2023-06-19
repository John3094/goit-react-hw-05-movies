import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.params = {
  api_key: 'd525f3289f5c138ed98ba04c26330946',
  language: 'en-US',
};

export const getMoviesTrend = async period => {
  try {
    const response = await axios.get(`trending/movie/${period}`);
    return response.data.results;
  } catch (error) {
    console.log(error.message);
  }
  // https://api.themoviedb.org/3/trending/all/day?api_key=d525f3289f5c138ed98ba04c26330946
};

export const getMovieDetails = async id => {
  try {
    const response = await axios.get(`movie/${id}`);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
  // https://api.themoviedb.org/3/movie/697843?api_key=d525f3289f5c138ed98ba04c26330946
};

export const getMovieCast = async id => {
  try {
    const response = await axios.get(`movie/${id}/credits`);
    return response.data.cast;
  } catch (error) {
    console.log(error.message);
  }
  // https://api.themoviedb.org/3/movie/697843/credits?api_key=d525f3289f5c138ed98ba04c26330946
};

export const getMovieReviews = async id => {
  try {
    const response = await axios.get(`movie/${id}/reviews`);
    return response.data.results;
  } catch (error) {
    console.log(error.message);
  }
};

export const getMovieByName = async query => {
  try {
    const response = await axios.get(`search/movie?query=${query}`);
    return response.data.results;
  } catch (error) {
    console.log(error.message);
  }
};

//   const response = await axios.get('', config);
//   return response.data;
// };

// const options = {
//   method: 'GET',
//   url: 'https://api.themoviedb.org/3/trending/all/day',
//   params: { language: 'en-US' },
//   headers: {
//     accept: 'application/json',
//     Authorization:
//       'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNTI1ZjMyODlmNWMxMzhlZDk4YmEwNGMyNjMzMDk0NiIsInN1YiI6IjYzNWJjMWU5OTVjMGFmMDA3YTBmZDFhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Pk0VB1l17sJoZBbgGwiM03TfzwTdN2i53CsmeaCddDc',
//   },
// };

// axios
//   .request(options)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });
