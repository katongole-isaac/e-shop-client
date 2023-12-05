/**
 * Main credit card component
 * It's shown on the checkout page
 *
 */

import Link from "next/link";
import { BiPlus } from "react-icons/bi";

const MainCreditCard = () => {
  return (
    <div className=" bg-white py-2 px-6 shadow-md">
      <h1 className="font-bold  p-1"> Your Payment Method </h1>

      <div className="rounded-md p-2  ">
        <div className="py-2 font-medium">
          <h1> Your Payment </h1>

          <AddPayment />
        </div>
      </div>
    </div>
  );
};

export default MainCreditCard;

const AddPayment = () => (
  <div className="flex gap-2 flex-col">
    <small className="">
      {" "}
      Note: Add an address to help us ship your products{" "}
    </small>
    <div className="flex  gap-1 items-center p-2 border rounded-md  ">
      <BiPlus className="text-slate-400" />
      <Link href="" className="text-[12px] link">
        Add payment
      </Link>
    </div>
  </div>
);
