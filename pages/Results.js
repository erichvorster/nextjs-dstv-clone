import React from "react";
import Nav from "../components/Nav";
import Row from "../components/Row";
import requests from "../utilities/requests";
import FlexRow from "../components/FlexRow";
import Navigation from "../components/Navigation";

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then((res) => res.json());
  return {
    props: {
      topRated: request.results,
    },
  };
}

const Results = ({ topRated }) => {
  return (
    <div>
      <Navigation />
      <Nav />

      <FlexRow title={"Top Rated"} results={topRated} />
    </div>
  );
};

export default Results;
