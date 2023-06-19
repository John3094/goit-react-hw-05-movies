import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../../service/Api';
import { ReviewItem } from '../ReviewItem/ReviewItem';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    getMovieReviews(movieId).then(setReviews);
  }, [movieId]);

  if (!reviews) {
    return null;
  }

  return (
    <div>
      {reviews.length === 0 && 'We don`t have any reviews for this movie.'}
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <ReviewItem review={review} />
          </li>
        ))}
      </ul>
    </div>
  );
};
