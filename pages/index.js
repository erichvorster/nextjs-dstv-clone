import React from "react";
import Head from "next/head";
import Nav from "../components/Nav";
import Featured from "../components/Featured";
import Row from "../components/Row";
import requests from "../utilities/requests";
import Navigation from "../components/Navigation";

const API_KEY = process.env.API_KEY;

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const request = await fetch(
    `https://api.themoviedb.org/3${requests.fetchTrending.url}`
  ).then((res) => res.json());

  const request2 = await fetch(
    `https://api.themoviedb.org/3${requests.fetchTopRated.url}`
  ).then((res) => res.json());

  const request3 = await fetch(
    `https://api.themoviedb.org/3${requests.fetchActionMovies.url}`
  ).then((res) => res.json());

  return {
    props: {
      hero: request.results[1],
      results: request.results,
      topRated: request2.results,
      actionMovies: request3.results,
    },
  };
}

export default function Home({ hero, results, topRated, actionMovies }) {
  console.log(topRated);
  console.log(results);
  console.log(hero);
  return (
    <>
      <Head>
        <title>DSTV</title>
      </Head>
      <Navigation />
      <div className="">
        <Featured hero={hero} />
        <Row title={"Trending"} results={results} />
        <Row title={"Top Rated"} results={topRated} />
        <Row title={"Action Movies"} results={actionMovies} />
      </div>
    </>
  );
}
