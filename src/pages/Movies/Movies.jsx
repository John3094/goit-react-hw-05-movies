import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { getMovieByName } from '../../service/Api';

const Movies = () => {
  const [movies, SetMovies] = useState([]);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const movieId = searchParams.get('movieId');

  return (
    <div>
      Movies
      <input
        type="text"
        // value={movieId}
        onChange={e => setSearchParams({ movie: e.target.value })}
      />
    </div>
  );
};

export default Movies;
