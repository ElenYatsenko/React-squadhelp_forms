import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();
  return (
    <header>
      <Link to="/">
        <img src="/static/images/logo.png" />
      </Link>
      {pathname === "/login" ? (
        <Link to="/singup">SingUp</Link>
      ) : (
        <Link to="/login">login</Link>
      )}
    </header>
  );
};

export default Header;
