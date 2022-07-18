import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { AdjustmentsIcon } from "@heroicons/react/outline";

import requests from "../utilities/requests";
import dstv from "../public/DStv.svg";


const Nav = () => {
  const router = useRouter();

  return (
    <nav className="relative ml-2 mt-7">
       <div className="absolute top-0 right-0 bg-gradient-to-b from-black to h-3/4 w-full"/>
      {/* <div className="pt-2 w-24 px-2">
        <Image src={dstv} height={30} width={80} />
      </div> */}
      <div className="relative flex">
        <div className="flex px-2 sm:px-5  text-1xl whitespace-nowrap space-x-5 sm:space-x-20 overflow-x-scroll scrollbar-hide">
          {Object.entries(requests).map(([key, { title, url }]) => (
            <>
              <h2
                key={key}
                onClick={() => router.push(`Results/?genre=${key}`)}
                className="last:pr-24 cursor-pointer transition duration-100 transform  hover:text-sky-500 active:text-sky-500"
              >
                {title}
              </h2>
            </>
          ))}

        </div>
        <div className="absolute top-0 right-10 bg-gradient-to-l from-black to h-10 w-3/12" />
        <div className="mr-4">
          <AdjustmentsIcon className=" hover:text-sky-500" style={{ height: 25, width: 25 }}/>
        </div>
        </div>
        
    </nav>
  );
};

export default Nav;
