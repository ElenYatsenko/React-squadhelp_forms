import React from "react";
import { Field } from "formik";
import styles from "./RadioButton.module.scss";

const RadioButton = () => {
  return (
    <div>
      <div className={styles["container-field"]}>
        <Field
          name="picked"
          type="radio"
          value="Buyer"
          className={styles["field-join"]}
        ></Field>
        <label className={styles["join-label"]}>
          Join As a Buyer
          <span className={styles.subtitle}>
            I am looking for a Name, Logo or Tagline for my business, brand or
            product.
          </span>
        </label>
      </div>
      <div className={styles["container-field"]}>
        <Field
          name="picked"
          type="radio"
          value="Marketplace"
          className={styles["field-join"]}
        ></Field>
        <label className={styles["join-label"]}>
          Join As a Creative or Marketplace Seller
          <span className={styles.subtitle}>
            I plan to submit name ideas, Logo designs or sell names in Domain
            Marketplace.
          </span>
        </label>
      </div>
    </div>
  );
};

export default RadioButton;
