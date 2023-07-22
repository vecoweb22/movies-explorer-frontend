import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";

function MoviesCardList(props) {
  return (
    <div>
      <ul className="cards list">
        {props.movies.map((movie) => {
          return (
            <MoviesCard
              key={movie._id}
              movie={movie}
              onClick={props.onClick}
              children={props.children}
            />
          );
        })}
      </ul>
      <div className="more">
        {props.movies.length > 9 && (
          <button type="button" className="more__btn">
            Ещё
          </button>
        )}
      </div>
    </div>
  );
}

export default MoviesCardList;
