import { useState, useEffect, useRef, Suspense } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { getMovieDetails } from 'service/Api';
import { BtnGoBack } from '../../components/BtnGoBack/BtnGoBack';
import { Movie, Img, MovieInfo, NavItem } from './MovieDetails.styled';
import { IMAGE_URL } from '../../service/Api';
import toast, { Toaster } from 'react-hot-toast';
import { Loader } from '../../components/Loader/Loader';

const MovieDetails = () => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoding, setIsLoading] = useState(false);
  const noImage =
    'https://www.escapeauthority.com/wp-content/uploads/2116/11/No-image-found.jpg';

  useEffect(() => {
    const featchMovie = async () => {
      try {
        setIsLoading(true);
        const movie = await getMovieDetails(movieId);
        setMovie(movie);
      } catch (error) {
        toast.error("This didn't work, try again.");
      } finally {
        setIsLoading(false);
      }
    };
    featchMovie();
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
      <Toaster
        toastOptions={{ style: { background: '#ff1111', color: '#fff' } }}
      />
      <Suspense fallback={isLoding && <Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
