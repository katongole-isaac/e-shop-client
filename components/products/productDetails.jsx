/**
 * Product Details Compoent
 *
 */

import { useSelector } from "react-redux";
import CustomRating from "../common/rating";
import { getCartItems } from "@/store/cartReducer";
import { useEffect, useLayoutEffect, useState } from "react";
import Link from "next/link";

const ProductDetail = (product) => {
  const {
    title,
    thumbnail,
    description,
    price,
    stock,
    discountPercentage,
    brand,
    rating,
    images,
    productId,
  } = product;


  const cart = useSelector(getCartItems());

  const inCart = cart.findIndex((item) => item.productId === productId) > -1;
 

  return (
    <div className="divide-y">
      <div className="">
        <div className="flex gap-4 items-center ">
          <h1 className="text-[20px] font-medium"> {title} </h1>
          {inCart && <InCartBadge />}
        </div>

        <div className="flex gap-1 text-[13px]">
          <p>Brand: </p>
          <p> {brand} </p>
        </div>
        <div className="text-[13px] flex items-center gap-1 ">
          <span> {rating} </span>
          <CustomRating size={18} rating={rating} />
        </div>
      </div>
      <div className="mt-1 pt-4 mb-4">
        <p className="text-[18px] text-[#169916]">
          Currently {stock <= 0 ? "Unavaible" : "Available"}
        </p>

        <div className="space-y-1 mt-2">
          <ProductAboutDetail label="Brand" value={brand} />
          <ProductAboutDetail
            label="Discount Percentage"
            value={
              <span className="text-rose-700">{`-${discountPercentage}%`}</span>
            }
          />
          <ProductAboutDetail label="In Stock" value={stock} />
          <ProductAboutDetail
            label="Price"
            value={
              <span className="font-medium text-[15px]">{`$${price}`} </span>
            }
          />
        </div>
      </div>
      <div className="mt-1 pt-2">
        <p className="font-bold"> About this item</p>
        <p className="pl-4"> {description} </p>
      </div>
    </div>
  );
};

export default ProductDetail;

const ProductAboutDetail = ({ label, value }) => {
  return (
    <div className="grid grid-cols-2 text-[13px]">
      <p className="font-semibold">{label}</p>
      <p className="">{value} </p>
    </div>
  );
};

const InCartBadge = () => {
  return (
    <div className="bg-amber-500 text-[12px] font-medium px-1 rounded cursor-pointer">
      <Link href="/a/cart">In cart</Link>
    </div>
  );
};
