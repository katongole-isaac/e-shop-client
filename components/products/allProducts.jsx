/**
 * All products
 *
 */

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { loadProducts, requestProducts } from "@/store/productsReducer";
import Loading from "../loading";
import Product from "./product";

const AllProducts = () => {
  const dispatch = useDispatch();
  let { list: products, loading } = useSelector(loadProducts());

  useEffect(() => {
    requestProducts(dispatch);
  }, []);

  if (loading)
    return (
      <div className="w-full  h-[50vh] flex items-center justify-center ">
        <Loading />
      </div>
    );

  if (products.length <= 0)
    return (
      <div className="w-full  h-[50vh] flex items-center justify-center ">
        <p className="font-semibold text-[20px]">
          No Products in the Store yet
        </p>
      </div>
    );

    return <div className="flex gap-2 w-full  flex-wrap  ">
        {
            products.map(product => <Product key={product._id} {...product} />)
        }
    </div>
};

export default AllProducts;
