import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCast, getMovies, getSocialIds } from "../../services/MovieService";
import { SocialIcon } from "react-social-icons";
import { LinkIcon } from "@heroicons/react/outline";
import Loader from "react-loader-spinner";
import { useParams } from "react-router-dom";
import ModalVideo from "react-modal-video";
import "./Movie.css";

export default function Movie() {
  const [movie, setMovie] = useState({});
  const [socialId, setSocialId] = useState({});
  const [error, setError] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const { id } = useParams();
  const [cast, setCast] = useState({});

  useEffect(() => {
    getMovies(id)
      .then((movie) => setMovie(movie))
      .catch(() => setError(true));
  }, [id]);

  useEffect(() => {
    getSocialIds(id)
      .then((socialId) => setSocialId(socialId))
      .catch(() => setError(true));
  }, [id]);

  useEffect(() => {
    getCast(id)
      .then((cast) => setCast(cast.cast))
      .catch(() => setError(true));
  });

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
      <div className="movie-cover">
        <img
          src={process.env.REACT_APP_IMAGE_URL + movie.poster_path}
          alt="poster"
        />
        <div className="movie-cover-info">
          <div className="movie-title">
            <h1>
              {movie.title} ({movie.release_date})
            </h1>
            <p>
              {movie.release_date} &#8226; {movie.runtime} min{" "}
            </p>
            <div className="movie-button-trailer">
              <p>
                {" "}
                User Score{" "}
                <span>
                  <i>{movie.vote_average}</i>
                </span>
              </p>
              <button type="">Mark as favorite &#9825;</button>
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
            <div className="movie-cast-slider">
              <div className="movie-cast-people">
                {/* {cast.map((person) => (
                  <div>
                    <div className="card-image">
                      <img src={process.env.REACT_APP_IMAGE_URL + person.profile_path} alt='profile' />
                    </div>
                    <div className="card-info">
                      <h5>Nombre del actor</h5>
                      <p>personaje que interpreta</p>
                    </div>
                  </div>
                ))} */}
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
          <div className="keywords"></div>
        </div>
      </div>
    </div>
  );
}
