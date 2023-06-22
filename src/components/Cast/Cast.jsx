import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from '../../service/Api';
import { MovieCastItem } from '../MovieCastItem/MovieCastItem';
import { CastStyled, CastList, CastItem } from './Cast.styled';

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
    <CastStyled>
      <CastList>
        {movieCast.map(movieCastItem => (
          <CastItem key={movieCastItem.id}>
            <MovieCastItem movieCastItem={movieCastItem} />
          </CastItem>
        ))}
      </CastList>
    </CastStyled>
  );
};
