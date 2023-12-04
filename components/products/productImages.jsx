/**
 * This show product images and thumbnail aside of product details
 *
 *
 */

import Image from "next/image";
import SideImages from "./ProductSideImages";
import { useState } from "react";

const ProductImages = (product) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const { images, title } = product;

  if (images && images?.length <= 0) return null;

  return (
    <>
      <div className="w-full h-full  flex">
        <div className="w-[120px]  min-[120px] max-[120px] h-full ">
          <SideImages
            images={images}
            title={title}
            setActiveIndex={setActiveIndex}
            activeIndex={activeIndex}
          />
        </div>
        <div className=" w-full h-auto  py-2 px-3 ">
          <Image
            src={images[activeIndex]}
            alt={title}
            width={400}
            height={400}
            style={{
              width: "auto",
              height: "auto",
            }}
            className=" h-full w-full object-contain "
          />
        </div>
      </div>
    </>
  );
};

export default ProductImages;
