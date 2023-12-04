/**
 * Laugauage  nav bar dropdown
 *
 */
import { HiMiniLanguage } from "react-icons/hi2";

const Language = () => {
  const content = (
    <span className="text-white ml-1 text-[12px]">
      <span>English</span> <HiMiniLanguage />
    </span>
  );

  return (
    <div className="flex justify-center items-center gap-1">
      <span className="text-white ml-1 text-[12px] font-medium">English</span>
      <HiMiniLanguage color="white" size={20} />
    </div>
  );
};

export default Language;
