/**
 * No content on route /products
 * but redirects to /
 *
 */

import LandingCard from "@/components/landing/card";
import HorizontalCard from "@/components/landing/longCard";
import Slider from "@/components/landing/topSlider";
import DashLayout from "@/components/layouts/dashLayout";
import {
  getProductsFromDifferentCategory,
  getRandomProducts,
} from "@/store/productsReducer";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

export default function Home() {
  const router = useRouter();

  const products = useSelector(getProductsFromDifferentCategory());
  const randomProducts = useSelector(getRandomProducts());


  return (
    <div className="bg-neutral-100 pb-4 min-w-[1100px] min-h-[70vh]">
      <div className="w-full min-h-[30vh]  min-w-[1100px] max-w-[1200px] m-auto  ">
        <div className=" mb-36 relative ">
          <Slider />
          <div className="flex gap-3 absolute top-64 z-10 w-full px-4">
            {products.slice(0, 4).map((product) => (
              <LandingCard key={product._id} {...product} />
            ))}
          </div>
        </div>

        {/*  */}
        <div className=" flex gap-3 px-2 w-full mb-4">
          {randomProducts.map((product) => (
            <LandingCard key={product._id} {...product} />
          ))}
        </div>

        {/* horizontal card */}
        <HorizontalCard />
      </div>
    </div>
  );
}

Home.getLayout = (page) => <DashLayout> {page} </DashLayout>;
