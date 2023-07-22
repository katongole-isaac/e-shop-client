/**
 * Dashboard Layout - Contains most of the
 * shared Component Layout e.g Navbar , footer etc
 *
 */

import React, { useEffect, useState } from "react";

import AppBar from "../common/nav/navbar";

/**
 *
 * @param {object}  isMaxWidth  - wraps the page in a div a sets max-width to 1200px
 *
 * @param isMaxWidth -  `boolean | string`
 * @returns `JSX.Element`
 */
const DashLayout = ({ children, isMaxWidth }) => {
  // default width sizes for dashboard pages
  // you can customize this through ``isMaxWidth``

  const [classes, setClasses] = useState("lg:min-w-[900px] lg:max-w-[1000px]");

  useEffect(() => {
    if (typeof isMaxWidth === "boolean")
      setClasses("lg:min-w-[900px] lg:max-w-[1000px]");
    if (typeof isMaxWidth === "string") setClasses(isMaxWidth);
  }, [isMaxWidth]);

  return (
    <React.Fragment>
      <AppBar />
      {!!isMaxWidth ? (
        // the min-width matches with the
        // min-width set for the AppBar
        <div
          className={` min-w-[1100px] ${classes}  m-auto min-h-[90vh] py-3 px-4 lg:px-0 `}
        >
          {children}
        </div>
      ) : (
        children
      )}
    </React.Fragment>
  );
};

export default DashLayout;


