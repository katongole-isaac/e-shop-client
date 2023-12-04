/**
 * Shopping Cart in the appbar 
 *
 */

import { getCartItems, getTotalQuantitiesInCart } from "@/store/cartReducer";
import Link from "next/link";
import { BsCart3 } from "react-icons/bs";
import { useSelector } from "react-redux";

const ShoppingCart = () => {
  const cartQuantityNumber = useSelector(getTotalQuantitiesInCart());

  return (
    <div
      className="text-white  hover:outline outline-[0.5px] p-1 cursor-pointer"
      role="link"
    >
      <Link href="/a/cart" className="block">
        <div className="flex gap-1 items-center h-full relative">
          <BsCart3 size={30} color="white" />
          <div className="flex -ml-1 flex-col min-w-max justify-center items-center font-bold ">
            <p className="mt-1 text-amber-600 ">
              {cartQuantityNumber >= 100 ? "99+" : cartQuantityNumber}
            </p>
            <p className=" leading-tight"> Cart </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ShoppingCart;
