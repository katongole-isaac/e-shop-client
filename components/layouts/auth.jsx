/**
 * Auth Layout is used with page i.e register and signup so far
 *
 */

import React from "react";
import Link from "next/link";

export default function AuthLayout({ children, classes, widthClasses }) {
  return (
    <React.Fragment>
      <div className={` ${classes} h-auto w-auto`}>
        <div className={` ${widthClasses || "max-w-xs"}  m-auto pt-8`}>
          <header>
            {/* you can include a company logo here
             * instead of h2 element
             */}
            <h2 className="mb-4 text-center font-medium"> Company Logo </h2>
          </header>
          {children}
        </div>
        <footer className="mt-14 max-w-md m-auto">
          <hr className="bg-slate-400 w-full border shadow-lg " />
          <div className="flex mt-4 justify-center gap-4">
            <small>
              <Link className="link" href="/">
                Conditions of Use
              </Link>
            </small>
            <small>
              <Link className="link" href="/privacy">
                Privacy Notice
              </Link>
            </small>
            <small>
              <Link className="link" href="/">
                Help
              </Link>
            </small>
          </div>

          <div className="text-center mt-2 text-gray-700">
            <small> &copy; 2000 - 2023, Company Name or its affiliates </small>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
}
