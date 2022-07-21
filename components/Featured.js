import React from "react";
import Image from "next/image";
import Nav from "./Nav";
import { InformationCircleIcon } from "@heroicons/react/outline";
import { PlusCircleIcon } from "@heroicons/react/outline";
import Navigation from "./Navigation";
import mnet from "../public/mnet.webp";

const Featured = ({ hero }) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  console.log(hero);
  return (
    <div className="md:2/6 lg:pl-0 lg:h-128 xl:h-148 ">
      <div
        className="relative w-full h-full mb-4 pl-5 xl:pl-8 sm:pl-3"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) 100%), url(
             ${BASE_URL}${hero.backdrop_path}
          )`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
        }}
      >
        <div className="pt-56 sm:pt-72 lg:pt-40  sm:mx-10 lg:pl-8">
          <div className="h-6 w-7 lg:h-8 lg:w-9 relative ml-3 mb-2">
            <Image src={mnet} layout="fill" alt="mnet" />
          </div>
          <h3 className="text-2xl sm:text-4xl lg:text-5xl font-semibold z-60 sm:pb-8 max-w-sm lg:max-w-2xl">
            {hero.original_title}
          </h3>
          <p className="hidden sm:inline-block left-10 top-50 z-60 text-sm lg:text-sm xl:text-base leading-5 z-50 max-w-lg">
            {hero.overview}
          </p>
        </div>
        <div className=" pt-4 lg:pt-6 flex z-10 relative sm:mx-10 lg:pl-8">
          <button className="h-8 w-20 lg:h-10 lg:w-28 bg-white text-black rounded-full cursor-pointer hover:bg-sky-500 hover:text-white duration-300">
            Watch
          </button>
          <div className="pl-2">
            <InformationCircleIcon className=" h-9 w-9 lg:h-11 lg:w-11 hover:text-sky-500 duration-300 cursor-pointer" />
          </div>
          <div className="pl-2">
            <PlusCircleIcon className=" h-9 w-9 lg:h-11 lg:w-11 hover:text-sky-500 duration-300 cursor-pointer" />
          </div>
        </div>
        <div className="absolute z-0 left-0 bottom-0 bg-gradient-to-t from-black to h-1/4 w-full" />
      </div>
    </div>
  );
};

export default Featured;
