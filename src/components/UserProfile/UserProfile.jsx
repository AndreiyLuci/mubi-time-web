import { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import { useAuth } from "../../hooks/useAuth";
import { getMovies, getTVShow } from "../../services/MovieService";
import MovieCard from "../MovieCard/MovieCard";
import TVShowCard from "../TVShowCard/TVShowCard";
import "./UserProfile.css";

export default function UserProfile() {
  const { user } = useAuth();

  const [movies, setMovies] = useState();
  const [TVShows, setTVShows] = useState();
  const [divMoviesToggle, setDivMoviesToggle] = useState(true);
  const [divTVToggle, setDivTVToggle] = useState(true);

  useEffect(() => {
    if (user) {
      const moviesPromises = user.favPelis.map((movieId) => getMovies(movieId));
      Promise.all(moviesPromises)
        .then((results) => setMovies(results))
        .catch((err) => console.log(err));
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      const tvshowsPromises = user.favSeries.map((tvShowId) =>
        getTVShow(tvShowId)
      );
      Promise.all(tvshowsPromises)
        .then((results) => setTVShows(results))
        .catch((err) => console.error(err));
    }
  }, [user]);

  if (!user || !movies || !TVShows) {
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
  } else if (user) {
    return (
      <div className="UserProfile">
        <div className="profile-cover">
          <img src={user.avatar} alt="" />
          <h1>{user.username}</h1>
          <p>
            <i>Member since {new Date(user.createdAt).getFullYear()}</i>
          </p>
        </div>
        <div className="profile-favs">
          <button onClick={ () => setDivMoviesToggle(!divMoviesToggle) }>Favorite Movies</button>
          <button onClick={ () => setDivTVToggle(!divTVToggle) }>Favorite TV Shows</button>
        </div>
        {divMoviesToggle ? <div id="MovieList" className="MovieList">
          <h2 className="Movielist-heading">Favorite Movies</h2>
          <br />
          <div className="container">
            <div className="row row-cols-1 row-cols-md-6 g-0">
              {movies.map((movie) => (
                <MovieCard key={movie.id} {...movie} />
              ))}
            </div>
          </div>
        </div> : ""}
        {divTVToggle ? <div id="MovieList" className="MovieList ">
          <h2 className="Movielist-heading">Favorite TV Shows</h2>
          <br />
          <div className="container">
            <div className="row row-cols-1 row-cols-md-6 g-0">
              {TVShows.map((TVShow) => (
                <TVShowCard key={TVShow.id} {...TVShow} />
              ))}
            </div>
          </div>
        </div> : "" }
      </div>
    );
  }
}
