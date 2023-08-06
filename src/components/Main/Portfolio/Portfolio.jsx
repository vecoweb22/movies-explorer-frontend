import "./Portfolio.css";

function Portfolio(props) {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="list portfolio__list">
        <li className="portfolio__item">
          <a
            href="https://vecoweb22.github.io/russian-travel/"
            className="portfolio__link link"
            target="_blank"
            rel="noreferrer"
          >
            <p className="portfolio__text">Статичный сайт</p>
            <p className="portfolio__icon">↗</p>
          </a>
          <div className="section__line section__line_color_grey"></div>
        </li>
        <li className="portfolio__item">
          <a
            href="https://vecoweb22.github.io/mesto/"
            className="portfolio__link link"
            target="_blank"
            rel="noreferrer"
          >
            <p className="portfolio__text">Адаптивный сайт</p>
            <p className="portfolio__icon">↗</p>
          </a>
          <div className="portfolio__line section__line_color_grey"></div>
        </li>
        <li className="portfolio__item">
          <a
            href="https://github.com/vecoweb22/react-mesto-api-full-gha"
            className="portfolio__link link"
            target="_blank"
            rel="noreferrer"
          >
            <p className="portfolio__text">Одностраничное приложение</p>
            <p className="portfolio__icon">↗</p>
          </a>
          <div className="section__line section__line_color_grey"></div>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
