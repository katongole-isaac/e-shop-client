/**
 * Logo Component - Contains Company Logo
 *
 *
 */

import { AiFillAmazonCircle } from "react-icons/ai";

const Logo = () => {
  return (
    <div className="flex items-center ">
      <AiFillAmazonCircle size={50} color="white" className="cursor-pointer" />
    </div>
  );
};

export default Logo;
