/**
 * Horizontal card
 *
 */

import { useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";

import { getRandomProducts } from "@/store/productsReducer";

const HorizontalCard = ({ title }) => {
  const randomProducts = useSelector(getRandomProducts(8));

  return (
    <div className=" bg-white w-full min-h-[200px] px-3 py-4 h-auto">
      <div className="flex gap-4 items-center ">
        <h1 className="text-[21px] font-medium">
          Best Sellers on this Marketplace
        </h1>

        <Link href="/products" className="text-[12px] link">
          see more
        </Link>
      </div>

      <div className="flex  w-full px-2 overflow-auto items-center justify-center ">
        {randomProducts.map(({ _id, thumbnail, title }) => (
          <div
            className="flex-1 min-w-[200px] gap-2 px-1  max-h-[250px] overflow-y-hidden "
            key={_id}
          >
            <Image
              src={thumbnail}
              alt={title}
              className=" w-full "
              width={200}
              height={100}
              style={{
                width: "auto",
                height: "auto",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalCard;
