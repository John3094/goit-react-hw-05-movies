import { MoviesList } from 'components/MoviesList/MoviesList';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieByName } from '../../service/Api';
import { SearchBox, Input, Label, Button } from './Movies.styled';

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = useState(() => searchParams.get('query') ?? '');
  const query = searchParams.get('query');

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
    getMovieByName(query).then(setMovies);
  }, [query]);

  const hadleInputChange = e => {
    setValue(e.target.value);
  };

  return (
    <SearchBox>
      <Label>Movies</Label>
      <form autoComplete="off" onSubmit={updateQueryString}>
        <Input type="text" value={value} onChange={hadleInputChange} />
        <Button type="submit">Search</Button>
      </form>
      {movies && <MoviesList movies={movies} />}
      {movies && movies.length === 0 && (
        <div>There are not movies with such name</div>
      )}
    </SearchBox>
  );
};

export default Movies;
