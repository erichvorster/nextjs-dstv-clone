import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SearchIcon } from "@heroicons/react/outline";

import dstv from "../public/DStv.svg";

const Navigation = () => {
  return (
    <div className="mr-44 sm:mx-6">
      <div className="flex justify-between mt-4 fixed lg:w-full bg-transparent z-50 lg:mx-14 lg:pr-14 lg:border-b lg:pb-2 border-gray-500">
        <div className="flex lg:py-3">
          <div className=" w-20 h-6  relative hover:cursor-pointer mr-6 ml-4 lg:ml-0">
            <Link href={"/"}>
              <Image src={dstv} layout="fill" />
            </Link>
          </div>
          <nav>
            <ul className="flex whitespace-nowrap justify-between ">
              <li className="hidden lg:inline-block mr-5  hover:bg-sky-500">
                <Link href={"/Results"}>Live TV</Link>
              </li>
              <li className="mr-5 hover:bg-sky-500">
                <Link href={"/Results"}>TV Shows</Link>
              </li>
              <li className="mr-5 hover:bg-sky-500">
                <Link href={"/Results"}>Movies</Link>
              </li>
              <li className="mr-5 hover:bg-sky-500">
                <Link href={"/Results"}>Sport</Link>
              </li>
              <li className="mr-5 hover:bg-sky-500">
                <Link href={"/Results"}>Kids</Link>
              </li>
              <li className="hidden lg:inline-block mr-5 hover:bg-sky-500">
                <Link href={"/Results"}>TV Guide</Link>
              </li>
              <li className="hidden lg:inline-block mr-5 hover:bg-sky-500">
                <Link href={"/Results"}>My List</Link>
              </li>
              <li className="hidden lg:inline-block mr-5 hover:bg-sky-500">
                <Link href={"/Results"}>Showmax</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="z-50 hidden sm:inline-block float-right mr-14">
          <SearchIcon className="text-white" height={20} width={20} />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
