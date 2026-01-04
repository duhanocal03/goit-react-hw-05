import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYWYyNGFjN2FiN2M1MjExMzYxYTcxMjYzZTc3N2JiOSIsIm5iZiI6MTc2NDM2MzQ3MS4yNDcsInN1YiI6IjY5MmEwY2NmNjMyMzA1NjkwYzI0NjExYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JQaqDKGeibGtd4HUDSGT7acyXCmpjdgLTY35izIdwtU`,
  },
});

// 🔹 Trend filmler (HomePage)
export const getTrendingMovies = async () => {
  const { data } = await api.get("/trending/movie/day");
  return data.results;
};

// 🔹 Arama (MoviesPage)
export const searchMovies = async (query) => {
  const { data } = await api.get("/search/movie", {
    params: {
      query,
      include_adult: false,
      language: "en-US",
    },
  });

  return data.results;
};

// 🔹 Detay (MovieDetailsPage)
export const getMovieDetails = async (movieId) => {
  const { data } = await api.get(`/movie/${movieId}`);
  return data;
};

// 🔹 Oyuncular (MovieCast)
export const getMovieCast = async (movieId) => {
  const { data } = await api.get(`/movie/${movieId}/credits`);
  return data.cast;
};

// 🔹 Yorumlar (MovieReviews)
export const getMovieReviews = async (movieId) => {
  const { data } = await api.get(`/movie/${movieId}/reviews`);
  return data.results;
};

export const getMovieCredits = async (movieId) => {
  const { data } = await api.get(`/movie/${movieId}/credits`);
  return data;
};
