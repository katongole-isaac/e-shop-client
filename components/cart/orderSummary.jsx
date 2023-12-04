/**
 * Order summary - shows aside when checking out
 *
 */

import { useSelector } from "react-redux";
import Button from "../common/button";
import {
  getTotalCheckOut,
  getTotalQuantitiesInCart,
} from "@/store/cartReducer";

export default function OrderSummary() {
  const totalCheckout = useSelector(getTotalCheckOut());
  const totalItems = useSelector(getTotalQuantitiesInCart());

  return (
    <div className="w-full border rounded-md divide-y-1 m-auto max-w-[290px]  ">
      {/* header */}
      <div className="px-3 py-2 flex flex-col gap-1 justify-center ">
        <Button classes="bg-amber-300 border-0 hover:bg-amber-200">
          use this payment
        </Button>

        <small className=" text-center">
          Choose a payment method to continue checking out. You'll still have a
          chance to review and edit your order before it's final.
        </small>
      </div>

      {/* order summary */}

      <div className="border-y py-2 px-3">
        <h2 className="font-bold text-[16px] py-2"> Order summary </h2>
        <OrderListItem
          label={`items(${totalItems})`}
          value={totalCheckout.toLocaleString("en-US", {
            currency: "USD",
            style: "currency",
          })}
        />
        <OrderListItem label="Shipping & handling" />

        <hr className="w-16 ml-auto py-1" />
        <OrderListItem label="Total before tax" />
        <OrderListItem label="Estimated tax to be collected" />
      </div>

      {/* total order */}

      <div className="py-2 px-3 border-b">
        <OrderListItem
          label="Order total"
          classes="font-bold text-[16px] text-[#C2583D]  "
        />
      </div>

      {/* footer */}
      <div className="  bg-[#efefef]">
        <div className="px-3 py-2 ">
          <small>
            You can track your shipment and view any applicable import fees
            deposit before placing your order. Learn more
          </small>
        </div>
      </div>
    </div>
  );
}

const OrderListItem = ({ label, value, classes }) => {
  return (
    <div className={`flex justify-between  text-[12px]   ${classes}`}>
      <p> {label}: </p>
      <p> {value || "--"} </p>
    </div>
  );
};
