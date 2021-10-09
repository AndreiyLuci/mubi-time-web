import { useEffect, useState } from "react";
import {
  popularMovies,
  topRatedMovies,
  upcomingMovies,
} from "../../services/MovieService";
import Loader from "react-loader-spinner";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieList.css";

export default function MovieList() {
  const pathname = window.location.pathname;
  const [movies, setMovies] = useState();
  const [error, setError] = useState(false);
  const [currentUrl, setCurrentUrl] = useState(pathname);

  useEffect(() => {
    setCurrentUrl(pathname);
  }, [pathname]);

  useEffect(() => {
    if (currentUrl === "/movies/popular") {
      popularMovies()
        .then((movies) => {
          setMovies(movies.results);
        })
        .catch(() => setError(true));
    } else if (currentUrl === "/movies/top-rated") {
      topRatedMovies()
        .then((movies) => {
          setMovies(movies.results);
        })
        .catch(() => setError(true));
    } else if (currentUrl === "/movies/upcoming") {
      upcomingMovies()
        .then((movies) => {
          setMovies(movies.results);
        })
        .catch(() => setError(true));
    }
  }, [currentUrl]);

  if (error) {
    return <h2>😞 There was an error, retry in a few minutes 😞</h2>;
  }

  if (!movies) {
    return (
      <div>
        <Loader
          type="MutatingDots"
          color="rgb(255, 222, 89)"
          secondaryColor="rgb(54, 54, 54)"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      </div>
    );
  }

  return (
    <div id="MovieList" className="MovieList ">
      <h2 className="Movielist-heading">
        {currentUrl === "/movies/popular"
          ? "Popular Movies"
          : currentUrl === "/movies/top-rated"
          ? "Top Rated Movies"
          : "Upcoming Movies"}
      </h2>
      <br />
      <div className="container">
        <div className="row row-cols-1 row-cols-md-6 g-0">
          {movies.map((movie) => (
            <MovieCard key={movie.id} {...movie} />
          ))}
        </div>
      </div>
    </div>
  );
}
