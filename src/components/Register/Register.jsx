import useValid from "../../hooks/useValid.js";
import RegForm from "../RegForm/RegForm";
import Input from "../Input/Input";

function Register(props) {
  const { errors, values, handleChange, isValid, setIsValid } = useValid({
    name: "",
    email: "",
    password: "",
  });

  function handleSubmitRegister(e) {
    e.preventDefault();
    setIsValid(false);
    props.onRegister(values.email, values.password, values.name);
  }
  return (
    <main>
      <RegForm
        title={"Добро пожаловать!"}
        textBtn={"Зарегистрироваться"}
        link="/signin"
        textLink="Войти"
        subtitle="Уже зарегистрированы?"
        onSubmit={handleSubmitRegister}
        isValid={isValid}
      >
        <Input
          id="name"
          title="Имя"
          name="name"
          type="text"
          required=""
          minLength={2}
          maxLength={30}
          value={values.name || ""}
          onChange={handleChange}
          errors={errors.name || ""}
          placeholder="Введите имя"
        />
        <Input
          id="email"
          title="Электронная почта"
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

export default Register;
