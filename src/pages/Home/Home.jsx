import { useState, useEffect } from 'react';
import { getMoviesTrend } from 'service/Api';
import { MoviesList } from 'components/MoviesList/MoviesList';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMoviesTrend('day').then(setMovies);
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      {movies.length > 0 && <MoviesList movies={movies} />}
    </div>
  );
};

export default Home;
