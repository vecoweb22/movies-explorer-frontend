import "./NavTab.css";

function NavTab(props) {
  return (
    <nav>
      <ul className="navtab list">
        <li className="navtab__item">
          <a href="#about-project" className="link navtab__link">
            О проекте
          </a>
        </li>
        <li className="navtab__item">
          <a href="#techs" className="link navtab__link">
            Технологии
          </a>
        </li>
        <li className="navtab__item">
          <a href="#about-me" className="link navtab__link">
            Студент
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavTab;
