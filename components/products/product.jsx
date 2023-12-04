/**
 * Displays details for a single product
 *
 */

import PropTypes from "prop-types";

import Image from "next/image";
import { Rating } from "react-simple-star-rating";
import Link from "next/link";
import CustomRating from "../common/rating";
import Button from "../common/button";
import { useDispatch, useSelector } from "react-redux";
import { addCartItem, getCartItems, removeCartItem } from "@/store/cartReducer";
import InputSelect from "../common/inputSelect";

const Product = (product) => {
  const {
    title,
    thumbnail,
    description,
    price,
    stock,
    discountPercentage,
    brand,
    rating,
    _id,
  } = product;

  const dispatch = useDispatch();
  const cart = useSelector(getCartItems());

  const inCart = cart.findIndex((pdt) => pdt.productId === _id) > -1;

  const handleAddToCart = (item) => {
    // we should add only the productId 
    // and the quantity
    // here the quantity is set to 1
    addCartItem(dispatch, {productId: _id, quantity: 1 });
  };

  const handleRemoveFromCart = (id) => {
    removeCartItem(dispatch, id);
  };

  return (
    <div className=" shadow-sm my-1 max-w-[300px] relative">
      {/* shows that the item is in cart */}
      {inCart && (
        <div className="absolute z-10 top-0 left-0 h-2 w-2 cursor-pointer">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
          </span>
        </div>
      )}

      {/* image div */}
      <div className="min-h-[150px] max-h-[300px] overflow-hidden mb-2 ">
        <Image
          src={thumbnail}
          alt={title}
          className="w-full h-full"
          width={200}
          height={300}
          style={{
            width: "auto",
            height: "auto",
          }}
        />
      </div>

      {/* content div */}
      <div className="p-2 pl-4 text-[13px]">
        {/* Brand */}
        <small>
          Brand:{" "}
          <span className="bg-[#FFA41C] p-[2px] rounded  font-medium">
            {" "}
            {brand}{" "}
          </span>
        </small>

        {/* title */}
        <Link
          href={`/products/${_id}`}
          className=" hover:text-amber-700 cursor-pointer w-fit text-[16px] block"
        >
          {title}
        </Link>

        {/* description div */}
        <div className="">
          <p> {description} </p>
        </div>

        {/* Rating div */}
        <div className="flex gap-1">
          {/* Rating */}
          <CustomRating size={18} rating={rating} />
          <span> | </span>
          <div>
            <small className="text-amber-700 font-medium">
              In stock:{" "}
              <span className="text-[13px] font-normal text-black">
                {" "}
                {stock}{" "}
              </span>{" "}
            </small>
          </div>
        </div>

        {/* price */}
        <div className="relative flex gap-3 items-center">
          <div>
            <span className="relative -top-1 text-[11px]"> $</span>
            <span className="text-lg font-normal ">{price} </span>
          </div>
          <div>
            <p className="text-rose-700">
              -<span className="text-[13px]">{discountPercentage}</span>%
            </p>
          </div>
        </div>

        {/* actions div */}
        <div className="my-2 flex gap-2">
          {inCart ? (
            <Button
              onClick={() => handleRemoveFromCart(_id)}
              className=" bg-rose-700 text-white px-1 py-[0.9] rounded hover:bg-rose-800 cursor-pointer"
            >
              Remove
            </Button>
          ) : (
            <Button
              onClick={() => handleAddToCart(product)}
              className="bg-amber-400 px-1 py-[0.9] rounded hover:bg-amber-500 cursor-pointer"
            >
              Add to cart
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;

Product.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  stock: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  discountPercentage: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
};
