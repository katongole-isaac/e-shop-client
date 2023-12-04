/**
 * This is the card layout on the landing page.
 *
 */

import Link from "next/link";
import Image from "next/image";

const LandingCard = ({ thumbnail, title, _id }) => {
  return (
    <div className="flex-1 shrink-0   px-3 py-4 bg-white flex flex-col gap-2 ">
      {/* title section */}
      <div className="">
        <h1 className="text-[20px] font-medium"> {title} </h1>
      </div>

      {/* image section */}
      <div className="flex-1 max-h-[300px] overflow-hidden">
        <Image
          src={thumbnail}
          alt={title}
          className="w-full h-auto"
          width={200}
          height={170}
          style={{
            width: "auto",
            height: "auto",
          }}
        />
      </div>

      {/* action section */}
      <div className="h-4 text-[12px]">
        <Link href={`/products/${_id}`} className="link hover:text-amber-700">
          see more
        </Link>
      </div>
    </div>
  );
};

export default LandingCard;
