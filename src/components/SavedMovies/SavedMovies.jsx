import { useEffect, useState } from "react";
import { apiMovies } from "../../utils/apiMovies";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Preloader from "../Preloader/Preloader";
import SearchForm from "../SearchForm/SearchForm";
import saveMovies from "../../utils/savedMoviesData";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies(props) {
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
        {isLoadind ? <Preloader /> : <MoviesCardList movies={saveMovies} />}
      </main>
      <Footer />
    </div>
  );
}

export default SavedMovies;
