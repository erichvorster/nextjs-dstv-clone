import React, { useRef } from "react";
import requests from "../utilities/requests";
import Image from "next/image";
import Poster from "./Poster";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";

const Row = ({ results, title }) => {
  const ref = useRef();

  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };

  const detectScrollEnd = () => {
    if (
      ref.current.offsetWidth + ref.current.scrollLeft <=
      ref.current.scrollWidth
    ) {
      console.log("scrolled");
    }
  };

  console.log(results);
  return (
    <div className="mb-5 sm:mx-8 relative ">
      <button
        onClick={() => scroll(-1000)}
        className="absolute left-0 bottom-2 w-10 md:h-44 lg:h-52  bg-zinc-900/50 z-50 h-52 ml-4 hidden md:inline-block"
      >
        <ChevronLeftIcon className="text-white/75 " />
      </button>
      <button
        onClick={() => scroll(1000)}
        className="absolute right-0 bottom-2  md:h-44 lg:h-52 w-10 bg-zinc-900/50 z-50 hidden md:inline-block"
      >
        <ChevronRightIcon />
      </button>
      <h3 className="ml-5 lg:text-xl mb-1">{title}</h3>
      <div
        onScroll={() => detectScrollEnd}
        ref={ref}
        className="scroll-smooth py-1 flex no-scrollbar flex-nowrap ml-3 overflow-x-scroll  touch-pan-x "
      >
        {results.map((result) => {
          return <Poster result={result} key={result.id} />;
        })}
      </div>
    </div>
  );
};

export default Row;
