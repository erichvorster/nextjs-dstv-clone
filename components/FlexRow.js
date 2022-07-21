import React from "react";
import requests from "../utilities/requests";
import Image from "next/image";
import Poster from "./Poster";
import FlexPoster from "./FlexPoster";
import Nav from "./Nav";

const FlexRow = ({ results, title }) => {
  console.log(results);
  return (
    <div className="pt-24 md:pt-28 lg:pt-36 flex lg:mx-18 justify-center md:mx-8">
      <Nav />
      <div className="py-3 px-3  grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-10 gap-1  sm:gap-3 md:gap-x-4 no-scrollbar ">
        {results.map((result) => {
          return (
            <>
              <FlexPoster result={result} key={result.id} />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default FlexRow;
