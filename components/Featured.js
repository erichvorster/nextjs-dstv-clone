import React from "react";
import Image from "next/image";
import Nav from "./Nav";
import { InformationCircleIcon } from "@heroicons/react/outline";
import { PlusCircleIcon } from "@heroicons/react/outline";

const Featured = ({ hero }) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  console.log(hero);

  return (
    <div className=" h-3/6 md:2/6 lg:pl-44 lg:pr-44">
      {/* <div className="relative">
        <Image
          src={` ${BASE_URL}${
            hero.results[3].backdrop_path || hero.results[3].poster_path
          } `}
          height={300}
          width={500}
          layout="responsive"
        ></Image>

        <h3 className="absolute text-3xl font-semibold left-3 top-40 z-60">
          {hero.results[0].original_title}
        </h3>
        <p className="hidden absolute left-10 top-50 z-60">
          {hero.results[0].overview}
        </p>
      </div> */}

      <div
        className="relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) 100%), url(
             ${BASE_URL}${hero.results[1].backdrop_path}
          )`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          height: "50vh",
          width: "auto",
        }}
      >
        <Nav />
        <div className="pt-44 pl-3">
          <h3 className="text-3xl font-semibold z-60">
            {hero.results[0].original_title}
          </h3>
          <p className="hidden  left-10 top-50 z-60">
            {hero.results[0].overview}
          </p>
        </div>
        <div className="pl-3 pt-4 flex">
          <button className="h-8 w-20 bg-white text-black rounded-full cursor-pointer hover:bg-sky-500 hover:text-black">
            Watch
          </button>
          <div className="pl-2">
            <InformationCircleIcon style={{ height: 35, width: 35 }} />
          </div>
          <div className="pl-2">
            <PlusCircleIcon style={{ height: 35, width: 35 }} />
          </div>
        </div>
        <div className="absolute left-0 bottom-0 bg-gradient-to-t from-black to h-1/4 w-full" />
      </div>
    </div>
  );
};

export default Featured;
