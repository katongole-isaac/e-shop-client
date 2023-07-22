/**
 * Menu Card - This is displayed under the customer's account setting
 * It is used as a link to a respective page
 *
 */

import Link from "next/link";

const MenuCard = ({ title, content, icon, href = "" }) => {
  return (
    <div className=" w-[20rem] border-2 hover:bg-[#fafafa] rounded-md cursor-pointer">
      <Link href={href} className="flex items-center gap-3 p-3 ">
        <div className=" w-16 h-16 bg-sky-100 rounded-[50%] flex items-center justify-center ">
          {icon}
        </div>
        <div className="flex-1 flex flex-col gap-1">
          <p className="font-medium text-slate-900"> {title} </p>
          <p className="text-[12px] text-slate-500">{content}</p>
        </div>
      </Link>
    </div>
  );
};

export default MenuCard;
