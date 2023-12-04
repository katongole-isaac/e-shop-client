/**
 * Show Address Info
 *
 */

import Link from "next/link";
import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import ConfirmDelete from "../common/alerts/confirmDelete";
import Button from "../common/button";
import { deleteAddress, getCurrentUser } from "@/store/userReducer";

const ShowAddress = ({ address, setShowEdit }) => {
  const [showModal, setShowModal] = useState(false);

  const { country, city, fullname, zipCode, state, street, phone } = address;

  const removeBtnRef = useRef(null);

  const dispatch = useDispatch();
  const user = useSelector(getCurrentUser());

  const deleteUserAddress = () => {
    deleteAddress(dispatch, user._id);
  };

  return (
    <React.Fragment>
      <ConfirmDelete
        showModal={showModal}
        onShowModal={setShowModal}
        ref={removeBtnRef}
        onContinue={deleteUserAddress}
      >
        <p>
          Are you sure you want to remove your default address? Click
          <span className="font-bold"> continue </span>
          to delete otherwise click
          <span className="font-bold"> cancel</span>
        </p>
      </ConfirmDelete>

      <div className="w-full border rounded divide-y-[.1rem] ">
        <div className=" p-2">
          <small className="font-medium"> Default: [Address] </small>
        </div>
        <div className="px-6 py-2 text-[13px] space-y-2">
          <ContentDiv
            label="Fullname:"
            content={fullname.toLowerCase()}
            contentClasses="font-medium"
          />
          <ContentDiv label="Phone number:" content={phone} />
          <ContentDiv label="City:" content={city} />
          <ContentDiv label="Street:" content={street} />
          <ContentDiv label="State:" content={state} />
          <ContentDiv label="Country:" content={country} />
          <ContentDiv label="Zip Code:" content={zipCode} />
        </div>

        <div className="p-2 text-[12px] space-x-3 relative">
          <Link href="#" className="link" onClick={() => setShowEdit(true)}>
            Edit
          </Link>
          <span> | </span>
          <Button
            label="Remove"
            ref={removeBtnRef}
            className="link"
            onClick={() => setShowModal(true)}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default ShowAddress;

const ContentDiv = ({ label, content, contentClasses }) => {
  return (
    <div className="flex gap-3">
      <p> {label} </p>
      <p className={`${contentClasses}`}> {content} </p>
    </div>
  );
};
