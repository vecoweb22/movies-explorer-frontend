import { useLocation } from "react-router-dom";
import { useState } from "react";
import { convertData } from "../../utils/convertData";
import "./MoviesCard.css";

function MoviesCard(props) {
  const movie = props.movie;
  const location = useLocation();
  const [isFavorite, setIsFavorite] = useState(false);

  function handleLike() {
    setIsFavorite(!isFavorite);
  }

  function handleDelete() {}

  return (
    <li className="card">
      <div className="card__info">
        <div className="card__desc">
          <h2 className="card__title">{movie.nameRU}</h2>
          <span className="card__duration">{convertData(+movie.duration)}</span>
        </div>
        <div className="">
          {location.pathname === "/saved-movies" ? (
            <button
              type="button"
              onClick={handleDelete}
              className="card__icon card__delete"
            />
          ) : (
            <button
              type="button"
              onClick={handleLike}
              className={`card__icon card__like ${
                isFavorite && "card__like_active"
              }`}
            />
          )}
        </div>
      </div>
      <a
        className="card__trailer"
        href={movie.trailerLink}
        target="_blank"
        rel="noreferrer"
      >
        <img className="card__img" src={movie.image} alt={movie.nameRU} />
      </a>
    </li>
  );
}

export default MoviesCard;
