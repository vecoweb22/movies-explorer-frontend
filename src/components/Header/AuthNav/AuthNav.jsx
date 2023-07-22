import { NavLink } from "react-router-dom";
import "./AuthNav.css";

import BurgerMenu from "../../BurgerMenu/BurgerMenu";

function AuthNav(props) {
  return (
    <>
      <BurgerMenu
        isOpen={props.isOpen}
        handleMenuClick={props.handleMenuClick}
      />
      <div className={`menu ${props.isOpen && "menu_opened"}`}>
        <nav>
          <ul className={`authnav list ${props.isOpen && "authnav_opened"}`}>
            {props.isOpen && (
              <li className="authnav__item">
                <NavLink className="link authnav__link" to="/">
                  Главная
                </NavLink>
              </li>
            )}
            <li className="authnav__item">
              <NavLink className="link authnav__link" to="/movies">
                Фильмы
              </NavLink>
            </li>
            <li className="authnav__item">
              <NavLink className="link authnav__link" to="/saved-movies">
                Сохраненные фильмы
              </NavLink>
            </li>
            <li className="authnav__item authnav__item_type_profile">
              <NavLink className="link" to="/profile">
                Аккаунт
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default AuthNav;
