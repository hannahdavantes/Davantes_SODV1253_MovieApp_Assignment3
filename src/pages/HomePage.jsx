import { useEffect, useState } from "react";
import SearchMovie from "../components/SearchMovie";
import Wrapper from "../assets/wrappers/HomePage";
import MovieList from "../components/MovieList";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const HomePage = () => {
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [movies, setMovies] = useState([]); // what you display
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch top rated movies");
        return res.json();
      })
      .then((json) => {
        const results = json.results ?? [];
        setTopRatedMovies(results);
        setMovies(results); // default view
      })
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, []);

  const showTopRated = () => setMovies(topRatedMovies);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <Wrapper>
      <h1 className="title">Movies</h1>
      <SearchMovie setMovies={setMovies} onClear={showTopRated} />
      <MovieList
        movies={movies}
        onSelectMovie={(movie) => console.log(movie)}
      />
    </Wrapper>
  );
};
export default HomePage;
