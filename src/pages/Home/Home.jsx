import { useState, useEffect } from 'react';
import { getMoviesTrend } from 'service/Api';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Loader } from '../../components/Loader/Loader';
import toast, { Toaster } from 'react-hot-toast';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        const movies = await getMoviesTrend('day');
        setMovies(movies);
      } catch (error) {
        toast.error("This didn't work.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      {isLoading && <Loader />}
      {movies.length > 0 && <MoviesList movies={movies} />}
      <Toaster
        toastOptions={{ style: { background: '#ff1111', color: '#fff' } }}
      />
    </div>
  );
};

export default Home;
