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
  const { list: products, loading } = useSelector(loadProducts());

  console.log(products);

  useEffect(() => {
    requestProducts(dispatch);
  }, []);

  if (loading)
    return (
      <div className="w-full  h-[50vh] flex items-center justify-center ">
        <Loading />
      </div>
    );

    if(products.length > 0 ) 
    return <div className="flex gap-2 w-full max-h-[220vh] flex-wrap  ">
        {
            products.map(product => <Product key={product._id} {...product} />)
        }
    </div>
};

export default AllProducts;
