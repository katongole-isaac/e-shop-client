/**
 * Show a card with a proceed checkout button
 *
 */

import {
  getTotalCheckOut,
  getTotalQuantitiesInCart,
} from "@/store/cartReducer";
import { useSelector } from "react-redux";
import Button from "../common/button";
import Link from "next/link";

const ProceedCheckOut = () => {
  const totalCheckOut = useSelector(getTotalCheckOut());
  const totalItems = useSelector(getTotalQuantitiesInCart());

  return (
    <div className="px-4 bg-white py-3 pb-6">
      <div className=" mb-2 py-2 ">
        <h1 className="text-[16px] font-normal ">
          Subtotal ({totalItems} items):{" "}
          <span className="font-medium">
            {totalCheckOut.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </span>
        </h1>
      </div>
      {totalItems > 0 && (
        <div className="mt-2">
          <Link href="/a/cart/buy">
            <Button classes="w-full text-[12px] font-medium bg-amber-400 hover:bg-amber-300">
              Proceed to checkout
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ProceedCheckOut;
