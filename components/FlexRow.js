import React from "react";
import requests from "../utilities/requests";
import Image from "next/image";
import Poster from "./Poster";
import FlexPoster from "./FlexPoster";

const FlexRow = ({ results, title }) => {
  console.log(results);
  return (
    <div className="mb-5 ">
      <div className="py-3 flex  no-scrollbar flex-wrap ml-3 overflow-x-scroll  touch-pan-x">
        {results.map((result) => {
          return (
            <>
              <FlexPoster result={result} />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default FlexRow;
