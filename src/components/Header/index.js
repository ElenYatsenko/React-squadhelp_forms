import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = () => {
  const { pathname } = useLocation();
  return (
    <header className={styles.header_container}>
      <Link to="/">
        <img src="/static/images/logo.png" />
      </Link>
      {pathname === "/login" ? (
        <Link to="/singup" className={styles.button}>
          Singup
        </Link>
      ) : (
        <Link to="/login" className={styles.button}>
          Login
        </Link>
      )}
    </header>
  );
};

export default Header;
