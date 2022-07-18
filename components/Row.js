import React from "react";
import requests from "../utilities/requests";
import Image from "next/image";
import Poster from "./Poster";

const Row = ({ results, title }) => {
  console.log(results);
  return (
    <div className="mb-5 sm:mx-8">
      <h3 className="ml-5 lg:text-xl mb-2">{title}</h3>
      <div className="py-1 flex no-scrollbar flex-nowrap ml-3 overflow-x-scroll  touch-pan-x">
        {results.map((result) => {
          return (
            <>
              <Poster result={result} />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Row;
