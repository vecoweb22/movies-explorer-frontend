import { useState } from "react";
import Header from "../Header/Header";
import "./Profile.css";

const Profile = ({ onLogout }) => {
  const [user, setUser] = useState({
    name: "Виталий",
    email: "user@yandex.ru",
  });

  const [isEdit, setIsEdit] = useState(false);

  const handleMakeEdit = () => {
    setIsEdit(true);
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Профиль обновлен");
    setIsEdit(false);
  };

  const handleLogout = () => {
    onLogout();
  };

  return (
    <>
      <Header loggedIn={true} />
      <main className="profile container">
        <h1 className="profile__title">{`Привет, ${user.name}!`}</h1>

        <form
          name="profile__form"
          className="profile__form"
          onSubmit={handleSubmit}
        >
          <label className="profile__input-container">
            <span className="profile__input-label">Имя</span>
            <input
              disabled={!isEdit}
              required
              type="text"
              name="name"
              className="profile__input"
              placeholder="Укажите имя"
              value={user.name || ""}
              onChange={handleChange}
              minLength={2}
              maxLength={30}
            />
          </label>
          <label className="profile__input-container">
            <span className="profile__input-label">E-mail</span>
            <input
              disabled={!isEdit}
              required
              type="email"
              name="email"
              className="profile__input"
              placeholder="Укажите почту"
              value={user.email || ""}
              onChange={handleChange}
            />
          </label>
          {isEdit ? (
            <button type="submit" className="profile__submit">
              Сохранить
            </button>
          ) : (
            <div className="profile__buttons">
              <button
                type="button"
                className="profile__button profile__button_type_edit"
                onClick={handleMakeEdit}
              >
                Редактировать
              </button>
              <button
                type="button"
                className="profile__button profile__button_type_logout"
                onClick={handleLogout}
              >
                Выйти из аккаунта
              </button>
            </div>
          )}
        </form>
      </main>
    </>
  );
};

export default Profile;
