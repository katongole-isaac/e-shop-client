/**
 * Dashboard Layout - Contains most of the
 * shared Component Layout e.g Navbar , footer etc
 *
 */

import React from "react";

import AppBar from "../common/nav/navbar";

const DashLayout = ({ children }) => {
  return (
    <React.Fragment>
      <AppBar />
      {children}
    </React.Fragment>
  );
};

export default DashLayout;
