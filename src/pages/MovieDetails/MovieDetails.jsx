import { useState, useEffect } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { getMovieDetails } from 'service/Api';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  console.log(movieId);
  console.log(movie);

  useEffect(() => {
    getMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) {
    return null;
  }

  const { title, poster_path, overview, genres } = movie;

  return (
    <>
      <div>
        <h1>MovieDetails:</h1>
        <img src={poster_path} alt={title} width="200" />
        <div>
          <h1>{title}</h1>
          <p>{overview}</p>
          <p>{genres.map(genre => genre.name + ' ')}</p>
        </div>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </>
  );
};

export default MovieDetails;
