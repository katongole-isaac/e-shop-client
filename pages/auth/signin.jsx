/**
 * Signin page
 *
 */

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { useRouter } from "next/router";
import { Form, Formik } from "formik";
import * as Yup from "yup";

import Input from "@/components/common/input";
import AuthLayout from "@/components/layouts/auth";
import Error from "@/components/common/error";
import PageTitle from "@/components/common/pageTitle";

import helpers from "@/lib/helpers";
import { getSignErrors, signIn, getCurrentUser } from "@/store/reducer";

export default function SignIn() {
  const [error, setError] = useState("");
  const [emailChecked, setEmailChecked] = useState(false);

  const signError = useSelector(getSignErrors());

  const currentUser = useSelector(getCurrentUser());

  const dispatch = useDispatch();

  const router = useRouter();

  const initialValues = {
    email: "",
    password: "",
  };

  useEffect(() => {
    if (signError) return setError(signError);
  }, [signError, currentUser]);

  useEffect(() => {
    if (Object.keys(currentUser).length > 0 && helpers.getUserToken())
      router.replace("/");

    console.log(currentUser);
  });

  const handleSubmit = async (values) => {
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

    signIn(dispatch, payload);

    // console.log("Logged in");
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
      {error && <Error error={error} />}
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
            <button
              className="bg-amber-400 hover:bg-amber-500 transition duration-300 rounded w-full font-semibold p-1 inline-block m-auto "
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

        <div>
          <details className="text-xs">
            <summary>
              <small className=" no-underline link cursor-help text-[11px] ">
                {" "}
                Need help?{" "}
              </small>
            </summary>
            <small className="ml-6  text-[11px]">
              <Link href="/" className="link">
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
