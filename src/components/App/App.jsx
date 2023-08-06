import { useEffect, useState } from "react";
import { useLocation, Route, Routes, useNavigate } from "react-router-dom";
import Main from "../Main/Main";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Profile from "../Profile/Profile";
import Preloader from "../Preloader/Preloader";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import NotFound from "../NotFound/NotFound";
import "./App.css";
import {
  LENGTH_MOVIE_T,
  LENGTH_MOVIE_M,
  LENGTH_MOVIE_NT,
  MORE_MOVIE_L,
  MORE_MOVIE_S,
  SHORT_DURATION,
} from "../../constants/constants";
import ProtectedRouteItem from "../ProtectedRoute/ProptectedRoute";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import * as auth from "../../utils/auth";
import api from "../../utils/MainApi";
import ModalInfo from "../ModalInfo/ModalInfo";
import moviesApi from "../../utils/MoviesApi";
import { useResize } from "../../hooks/useResize";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [infoMessage, setInfoMessage] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [isResultError, setIsResultError] = useState(false);
  const [moviesLength, setMoviesLength] = useState(null);
  const [addCount, setAddCount] = useState(0); // стейт добавляемого колва карточек
  const [isPageLoading, setIsPageLoading] = useState(false);
  const { pathname } = useLocation();

  const navigate = useNavigate();
  const windowSize = useResize();

  function getUserInfo() {
    auth
      .getUserInfo()
      .then((user) => {
        setCurrentUser(user);
      })
      .catch((err) => openPopup(err));
  }

  function handleSignup(email, password, name) {
    auth
      .signup(email, password, name)
      .then((res) => {
        openPopup("Вы успешно зарегистрированы!", true);
        setTimeout(() => closePopup(), 1000);
        handleSignin(email, password);
      })
      .catch((err) => openPopup(err, false));
  }

  function handleSignin(email, password) {
    auth
      .signin(email, password)
      .then((res) => {
        setLoggedIn(true);
        getUserInfo();
        navigate("/movies", { replace: true });
      })
      .catch((err) => openPopup(err));
  }

  function handleSignout() {
    auth
      .signout()
      .then(() => {
        setLoggedIn(false);
        navigate("/", { replace: true });
        localStorage.clear();
        setMovies([]);
      })
      .catch((err) => openPopup(err))
      .finally(() => {
        openPopup("Вы вышли из системы.", true);
        setTimeout(() => closePopup(), 1100);
      });
  }

  function handleEditProfile(userData) {
    return api
      .setUserProfile(userData)
      .then((res) => {
        openPopup("Данные успешно изменены", true);
        setCurrentUser(res);
      })
      .catch((err) =>
        openPopup("При обновлении профиля произошла ошибка.", true)
      )
      .finally(() => {
        setTimeout(() => closePopup(), 1100);
      });
  }

  function openPopup(message, isSuccessfully) {
    setIsOpen(true);
    setInfoMessage({
      isSuccessfully: isSuccessfully,
      text: message.message || message || "Что-то пошло не так!",
    });
  }

  function closePopup() {
    setIsOpen(false);
    setTimeout(() => setInfoMessage(null), 400);
  }

  function filterMovies(filmName, isShortFilms) {
    const filteredMovies = JSON.parse(localStorage.getItem("allMovies")).filter(
      (movie) => movie.nameRU.toLowerCase().includes(filmName.toLowerCase())
    );
    const movies = isShortFilms
      ? filteredMovies.filter((movie) => movie.duration <= SHORT_DURATION)
      : filteredMovies;
    setMovies(movies);
    localStorage.setItem("movieName", filmName);
    localStorage.setItem("movies", JSON.stringify(movies));
    localStorage.setItem("isShortFilms", JSON.stringify(isShortFilms));
  }

  function handleSearch(filmName, isShortFilms) {
    if (filmName === "" || filmName === undefined) {
      openPopup("Нужно ввести ключевое слово", false);
      setTimeout(() => closePopup(), 1000);
      return;
    }
    setIsLoading(true);

    if (!localStorage.getItem("allMovies")) {
      moviesApi
        .getMovies()
        .then((res) => {
          localStorage.setItem("allMovies", JSON.stringify(res));
          filterMovies(filmName, isShortFilms);
        })
        .then((res) => console.log(res))
        .catch((err) => {
          openPopup(err);
          setIsResultError(true);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      filterMovies(filmName, isShortFilms);
      setIsLoading(false);
    }
  }

  function isSaved(card) {
    return savedMovies.some((movie) => movie.movieId === card.id);
  }

  function addToChoice(card) {
    api
      .addToChoice(card)
      .then((res) => {
        setSavedMovies([res, ...savedMovies]);
      })
      .catch((err) => openPopup(err));
  }

  function removeFromChoice(card) {
    const savedMovie = savedMovies.find(
      (movie) =>
        movie.movieId === (card.movieId || card.id) &&
        (movie.owner._id || movie.owner) === currentUser._id
    );
    api
      .removeCard(savedMovie._id)
      .then((res) => {
        setSavedMovies(
          savedMovies.filter((movie) => movie._id !== savedMovie._id)
        );
      })
      .catch((err) => openPopup(err));
  }

  function tokenCheck() {
    if (localStorage.getItem("isAuth")) {
      auth
        .getUserInfo()
        .then((res) => {
          if (res) {
            setLoggedIn(true);
            if (pathname === "/signin" || pathname === "/signup") {
              navigate("/", { replace: true });
            }
          }
        })
        .catch((err) => {
          setIsPageLoading(true);
          openPopup(err);
        });
    } else {
      setIsPageLoading(true);
    }
  }

  useEffect(() => {
    tokenCheck();
  }, []);

  useEffect(() => {
    if (loggedIn) {
      Promise.all([auth.getUserInfo(), api.getSavedMovies()])
        .then(([userData, moviesData]) => {
          setCurrentUser(userData);
          setSavedMovies(moviesData);
          const movies = JSON.parse(localStorage.getItem("movies"));
          if (movies) {
            setMovies(movies);
          }
        })
        .catch((err) => openPopup(err))
        .finally(() => setIsPageLoading(true));
    }
  }, [loggedIn]);

  useEffect(() => {
    // добавляю параметры в зависимости от ширины экрана
    if (windowSize.isScreenSm) {
      // мобилка
      setMoviesLength(LENGTH_MOVIE_M);
      setAddCount(MORE_MOVIE_S);
      return;
    }
    if (windowSize.isScreenMd) {
      // планшет
      setMoviesLength(LENGTH_MOVIE_T);
      setAddCount(MORE_MOVIE_S);
      return;
    }
    // и больше
    setMoviesLength(LENGTH_MOVIE_NT);
    setAddCount(MORE_MOVIE_L);
  }, [windowSize]);

  return (
    <div className="content">
      {isPageLoading ? (
        <CurrentUserContext.Provider value={currentUser}>
          <Routes>
            <Route path="/" element={<Main loggedIn={loggedIn} />} />
            <Route
              path="/movies"
              element={
                <ProtectedRouteItem
                  loggedIn={loggedIn}
                  element={Movies}
                  handleSearch={handleSearch}
                  movies={movies}
                  isLoading={isLoading}
                  isResultError={isResultError}
                  defaultInputValue={localStorage.getItem("movieName") || ""}
                  handleLike={addToChoice}
                  handleDelete={removeFromChoice}
                  isSaved={isSaved}
                  moviesLength={moviesLength}
                  addCount={addCount}
                />
              }
            />
            <Route
              path="/saved-movies"
              element={
                <ProtectedRouteItem
                  loggedIn={loggedIn}
                  element={SavedMovies}
                  isLoading={isLoading}
                  handleSearch={handleSearch}
                  movies={savedMovies}
                  handleDelete={removeFromChoice}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRouteItem
                  loggedIn={loggedIn}
                  element={Profile}
                  onLogout={handleSignout}
                  onEditProfile={handleEditProfile}
                />
              }
            />
            <Route path="/signin" element={<Login onLogin={handleSignin} />} />
            <Route
              path="/signup"
              element={<Register onRegister={handleSignup} />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <ModalInfo
            message={infoMessage}
            isOpen={isOpen}
            onClose={closePopup}
          />
        </CurrentUserContext.Provider>
      ) : (
        <div className="content__preloader">
          <Preloader />
        </div>
      )}
    </div>
  );
}

export default App;
