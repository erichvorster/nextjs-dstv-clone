import React from "react";
import Image from "next/image";

const Poster = ({ result }) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  return (
    <div className="h-44 w-28 lg:h-52 lg:w-36 relative mx-2 my-2 shrink-0 hover:scale-105 transition-transform ease-in-out 1s border border-gray-800">
      <Image
        className="object-cover transition-transform"
        src={`${BASE_URL}${result.backdrop_path}`}
        layout="fill"
      />
    </div>
  );
};

export default Poster;
