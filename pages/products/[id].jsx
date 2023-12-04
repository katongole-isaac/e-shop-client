/**
 * Single Product layout
 *
 */

import { useRouter } from "next/router";
import { useSelector } from "react-redux";

import DashLayout from "@/components/layouts/dashLayout";
import SingleProductLayout from "@/components/layouts/singleProduct";
import ProductDetail from "@/components/products/productDetails";
import ProductImages from "@/components/products/productImages";

import { getProductById } from "@/store/productsReducer";
import React from "react";
import RelatedProducts from "@/components/products/relatedProducts";
import Link from "next/link";
import SidebarCart from "@/components/cart/sidebarCart";

export default function SingleProduct() {
  const router = useRouter();

  const productId = router.query.id;

  const product = useSelector(getProductById(productId));

  if (!product) return <p> No product with id {productId}</p>;

  return (
    <React.Fragment>
      <div className="my-3 p-1 text-[12px] flex justify-between w-full ">
        <Link href="/" className="link w-fit text-gray-700 ">
          {" "}
          &larr; Back to results
        </Link>
        <Link href="/a/cart" className="link w-fit text-gray-700">
          Check Cart
        </Link>
      </div>
      <div className="grid grid-cols-2 w-[90%] min-h-[500px] max-h-[500px]  mb-10 overflow-hidden">
        <div className="h-full">
          <ProductImages {...product} />
        </div>
        <div className="p-2 h-full">
          <ProductDetail {...product} productId={productId} />
        </div>
      </div>

      {/* sidebar cart */}

      <div className=" hidden xl:block fixed right-0 top-0 min-h-[100vh] min-w-[140px] max-w-[120px] bg-white overflow-y-auto scroller border-l-2   z-10">
        <SidebarCart />
      </div>

      {/* Related products */}
      {product.category && (
        <div className="border-t-2 mt-2 pt-2 px-4">
          <h1 className="font-semibold text-[22px] pt-2 pb-4">
            Customers who bought this item also bought{" "}
          </h1>
          <RelatedProducts category={product.category} />
        </div>
      )}
    </React.Fragment>
  );
}

SingleProduct.getLayout = (page) => (
  <DashLayout>
    <SingleProductLayout cllases="bg-[#fafafa]"> {page} </SingleProductLayout>
  </DashLayout>
);
