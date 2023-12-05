/**
 * Laugauage  nav bar dropdown
 *
 */
import { HiMiniLanguage } from "react-icons/hi2";

const Language = () => {
 
  return (
    <div className="flex justify-center items-center gap-1">
      <span className="text-white ml-1 text-[12px] font-medium">English</span>
      <HiMiniLanguage color="white" size={20} />
    </div>
  );
};

export default Language;
