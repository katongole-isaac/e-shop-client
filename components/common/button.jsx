/**
 * General purpose Button
 * 
 */

import React from "react";
const Button = ({ onClick, classes, children, label, btnRef, ...other }) => {
  return (
    <button
      onClick={onClick}
      className={` border p-1 min-w-[100px] rounded cursor-pointer  ${classes}`}
      {...other}
      ref={btnRef}
    >
      {children || label}
    </button>
  );
};

export default React.forwardRef((props, ref) => (
  <Button {...props} btnRef={ref} />
)); 