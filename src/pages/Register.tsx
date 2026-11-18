import { Form, Formik, Field, ErrorMessage } from "formik";
import type { RegisterInterface } from "../types/RegisterType"
import Swal from "sweetalert2"
import {  useNavigate } from "react-router-dom"
import * as Yup from "yup"

function RegisterPage(){

const navigate = useNavigate()

const intialValues:RegisterInterface = {
FullName:'',
EmailAddress:'',
password:'',
confirmPassword:''
}

const handleSubmit = () => {
  Swal.fire({
    title: "Account Created!",
    text: "Welcome to Hirely! Your account has been created successfully.",
    icon: "success",
    confirmButtonText: "Continue",
    confirmButtonColor: "#8b5cf6",
  }).then(() => {
    navigate("/");
  });
};

const validation = Yup.object({
  FullName: Yup.string()
    .min(3, "Full name must be at least 3 characters")
    .required("Full name is required"),

  EmailAddress: Yup.string()
    .email("Please enter a valid email address")
    .required("Email address is required"),

  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Please confirm your password"),
});


return (
  <section className="register-page">
    <div className="container">
      <div className="register-page__wrapper">

        <div className="register-page__header">
          <a href="/" className="register-page__logo">
            Hire<span>ly</span>
            <i className="bi bi-briefcase-fill"></i>
          </a>

          <h1>Create Your <span>Account</span></h1>
          <p>
            Join Hirely and discover opportunities that match your career goals.
          </p>
        </div>

        <Formik
          initialValues={intialValues}
          onSubmit={handleSubmit}
          validationSchema={validation}
    
        >
          <Form className="register-form my-5">

            <div className="register-form__group">
              <label htmlFor="FullName">Full Name</label>
              <div className="register-form__input-wrapper">
                <i className="bi bi-person"></i>
                <Field
                  type="text"
                  id="FullName"
                  name="FullName"
                  placeholder="Enter your full name"
                  className="register-form__input"
                />
              </div>
              <ErrorMessage
                name="FullName"
                component="span"
                className="register-form__error"
              />
            </div>

            <div className="register-form__group">
              <label htmlFor="EmailAddress">Email Address</label>
              <div className="register-form__input-wrapper">
                <i className="bi bi-envelope"></i>
                <Field
                  type="email"
                  id="EmailAddress"
                  name="EmailAddress"
                  placeholder="Enter your email"
                  className="register-form__input"
                />
              </div>
              <ErrorMessage
                name="EmailAddress"
                component="span"
                className="register-form__error"
              />
            </div>

            <div className="register-form__group">
              <label htmlFor="password">Password</label>
              <div className="register-form__input-wrapper">
                <i className="bi bi-lock"></i>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Create a password"
                  className="register-form__input"
                />
              </div>
              <ErrorMessage
                name="password"
                component="span"
                className="register-form__error"
              />
            </div>

            <div className="register-form__group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <div className="register-form__input-wrapper">
                <i className="bi bi-shield-lock"></i>
                <Field
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  className="register-form__input"
                />
              </div>
              <ErrorMessage
                name="confirmPassword"
                component="span"
                className="register-form__error"
              />
            </div>

            <button type="submit" className="register-form__button">
              Create Account
              <i className="bi bi-arrow-right"></i>
            </button>

          </Form>
        </Formik>

        <div className="register-page__footer">
          <span>Already have an account?</span>
          <a href="/">Sign In</a>
        </div>

      </div>
    </div>
  </section>
);


}

export default RegisterPage