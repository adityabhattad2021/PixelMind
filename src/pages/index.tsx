import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import MasonaryLayout from "~/components/MasonaryLayout";
import Navbar from "~/components/Navbar";

import { api } from "~/utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>PixelMind</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full h-full bg-white">
        <Navbar />
        <MasonaryLayout/>
      </main>
    </>
  );
};

export default Home;
