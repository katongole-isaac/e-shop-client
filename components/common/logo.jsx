/**
 * Logo Component - Contains Company Logo
 *
 *
 */

import Link from "next/link";
import { AiFillAmazonCircle } from "react-icons/ai";

const Logo = () => {
  return (
    <div className=" ">
      <Link  href="/" className="flex items-center">
        <AiFillAmazonCircle
          size={50}
          color="white"
          className="cursor-pointer"
        />
      </Link>
    </div>
  );
};

export default Logo;
