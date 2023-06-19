import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from '../../service/Api';
import { MovieCastItem } from '../MovieCastItem/MovieCastItem';

export const Cast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState(null);

  useEffect(() => {
    getMovieCast(movieId).then(setMovieCast);
  }, [movieId]);

  if (!movieCast) {
    return;
  }

  return (
    <div>
      <ul>
        {movieCast.map(movieCastItem => (
          <li key={movieCastItem.id}>
            <MovieCastItem movieCastItem={movieCastItem} />
          </li>
        ))}
      </ul>
    </div>
  );
};
