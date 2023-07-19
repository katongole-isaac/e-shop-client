/**
 * Shopping Cart
 *
 */

import { BsCart3 } from "react-icons/bs";

const ShoppingCart = () => {
  return (
    <div className="text-white">
      <div className="flex gap-1 items-center h-full relative">
        <BsCart3 size={30} color="white" />
        <div className="flex -ml-1 flex-col min-w-max justify-center items-center font-bold ">
          <p className="mt-1 text-amber-600 "> {0} </p>
          <p className=" leading-tight"> Cart </p>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
