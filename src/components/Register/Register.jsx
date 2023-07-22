import useValid from "../../hooks/useValid.js";
import RegForm from "../RegForm/RegForm";
import Input from "../Input/Input";

function Register(props) {
  const { errors, values, handleChange } = useValid({
    name: "",
    email: "",
    password: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <main>
      <RegForm
        title={"Добро пожаловать!"}
        textBtn={"Зарегистрироваться"}
        link="/signin"
        textLink="Войти"
        subtitle="Уже зарегистрированы?"
        onSubmit={handleSubmit}
      >
        <Input
          id="name"
          title="Имя"
          name="name"
          type="text"
          required=""
          minLength={2}
          maxLength={40}
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
          minLength={8}
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
