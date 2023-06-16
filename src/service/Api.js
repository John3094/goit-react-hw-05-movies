import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org';
axios.defaults.params = {
  key: 'd525f3289f5c138ed98ba04c26330946',
};

export const getMovies = async query => {
  const config = {
    params: {
      q: query,
    },
  };

  const response = await axios.get('', config);
  return response.data;
};
