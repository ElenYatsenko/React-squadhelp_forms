import React from "react";
import { Formik, Form } from "formik";
import WrappedInput from "../ WrappedInput /index";
import { SCHEMA_SIGN_IN } from "../../../utils/schemaValidation";
import styles from "./LoginForm.module.scss";

const initialValues = { email: "", password: "" };

const LoginForm = () => {
  const onSubmit = (value, formikBag) => {
    formikBag.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SCHEMA_SIGN_IN}
      onSubmit={onSubmit}
    >
      {(formikProps) => {
        return (
          <Form className={styles.form}>
            <WrappedInput name="email" placeholder="Email Address" />
            <WrappedInput
              name="password"
              type="password"
              placeholder="Password"
            />
            <input type="submit" value="login" className={styles.input} />
          </Form>
        );
      }}
    </Formik>
  );
};

export default LoginForm;
