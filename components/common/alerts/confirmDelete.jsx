/**
 * confirm Delete modal
 * 
 */

import React from "react";
import Button from "../button";
import BackdropAlert from "./backdropAlert";

const ConfirmDelete = ({
  showModal,
  onShowModal,
  btnRef,
  onContinue,
  children,
}) => {
  return (
    <BackdropAlert
      showModal={showModal}
      onShowModal={onShowModal}
      btnRef={btnRef}
      dialogClasses=" w-[300px] min-h-[150px] right-16 bg-[#fafafa]  border p-0"
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
        <div className="p-4 text-[12px]">{children}</div>
        <div className="p-4 text-[12px] space-x-4 text-center  ">
          <Button
            label="Cancel"
            onClick={() => onShowModal(false)}
            classes="bg-slate-500 text-white font-bold hover:bg-slate-600"
          />
          <Button
            label="Continue"
            onClick={() => onContinue()}
            classes="bg-red-700 text-white font-bold hover:bg-red-800"
          />
        </div>
      </div>
    </BackdropAlert>
  );
};

export default React.forwardRef((props, ref) => (
  <ConfirmDelete {...props} btnRef={ref} />
));
