/**
 * Customer Security Page
 *
 */

import { useRouter } from "next/router";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

import BreadCrumb from "@/components/common/breadCrumb";
import Button from "@/components/common/button";
import PageTitle from "@/components/common/pageTitle";
import DashLayout from "@/components/layouts/dashLayout";
import CustomSuccess from "@/components/common/alerts/customSuccess";
import ErrorAlert from "@/components/common/alerts/error";
import ShowAddress from "@/components/address/showAddress";
import AddressForm from "@/components/address/addressForm";

import {
  getUserAddress,
  getUserReqError,
  getUserReqSuccess,
  unSetSuccessAndError,
} from "@/store/reducer";
import { useState } from "react";

export default function Address() {
  const pageName = "Address Information";
  const linkLabels = ["Your Account", "Addresss"];

  const [editAddress, setEditAddress] = useState(false);

  const router = useRouter();
  const success = useSelector(getUserReqSuccess());
  const error = useSelector(getUserReqError());
  const address = useSelector(getUserAddress());

  const dispatch = useDispatch();

  // clearing alert after 10secs
  unSetSuccessAndError(dispatch, { error, success });

  return (
    <div className=" w-full">
      <PageTitle title={pageName} />
      <BreadCrumb paths={router.route.split("/")} labels={linkLabels} />
      {error && <ErrorAlert error={error} />}
      {success && <CustomSuccess classes="" />}
      <div className="mt-4">
        <h1 className="font-normal text-2xl "> {pageName} </h1>
      </div>

      <div className="flex w-full  gap-4  relative">
        <div className="mt-4  w-1/2 lg:w-2/3 rounded min-h-full divide-y py-2 px-4">
          {!address ? (
            <AddressForm />
          ) : !editAddress ? (
            <ShowAddress setShowEdit={setEditAddress} address={address} />
          ) : (
            // if you want to edit 
            // initial address is populated into addressForm
            <AddressForm
              address={address}
              success={success}
              onCloseEdit={setEditAddress}
            />
          )}
        </div>

        <div className=" w-[380px] lg:w-96  absolute lg:h-fit right-28 lg:-right-44 "></div>
      </div>

      <div className="mt-4">
        <Link href="../a">
          <Button
            label="Done"
            classes="bg-amber-500 hover:bg-amber-600 tansition duration-500 ease-out"
          >
            Done
          </Button>
        </Link>
      </div>
    </div>
  );
}

Address.requireAuth = true;
Address.getLayout = (page) => (
  <DashLayout isMaxWidth="lg:min-w-[700px] lg:max-w-[700px] ">
    {page}
  </DashLayout>
);
