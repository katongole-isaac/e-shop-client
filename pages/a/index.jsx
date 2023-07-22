/**
 * Home page for customer account
 *
 */
import { SiAdguard } from "react-icons/si";
import { FaAddressBook } from "react-icons/fa";

import MenuCard from "@/components/common/dashboard/menuCard";
import PageTitle from "@/components/common/pageTitle";
import DashLayout from "@/components/layouts/dashLayout";

export default function Account() {
  
  return (
    <div className="w-full border ">
      <PageTitle title="Your Account" />
      <div className="mb-3">
        <h4 className="text-lg font-medium"> Your Account </h4>
      </div>

      <div className="flex gap-3 w-full flex-wrap ">
        <MenuCard
          title="Login & Security"
          href="a/security"
          content="Edit login, name and mobile number"
          icon={<SiAdguard color="skyblue" size={40} />}
        />
        <MenuCard
          title="Address Information"
          href="a/address"
          content="Edit or add your address info"
          icon={<FaAddressBook color="skyblue" size={40} />}
        />
        <MenuCard
          title="Login & Security"
          content="Edit login, name and mobile number"
          icon={<SiAdguard color="skyblue" size={40} />}
        />
        <MenuCard
          title="Login & Security"
          content="Edit login, name and mobile number"
          icon={<SiAdguard color="skyblue" size={40} />}
        />{" "}
        <MenuCard
          title="Login & Security"
          content="Edit login, name and mobile number"
          icon={<SiAdguard color="skyblue" size={40} />}
        />
      </div>
    </div>
  );
}

Account.requireAuth = true;
Account.getLayout = (page) => (
  <DashLayout isMaxWidth={true}> {page} </DashLayout>
);
