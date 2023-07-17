/**
 * Displayed upon a successfully password reset
 *
 */
import Link from "next/link";

const PasswordUpdatedSuccess = ({ messsage }) => {
  return (
    <div className="max-w-xs border p-2 my-2 bg-green-50 rounded ">
      <div className="my-1 mb-5">
        <p className="text-green-700 font-medium mb-1">
          {" "}
          Password reset successful{" "}
        </p>
        <p className="text-slate-700">
          Your password has been updated successfully, Sign in to access
          [company name] properties.
        </p>
      </div>

      <div className="w-full ">
        <Link href="/auth/signin">
          <button className="bg-sky-600 px-3 py-2 rounded text-white font-bold tracking-wide hover:bg-sky-700 w-auto block m-auto">
            {" "}
            Sign in{" "}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PasswordUpdatedSuccess;
