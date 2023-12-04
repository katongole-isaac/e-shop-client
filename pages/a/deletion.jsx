/**
 * Account Deletion page
 *
 */

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

import DashLayout from "@/components/layouts/dashLayout";
import PageTitle from "@/components/common/pageTitle";
import BreadCrumb from "@/components/common/breadCrumb";
import ErrorAlert from "@/components/common/alerts/error";
import InputSelect from "@/components/common/inputSelect";
import Button from "@/components/common/button";
import ConfirmDelete from "@/components/common/alerts/confirmDelete";
import CustomSuccess from "@/components/common/alerts/customSuccess";

import {
  deleteAccount,
  getCurrentUser,
  getUserReqError,
  getUserReqSuccess,
  unSetSuccessAndError,
  unSetUserReqErrors,
} from "@/store/userReducer";

export default function Deletion() {
  const pageName = "Account Deactiviation";
  const router = useRouter();

  const [checked, setChecked] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [deleteOperation, setDeleteOperation] = useState(false);

  const btnRef = useRef(null);

  const success = useSelector(getUserReqSuccess());
  const error = useSelector(getUserReqError());
  const user = useSelector(getCurrentUser());

  const dispatch = useDispatch();

  const linkLabels = ["Your Account", pageName];

  const warningMsg = ` Please note account closure is a permanent action and once your account is closed it will no longer be available to you and cannot be restored. If you decide later that you want to start ordering from us again, or if you would like to use products and services that require an account, you will need to create a new account.`;

  const options = {
    "Not interested": "I'm not using this account anymore",
    "Another Account": "I have another account",
    "Privacy Concerns": "Privacy concerns",
    "No reason": "I don't want to provide a reason",
  };


  useLayoutEffect(()=> {

    unSetUserReqErrors(dispatch);

  },[])

  unSetSuccessAndError(dispatch, { error, success });

  useEffect(() => {

    if (success && deleteOperation) {

      setTimeout(() => {
        router.replace("/");
      }, 2000);
    }

  }, [success, deleteOperation]);

  const handleContinueDeletion = () => {
    
    deleteAccount(dispatch, user._id);
    setDeleteOperation(true);

  };

  return (
    <div className="w-full ">
      <PageTitle title={pageName} />
      {showModal && (
        <ConfirmDelete
          showModal={showModal}
          onShowModal={setShowModal}
          ref={btnRef}
          onContinue={handleContinueDeletion}
        >
          <p className="text-[11px]">
            <span className="font-bold block">
              Account Closure Is A Permanent Action
            </span>
            Once your account is <span className="font-semibold"> closed</span>{" "}
            it will no longer be available to you and cannot be{" "}
            <span className="font-semibold">restored</span>
          </p>
        </ConfirmDelete>
      )}
      <BreadCrumb paths={router.route.split("/")} labels={linkLabels} />
      <div className="mt-4">
        <h1 className="font-normal text-2xl "> {pageName} </h1>
      </div>
      {success && (
        <CustomSuccess msg="Your account will be deleted in a few minutes" />
      )}

      {error && <ErrorAlert error={error} />}

      <div className="text-[12px] mt-4 space-y-3">
        <h1 className="font-bold ">Please read this carefully</h1>
        <p className="leading-5">
          You are about to submit a request for us to permanently close your
          [company name] account and delete your data. Once your account is
          closed all of the products and services accessed through your account
          will no longer be available to you, across any [company name] sites
          globally. For example, submitting your account closure request through
          this website will also close your account on [company name].co.uk,
          [company name].fr, [company name].com.mx, and all other global sites
          to the extent you use the same credentials to access services and
          products offered through those sites.
        </p>

        <p>
          If you have uploaded your own content in one of our services (e.g.
          uploading photos or videos to [company name] Photos), you may want to
          download that content before closing your account.
        </p>
      </div>

      <div className="mt-4 ">
        <ErrorAlert
          error={warningMsg}
          title="Account Closure Is A Permanent Action"
          borderColor="border-amber-600 border-l-8"
          color="font-bold "
          iconColor="text-amber-600"
        />
      </div>

      <div className="mt-4">
        <p className="font-semibold mb-3">
          Please select the main reason for closing your [company name] account
          (Optional)
        </p>
        <InputSelect label="Choose Reason" options={options} />

        <div className="mt-4 space-x-2">
          <input
            type="checkbox"
            value={checked}
            name="checked"
            id="chck"
            className="cursor-pointer"
            onChange={(e) => setChecked((prev) => !prev)}
          />
          <label htmlFor="chck" className="cursor-pointer ">
            Yes, I want to permanently close my [company name] Account and
            delete my
          </label>
          <div className="mt-2">
            <Button
              label="Close My Account"
              disabled={!checked}
              onClick={() => setShowModal(true)}
              classes=" text-[12px] shadow-md hover:bg-slate-100 disabled:bg-gray-100 disabled:shadow-none disabled:text-slate-500 disabled:cursor-not-allowed"
              ref={btnRef}
            />
          </div>

          <div className="mt-4">
            <p className="text-gray-600">
              Please be advised that [company name] is legally required or
              entitled to retain some types of data, such as order history. We
              do this in line with applicable laws including for tax and
              accounting and fraud prevention purposes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

Deletion.requireAuth = true;
Deletion.getLayout = (page) => (
  <DashLayout isMaxWidth={true}> {page} </DashLayout>
);
