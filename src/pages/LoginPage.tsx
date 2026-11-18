import {Form, ErrorMessage, Field, Formik } from "formik"
import type { LoginInterface } from "../types/LoginDataType"
import Swal from "sweetalert2"
import * as Yup from "yup"; 
import { useNavigate } from "react-router-dom";



function LoginPage(){

const navigate = useNavigate()

const intialValues:LoginInterface = {
email:'',
password:''
}

const handleSubmit = () => {
  Swal.fire({
    title: "Login Successful!",
    text: "Welcome back to Hirely",
    icon: "success",
    confirmButtonText: "Continue",
    confirmButtonColor: "#8b5cf6",
  }).then(() => {
    navigate("/home");
  });
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Email is required"),

  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});


return (
  <section className="login-page">
    <div className="container my-5">

      <div className="login-page__wrapper">

        <div className="login-page__header">
          <a href="/" className="login-page__logo">
            Hire<span>ly</span>
            <i className="bi bi-briefcase-fill"></i>
          </a>

          <h1>Welcome <span>Back!</span></h1>

          <p>
            Sign in to your account and continue your career journey.
          </p>
        </div>

        <Formik
          initialValues={intialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <Form className="login-form">

            <div className="login-form__group">
              <label htmlFor="emailInput">
                Email Address
              </label>

              <div className="login-form__input-wrapper">
                <i className="bi bi-envelope"></i>

                <Field
                  type="email"
                  id="emailInput"
                  name="email"
                  placeholder="Enter your email"
                  className="login-form__input"
                />
              </div>

              <ErrorMessage
                name="email"
                component="span"
                className="login-form__error"
              />
            </div>

            <div className="login-form__group">
              <label htmlFor="passwordInput">
                Password
              </label>

              <div className="login-form__input-wrapper">
                <i className="bi bi-lock"></i>

                <Field
                  type="password"
                  id="passwordInput"
                  name="password"
                  placeholder="Enter your password"
                  className="login-form__input"
                />
              </div>

              <ErrorMessage
                name="password"
                component="span"
                className="login-form__error"
              />
            </div>

            <button type="submit" className="login-form__button">
              Sign In
              <i className="bi bi-arrow-right"></i>
            </button>

          </Form>
        </Formik>

        <div className="login-page__footer">
          <span>Don't have an account?</span>
          <a href="/register">Create Account</a>
        </div>

      </div>
    </div>
  </section>
);


}

export default LoginPage