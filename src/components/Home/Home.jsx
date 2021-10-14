import { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import { Link } from "react-router-dom";
import {
  popularMovies,
  popularTVShows,
  searchInfo,
} from "../../services/MovieService";
import "./home.css";

export default function Home() {
  const [search, setSearch] = useState(``);
  const [results, setResults] = useState([]);
  const [movies, setMovies] = useState([]);
  const [TVShows, setTVShows] = useState([]);
  // const [error, setError] = useState(false);

  const onSearch = () => {
    searchInfo(search)
      .then(({ results }) => {
        setResults(results);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    popularMovies()
      .then((movies) => {
        setMovies(movies.results);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    popularTVShows()
      .then((TVShows) => {
        setTVShows(TVShows.results);
      })
      .catch((error) => console.error(error));
  }, []);

  if (!movies || !TVShows || !results) {
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
    <div className="Home">
      <div className="Home-image">
        <div className="Home-info">
          <div>
            <h1>Welcome to MuBi Time.</h1>
            <h4>
              Millions of movies and TV shows are waiting for you. Explore now.
            </h4>
          </div>
          <div className="home-search">
            <input
              className="search-form"
              type="search"
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search for a movie, TV show, people..."
            ></input>
            <button onClick={onSearch}>Search</button>
          </div>
        </div>
      </div>
      <div>
        {search ? (
          <div className="search-result">
            <div className=" container">
              <div className="search-list">
              {results.map((result) => (
                  <div className="search-card">
                    <Link to={`/movies/${result.id}`} className=''>
                      <div className="search-card-image">
                        <img
                        
                          src={
                            process.env.REACT_APP_IMAGE_URL + result.poster_path
                          }
                          alt="profile"
                        />
                      </div>
                      <div className="search-card-info">
                        <h6>{result.title}</h6>
                        <p>{new Date(result.release_date).getFullYear()}</p>
                        <p>{result.overview}</p>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="recomendations">
            <h3>What's Popular</h3>
            <h4>Movies</h4>
            <div className=" container">
              <div className="movie-cast-slider">
                {movies.map((movie) => (
                  <div className="movie-cast-card">
                    <Link to={`/movies/${movie.id}`}>
                      <div>
                        <img
                          className="cast-card-image"
                          src={
                            process.env.REACT_APP_IMAGE_URL + movie.poster_path
                          }
                          alt="profile"
                        />
                      </div>
                      <div className="card-info">
                        <h6>{movie.title}</h6>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <h4 id="tv-show-recomendation">TV Shows</h4>
            <div className=" container">
              <div className="movie-cast-slider">
                {TVShows.map((tvshow) => (
                  <div className="movie-cast-card">
                    <Link to={`/tv-shows/${tvshow.id}`}>
                      <div>
                        <img
                          className="cast-card-image"
                          src={
                            process.env.REACT_APP_IMAGE_URL + tvshow.poster_path
                          }
                          alt="profile"
                        />
                      </div>
                      <div className="card-info">
                        <h6>{tvshow.name}</h6>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// const [openModal, setOpenModal] = useState(false);

// {openModal && <ModalSignUp closeModal={setOpenModal} />}

// <button className="btn" onClick={() => setOpenModal(true)}>
//   Sign up &#10132;{" "}
// </button>
