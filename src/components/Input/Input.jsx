import "./Input.css";

function Input(props) {
  return (
    <div className="input">
      <label htmlFor={props.name} className="input__title">
        {props.title}
      </label>
      <input
        id={props.name}
        name={props.name}
        type={props.type}
        className={`input__text ${props.errors !== "" && "input__error"}`}
        placeholder={props.placeholder}
        {...props}
      />
      <span className={`error error-${props.name}`}>{props.errors}</span>
    </div>
  );
}

export default Input;
