import { useState, useEffect, useRef, Suspense } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { getMovieDetails } from 'service/Api';
import { BtnGoBack } from '../../components/BtnGoBack/BtnGoBack';
import { Movie, Img, MovieInfo, NavItem } from './MovieDetails.styled';
import { IMAGE_URL } from '../../service/Api';

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
      <BtnGoBack back={backLinkLocationRef.current} />
      <Movie>
        {poster_path ? (
          <Img src={`${IMAGE_URL}${poster_path}`} alt={title} />
        ) : (
          <Img src={noImage} alt={'Noimage'} />
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
      <MovieInfo>
        <ul>
          <li>
            <NavItem to="cast">Cast</NavItem>
          </li>
          <li>
            <NavItem to="reviews">Reviews</NavItem>
          </li>
        </ul>
      </MovieInfo>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
