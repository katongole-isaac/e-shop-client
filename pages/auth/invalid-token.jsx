/**
 * This shows a message in the token on server
 * during password recovery is invalid
 *
 */

import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import PageTitle from "@/components/common/pageTitle";
import AuthLayout from "@/components/layouts/auth";
import ErrorAlert from "@/components/common/alerts/error";

export default function InvalidToken() {
  const router = useRouter();
  return (
    <React.Fragment>
      <PageTitle title="Invalid Credentials" />
      <ErrorAlert error={router.query["error"]} />
      <div>
        <p className="mb-1"> Use the available Options for more help </p>
        <details className="text-xs">
          <summary>
            <small className=" no-underline link cursor-help text-[11px] ">
              {" "}
              Need help?{" "}
            </small>
          </summary>
          <small className="ml-6  text-[11px] block max-w-max mb-1">
            <Link href="/auth/signin" className="link">
              Sign in
            </Link>
          </small>
          <small className="ml-6  text-[11px] block max-w-max mb-1">
            <Link href="/auth/register" className="link">
              Create a new account
            </Link>
          </small>
          <small className="ml-6  text-[11px] block max-w-max mb-1">
            <Link href="/auth/forgot-password" className="link">
              Forgot password?
            </Link>
          </small>
        </details>
      </div>
    </React.Fragment>
  );
}

InvalidToken.getLayout = (page) => <AuthLayout>{page} </AuthLayout>;
