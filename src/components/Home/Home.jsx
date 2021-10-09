import { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import { Link } from "react-router-dom";
import { popularMovies, searchInfo } from "../../services/MovieService";
import "./home.css";

export default function Home() {
  const [search, setSearch] = useState(``);
  const [results, setResults] = useState([]);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [filter, setFilter] = useState("movies");

  const onSearch = () => {
    searchInfo(search)
      .then(({ results }) => {
        setResults(results);
      })
      .catch(() => setError(true));
  };

  useEffect(() => {
    popularMovies()
    .then((movies) => {
      setMovies(movies.results);
    })
    .catch(() => setError(true));
  }, []);

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
        <div className='recomendations'>
          <h3>What's Popular</h3>
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
        </div>
        <div>
          {results
            .filter((result) => result.media_type === filter)
            .map((result) => "")}
        </div>
      </div>
    </div>
  );
}

// const [openModal, setOpenModal] = useState(false);

// {openModal && <ModalSignUp closeModal={setOpenModal} />}

// <button className="btn" onClick={() => setOpenModal(true)}>
//   Sign up &#10132;{" "}
// </button>
