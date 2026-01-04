import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCredits } from "../../Services/Api.jsx";

const IMG_BASE = "https://image.tmdb.org/t/p/w200";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    async function load() {
      const data = await getMovieCredits(movieId);
      setCast(data.cast ?? []);
    }

    load();
  }, [movieId]);

  if (!cast.length) {
    return <p>No cast information found.</p>;
  }

  return (
    <ul>
      {cast.map(actor => (
        <li key={actor.id}>
          <img
            src={
              actor.profile_path
                ? `${IMG_BASE}${actor.profile_path}`
                : "https://via.placeholder.com/200x300?text=No+Image"
            }
            alt={actor.name}
          />
          <p>{actor.name}</p>
          <p>as {actor.character}</p>
        </li>
      ))}
    </ul>
  );
};

export default MovieCast;
