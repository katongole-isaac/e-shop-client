/**
 * DeliveryTo Component
 *
 */

import { IoLocationSharp } from "react-icons/io5";

const DeliveryTo = () => {
  return (
    <div className="flex gap-1 items-center min-w-max">
      <IoLocationSharp size={25} color="white" />
      <div className="flex flex-col text-white">
        <small >Deliver to </small>
        <small className="font-medium"> Uganda </small>
      </div>
    </div>
  );
};

export default DeliveryTo;
