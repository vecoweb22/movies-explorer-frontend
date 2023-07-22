import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation(props) {
  return (
    <div className="nav">
      <Link to="/signup" className="link nav__link">
        Регистрация
      </Link>
      <Link to="/signin" className="link nav__link nav__link_type_btn">
        Войти
      </Link>
    </div>
  );
}

export default Navigation;
