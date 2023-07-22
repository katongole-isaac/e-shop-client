/**
 * Signin page
 *
 */

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import Link from "next/link";
import { Form, Formik } from "formik";
import * as Yup from "yup";

import Input from "@/components/common/input";
import AuthLayout from "@/components/layouts/auth";
import ErrorAlert from "@/components/common/alerts/error";
import FormButton from "@/components/common/formButton";
import PageTitle from "@/components/common/pageTitle";

import helpers from "@/lib/helpers";
import { userLoggedIn } from "@/store/reducer";
import useRedirectToDashboard from "@/lib/useRedirectToDashboard";
import config from "@/config/default.json";
import BreadCrumb from "@/components/common/breadCrumb";

export default function SignIn() {
  const [error, setError] = useState("");
  const [emailChecked, setEmailChecked] = useState(false);

  const router = useRouter();

  const dispatch = useDispatch();

  const initialValues = {
    email: "",
    password: "",
  };

  // for redirecting the user to
  // the dashboard in case the user visits signin
  // page and is loggedin prior
  useRedirectToDashboard();

  const handleSubmit = async (values) => {
    setError("");

    const payload = {
      email: values.email.trim(),
      password: values.password,
    };

    // first check if the customer exist
    if (!emailChecked) {
      const { error, checked } = await helpers.checkEmail({
        email: payload.email,
      });

      if (error) setError(error);

      if (checked) setEmailChecked(true);

      return;
    }

    // here do login the customer
    const { data, errors, headers, statusCode } = await helpers.makeRequest({
      url: config.customersSignInEndpoint,
      method: "post",
      payload,
    });

    if (errors && errors.response) return setError(errors.response.data.error);

    if (statusCode !== 200) return;

    // here everything is okay
    // u can dispatch a createAccount action
    userLoggedIn(dispatch, data);

    // store token
    helpers.setUserToken(headers["x-auth-token"]);

    // redirect to main dashbaord
    router.replace("/");
  };

  const validateSchema = Yup.object().shape({
    email: Yup.string()
      .email("Please provide a valid email")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const checkEmailSchema = Yup.object().shape({
    email: Yup.string()
      .email("Please provide a valid email")
      .required("Email is required"),
  });

  return (
    <React.Fragment>
      <PageTitle title="Sign In" />
      {error && <ErrorAlert error={error} />}
      <div className="p-4 border rounded">
        <h1 className="font-normal text-2xl mb-2"> Sign In </h1>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={!emailChecked ? checkEmailSchema : validateSchema}
        >
          <Form>
            <Input
              label="Email"
              type="email"
              name="email"
              placeholder="example@gmail.com"
            />
            {emailChecked && (
              <Input
                label="Password"
                type="password"
                name="password"
                placeholder="example@gmail.com"
              />
            )}
            <FormButton type="submit" label="continue" />
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

        <div>
          <details className="text-xs">
            <summary>
              <small className=" no-underline link cursor-help text-[11px] ">
                {" "}
                Need help?{" "}
              </small>
            </summary>
            <small className="ml-6  text-[11px]">
              <Link href="/auth/forgot-password" className="link">
                Forgot password?
              </Link>
            </small>
          </details>
        </div>
      </div>

      <div className="mt-8">
        <div className="mb-4">
          <h1 className="flex after:flex-1  after:w-full after:h-[2px] after:bg-gray-200 before:flex-1 before:w-full before:h-[2px] before:bg-gray-200 m-auto align-middle text-center leading-[0em] ">
            <span className="px-2  text-gray-700">
              <small> New to Company Name? </small>
            </span>
          </h1>
        </div>

        <div className="flex mt-8">
          <Link href="/auth/register" className=" block w-full">
            <button
              role="link"
              className="text-xs border w-full p-1 font-medium shadow-sm hover:bg-slate-100 rounded"
            >
              Create a New Account
            </button>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
}

SignIn.getLayout = (page) => <AuthLayout>{page} </AuthLayout>;
