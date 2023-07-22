/**
 * This Layout is used in the Security Page
 *
 */

import React from "react";
import ErrorAlert from "../common/alerts/error";

const SecurityChangeLayout = ({ children, title, error }) => {
  return (
    <React.Fragment>
      {error && <ErrorAlert error={error} />}
      <div className="w-full border rounded h-full py-2 px-3 pb-4">
        <h1 className="text-2xl mt-2 mb-4"> {title} </h1>
        <div className="w-full h-[95%] ">{children}</div>
      </div>
    </React.Fragment>
  );
};

export default SecurityChangeLayout;
