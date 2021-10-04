import {Link} from 'react-router-dom';

export default function MovieCard() {
  return(
    <div className="ProductCard">
      <Link to={`/products/${id}`}>
        <img className="ProductCard__image" src={images[0]} alt="" />
        <div className="ProductCard__info">
          <p>{name}</p>
          <p>{price}€</p>
        </div>
      </Link>
    </div>
  )
};