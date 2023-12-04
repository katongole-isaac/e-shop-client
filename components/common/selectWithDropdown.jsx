/**
 * select component with a drop down option list
 *
 */

import React, { useState, useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";

import useClickOutside from "@/lib/useClickOutside";

const SelectDropdown = ({ label, value, dropdownOptions, onOptionClick }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const btnRef = useRef(null);
  const dropdownRef = useRef(null);

  useClickOutside({
    onSetShowModal: setShowDropdown,
    showModal: showDropdown,
    originRef: btnRef,
    popupRef: dropdownRef,
  });

  const handleOptionClick = (option) => {
    onOptionClick(option);
    setShowDropdown(false);
  };

  return (
    <div className="relative">
      <div
        className={`  ${
          showDropdown ? "ring" : ""
        }  text-[12px]  border active:border-black  hover:ring w-fit px-1 rounded  cursor-pointer bg-[#efefef] shadow-md  relative  `}
        onClick={() => setShowDropdown((prev) => !prev)}
        ref={btnRef}
      >
        <span>{label}</span> <span className="ml-1"> {value} </span>{" "}
        <span>
          <IoIosArrowDown
            size={15}
            className="inline-block relative -top-[0.6px]"
          />
        </span>
      </div>

      {/* dropdown */}
      {showDropdown && (
        <div
          className="absolute shadow-sm max-h-[250px] w-[70px]  max-w-[70px] border z-30  bg-white rounded text-[12px] overflow-auto scroller "
          ref={dropdownRef}
        >
          <ul className="space-y-2 text-center">
            {dropdownOptions.map((option) => (
              <li
                className=" cursor-pointer first:mt-2 last:mt-2  hover:bg-slate-100  hover:outline outline-[1px] outline-gray-300  font-medium  "
                key={option}
                onClick={() => handleOptionClick(option)}
              >
                {option === 0 ? `${option} Delete` : option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SelectDropdown;
