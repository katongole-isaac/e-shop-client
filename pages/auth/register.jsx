/**
 * Register Page
 *
 */

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import Link from "next/link";
import { Form, Formik } from "formik";
import * as yup from "yup";

import Input from "@/components/common/input";
import PageTitle from "@/components/common/pageTitle";
import AuthLayout from "@/components/layouts/auth";
import AccountCreateWarning from "@/components/common/alerts/accountCreateWarning";

import yupPhone from "@/lib/yup-phone";
import helpers from "@/lib/helpers";
import useRedirectToDashboard from "@/lib/useRedirectToDashboard";
import config from "@/config/default.json";
import { userLoggedIn } from "@/store/reducer";

// attach phone validator from '@/lib/yuphone'
yup.addMethod(yup.string, "phone", yupPhone);

export default function Register() {
  const initialValues = {
    fullname: "",
    email: "",
    phone: "",
    password: "",
  };

  // errors returned after form submission
  const [errors, setErrors] = useState({
    error: "",
    exists: false,
    emailMsg: "",
    phone: "",
  });

  const dispatch = useDispatch();
  const router = useRouter();

  // for redirection to
  // main dashboard if u logged in with this browser
  useRedirectToDashboard();

  const handleSubmit = async (values) => {
    const { email, phone, password, fullname } = values;

    const payload = {
      email: email.trim(),
      phone: phone.trim(),
      fullname: fullname.trim(),
      password,
    };

    const {
      data,
      errors: responseErrors,
      statusCode,
      headers,
    } = await helpers.makeRequest({
      url: config.customersRegisterEndpoint,
      method: "post",
      payload,
    });

    const { response } = responseErrors;

    if (response && response.data) {
      if (response.data.error === "email")
        return setErrors((prev) => ({
          ...prev,
          emailMsg: payload.email,
          error: "email",
          exists: true,
        }));

      if (response.data.error === "phone")
        return setErrors((prev) => ({
          ...prev,
          phone: payload.phone,
          error: "phone",
          exists: response.data.exists,
        }));
    }

    if (statusCode !== 200) return;

    // here everything is okay
    // u can dispatch a createAccount action
    userLoggedIn(dispatch, data);

    // store token
    helpers.setUserToken(headers["x-auth-token"]);

    // redirect to main dashbaord
    router.replace("/");
  };

  const validationSchema = yup.object({
    fullname: yup
      .string()
      .matches(
        helpers.usernameRegexp,
        "Minimum 3 char(s), only contain char(s), digit and _ "
      )
      .required("${path} is required"),
    email: yup
      .string()
      .email("Please provide a valid email")
      .required("${path} is required"),
    phone: yup
      .string()
      .required("Phone is required")
      .phone("${path} must be a valid phone"),
    password: yup
      .string()
      // regex matches a str with letter and at least
      // a number or special char
      .matches(helpers.passwordRegexp, {
        message:
          "Minimum 6 char(s), madeup of atleast a digit or special char(s)",
      })
      .required("${path} is required"),
  });

  if (errors.error && errors.exists)
    return (
      <AccountCreateWarning
        email={errors.emailMsg}
        onLinkClick={setErrors}
        phone={errors.phone}
      />
    );

  return (
    <React.Fragment>
      <PageTitle title="Create Account" />

      {/* {error && <ErrorAlert error={error} />} */}

      <div className="p-4 border rounded">
        <h1 className="font-normal text-2xl mb-2"> Create Account </h1>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <Form>
            <Input
              label="Your name"
              placeholder="First and last name"
              name="fullname"
              content="*"
            />
            <Input
              label="Email"
              type="email"
              placeholder="example@gmail.com"
              name="email"
              content="*"
            />

            <Input label="Phone" type="tel" name="phone" content="*" />
            <Input
              label="Password"
              type="password"
              name="password"
              content="*"
              placeholder="Atleast 6 characters"
            />
            <button
              className="bg-amber-400 hover:bg-amber-500 transition duration-300 rounded w-full font-semibold p-1 inline-block m-auto"
              type="submit"
            >
              continue
            </button>
          </Form>
        </Formik>
        <small className="block mt-4 mb-3 ">
          By creating an account, you agree to the Company's
          <span>
            <a href="" className="link">
              &nbsp; Conditions of Use
            </a>
            &nbsp; and
            <a href="" className="link">
              &nbsp;Privacy Notice
            </a>
          </span>
        </small>

        <small>
          Already have an account? &nbsp;
          <Link href="/auth/signin" className="link">
            Sign In
          </Link>
        </small>
      </div>
    </React.Fragment>
  );
}

Register.getLayout = (page) => <AuthLayout>{page} </AuthLayout>;
