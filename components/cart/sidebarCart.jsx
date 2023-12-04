/**
 * Shows sidenar cart  items
 *
 */

import {
  getCartItems,
  getTotalCheckOut,
  removeCartItem,
} from "@/store/cartReducer";
import { useDispatch, useSelector } from "react-redux";
import Button from "../common/button";
import Link from "next/link";
import { AiOutlineDelete } from "react-icons/ai";
import Image from "next/image";
import QuantityButton from "../common/quantityButton";
import { getProductFromCart } from "@/store/productsReducer";
import React from "react";

const SidebarCart = () => {
  const totalCheckOut = useSelector(getTotalCheckOut());
  let cart = useSelector(getCartItems());
  const cartProducts = useSelector(getProductFromCart(cart));

  const dispatch = useDispatch();

  const handleDeleteClick = (item) => {
    removeCartItem(dispatch, item.productId);
  };

  const cartSlice = cart.slice(0, 5);

  return (
    <div className="h-full  ">
      <div className=" h-full text-center space-y-[.5px] text-[11px] font-medium p-2 pb-4 border-b ">
        <p className="">Subtotal</p>
        <p className="font-bold text-amber-900  ">
          {totalCheckOut.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </p>

        <div className="pt-2  ">
          <Link href="/a/cart" className="block ml-3 ">
            <Button classes="block p-0 shadow-md bg-[#fafafa] hover:bg-neutral-100 ">
              Go to cart
            </Button>
          </Link>
        </div>
      </div>

      {/* cart item */}

      {cart.length > 0 ? (
        <React.Fragment>
          <div className="divide-y-2 py-2 ">
            {cartSlice.map((item) => {
              const product = cartProducts.find(
                (prod) => prod._id === item.productId
              );
              return (
                <SideCartItem
                  cartItem={item}
                  {...product}
                  onClick={handleDeleteClick}
                />
              );
            })}
          </div>
          {cartSlice.length >= 5 && (
            <div className="px-2">
              <Link href="/a/cart">
                <Button className="link"> See your cart </Button>
              </Link>
            </div>
          )}
        </React.Fragment>
      ) : (
        <div className="p-2 text-center space-y-2">
          <p className="font-bold text-gray-800">Cart Empty </p>
          <Link href="/a/cart" className="block">
            <Button className="link"> Add products </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default SidebarCart;

const SideCartItem = ({ thumbnail, title, cartItem, onClick }) => {
  return (
    <div className="w-full py-1 ">
      <div className="w-full py-1 px-2 ">
        <Image
          src={thumbnail}
          alt={title}
          className="w-full h-full"
          width={200}
          height={200}
          style={{
            width: "auto",
            height: "auto",
          }}
        />
      </div>

      <div className="flex gap-2 p-2  items-center">
        <QuantityButton cartItem={cartItem} />
        <div
          className="w-7 h-7 cursor-pointer  rounded-full flex items-center justify-center border border-gray-300 hover:bg-zinc-200"
          onClick={() => onClick(cartItem)}
        >
          <AiOutlineDelete
            size={16}
            className="text-gray-800 hover:text-stone-500"
          />
        </div>
      </div>
    </div>
  );
};
