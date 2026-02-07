import { useState } from "react";
import Wrapper from "../assets/wrappers/SearchMovie";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const SearchMovie = ({ setMovies, onClear }) => {
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmed = query.trim();
    if (!trimmed) {
      onClear?.();
      return;
    }

    setIsLoading(true);
    setError(null);

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
        trimmed,
      )}&include_adult=false`,
    )
      .then((res) => {
        if (!res.ok) throw new Error("Failed to search movies");
        return res.json();
      })
      .then((json) => {
        setMovies(json.results ?? []);
      })
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  };

  const clearSearch = () => {
    setQuery("");
    setError(null);
    onClear?.();
  };

  return (
    <Wrapper>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search movies by title..."
        />

        <button type="submit" className="btn btn-primary" disabled={isLoading}>
          {isLoading ? "Searching..." : "Search"}
        </button>

        <button
          type="button"
          className="btn btn-secondary"
          onClick={clearSearch}
          disabled={isLoading}
        >
          Clear
        </button>
      </form>

      {error && <p className="error">Error: {error}</p>}
    </Wrapper>
  );
};

export default SearchMovie;
