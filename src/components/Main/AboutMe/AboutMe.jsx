import "./AboutMe.css";
import abouteMeImage from "../../../images/avatar.jpg";

function AboutMe(props) {
  return (
    <section className="aboutme" id="about-me">
      <h2 className="section__title">Студент</h2>
      <div className="section__line"></div>
      <div className="aboutme__profile">
        <div className="aboutme__info">
          <h3 className="aboutme__title">Виталий</h3>
          <p className="aboutme__subtitle aboutme__subtitle_weight_bold">
            Фронтенд-разработчик, 30 лет
          </p>
          <p className="aboutme__desc">
          Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <a
            href="https://github.com/vecoweb22"
            className="link aboutme__git"
            rel="noreferrer"
            target="_blank"
          >
            Github
          </a>
        </div>
        <img
          src={abouteMeImage}
          className="aboutme__image"
          alt="Фотография профиля"
        />
      </div>
    </section>
  );
}

export default AboutMe;
