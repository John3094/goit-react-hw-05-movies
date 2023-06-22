import { MoviesList } from 'components/MoviesList/MoviesList';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieByName } from '../../service/Api';
import { SearchBox, Input, Label, Button } from './Movies.styled';
import toast, { Toaster } from 'react-hot-toast';
import { Loader } from '../../components/Loader/Loader';

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = useState(() => searchParams.get('query') ?? '');
  const query = searchParams.get('query');
  const [isLoading, setIsLoading] = useState(false);

  const updateQueryString = e => {
    e.preventDefault();
    if (value === '') {
      return setSearchParams({});
    }
    setSearchParams({ query: value });
  };

  useEffect(() => {
    if (!query) {
      return;
    }
    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        const movies = await getMovieByName(query);
        setMovies(movies);
      } catch (error) {
        toast.error('Try again');
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovies();
  }, [query]);

  const hadleInputChange = e => {
    setValue(e.target.value);
  };

  return (
    <SearchBox>
      {isLoading && <Loader />}
      <Label>Movies</Label>
      <form autoComplete="off" onSubmit={updateQueryString}>
        <Input type="text" value={value} onChange={hadleInputChange} />
        <Button type="submit">Search</Button>
      </form>
      {movies && <MoviesList movies={movies} />}
      <Toaster
        toastOptions={{ style: { background: '#ff1111', color: '#fff' } }}
      />
      {movies && movies.length === 0 && (
        <div>There are not movies with such name</div>
      )}
    </SearchBox>
  );
};

export default Movies;
