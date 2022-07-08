import React from "react";
import SingUpForm from "../components/Forms/SingUp/index";
import styles from "../components/Header/Header.module.scss";

function SingUp() {
  return (
    <div>
      <h1 className={styles.header}>CREATE AN ACCOUNT</h1>
      <p className={styles.subtitle}>
        We always keep your name and email address private.
      </p>
      <SingUpForm />
    </div>
  );
}
export default SingUp;
