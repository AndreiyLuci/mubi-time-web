import { useEffect, useState } from "react";
import { getMovies } from "../../services/MovieService";
import { useParams } from "react-router-dom";

const imageURL = "https://image.tmdb.org/t/p/original"

export default function Movie() {

  const [movie, setMovie] = useState({});
  const [error, setError] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    getMovies(id)
    .then((movie) => setMovie(movie))
    .catch(() => setError(true))
  }, [id])

  return (
    <div className='Movie'>
      <h1>{movie.title}</h1>
      <img src={imageURL + movie.poster_path} alt=''/>
      <p>{movie.overview}</p>
    </div>
  )
};