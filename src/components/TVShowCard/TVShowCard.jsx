import {Link} from 'react-router-dom';
import './TVShowCard.css'

export default function MovieCard({poster_path, name, first_air_date, vote_average, id}) {
  return(
    <div className="MovieCard card col-sm-2">
      <Link to={`/tv-show/${id}`}>
        <img className="movie-poster card-img-top" src={process.env.REACT_APP_IMAGE_URL + poster_path} alt="" />
        <div className="movie-info card-body">
          <h6 className='card-title'>{name}</h6>
          <p className="card-text">{first_air_date}</p>
          <p className="card-text">Ratting {vote_average}/10</p>
        </div>
      </Link>
    </div>
  )
};