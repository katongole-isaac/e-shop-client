/**
 * Auth Layout is used with page i.e register and signup so far
 *
 */

import React from "react";
import Link from "next/link";
import Image from 'next/image';

import Logo from '@/assets/logos/logo.svg';


export default function AuthLayout({ children, classes, widthClasses }) {
  return (
    <React.Fragment>
      <div className={` ${classes} h-auto w-auto`}>
        <div className={` ${widthClasses || "max-w-xs"}  m-auto `}>
          <header className="flex justify-center " >
            {/* you can include a company logo here
             * instead of h2 element
             */}
            <div className=" w-[200px] h-[200px] flex justify-center p-2 ">
              <Image width={100} height={100} src={Logo} alt="logo webp" className="w-full h-full" objectFit="cover" />
            </div>
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
