import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import "./Movies.css";

function Movies(props) {
  return (
    <div>
      <Header loggedIn={props.loggedIn} />
      <main className="movies">
        <SearchForm
          handleSearch={props.handleSearch}
          defaultInputValue={props.defaultInputValue}
        />
        <MoviesCardList
          movies={props.movies}
          handleLike={props.handleLike}
          handleDelete={props.handleDelete}
          isLoading={props.isLoading}
          isSaved={props.isSaved}
          isResError={props.isResError}
          moviesLength={props.moviesLength}
          handleMore={props.handleMore}
          addCount={props.addCount}
        />
      </main>
      <Footer />
    </div>
  );
}

export default Movies;
