/**
 * Register Page
 *
 */

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Form, Formik } from "formik";
import * as yup from "yup";

import Input from "@/components/common/input";
import Error from "@/components/common/error";
import AuthLayout from "@/components/layouts/auth";

import yupPhone from "@/lib/yup-phone";
import helpers from "@/lib/helpers";
import PageTitle from "@/components/common/pageTitle";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, createAccount, getErrors } from "@/store/reducer";
import useCurrentUser from "@/lib/useCurrentUser";

// attach phone validator from '@/lib/yuphone'
yup.addMethod(yup.string, "phone", yupPhone);

export default function Register() {
  const initialValues = {
    fullname: "",
    email: "",
    phone: "",
    password: "",
  };

  const error = useSelector(getErrors());

  const dispatch = useDispatch();

  // for redirection to
  // main dashboard if u logged in with this browser
  useCurrentUser();

  const handleSubmit = async (values) => {
    const { email, phone, password, fullname } = values;

    const payload = {
      email: email.trim(),
      phone: phone.trim(),
      fullname: fullname.trim(),
      password,
    };

    createAccount(dispatch, payload);
  };

  useEffect(() => {
    if (error) clearErrors(dispatch);
  }, [error]);

  const validationSchema = yup.object({
    fullname: yup
      .string()
      .matches(
        /^(?=.{3,40}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9_\s]+(?<![_.])$/,
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
      .matches(
        /^(?=.*?[A-Za-z])(?=.*?[0-9~!#=$%?/@+^&_\-\*\.\\\{\}\(\)\[\]]).{6,}$/,
        {
          message:
            "Minimum 6 char(s), madeup of atleast a digit or special char(s)",
        }
      )
      .required("${path} is required"),
  });

  return (
    <React.Fragment>
      <PageTitle title="Create Account" />

      {error && <Error error={error} />}

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
