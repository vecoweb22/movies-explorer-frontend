import "./ModalInfo.css";

function ModalInfo(props) {
  const message = props.message;

  return (
    <div className={`modal ${props.isOpen && "modal_opened"}`}>
      <div className="modal__container">
        <div
          className={`modal__image ${
            message?.isSuccessfully
              ? "modal__image_type_success"
              : "modal__image_type_error"
          }`}
        />
        <h2 className="modal__title">{message?.text}</h2>
        <button
          type="button"
          className="modal__close-btn"
          aria-label="Закрыть"
          onClick={props.onClose}
        />
      </div>
    </div>
  );
}

export default ModalInfo;
