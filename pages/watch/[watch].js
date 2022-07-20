import React from "react";
import Image from "next/image";
import Nav from "../../components/Nav";
import { InformationCircleIcon } from "@heroicons/react/outline";
import { PlusCircleIcon } from "@heroicons/react/outline";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
// import mnet from ".../public/mnet";

const API_KEY = process.env.API_KEY;

export async function getServerSideProps(context) {
  const { watch } = context.query;

  const request4 = await fetch(
    `https://api.themoviedb.org/3/movie/${watch}?api_key=${API_KEY}`
  ).then((res) => res.json());

  return {
    props: {
      hero: request4,
    },
  };
}

const watch = ({ hero }) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  console.log(hero);

  return (
    <>
      <Navigation />
      <div className="  md:2/6 lg:pl-0  lg:h-128 xl:h-148 ">
        <div
          className="relative w-full h-full mb-6"
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
            {/* <div className="h-6 w-7 lg:h-8 lg:w-9 relative ml-3 mb-2">
            <Image src={mnet} layout="fill" />
          </div> */}
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold z-60 sm:pb-8 ">
              {hero.original_title}
            </h3>
            <p className="hidden sm:inline-block left-10 top-50 z-60 text-sm lg:text-base leading-5 z-50 max-w-lg">
              {hero.overview}
            </p>
          </div>
          <div className="pl-3 pt-4 flex z-10 relative sm:mx-10 lg:pl-8">
            <button className="h-8 w-20 lg:h-10 lg:w-28 bg-white text-black rounded-full cursor-pointer hover:bg-sky-500 hover:text-black">
              Watch
            </button>
            <div className="pl-2">
              <InformationCircleIcon className=" h-9 w-9 lg:h-11 lg:w-11 hover:text-sky-500 duration-300" />
            </div>
            <div className="pl-2">
              <PlusCircleIcon className=" h-9 w-9 lg:h-11 lg:w-11 hover:text-sky-500 duration-300" />
            </div>
          </div>
          <div className="absolute z-0 left-0 bottom-0 bg-gradient-to-t from-black to h-1/4 w-full" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default watch;
