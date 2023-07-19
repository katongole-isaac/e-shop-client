/**
 * This is show to the customer
 * when they have an error on
 * acount creation
 *
 */

import Link from "next/link";

import ErrorAlert from "./error";

const AccountCreateWarning = ({ email, phone, onLinkClick }) => {
  let warningMsg = `You indicated you're a new customer, but an account already exists `;
  const emailInUseMsg = `with the email address ${email || ""} `;
  const phoneInUseMsg = `with the phone number ${phone || ""}`;

  if (email && !phone) warningMsg = warningMsg + emailInUseMsg;
  if (phone && !email) warningMsg = warningMsg + phoneInUseMsg;

  return (
    <div>
      <ErrorAlert
        color="text-[#8B6E00]"
        borderColor="border-amber-800"
        title={`${email ? "Email" : "Phone"} already in use`}
        error={warningMsg}
      />

      <div className="mb-3 flex flex-col gap-1 items-start">
        <p> Are you a returning customer? </p>
        <Link href="/auth/signin" className="link inline-block text-[12px]  ">
          Sign in
        </Link>
        <Link href="/auth/forgot-password" className="link text-[12px]">
          Forgot password ?
        </Link>
      </div>
      <div>
        <p> New to [Company name]? </p>
        <span className=" text-[12px]  ">
          Create a new account with &nbsp;
          <Link
            href="/auth/register"
            onClick={() =>
              onLinkClick((prev) => ({
                emailMsg: "",
                exists: false,
                error: "",
                phone: ""
              }))
            }
            className="link inline-block"
          >
            a different e-mail address
          </Link>
        </span>
      </div>
    </div>
  );
};

export default AccountCreateWarning;
