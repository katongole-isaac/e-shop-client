/**
 * Error Component
 *
 */

import { useEffect } from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import { RiCloseFill } from "react-icons/ri";

const ErrorAlert = ({ classes, error, closeBtn, toastId }) => {
  //  for toast notification [.classes]

  useEffect(() => {
    classes = classes ? classes : "w-[90%]";
  }, [classes]);

  return (
    <div
      className={` ${classes} min-h-min border border-red-800 rounded p-4 m-auto  mb-4`}
    >
      <div className="text-red-800  flex gap-3 relative">
        <FaExclamationTriangle size={30} />
        {closeBtn && (
          <RiCloseFill
            onClick={() => closeBtn(toastId.id)}
            size={25}
            className="absolute right-1 cursor-pointer"
          />
        )}
        <div>
          <p> There was a problem </p>
          {error && <small>{error} </small>}
        </div>
      </div>
    </div>
  );
};

export default ErrorAlert;
