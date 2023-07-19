/**
 * Laugauage  nav bar dropdown
 *
 */

import DropDown from "../dropdown";

const Language = () => {
  const content = <span className="text-white ml-1 text-[12px]"> Uganda </span>;

  const dropdown = <span> here </span>;

  return <DropDown content={content} dropdown={dropdown} />;
};

export default Language;
