import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../Services/Api.jsx";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function load() {
      const data = await getMovieReviews(movieId);
      setReviews(data);
    }

    load();
  }, [movieId]);

  if (!reviews.length) return <p>No reviews found</p>;

  return (
    <ul>
      {reviews.map(r => (
        <li key={r.id}>{r.content}</li>
      ))}
    </ul>
  );
};

export default MovieReviews;
