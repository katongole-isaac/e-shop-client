/**
 * for successfully alerts
 *
 */

import { GrStatusGood } from "react-icons/gr";

import SuccessAlert from "@/components/common/alerts/success";

const CustomSuccess = ({ classes, msg }) => (
  <SuccessAlert classes={`${classes || "w-[30rem]"}`}>
    <div className="flex gap-3 items-center ">
      <GrStatusGood size={30} />
      <div className="">
        <h1 className="font-normal text-xl "> Success </h1>
        <p>{ msg || "Your account has been updated successfully"} </p>
      </div>
    </div>
  </SuccessAlert>
);

export default CustomSuccess;
