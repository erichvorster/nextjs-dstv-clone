import React from "react";
import Nav from "../components/Nav";
import Row from "../components/Row";
import requests from "../utilities/requests";
import FlexRow from "../components/FlexRow";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

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
      <div>
        <FlexRow title={"Top Rated"} results={topRated} />
      </div>
      <Footer />
    </div>
  );
};

export default Results;
