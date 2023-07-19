/**
 * Signin page
 *
 */
import React, { useEffect, useState } from "react";
import { Form, Formik } from "formik";
import Link from "next/link";
import * as Yup from "yup";

import Input from "@/components/common/input";
import AuthLayout from "@/components/layouts/auth";
import ErrorAlert from "@/components/common/alerts/error";
import PageTitle from "@/components/common/pageTitle";
import Button from "@/components/common/button";
import SuccessAlert from "@/components/common/alerts/success";

import helpers from "@/lib/helpers";
import config from "@/config/default.json";

export default function ForgotPassword() {
  const [error, setError] = useState(null);
  const [success, setOnSuccess] = useState(false);

  const initialValues = {
    email: "",
  };

  const handleSubmit = async (values) => {
    setError("")
    const payload = {
      email: values.email.trim(),
    };

    const { errors } = await helpers.makeRequest({
      method: "post",
      url: config.customersForgotPasswordEndpoint,
      payload,
    });

    if (errors && errors.response) return setError(errors.response.data?.error);

    setOnSuccess(true);
  };

  const validateSchema = Yup.object().shape({
    email: Yup.string()
      .email("Please provide a valid email")
      .required("Email is required"),
  });

  return (
    <React.Fragment>
      <PageTitle title="Password Assistance" />
      {error && <ErrorAlert error={error} />}
      {success && (
        <SuccessAlert>
          <span> We've sent a link to your email. </span>
          <a href="mailto:" className="underline">
            Check your mail
          </a>
        </SuccessAlert>
      )}
      <div className="p-4 border rounded">
        <div className="mb-3">
          <h1 className="text-2xl font-normal"> Password assistance </h1>
          <small className="font-medium">
            Enter the email address associated with your [Company name] account.
          </small>
        </div>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validateSchema}
        >
          <Form>
            <Input
              label="Email"
              type="email"
              name="email"
              placeholder="example@gmail.com"
            />
            <Button
              type="submit"
              label="continue"
              disabled={success ? true : false}
            />
          </Form>
        </Formik>
        <div className="mt-4">
          <details className="text-xs">
            <summary>
              <small className=" no-underline link cursor-help text-[11px] ">
                I need more help?
              </small>
            </summary>
            <small className="px-3 my-2  text-[11px] block leading-4">
              If you've already tried to reset your password, but haven't
              received an email from [Company name], check your Junk or Spam
              folder.
            </small>
            <small className="px-3 my-2 text-[11px] block leading-4">
              If you can't access your email, try resetting that first through
              your email provider.
            </small>
            <small className="px-3 my-2 text-[11px] block leading-4">
              If you've recently updated your password, your old password could
              still be saved in your browser. Try clearing your browser history
              and re-typing your password.
            </small>
            <small>
              &larr;
              <Link href="/auth/signin" className="link text-[11px]">
                {" "}
                Back to Sign in
              </Link>
            </small>
          </details>
        </div>
      </div>
    </React.Fragment>
  );
}

ForgotPassword.getLayout = (page) => <AuthLayout>{page} </AuthLayout>;
