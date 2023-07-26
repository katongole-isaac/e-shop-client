/**
 * Displays details for a single product
 *
 */

import PropTypes from "prop-types";

import Image from "next/image";
import { Rating } from "react-simple-star-rating";

const Product = ({
  title,
  thumbnail,
  description,
  price,
  stock,
  discountPercentage,
  brand,
  rating,
}) => {
  return (
    <div className=" shadow-sm my-1 max-w-[300px] ">
      {/* image div */}
      <div className="min-h-[150px] max-h-[300px] overflow-hidden mb-2 ">
        <Image
          src={thumbnail}
          alt={title}
          className="w-full h-full"
          width={200}
          height={300}
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
        <h1 className=" hover:text-amber-700 cursor-pointer w-fit">{title}</h1>

        {/* description div */}
        <div className="">
          <p> {description} </p>
        </div>

        {/* Rating div */}
        <div className="flex gap-1">
          {/* Rating */}
          <Rating
            readonly
            size={18}
            SVGclassName="inline-block"
            allowFraction
            initialValue={rating}
            fillColor="#FFA41C"
          />
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

        {/* Price div */}
        <div className=""> </div>
      </div>
    </div>
  );
};

export default Product;

Product.propTypes = {
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  stock: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  discountPercentage: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
};
