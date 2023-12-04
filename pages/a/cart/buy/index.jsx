/**
 * Checkout page
 *
 */

import React from "react";
import { useSelector } from "react-redux";

import ShippingAddress from "@/components/address/shippingAddress";
import CreditCard from "@/components/cart/buy/creditCard";
import MainCreditCard from "@/components/cart/credit-card/mainCreditCard";
import OrderSummary from "@/components/cart/orderSummary";

import { getTotalQuantitiesInCart } from "@/store/cartReducer";

export default function Checkout() {
  const totalQuantities = useSelector(getTotalQuantitiesInCart());

  return (
    <React.Fragment>
      <div className="shadow-inner  shadow-gray-400 w-full min-h-[20px] h-16 border-b ">
        <div className="m-auto max-w-[1100px] h-full  flex items-center px-4 gap-4  ">
          <p>Logo</p>
          <div className="flex-1 text-center ">
            <p className="text-[24px] font-medium">
              Checkout (
              <span className="text-sky-800">{totalQuantities} items</span>)
            </p>
          </div>
        </div>

        {/*  */}
      </div>

      {/* main */}
      <div className="bg-[#fdfdfd] min-h-[90vh] pt-4">
        <div className="m-auto max-w-[1100px] mt-3 mb-10 ">
          <div className="w-full grid grid-cols-[1fr_360px] gap-3">
            <div className="h-full w-full">
              <div className=" space-y-5 divide-y-2  h-auto border">
                <ShippingAddress />

                <MainCreditCard />
              </div>
            </div>
            <div className="px-2">
              <OrderSummary />
            </div>
          </div>
        </div>
      </div>

      {/* <CreditCard /> */}
    </React.Fragment>
  );
}

Checkout.requireAuth = true;