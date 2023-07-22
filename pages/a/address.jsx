/**
 * Customer Security Page
 *
 */

import { useRouter } from "next/router";

import BreadCrumb from "@/components/common/breadCrumb";
import Button from "@/components/common/button";
import PageTitle from "@/components/common/pageTitle";
import DashLayout from "@/components/layouts/dashLayout";

import Link from "next/link";
import AddressForm from "@/components/address/addressForm";
import Select from "@/components/common/select";
import { useEffect, useState } from "react";
import helpers from "@/lib/helpers";
import FormSelect from "@/components/common/formSelect";

export default function Security() {
  const pageName = "Address Information";
  const router = useRouter();
  const linkLabels = ["Your Account", "Addresss"];

  const [list, setList] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const setCountries = async () => {
      const countries = await helpers.getCountries();
      setList(countries.sort());
    };

    setCountries();
  }, []);
  return (
    <div className=" w-full">
      <PageTitle title={pageName} />
      <BreadCrumb paths={router.route.split("/")} labels={linkLabels} />
      <div className="mt-4">
        <h1 className="font-normal text-2xl "> {pageName} </h1>
      </div>

      <div className="flex w-full  gap-4  relative">
        <div className="mt-4 border w-1/2 lg:w-2/3 rounded min-h-full divide-y py-2 px-4">
          <AddressForm />
        </div>

        <div className=" w-[380px] lg:w-96  absolute lg:h-fit right-28 lg:-right-44 ">
         
          <Select list={list} search={search} onSetSearch={setSearch} />
        </div>
      </div>

      <div className="mt-4">
        <Link href="../a">
          <Button
            label="Done"
            classes="bg-amber-500 hover:bg-amber-600 tansition duration-500 ease-out"
          >
            Done
          </Button>
        </Link>
      </div>
    </div>
  );
}

Security.requireAuth = true;
Security.getLayout = (page) => (
  <DashLayout isMaxWidth="lg:min-w-[700px] lg:max-w-[700px] ">
    {page}
  </DashLayout>
);
