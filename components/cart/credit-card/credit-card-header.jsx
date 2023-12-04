/**
 * credit card header
 *
 */

import { AiOutlineClose } from "react-icons/ai";

const CreditCardHeader = () => (
  <div className="bg-[#F0F2F2] border-b border-b-slate-300 px-4 py-2 flex justify-between ">
    <h1 className="font-semibold "> Add a credit or debit card </h1>
    <AiOutlineClose
      size={20}
      onClick={null}
      className="cursor-pointer self-center font-semibold"
    />
  </div>
);

export default CreditCardHeader;
