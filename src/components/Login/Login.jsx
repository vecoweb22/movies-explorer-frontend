import useValid from "../../hooks/useValid.js";
import RegForm from "../RegForm/RegForm";
import Input from "../Input/Input";

function Login(props) {
  const { values, errors, handleChange } = useValid({
    email: "",
    password: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    props.onLogin(values.email, values.password);
  }
  return (
    <main>
      <RegForm
        title={"Рады видеть!"}
        textBtn={"Войти"}
        link="/signup"
        textLink="Регистрация"
        subtitle="Еще не зарегистрированы?"
        onSubmit={handleSubmit}
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
