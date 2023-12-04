/**
 * Shows the credit card icons on the credit
 * card component
 *
 */

import React from 'react'
import { HiCreditCard } from "react-icons/hi";
import { BiCreditCard } from "react-icons/bi";
import { BiSolidCreditCardAlt } from "react-icons/bi";
import { BsFillCreditCard2BackFill } from "react-icons/bs";


const CreditCardIconDiv = () => {
  return (
    <div className="text-[12px] space-y-2 px-4 py-1">
      <p>[Company name] accepts all major credit and debit cards:</p>
      <CreditCardIcons />
      <CreditCardIcons />
      <CreditCardIcons />
      <div className="mt-2 flex gap-3 "></div>
    </div>
  );
};

export default CreditCardIconDiv;

const CreditCardIcons = ({ size = 30 }) => {
  return (
    <React.Fragment>
      <div className="flex gap-2 w-full">
        <HiCreditCard size={size} className="text-rose-500" />
        <BiCreditCard size={size} className="text-blue-500" />
        <BiSolidCreditCardAlt size={size} className="text-orange-500" />
        <BsFillCreditCard2BackFill size={size} className="text-rose-500" />
        <HiCreditCard size={size} className="text-green-500" />
      </div>
    </React.Fragment>
  );
};
