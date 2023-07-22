import search_icon from "../../images/search_icon.svg";
import "./SearchForm.css";

function SearchForm(props) {
  return (
    <section className="search">
      <div className="searchform">
        <form name="search-form" className="searchform__form">
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
          />
          <button className="searchform__submit-btn" type="submit"></button>
        </form>
        <div className="checkmovies">
          <input
            type="checkbox"
            name="checkmovies"
            id="check-movies"
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
