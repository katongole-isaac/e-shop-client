/**
 * Related products
 *
 */

import { useSelector } from "react-redux";

import { getProductByCategory } from "@/store/productsReducer";
import Product from "./product";

const RelatedProducts = ({ category }) => {
  const products = useSelector(getProductByCategory(category));

  return (
    <div className="w-full flex flex-wrap gap-2 ">
      {products.map((product) => (
        <Product key={product._id} {...product} />
      ))}
    </div>
  );
};

export default RelatedProducts;
