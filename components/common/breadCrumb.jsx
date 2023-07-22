/**
 * BreadCrumb Component
 *
 */

import helpers from "@/lib/helpers";
import Link from "next/link";
import React from "react";
import { BiChevronRight } from "react-icons/bi";


/**
 *
 * @param {*} paths - { path, label }
 *
 * - `path` acts as href
 * - `label` text to display
 * @returns
 */

const BreadCrumb = ({ paths, labels }) => {

  let href = "";

  paths = paths.filter((val) => val !== "");
  paths = paths.map((path, i) => {
    return { path, label: labels[i] };
  });

  return (
    <div className="w-fit mb-2">
      <div className="flex gap-1 items-center">
        {paths.map(({ path, label }, index) => {

            const links = paths.map(({path: url}) => url );

          if (index === 0) href = `/${links.slice(0, index + 1).join("/")}`;
          else href = `/${links.slice(0, index).join("/")}`;

          if (index === paths.length - 1)
            return (
              <span
                key={path}
                className="text-amber-700 font-medium text-[12px]"
              >
                {helpers.startCase(label)}
              </span>
            );
          else
            return (
              <React.Fragment key={path}>
                <Link href={href} className="link font-medium text-[12px]">
                  {helpers.startCase(label)}
                </Link>
                <BiChevronRight size={18} />
              </React.Fragment>
            );
        })}
      </div>
    </div>
  );
};


export default React.memo(BreadCrumb);
