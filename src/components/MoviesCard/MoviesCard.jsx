import { useLocation } from "react-router-dom";
import { convertData } from "../../utils/convertData";
import { MOVIES_IMAGES_URL } from "../../constants/constants";
import "./MoviesCard.css";

function MoviesCard(props) {
  const movie = props.movie;
  const location = useLocation();

  const name = movie.nameRU;
  const cover = !movie.image.url
    ? movie.image
    : MOVIES_IMAGES_URL + movie.image.url;

  function handleLike() {
    props.isSaved(movie) ? props.handleDelete(movie) : props.handleLike(movie);
  }

  function handleDelete() {
    props.handleDelete(movie);
  }

  return (
    <li className="card">
      <div className="card__info">
        <div className="card__desc">
          <h2 className="card__title">{name}</h2>
          <span className="card__duration">{convertData(+movie.duration)}</span>
        </div>
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
              props.isSaved(movie) && "card__like_active"
            }`}
          />
        )}
      </div>
      <a
        className="card__trailer"
        href={movie.trailerLink}
        target="_blank"
        rel="noreferrer"
      >
        <img className="card__img" src={cover} alt={name} />
      </a>
    </li>
  );
}

export default MoviesCard;
