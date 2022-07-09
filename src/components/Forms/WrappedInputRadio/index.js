import React from "react";
import { Field } from "formik";
import styles from "./WrappedInputRadio.module.scss";

const WrappedInputRadio = (props) => {
  const { name, textLabel, ...rest } = props;
  return (
    <label className={styles.label}>
      <Field name={name}>
        {({ field, meta }) => {
          return <input {...field} {...rest} className={styles.input} />;
        }}
      </Field>
      <span className={styles.description}> {textLabel}</span>
    </label>
  );
};

export default WrappedInputRadio;
