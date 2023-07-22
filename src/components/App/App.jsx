import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { useState } from "react";
import Main from "../Main/Main";
import Profile from "../Profile/Profile";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Login from "../Login/Login";
import Register from "../Register/Register";
import NotFound from "../NotFound/NotFound";
import "./App.css";

function App(props) {
  const [isLogged, setIsLogged] = useState(false);
  const navigate = useNavigate();

  const handleRegistration = () => {
    navigate("/signin", { replace: true });
  };

  const handleLogin = () => {
    setIsLogged(true);
    navigate("/", { replace: true });
  };
  const handleLogout = () => {
    setIsLogged(false);
    navigate("/signin", { replace: true });
  };
  return (
    <div className="content">
      <Routes>
        <Route path="/" element={<Main isLogged={isLogged} />} />
        <Route path="/movies" element={<Movies isLogged={isLogged} />} />
        <Route
          path="/saved-movies"
          element={<SavedMovies isLogged={isLogged} />}
        />
        <Route path="/profile" element={<Profile onLogout={handleLogout} />} />
        <Route path="/signin" element={<Login onLogin={handleLogin} />} />
        <Route
          path="/signup"
          element={<Register onRegister={handleRegistration} />}
        />
        <Route path="*" element={<Navigate to="/404" replace />} />
        <Route path="/404" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
