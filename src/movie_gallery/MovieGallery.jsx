import { useState, useEffect } from "react";

import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
import "./MovieGallery.module.css";
import styles from "./MovieGallery.module.css";

const API_URL = "http://www.omdbapi.com?apikey=b6003d8a";

const MovieGallery = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  // Fetch movies on initial render
  useEffect(() => {
    searchMovies("Avengers");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  return (
    <div className={`${styles.app} ${styles.body}`}>
      <h1 className={styles.h1}>MovieLand</h1>

      <div className={styles.search}>
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className={styles.container}>
          {movies.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))}
        </div>
      ) : (
        <div className={styles.empty}>
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default MovieGallery;