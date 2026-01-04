import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import { getMovieDetails } from "../../Services/Api.jsx";

const IMG_BASE = "https://image.tmdb.org/t/p/w500";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const location = useLocation();

  // ✔ back link'i ilk gelişte sabitliyoruz
  const [backLink] = useState(location.state?.from ?? "/movies");

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function load() {
      const data = await getMovieDetails(movieId);
      setMovie(data);
    }

    load();
  }, [movieId]);

  if (!movie) return <p>Loading...</p>;

  return (
    <main>
      {/* ✔ artık ref yok → hata çözülür */}
      <Link to={backLink}>⬅ Go back</Link>

      <h2>{movie.title}</h2>

      <img src={`${IMG_BASE}${movie.poster_path}`} alt={movie.title} />

      <p>{movie.overview}</p>

      <h3>Additional information</h3>

      <ul>
        <li>
          <NavLink to="cast" state={{ from: backLink }}>
            Cast
          </NavLink>
        </li>

        <li>
          <NavLink to="reviews" state={{ from: backLink }}>
            Reviews
          </NavLink>
        </li>
      </ul>

      <Outlet />
    </main>
  );
};

export default MovieDetailsPage;
