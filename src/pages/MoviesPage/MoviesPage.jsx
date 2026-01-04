import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { searchMovies } from "../../Services/Api.jsx";
import MovieList from "../../components/MovieList/MovieList";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";

  useEffect(() => {
    if (!query) return;

    async function load() {
      const data = await searchMovies(query);
      setMovies(data);
    }

    load();
  }, [query]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target.elements.search.value;
    setSearchParams({ query: value });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input name="search" defaultValue={query} />
        <button type="submit">Search</button>
      </form>

      {movies.length > 0 && <MovieList movies={movies} />}
    </>
  );
};

export default MoviesPage;
