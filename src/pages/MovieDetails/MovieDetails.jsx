import { useState, useEffect, useRef } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { getMovieDetails } from 'service/Api';
import { BtnGoBack } from '../../components/BtnGoBack/BtnGoBack';
import { Movie, Img, MovieaAditionalInfo } from './MovieDetails.styled';

const MovieDetails = () => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const noImage =
    'https://www.escapeauthority.com/wp-content/uploads/2116/11/No-image-found.jpg';

  useEffect(() => {
    getMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) {
    return null;
  }

  const { title, poster_path, overview, genres, vote_average } = movie;

  return (
    <>
      <div>
        <h1>MovieDetails:</h1>
        <BtnGoBack back={backLinkLocationRef.current} />
        <Movie>
          {poster_path ? (
            <Img src={poster_path} alt={title} width="200" />
          ) : (
            <img src={noImage} alt={'Noimage'} width="200" />
          )}

          <div>
            <h1>{title}</h1>
            <p>User score: {Math.round(vote_average * 10)}%</p>
            <h2>Overview</h2>
            <p>{overview}</p>
            <h2>Genres</h2>
            <p>{genres.map(genre => genre.name + ' ')}</p>
          </div>
        </Movie>
        <MovieaAditionalInfo>
          <ul>
            <li>
              <Link to={'cast'}>Cast</Link>
            </li>
            <li>
              <Link to={'reviews'}>Reviews</Link>
            </li>
          </ul>
        </MovieaAditionalInfo>
        <Outlet />
      </div>
    </>
  );
};

export default MovieDetails;
