import "./BurgerMenu.css";

function BurgerMenu(props) {
  return (
    <>
      <div
        onClick={props.handleMenuClick}
        className={`menu-burger ${props.isOpen ? "menu-burger_open" : ""}`}
      >
        <span></span>
      </div>
    </>
  );
}

export default BurgerMenu;
