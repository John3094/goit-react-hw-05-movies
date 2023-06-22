import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from '../../service/Api';
import { MovieCastItem } from '../MovieCastItem/MovieCastItem';
import { CastStyled, CastList, CastItem } from './Cast.styled';
import toast, { Toaster } from 'react-hot-toast';
import { Loader } from 'components/Loader/Loader';

const Cast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMovieCast = async () => {
      try {
        setIsLoading(true);
        const cast = await getMovieCast(movieId);
        setMovieCast(cast);
      } catch (error) {
        toast.error("This didn't work.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieCast();
  }, [movieId]);

  if (!movieCast) {
    return;
  }

  return (
    <CastStyled>
      {isLoading && <Loader />}
      {movieCast && (
        <CastList>
          {movieCast.map(movieCastItem => (
            <CastItem key={movieCastItem.id}>
              <MovieCastItem movieCastItem={movieCastItem} />
            </CastItem>
          ))}
        </CastList>
      )}
      <Toaster
        toastOptions={{ style: { background: '#ff1111', color: '#fff' } }}
      />
    </CastStyled>
  );
};

export default Cast;
