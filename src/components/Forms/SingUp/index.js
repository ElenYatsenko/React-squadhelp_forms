import React from "react";
import { Formik, Form, Field } from "formik";
import WrappedInput from "../ WrappedInput /index";
import RadioButton from "../RadioButton";
import { SCHEMA_SIGN_UP } from "../../../utils/schemaValidation";
import styles from "./SingUp.module.scss";

const initialValues = {
  fname: "",
  lname: "",
  dname: "",
  email: "",
  password: "",
  passconfirm: "",
  picked: "",
};

const SingUpForm = () => {
  const onSubmit = (value, formikBag) => {
    formikBag.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SCHEMA_SIGN_UP}
      onSubmit={onSubmit}
    >
      {(formikProps) => {
        return (
          <Form className={styles.form}>
            <WrappedInput name="fname" placeholder="First name" />
            <WrappedInput name="lname" placeholder="Last name" />
            <WrappedInput name="dname" placeholder="Display Name" />
            <WrappedInput name="email" placeholder="Email Address" />
            <WrappedInput
              name="password"
              type="password"
              placeholder="Password"
            />
            <WrappedInput
              name="passconfirm"
              type="password"
              placeholder="Password Confirmation"
            />
            <RadioButton />
            <input
              type="submit"
              value="create Acount"
              className={styles.input}
            />
          </Form>
        );
      }}
    </Formik>
  );
};

export default SingUpForm;
