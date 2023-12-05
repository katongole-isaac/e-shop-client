/**
 * This component is shown on a checkout page
 *
 *
 */

import { getCurrentUser } from "@/store/userReducer";
import Link from "next/link";
import { BiPlus } from "react-icons/bi";
import { useSelector } from "react-redux";
import ShowAddress from "./showAddress";

const ShippingAddress = () => {
  const { address } = useSelector(getCurrentUser());

  console.log(address);

  return (
    <div className="bg-white py-2 px-6 shadow-md">
      <h1 className="font-bold  p-1"> Shipping Address </h1>

      <div className="rounded-md p-2  ">
        <div className="py-2 font-medium">
          <h1> Your Address</h1>
        </div>
       
        {!address ? <AddAddress /> :  <ShowAddress address={address} />}
      </div>
    </div>
  );
};

export default ShippingAddress;

const AddAddress = () => (
  <div className="flex gap-2 flex-col">
    <small className="">
      {" "}
      Note: Add an address to help us ship your products{" "}
    </small>
    <div className="flex  gap-1 items-center p-2 border rounded-md  ">
      <BiPlus className="text-slate-400" />
      <Link href="/a/address" className="text-[12px] link">
        Add address
      </Link>
    </div>
  </div>
);
