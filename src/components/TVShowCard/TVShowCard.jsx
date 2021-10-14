import {Link} from 'react-router-dom';
import './TVShowCard.css'

export default function TVShowCard({poster_path, name, first_air_date, vote_average, id}) {
  return(
    <div className="TVShowCard card col-sm-2">
      <Link to={`/tv-shows/${id}`}>
        <img className="movie-poster card-img-top" src={process.env.REACT_APP_IMAGE_URL + poster_path} alt="" />
        <div className="tv-show-info card-body">
          <h6 className='card-title'>{name}</h6>
          <p className="card-text">{new Date(first_air_date).getFullYear()}</p>
          <p className="card-text">Ratting {vote_average}/10</p>
        </div>
      </Link>
    </div>
  )
};