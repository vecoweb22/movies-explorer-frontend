import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import search_icon from "../../images/search_icon.svg";
import "./SearchForm.css";

function SearchForm(props) {
  const [isChecked, setIsChecked] = useState(false);
  const [nameMovie, setNameMovie] = useState("");
  const location = useLocation();

  const isLocalShortMovies = JSON.parse(localStorage.getItem("isShortMovies"));

  function handleSubmitSearch(e) {
    e.preventDefault();
    props.handleSearch(nameMovie || "", isChecked);
  }

  function handleChange(e) {
    setNameMovie(e.target.value);
  }

  function handleChangeCheck(e) {
    const isShortMovies = e.target.checked;
    setIsChecked(isShortMovies);
    props.handleSearch(nameMovie, isShortMovies);
  }

  useEffect(() => {
    if (location.pathname === "/movies") {
      setNameMovie(props.defaultInputValue);
      setIsChecked(isLocalShortMovies || false);
    }
  }, []);

  return (
    <section className="search">
      <div className="searchform">
        <form
          name="search-form"
          className="searchform__form"
          onSubmit={handleSubmitSearch}
        >
          <img
            className="searchform__logo"
            src={search_icon}
            alt=" Иконка поиска."
          />
          <input
            id="searchform-film"
            type="text"
            name="film"
            className="searchform__input"
            placeholder="Фильм"
            required=""
            value={nameMovie}
            onChange={handleChange}
          />
          <button className="searchform__submit-btn" type="submit"></button>
        </form>
        <div className="checkmovies">
          <input
            type="checkbox"
            name="checkmovies"
            checked={isChecked}
            onChange={handleChangeCheck}
            id="checkmovies"
            className="checkmovies__input"
          />
          <label htmlFor="checkmovies" className="toggle"></label>
          <p className="checkmovies__text">Короткометражки</p>
        </div>
      </div>
      <div className="search__line"></div>
    </section>
  );
}

export default SearchForm;
