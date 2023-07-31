import { useContext, useEffect, useState } from "react";
import Header from "../Header/Header";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import useValid from "../../hooks/useValid";
import "./Profile.css";

const Profile = (props) => {
  const currentUser = useContext(CurrentUserContext);
  const { name, email } = currentUser;
  const { setIsValid, values, errors, handleChange, isValid } = useValid({
    name: name,
    email: email,
  });
  const [isSame, setIsSame] = useState(true);

  useEffect(() => {
    setIsValid(true);
  }, [currentUser]);

  function handleSubmitProfile(e) {
    e.preventDefault();
    props.onEditProfile(values);
  }

  useEffect(() => {
    if (name !== values.name || email !== values.email) {
      setIsSame(false);
    } else {
      setIsSame(true);
    }
  }, [values, currentUser]);

  return (
    <>
      <Header loggedIn={true} />
      <main className="profile container">
        <h1 className="profile__title">{`Привет, ${currentUser.name}!`}</h1>
        <form
          name="profile__form"
          className="profile__form"
          onSubmit={handleSubmitProfile}
        >
          <div className="profile__input-container">
            <label className="profile__input-label">Имя</label>
            <input
              id="name"
              required=""
              type="text"
              name="name"
              className="profile__input"
              placeholder="Укажите имя"
              value={values.name}
              onChange={handleChange}
              errors={errors.message}
              minLength={2}
              maxLength={30}
            />
          </div>
          <span className="error">{errors.name || ""}</span>
          <div className="profile__input-container">
            <label className="profile__input-label">E-mail</label>
            <input
              id="email"
              required=""
              type="email"
              name="email"
              className="profile__input"
              placeholder="Укажите почту"
              value={values.email}
              onChange={handleChange}
            />
          </div>
          <span className="error">{errors.email || ""}</span>
          <div className="profile__buttons">
            <button
              className={`profile__button profile__button_type_edit ${
                isSame || !isValid ? "profile__button_disabled" : ""
              }`}
              disabled={isSame || !isValid}
              type="submit"
              aria-label="Редактировать профиль"
            >
              Редактировать
            </button>
            <button
              type="button"
              className="profile__button profile__button_type_logout"
              aria-label="Выйти из аккаунта"
              onClick={props.onLogout}
            >
              Выйти из аккаунта
            </button>
          </div>
        </form>
      </main>
    </>
  );
};

export default Profile;
