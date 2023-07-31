import { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies(props) {
  const [movies, setMovies] = useState(props.movies);
  function handleSearch(filmName, isShortFilms) {
    if (filmName === "") {
      setMovies(props.movies);
    }
    const filterSaveMovies = props.movies.filter((movie) =>
      movie.nameRU.toLowerCase().includes(filmName.toLowerCase())
    );
    if (isShortFilms) {
      setMovies(filterSaveMovies.filter((movie) => movie.duration <= 30));
    } else {
      setMovies(filterSaveMovies);
    }
  }

  useEffect(() => {
    setMovies(props.movies);
  }, [props.movies]);

  return (
    <div>
      <Header loggedIn={props.loggedIn} />
      <main className="movies">
        <SearchForm handleSearch={handleSearch} defaultInputValue="" />
        <MoviesCardList movies={movies} handleDelete={props.handleDelete} />
      </main>
      <Footer />
    </div>
  );
}

export default SavedMovies;
