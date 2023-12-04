/**
 * Account navbar section
 *
 */

import useCurrentUser from "@/lib/useCurrentUser";
import DropDown from "../dropdown";
import Button from "../button";
import Link from "next/link";

const ShowAccount = () => {
  const { isLoggedIn, user } = useCurrentUser();

  const menu = [
    {
      label: "Account",
      path: "/a",
    },
  ];

  const content = (
    <div className="text-white">
      <div>
        <small>
          Hello, {isLoggedIn ? user.fullname.toLowerCase() : "sign in"}
        </small>
        <p className="font-bold -mt-1"> Account & Lists </p>
      </div>
    </div>
  );

  const dropdown = (
    <div className="bg-[#fafafa]   min-w-max px-4 py-2">
      <div className="py-1">
        <div className="text-center">
          <Button classes="bg-amber-400 text-xs hover:bg-amber-500">
            <Link href="/auth/signin" className="no-underline">
              {" "}
              SignIn
            </Link>
          </Button>
        </div>

        <div className="text-[12px] py-2">
          <span> New Customer? </span>
          <Link href="/auth/create" className="hover:underline text-sky-700">
            Start here
          </Link>
        </div>
      </div>

      <hr />

      {/* Menu list */}
      <div className="py-1 space-y-1">
        <h1 className="font-medium">Your Account </h1>
        {menu.map(({ path, label }) => (
          <li
            key={path}
            className="list-none text-xs hover:underline hover:text-amber-600 "
          >
            <Link href={path}>{label}</Link>
          </li>
        ))}
      </div>
    </div>
  );

  return <DropDown content={content} dropdown={dropdown} />;
};

export default ShowAccount;
