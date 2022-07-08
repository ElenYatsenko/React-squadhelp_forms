import React from "react";
import LoginForm from "../components/Forms/Login/index";
import styles from "../components/Header/Header.module.scss";

function Login() {
  return (
    <div>
      <h1 className={styles.header}>LOGIN TO YOUR ACCOUNT</h1>
      <LoginForm />
    </div>
  );
}
export default Login;
