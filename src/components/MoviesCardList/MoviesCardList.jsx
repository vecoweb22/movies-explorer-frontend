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

  function loopSlice(start, finish) {
    const sliceMovies = props.movies.slice(start, finish);
    setMoviesShow(sliceMovies);
  }

  function handleMore() {
    // проверяю целый ли ряд карточке
    if (moviesShow.length % props.addCount !== 0) {
      // если нет добавляю до конца ряда
      const number = props.addCount - (moviesShow.length % props.addCount);
      loopSlice(0, ref.current + number);
      ref.current += number;
      return;
    }

    // добавляю ряд
    loopSlice(0, ref.current + props.addCount);
    ref.current += props.addCount;
  }

  useEffect(() => {
    // отрисовываю карточки при монтировании
    ref.current = props.moviesLength;
    loopSlice(0, ref.current);
  }, [props.movies]);

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
              key={movie._id || movie.id}
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
