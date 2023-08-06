import Promo from "./Promo/Promo";
import AboutProject from "./AboutProject/AboutProject";
import Portfolio from "./Portfolio/Portfolio";
import AboutMe from "./AboutMe/AboutMe";
import Techs from "./Techs/Techs";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Main.css";

function Main(props) {
  return (
    <>
      <Header loggedIn={props.loggedIn} />
      <main className="">
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
