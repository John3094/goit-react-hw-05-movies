import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../../service/Api';
import { ReviewItem } from '../ReviewItem/ReviewItem';
import toast, { Toaster } from 'react-hot-toast';
import { Loader } from 'components/Loader/Loader';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setIsLoading(true);
        const reviews = await getMovieReviews(movieId);
        setReviews(reviews);
      } catch (error) {
        toast.error("This didn't work.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchReviews();
  }, [movieId]);

  if (!reviews) {
    return null;
  }

  return (
    <div>
      {isLoading && <Loader />}
      {reviews.length === 0 && 'We don`t have any reviews for this movie.'}
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <ReviewItem review={review} />
          </li>
        ))}
      </ul>
      <Toaster
        toastOptions={{ style: { background: '#ff1111', color: '#fff' } }}
      />
    </div>
  );
};

export default Reviews;
