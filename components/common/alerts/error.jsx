/**
 * Error Component
 *
 */

import { useEffect } from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import { RiCloseFill } from "react-icons/ri";

const ErrorAlert = ({
  classes,
  error,
  closeBtn,
  toastId,
  color,
  title,
  borderColor,
  textClasses,
  children,
}) => {
  //  for toast notification [.classes]

  useEffect(() => {
  }, [classes]);

  borderColor = borderColor ? borderColor : "border-red-800";
  classes = classes ? "bg-white w-[25em]" : "w-[90%]";
  color = color ? color : "text-red-800 ";

  return (
    <div
      className={`border ${borderColor}  ${classes} min-h-min  rounded p-4 m-auto  mb-4`}
    >
      <div className=" flex gap-3 relative">
        <FaExclamationTriangle size={30} className={`${color} `} />
        {closeBtn && (
          <RiCloseFill
            onClick={() => closeBtn(toastId.id)}
            size={25}
            className="absolute right-1 cursor-pointer"
          />
        )}
        <div>
          <p className={`${color}`}> {title || "There was a problem"} </p>

          {error && <small className={`${textClasses}`}>{error} </small>}
          {children}
        </div>
      </div>
    </div>
  );
};

export default ErrorAlert;
