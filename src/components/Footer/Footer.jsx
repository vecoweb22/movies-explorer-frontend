import "./Footer.css";

function Footer(props) {
  return (
    <footer className="footer">
      <div className="footer__header">
        <h2 className="footer__title">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </h2>
        <div className="footer__line"></div>
      </div>
      <div className="footer__copyright">
        <p className="footer__date">&copy; {new Date().getFullYear()}</p>
        <ul className="footer__links list">
          <li className="footer__item">
            <a
              href="https://practicum.yandex.ru/"
              className="footer__link link"
              rel="noreferrer"
              target="_blank"
            >
              Яндекс.Практикум
            </a>
          </li>
          <li className="footer__item">
            <a
              href="https://github.com/yandex-practicum"
              className="footer__link link"
              rel="noreferrer"
              target="_blank"
            >
              Github
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
