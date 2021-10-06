import {Link} from 'react-router-dom';
import './MovieCard.css'

export default function MovieCard({poster_path, title, release_date, vote_average, id}) {
  return(
    <div className="MovieCard card col-sm-2">
      <Link to={`/movies/${id}`}>
        <img className="movie-poster card-img-top" src={process.env.REACT_APP_IMAGE_URL + poster_path} alt="" />
        <div className="movie-info card-body">
          <h6 className='card-title'>{title}</h6>
          <p className="card-text">{release_date}</p>
          <p className="card-text">Rating {vote_average}/10</p>
        </div>
      </Link>
    </div>
  )
};

