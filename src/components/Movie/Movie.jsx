import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  getMovieCast,
  getMovies,
  getSocialIdsMovie,
} from "../../services/MovieService";
import { SocialIcon } from "react-social-icons";
import { LinkIcon } from "@heroicons/react/outline";
import Loader from "react-loader-spinner";
import { useParams } from "react-router-dom";
import "./Movie.css";
import { getMovieFav, markMovieAsFav } from "../../services/UserService";
import { useAuth } from "../../hooks/useAuth";

export default function Movie() {
  const [movie, setMovie] = useState({});
  const [socialId, setSocialId] = useState({});
  const [error, setError] = useState(false);
  // const [isOpen, setOpen] = useState(false);
  const [fav, setFav] = useState(false);
  const { id } = useParams();
  const [cast, setCast] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    getMovies(id)
      .then((movie) => setMovie(movie))
      .catch(() => setError(true));
  }, [id]);

  useEffect(() => {
    if (user) {
      getMovieFav(id)
        .then(({ fav }) => setFav(fav))
        .catch(() => setError(true));
    } else {
      setFav(false);
    }
  }, [id, user]);

  useEffect(() => {
    getSocialIdsMovie(id)
      .then((socialId) => setSocialId(socialId))
      .catch(() => setError(true));
  }, [id]);

  useEffect(() => {
    getMovieCast(id)
      .then((cast) => setCast(cast.cast))
      .catch(() => setError(true));
  }, [id]);

  const onFavClick = () => {
    markMovieAsFav(id)
      .then(({ fav }) => setFav(fav))
      .catch(() => setError(true));
  };

  if (error) {
    return <h2>😞 There was an error, retry in a few minutes 😞</h2>;
  }

  if (!movie.poster_path) {
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
    <div className="Movie">
      <div
        className="movie-cover"
        style={{
          backgroundImage: `url(${
            process.env.REACT_APP_IMAGE_URL + movie.poster_path
          })`,
        }}
      >
        <img
          src={process.env.REACT_APP_IMAGE_URL + movie.poster_path}
          alt="poster"
        />
        <div className="movie-cover-info">
          <div className="movie-title">
            <h1>
              {movie.title} ({new Date(movie.release_date).getFullYear()})
            </h1>
            <div className="movie-title-genres">
              <p>{movie.release_date}</p>
              <div>
                {" "}
                &#8226;{" "}
                <span className="movie-genres">
                  {movie.genres.map((genre) => genre.name).join(", ")}
                </span>
              </div>
              <p> &#8226; {movie.runtime} min</p>
            </div>
            <div className="movie-button-trailer">
              <p>
                {" "}
                User Score{" "}
                <span>
                  <i>{movie.vote_average}</i>
                </span>
              </p>
              {user && (
                <button type="submit" onClick={onFavClick}>
                  Favorite{" "}
                  <span className={fav ? "movie-liked" : "movie-disliked"}>
                    ❤️
                  </span>
                </button>
              )}
              <button type="">Watch trailer</button>
              {/* <div>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={"gU4vcJIbeOU"} onClose={() => setOpen(false)} />
            <button className="btn-primary" onClick={()=> setOpen(true)}>VIEW TRAILER</button>
            </div> */}
            </div>
          </div>

          <h5>
            <em>{movie.tagline}</em>
          </h5>

          <div className="movie-overview">
            <h6>Overview</h6>
            <p>{movie.overview}</p>
          </div>
        </div>
      </div>
      <div className="movie-info">
        <div className="movie-cast-social">
          <div className="movie-cast">
            <h3>Cast</h3>
            <div className=" container">
              <div className="movie-cast-slider">
                {cast.map((person) => (
                  <div className="movie-cast-card">
                    <Link to={`/people/${person.id}`}>
                      <div>
                        <img
                          className="cast-card-image"
                          src={
                            process.env.REACT_APP_IMAGE_URL +
                            person.profile_path
                          }
                          alt="profile"
                        />
                      </div>
                      <div className="card-info">
                        <h5>{person.name}</h5>
                        <p>{person.character}</p>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="movie-social-media">
          <div className="social-media">
            <ul className="social-links">
              <li>
                <Link
                  to={{
                    pathname: `https://www.facebook.com/${socialId.facebook_id}`,
                  }}
                  target="_blank"
                >
                  <SocialIcon
                    network="facebook"
                    style={{ height: 35, width: 35 }}
                    bgColor="#545454"
                  />
                </Link>
              </li>
              <li>
                <Link
                  to={{
                    pathname: `https://www.twitter.com/${socialId.twitter_id}`,
                  }}
                  target="_blank"
                >
                  <SocialIcon
                    network="twitter"
                    style={{ height: 35, width: 35 }}
                    bgColor="#545454"
                  />
                </Link>
              </li>
              <li>
                <Link
                  to={{
                    pathname: `https://www.instagram.com/${socialId.instagram_id}`,
                  }}
                  target="_blank"
                >
                  <SocialIcon
                    network="instagram"
                    style={{ height: 35, width: 35 }}
                    bgColor="#545454"
                  />
                </Link>
              </li>
              <li>
                <div className="homepage-border">
                  <Link
                    to={{
                      pathname: `${movie.homepage}`,
                    }}
                    target="_blank"
                  >
                    <LinkIcon className="movie-link" />
                  </Link>
                </div>
              </li>
            </ul>
          </div>
          <div className="budget">
            <div>
              <h6>
                <strong>Original Language</strong>
              </h6>
              <p>{movie.original_language.toUpperCase()}</p>
            </div>
            <div>
              <h6>
                <strong>Budget</strong>
              </h6>
              <p>${movie.budget}</p>
            </div>
            <div>
              <h6>
                <strong>Revenue</strong>
              </h6>
              <p>${movie.revenue}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
