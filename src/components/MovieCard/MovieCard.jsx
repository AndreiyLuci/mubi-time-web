import { Link } from "react-router-dom";
import "./MovieCard.css";

export default function MovieCard({
  poster_path,
  title,
  release_date,
  vote_average,
  id,
}) {
  return (
    <Link className="MovieCard col-sm-2 " to={`/movies/${id}`}>
      <div className="card h-100">
        <img
          className="movie-poster card-img-top"
          src={process.env.REACT_APP_IMAGE_URL + poster_path}
          alt=""
        />
        <div className="movie-card-body card-body">
          <h6 className="card-title">{title}</h6>
          <p className="card-text">{new Date(release_date).getFullYear()}</p>
          <p className="card-text">Rating {vote_average}/10</p>
        </div>
      </div>
    </Link>
  );
}
