import { useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";
import MessageServ from "../MessageServ/MessageServ";
import "./MoviesCardList.css";

function MoviesCardList(props) {
  const location = useLocation();
  const [moviesShow, setMoviesShow] = useState(props.movies);
  const ref = useRef(props.moviesLength);
  let arrMovies = [];

  function loopSlice(start, finish) {
    const sliceMovies = props.movies.slice(start, finish);
    arrMovies = arrMovies.concat(sliceMovies);
    setMoviesShow(arrMovies);
  }

  function handleMore() {
    loopSlice(0, ref.current + props.moviesLength);
    ref.current += props.moviesLength;
  }

  useEffect(() => {
    const sliceMovies = props.movies.slice(0, props.moviesLength);
    setMoviesShow(sliceMovies);
    ref.current = props.moviesLength;
  }, [props.movies, props.moviesLength]);

  function renderMessage() {
    if (location.pathname === "/movies") {
      if (localStorage.getItem("movies")) {
        return "Ничего не найдено";
      }
      return "Введите ключевое слово";
    }
    return "Нет избранных фильмов";
  }
  if (props.isLoading) return <Preloader />;
  if (props.movies.length === 0)
    return <MessageServ message={renderMessage()} />;
  if (props.isResError) {
    return (
      <MessageServ
        message={
          "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"
        }
      />
    );
  }
  return (
    <div>
      <ul className="cards list">
        {moviesShow.map((movie) => {
          return (
            <MoviesCard
              key={movie._id || movie.movieId}
              movie={movie}
              handleDelete={props.handleDelete}
              handleLike={props.handleLike}
              isSaved={props.isSaved}
            />
          );
        })}
      </ul>
      <div className="more">
        {props.movies.length > props.moviesLength &&
          props.movies.length !== moviesShow.length && (
            <button type="button" className="more__btn" onClick={handleMore}>
              Ещё
            </button>
          )}
      </div>
    </div>
  );
}

export default MoviesCardList;
