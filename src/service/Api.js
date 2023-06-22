import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.params = {
  api_key: 'd525f3289f5c138ed98ba04c26330946',
  language: 'en-US',
};

export const IMAGE_URL = 'https://image.tmdb.org/t/p/w300/';

export const getMoviesTrend = async period => {
  try {
    const response = await axios.get(`trending/movie/${period}`);
    return response.data.results;
  } catch (error) {
    console.log(error.message);
  }
};

export const getMovieDetails = async id => {
  try {
    const response = await axios.get(`movie/${id}`);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const getMovieCast = async id => {
  try {
    const response = await axios.get(`movie/${id}/credits`);
    return response.data.cast;
  } catch (error) {
    console.log(error.message);
  }
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
