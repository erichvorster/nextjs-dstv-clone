import React from "react";
import Image from "next/image";

const Poster = ({ result }) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  return (
    <div className="h-36 w-24 sm:h-44 sm:w-32 lg:h-52 lg:w-40 relative mx-1 lg:mx-2 my-1 shrink-0 hover:scale-105 transition-transform ease-in-out 1s border border-gray-800">
      <Image
        className="object-cover transition-transform"
        src={`${BASE_URL}${result.backdrop_path}`}
        layout="fill"
      />
    </div>
  );
};

export default Poster;
