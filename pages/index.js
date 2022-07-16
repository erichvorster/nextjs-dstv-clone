import React from "react";
import Head from "next/head";
import Nav from "../components/Nav";
import Featured from "../components/Featured";

const API_KEY = process.env.API_KEY;

export const getStaticProps = async () => {
  const res = await fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`);
  const data = await res.json()
  
  return {
    props: {hero:data}
  }
}

export default function Home({hero}) {
  console.log(hero)
  return (
    <>
    <Head>
      <title>DSTV</title>
    </Head>
    <Featured hero={hero}/>
    </>
  );
}

