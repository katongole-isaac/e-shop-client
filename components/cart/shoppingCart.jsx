/**
 * This component layouts out shoppin cart items
 *
 */

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import QuantityButton from "../common/quantityButton";

import {
  getCartItems,
  getTotalCheckOut,
  getTotalQuantitiesInCart,
  removeCartItem,
} from "@/store/cartReducer";
import { getProductFromCart } from "@/store/productsReducer";

const ShoppingCart = () => {
  const cart = useSelector(getCartItems());

  const cartProducts = useSelector(getProductFromCart(cart));
  const cartQuantityNumber = useSelector(getTotalQuantitiesInCart());
  const totalCheckOut = useSelector(getTotalCheckOut());

  useEffect(() => {}, [cart]);

  if (cart.length <= 0) return <EmptyCart />;

  return (
    <div className="px-4 bg-white py-3">
      <div className="border-b mb-5 py-2 ">
        <h1 className="text-[23px] font-medium"> Shopping Cart </h1>
      </div>

      <div className=" divide-y-2 divide-gray-100 space-y-4 border-b-2 mb-3 pb-3">
        {cartProducts.map((item, idx) => (
          <ShoppingCartItem key={item._id} {...item} cartItem={cart[idx]} />
        ))}
      </div>

      <div className="flex justify-end text-[16px] font-medium mb-5">
        <p>
          Subtotal <span> ({cartQuantityNumber} items): </span>
          <span className="font-medium">
            {totalCheckOut.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}{" "}
          </span>
        </p>
      </div>
    </div>
  );
};

export default ShoppingCart;

const ShoppingCartItem = ({
  title,
  price,
  stock,
  description,
  thumbnail,
  cartItem,
  _id,
}) => {
  const dispatch = useDispatch();
  const handleRemoveFromCart = (id) => {
    removeCartItem(dispatch, id);
  };

  return (
    <div className="w-full py-3  min-h-[160px] flex gap-3">
      <div className="w-[200px] max-h-[160px] bg-slate-400 overflow-hidden">
        <Image
          src={thumbnail}
          alt={title}
          width={160}
          height={160}
          className="w-full h-full"
          style={{
            width: "auto",
            height: "auto",
          }}
        />
      </div>
      <div className="flex-1">
        <h1 className="font-normal text-[18px]">{title}</h1>
        <p className="text-[12px]"> {description.substring(0, 200)} </p>
        <p className="font-semibold text-[18px] mb-1"> ${price} </p>
        <small className="block text-lime-800 mb-1">In stock</small>

        <div className="py-1">
          <QuantityButton cartItem={cartItem} />
        </div>

        <div className="flex gap-2 items-center">
          <button
            className="link text-[11px]"
            onClick={() => handleRemoveFromCart(_id)}
          >
            Delete
          </button>
          <span> | </span>
          <Link href={`/products/${_id}`} className="link text-[11px]">
            More details
          </Link>
        </div>
      </div>
    </div>
  );
};

const EmptyCart = () => {
  return (
    <div className="px-4 bg-white py-6 w-full">
      <div className="border-b mb-2 py-2 ">
        <h1 className="text-[23px] font-medium">
          Your [Company name] Cart is empty.
        </h1>
      </div>
      <div className="p-3 text-[12px] font-medium">
        <p className="">
          Your Shopping Cart lives to serve. Give it purpose — fill it with
          groceries, clothing, household supplies, electronics, and more.
        </p>
        <p className="">
          Continue shopping on the
          <span>
            <Link href="/" className="link">
              [company name] homepage
            </Link>
          </span>
          , learn about today's deals, or visit your Wish List.
        </p>
      </div>
    </div>
  );
};
