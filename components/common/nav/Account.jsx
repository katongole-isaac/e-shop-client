/**
 * Account navbar section
 *
 */

import useCurrentUser from "@/lib/useCurrentUser";
import DropDown from "../dropdown";

const ShowAccount = () => {
  const { isLoggedIn, user } = useCurrentUser();

  const content = (
    <div className="text-white">
      <div>
        <small>
          Hello, {isLoggedIn ? user.fullname.toLowerCase() : "sign in"}
        </small>
        <p className="font-bold -mt-1"> Account & Lists </p>
      </div>
    </div>
  );

  const dropdown = (
    <div>
      <span> Here </span>
    </div>
  );

  return <DropDown content={content} dropdown={dropdown} />;
};

export default ShowAccount;
