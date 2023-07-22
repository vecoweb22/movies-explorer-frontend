import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./Header.css";
import Navigation from "./Navigation/Navigation";
import AuthNav from "./AuthNav/AuthNav";
import Logo from "../Logo/Logo";

function Header(props) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  function handleMenuClick() {
    setIsOpen(!isOpen);
  }
  return (
    <header className="header">
      <Logo />
      {location.pathname === "/" ? (
        <Navigation />
      ) : (
        <AuthNav handleMenuClick={handleMenuClick} isOpen={isOpen} />
      )}
    </header>
  );
}

export default Header;
