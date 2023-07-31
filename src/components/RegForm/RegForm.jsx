import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import "./RegForm.css";

function RegForm(props) {
  return (
    <main className="regform">
      <div className="regform__container">
        <header>
          <Logo />
        </header>
        <h1 className="regform__title">{props.title}</h1>
        <form className="form" onSubmit={props.onSubmit}>
          {props.children}
          <button
            className={`form__submit-btn ${
              !props.isValid && "form__submit-btn_disabled"
            }`}
            type="submit"
            aria-label={props.textBtn}
            disabled={!props.isValid}
          >
            {props.textBtn}
          </button>
        </form>
        <footer className="regform__footer">
          <p className="regform__subtitle">{props.subtitle}</p>
          <Link className="regform__link link" to={props.link}>
            {props.textLink}
          </Link>
        </footer>
      </div>
    </main>
  );
}

export default RegForm;
