/**
 * Customer Security Page
 *
 */

import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";

import BreadCrumb from "@/components/common/breadCrumb";
import Button from "@/components/common/button";
import PageTitle from "@/components/common/pageTitle";
import DashLayout from "@/components/layouts/dashLayout";
import EditName from "@/components/security/editName";
import EditPassword from "@/components/security/editPassword";
import CustomSuccess from "@/components/common/alerts/customSuccess";

import {
  getCurrentUser,
  unSetSuccessAndError,
  getUserReqSuccess,
  getUserReqError,
} from "@/store/userReducer";

export default function Security() {
  const pageName = "Login & Security";
  const router = useRouter();
  const linkLabels = ["Your Account", pageName];

  const [order, setOrder] = useState(null);

  const dispatch = useDispatch();

  const user = useSelector(getCurrentUser());
  const success = useSelector(getUserReqSuccess());
  const error = useSelector(getUserReqError());

  if (success || error) unSetSuccessAndError(dispatch, { error, success });

  const editsOrder = [
    <EditName onSetOrder={setOrder} />,
    <EditPassword onSetOrder={setOrder} />,
  ];

  const handleEditClick = (displayOrder) => {
    setOrder((prev) =>
      typeof prev === "number" && prev === displayOrder ? null : displayOrder
    );
  };

  return (
    <div className=" w-full">
      <PageTitle title={pageName} />
      <BreadCrumb paths={router.route.split("/")} labels={linkLabels} />
      {success && <CustomSuccess />}
      <div className="mt-4">
        <h1 className="font-normal text-2xl "> {pageName} </h1>
      </div>

      <div className="flex w-full  gap-4  relative">
        <div className="mt-4 border w-1/2 lg:w-2/3 rounded min-h-full divide-y">
          <ModifiedSection
            label="Name"
            content={user.fullname}
            onClick={handleEditClick}
            order={0}
          />
          <ModifiedSection
            label="Password"
            content="********"
            onClick={handleEditClick}
            order={1}
          />
        </div>

        <div className=" w-[380px] lg:w-96  absolute lg:h-fit right-28 lg:-right-44 ">
          {order !== null && editsOrder[order]}
        </div>
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

Security.requireAuth = true;
Security.getLayout = (page) => (
  <DashLayout isMaxWidth="lg:min-w-[700px] lg:max-w-[700px] ">
    {page}
  </DashLayout>
);

const ModifiedSection = ({ label, content, onClick, order }) => {
  return (
    <div className="w-full min-h-fit p-4 mb-3 text-[12px]">
      <div className="flex w-full justify-between gap-3 ">
        <div>
          <p className="font-bold text-gray-900"> {label}: </p>
          <p> {content} </p>
        </div>

        <div>
          <Button
            label="Edit"
            classes="hover:bg-[#fafafa] shadow"
            onClick={() => onClick(order)}
          />
        </div>
      </div>
    </div>
  );
};


