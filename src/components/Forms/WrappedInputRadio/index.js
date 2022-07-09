import React from "react";
import { Field } from "formik";
import cx from "classnames";
import styles from "./WrappedInputRadio.module.scss";

const WrappedInputRadio = (props) => {
  const { name, textLabel, textSubtitle, ...rest } = props;
  return (
    <label className={styles["container-field"]}>
      <Field name={name} className={styles["field-join"]}>
        {({ field, meta }) => {
          return <input {...field} {...rest} className={styles.input} />;
        }}
      </Field>
      <label className={styles["join-label"]}>
        {textLabel}
        <span className={styles.subtitle}>{textSubtitle}</span>
      </label>
    </label>
  );
};

export default WrappedInputRadio;
