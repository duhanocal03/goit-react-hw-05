import { useEffect, useState } from "react";
import { getTrendingMovies } from "../../Services/Api.jsx";;
import MovieList from "../../components/MovieList/MovieList";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function load() {
      const data = await getTrendingMovies();
      setMovies(data);
    }

    load();
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      {movies.length > 0 && <MovieList movies={movies} />}
    </>
  );
};

export default HomePage;
