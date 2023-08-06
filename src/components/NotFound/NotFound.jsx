import "./NotFound.css";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <main className="notfound">
      <div className="notfound__container">
        <h1 className="notfound__title">404</h1>
        <p className="notfound__text">Страница не найдена</p>
      </div>
      <button
        type="button"
        className="notfound__btn"
        onClick={() => navigate(-1)}
      >
        Назад
      </button>
    </main>
  );
}

export default NotFound;
