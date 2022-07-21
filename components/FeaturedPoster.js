import React from "react";
import Image from "next/image";
import Link from "next/link";
import mnet from "../public/mnet.webp";
import { InformationCircleIcon } from "@heroicons/react/outline";
import { PlusCircleIcon } from "@heroicons/react/outline";

const FeaturedPoster = ({ result }) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  return (
    <Link href={`${result.id}`} key={result.id}>
      <div className="h-36 w-24 sm:h-44 sm:w-32 lg:h-52 lg:w-40 relative mx-1 lg:mx-2 my-1 shrink-0 hover:scale-105 transition-transform ease-in-out 1s border border-gray-800 group cursor-pointer z-10">
        <Image
          className="object-cover transition-transform "
          src={`${BASE_URL}${result.backdrop_path}`}
          layout="fill"
        />
        <div className=" p-4">
          <div className=" z-50 ">
            <div className="flex justify-between">
              <div className="h-5 w-6 relative ml-2 mb-2 opacity-0 group-hover:opacity-100 duration-300 z-50">
                <Image className="" src={mnet} layout="fill" />
              </div>
              <div className="flex">
                <div className="opacity-0 group-hover:opacity-100 pl-1 cursor-pointer hover:text-sky-500 duration-300 relative z-50">
                  <InformationCircleIcon className="h-6 w-6" />
                </div>
                <div className="opacity-0 group-hover:opacity-100 pl-1 cursor-pointer  hover:text-sky-500 duration-300 relative z-50">
                  <PlusCircleIcon className="h-6 w-6" />
                </div>
              </div>
            </div>
            <h4 className=" opacity-0 group-hover:opacity-100 text-xs font-bold inline-block relative z-50 duration-300">
              {result.original_title}
            </h4>
          </div>
          <div className="absolute bottom-3 left-2 z-50 opacity-0 group-hover:opacity-100 duration-300">
            <button className="h-6 w-16 lg:h-8 lg:w-36 text-xs bg-white text-black rounded-full cursor-pointer hover:bg-sky-500 hover:text-white duration-300">
              Watch
            </button>
          </div>
        </div>
        <div className="hidden md:inline-block absolute z-50 top-0 left-0 w-full h-full  bg-black/75 opacity-0 group:hover:h-full group-hover:opacity-70 duration-200 p-4 z-10 "></div>
      </div>
    </Link>
  );
};

export default FeaturedPoster;
