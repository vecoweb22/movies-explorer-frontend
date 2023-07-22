import Promo from "./Promo/Promo";
import AboutProject from "./AboutProject/AboutProject";
import Portfolio from "./Portfolio/Portfolio";
import AboutMe from "./AboutMe/AboutMe";
import Techs from "./Techs/Techs";
import "./Main.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Main(props) {
  return (
    <>
      <Header loggedIn={false} />
      <main className="main">
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </main>
      <Footer />
    </>
  );
}

export default Main;
