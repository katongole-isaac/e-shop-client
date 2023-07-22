import MenuCard from "@/components/common/dashboard/menuCard";
import DashLayout from "@/components/layouts/dashLayout";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="">Hello Isaac</h1>

      <MenuCard />
    </>
  );
}

// Home.requireAuth = true;
Home.getLayout = (page) => <DashLayout> {page} </DashLayout>;
