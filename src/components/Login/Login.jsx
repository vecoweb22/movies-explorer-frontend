import useValid from "../../hooks/useValid.js";
import RegForm from "../RegForm/RegForm";
import Input from "../Input/Input";

function Login(props) {
  const { values, errors, handleChange, isValid, setIsValid } = useValid({
    email: "",
    password: "",
  });

  function handleSubmitLogin(e) {
    e.preventDefault();
    setIsValid(false);
    props.onLogin(values.email, values.password);
  }
  return (
    <main>
      <RegForm
        title={"Рады видеть!"}
        textBtn={"Войти"}
        link="/signup"
        textLink="Регистрация"
        subtitle="Вы не зарегистрированы?"
        onSubmit={handleSubmitLogin}
        isValid={isValid}
      >
        <Input
          id="email"
          title="Почта"
          name="email"
          type="email"
          required=""
          value={values.email || ""}
          onChange={handleChange}
          errors={errors.email || ""}
          placeholder="Введите e-mail"
        />
        <Input
          id="password"
          title="Пароль"
          name="password"
          type="password"
          required=""
          minLength={6}
          value={values.password || ""}
          onChange={handleChange}
          errors={errors.password || ""}
          placeholder="Введите пароль"
        />
      </RegForm>
    </main>
  );
}

export default Login;
