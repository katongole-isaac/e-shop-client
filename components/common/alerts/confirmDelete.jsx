/**
 * Alert with backdrop
 *
 */
// btnRef - refers to the button that trigger or show the modal

import React, { useEffect, useRef } from "react";
import Button from "../button";

const ConfirmDelete = ({ showModal, onShowModal, btnRef, onContinue, children }) => {
  
  const dialogRef = useRef(null);

  // if target === btnRef && !showModal
  // then show modal
  const closeOnClickOutside = (e) => {
    console.log(btnRef.current.contains(e.target));

    if ( !dialogRef.current.contains(e.target)  &&  !btnRef.current.contains(e.target) ) onShowModal(false);
  };

  const closeOnEsc = (e) => {
    if (e.key === "Escape") onShowModal(false);
  };

  useEffect(() => {
    if (showModal) {
      document.addEventListener("click", closeOnClickOutside);

      document.addEventListener("keydown", closeOnEsc);
    }

    return () => {
      document.removeEventListener("click", closeOnClickOutside);
      document.removeEventListener("keydown", closeOnEsc);
    };
  }, [showModal]);

  return (
    <div
      className={` ${
        showModal ? "block" : "hidden"
      } w-[105vw] h-[100vh] fixed -left-[1em] top-0 backdrop-brightness-75 flex items-center justify-center z-10  `}
    >
      <dialog
        open={showModal}
        ref={dialogRef}
        className=" w-[300px] min-h-[150px] right-16 bg-[#fafafa]  border p-0"
      >
        <div className="bg-gray-200 w-full h-6 flex justify-end items-center px-4 py-1 ">
          <span
            className="font-bold cursor-pointer"
            role="button"
            onClick={() => onShowModal(false)}
          >
            close
          </span>
        </div>
        <div className="divide-y-2">
          <div className="p-4 text-[12px]">
            {children}
          </div>
          <div className="p-4 text-[12px] space-x-4 text-center  ">
            <Button
              label="Cancel"
              onClick={() => onShowModal(false)}
              classes="bg-slate-500 text-white font-bold hover:bg-slate-600"
            />
            <Button
              label="Continue"
              onClick={ () => onContinue()  }
              classes="bg-red-700 text-white font-bold hover:bg-red-800"
            />
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default React.forwardRef((props, ref) => (
  <ConfirmDelete {...props} removeBtnRef={ref} />
));
