import { useState } from "react";
import Navigation from "./Navigation/Navigation";
import AuthNav from "./AuthNav/AuthNav";
import Logo from "../Logo/Logo";
import "./Header.css";

function Header(props) {
  const [isOpen, setIsOpen] = useState(false);

  function handleMenu() {
    setIsOpen(!isOpen);
  }
  return (
    <header className="header">
      <Logo />
      {!props.loggedIn ? (
        <Navigation />
      ) : (
        <AuthNav handleMenu={handleMenu} isOpen={isOpen} />
      )}
    </header>
  );
}

export default Header;
