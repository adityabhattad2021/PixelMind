import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import MasonaryLayout from "~/components/MasonaryLayout";
import Navbar from "~/components/Navbar";

import { api } from "~/utils/api";

const Home: NextPage = () => {
  api.images.getAll.useQuery()
  const {mutate}=api.images.generateImages.useMutation({
    onError:(e)=>{
      console.log(e);
      
    }
  })
  
  return (
    <>
      <Head>
        <title>PixelMind</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full h-full bg-white">
        <Navbar />
        <button onClick={()=>{
          const result = mutate({description:"a black apple"})
          console.log(result);
          
        }} >
          Generate 
        </button>
        <MasonaryLayout/>
      </main>
    </>
  );
};

export default Home;
