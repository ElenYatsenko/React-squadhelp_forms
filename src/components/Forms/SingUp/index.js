import React from "react";
import { Formik, Form, Field } from "formik";
import WrappedInput from "../ WrappedInput /index";
import RadioButton from "../WrappedInputRadio";
import { SCHEMA_SIGN_UP } from "../../../utils/schemaValidation";
import styles from "./SingUp.module.scss";
import WrappedInputRadio from "../WrappedInputRadio/index";

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
            <WrappedInputRadio
              name="picked"
              type="radio"
              value="Buyer"
              textLabel="Join As a Buyer"
              textSubtitle="I am looking for a Name, Logo or Tagline for my business, brand or
              product."
            />
            <WrappedInputRadio
              name="picked"
              type="radio"
              value="Marketplace"
              textLabel="Join As a Creative or Marketplace Seller"
              textSubtitle="I plan to submit name ideas, Logo designs or sell names in Domain Marketplace."
            />
            <label>
              <Field
                type="checkbox"
                name="checkbox"
                textSpan="Allow Squadhelp to send marketing/promotional offers from time to
              time"
                className={styles.checkbox}
              ></Field>
              <span className={styles["span-checkbox"]}>
                Allow Squadhelp to send marketing/promotional offers from time
                to time
              </span>
            </label>

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
