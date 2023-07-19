/**
 * Top App Navbar
 *
 */

import Logo from "../logo";
import SearchBox from "../searchBox";
import ShowAccount from "./Account";
import DeliveryTo from "./DeliveryTo";
import Language from "./Language";
import ShoppingCart from "./cart";

const AppBar = () => {
  return (
    <div className="bg-[#131921] min-h-[55px] max-h-[55px] flex gap-4 px-4 min-w-[1100px] ">
      <div className="w-full h-full max-h-[55px] flex gap-4 py-1 m-auto lg:max-w-[1300px]">
        <Logo />
        <DeliveryTo />
        <SearchBox />
        <Language />
        <ShowAccount />
        <ShoppingCart />
      </div>
    </div>
  );
};

export default AppBar;
