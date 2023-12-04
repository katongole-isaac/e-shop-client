/**
 * DropDown Componet
 *
 */

import { IoMdArrowDropdown } from "react-icons/io";

const DropDown = ({ content, dropdown }) => {
  return (
    <div className="relative">
      <div className="h-full p-1 flex  items-center cursor-pointer group  outline-1 outline-white hover:outline ">
        {content}

        <IoMdArrowDropdown size={20} className="text-slate-400" />
        <div className=" absolute -bottom-[3em] invisible h-[40px] group-hover:visible z-30 ">
          {dropdown}
        </div>
      </div>
    </div>
  );
};

export default DropDown;
