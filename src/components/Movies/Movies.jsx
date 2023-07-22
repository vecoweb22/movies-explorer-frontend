import { useEffect, useState } from "react";
import movies from "../../utils/moviesData";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import { apiMovies } from "../../utils/apiMovies";

function Movies(props) {
  const [isLoadind, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    apiMovies()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  return (
    <div>
      <Header loggedIn={true} />
      <main className="movies">
        <SearchForm />
        {isLoadind ? <Preloader /> : <MoviesCardList movies={movies} />}
      </main>
      <Footer />
    </div>
  );
}

export default Movies;
