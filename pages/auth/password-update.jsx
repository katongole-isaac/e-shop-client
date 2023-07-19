/**
 * Contains forms for customer password update
 *
 */

/**
 * Signin page
 *
 */
import React, { useEffect, useState } from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";

import Input from "@/components/common/input";
import AuthLayout from "@/components/layouts/auth";
import ErrorAlert from "@/components/common/alerts/error";
import PageTitle from "@/components/common/pageTitle";
import Button from "@/components/common/button";
import PasswordUpdatedSuccess from "@/components/common/alerts/passwordUpdateSuccess";

import helpers from "@/lib/helpers";
import config from "@/config/default.json";
import Link from "next/link";
import { useRouter } from "next/router";

export default function PasswordUpdate() {
  const [error, setError] = useState("");
  const [success, setOnSuccess] = useState(false);

  const router = useRouter();

  const initialValues = {
    password: "",
    confirmPassword: "",
  };

  const handleSubmit = async (values) => {
    setError("");

    const payload = {
      newPassword: values.password,
      confirmPassword: values.confirmPassword,
      id: router.query.id,
      token: router.query.token,
    };

    const { errors, statusCode } = await helpers.makeRequest({
      method: "put",
      url: config.customersPasswordRecoveryEndpoint,
      payload,
    });

    if (errors && errors.response) return setError(errors.response.data?.error);

    if (statusCode !== 200) return;

    setOnSuccess(true);
  };

  const validateSchema = Yup.object().shape({
    password: Yup.string()
      .matches(helpers.passwordRegexp, {
        message:
          "Minimum 6 char(s), madeup of atleast a digit or special char(s)",
      })
      .required("${path} is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "password don't match")
      .required("${path} is required"),
  });

  return (
    <React.Fragment>
      <PageTitle title="Password Recovery" />
      {error && <ErrorAlert error={error} />}

      <div className="p-4 border rounded">
        <div className="mb-3">
          <h1 className="text-2xl font-normal"> Password recovery </h1>
          <small className="font-medium">
            You can now enter a new password for your [company name] Account
          </small>
        </div>
        {success ? (
          <PasswordUpdatedSuccess />
        ) : (
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validateSchema}
          >
            <Form>
              <Input
                label="New Password"
                type="password"
                name="password"
                placeholder="password"
              />
              <Input
                label="Confirm Password"
                type="password"
                name="confirmPassword"
                placeholder="confirm password"
              />
              <Button type="submit" label="recovery password" />
            </Form>
          </Formik>
        )}
        <div className="mt-4">
          <details className="text-xs">
            <summary>
              <small className=" no-underline link cursor-help text-[11px] ">
                I need more help?
              </small>
            </summary>
            <small className="px-3 my-2  text-[11px] block leading-4">
              <Link href="/auth/forgot-password" className="link ml-3">
                Use another email
              </Link>
            </small>
          </details>
        </div>
      </div>
    </React.Fragment>
  );
}

PasswordUpdate.getLayout = (page) => <AuthLayout>{page} </AuthLayout>;
