/**
 * Alert with backdrop
 *
 */
// btnRef - refers to the button that trigger or show the modal

import React, { useRef } from "react";
import useClickOutside from "@/lib/useClickOutside";

const BackdropAlert = ({
  showModal,
  onShowModal,
  btnRef,
  children,
  dialogClasses,
}) => {
  const dialogRef = useRef(null);

  useClickOutside({
    showModal,
    onSetShowModal: onShowModal,
    popupRef: dialogRef,
    originRef: btnRef,
  });

  return (
    <div
      className={` ${
        showModal ? "block" : "hidden"
      } w-[105vw] h-[100vh] fixed -left-[1em] top-0 backdrop-brightness-75 flex items-center justify-center z-10  `}
    >
      <dialog open={showModal} ref={dialogRef} className={dialogClasses}>
        {children}
      </dialog>
    </div>
  );
};

export default BackdropAlert;
