import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SearchIcon } from "@heroicons/react/outline";

import dstv from "../public/DStv.svg";

const Navigation = () => {
  const [navScroll, setNavScroll] = useState(false);

  useEffect(() => {
    const changeNavColor = () => {
      if (window.scrollY >= 80) {
        setNavScroll(true);
      } else {
        setNavScroll(false);
      }
    };
    window.addEventListener("scroll", changeNavColor);
  }, []);

  return (
    <div>
      <div
        className={
          navScroll
            ? "bg-black flex justify-between pt-4 fixed z-50 lg:w-full  lg:px-14 lg:pr-14 lg:border-b lg:pb-2 border-gray-500 duration-300 w-full pb-4"
            : "bg-transparent flex justify-between pt-4 fixed lg:w-full z-50 lg:px-14 lg:pr-14 lg:border-b lg:pb-2 border-gray-500 duration-300 w-full pb-4"
        }
      >
        <div className="flex lg:py-3">
          <div className=" w-20 h-6  relative hover:cursor-pointer mr-6 md:mr-10 ml-4 lg:ml-0 sm:ml-12">
            <Link href={"/"}>
              <Image src={dstv} layout="fill" alt="dstv" />
            </Link>
          </div>
          <nav>
            <ul className="flex whitespace-nowrap justify-between text-sm lg:text-base pt-1 lg:pt-0">
              <li className="hidden lg:inline-block mr-5 sm:mr-6 md:mr-8 lg:mr-10  hover:text-sky-500 duration-300">
                <Link href={"/Results"}>Live TV</Link>
              </li>
              <li className="mr-5 sm:mr-6 md:mr-8 lg:mr-10 hover:text-sky-500 duration-300">
                <Link href={"/Results"}>TV Shows</Link>
              </li>
              <li className="mr-5 hover:text-sky-500 duration-300 sm:mr-6 md:mr-8 lg:mr-10">
                <Link href={"/Results"}>Movies</Link>
              </li>
              <li className="mr-5 hover:text-sky-500 duration-300 sm:mr-6 md:mr-8 lg:mr-10">
                <Link href={"/Results"}>Sport</Link>
              </li>
              <li className="mr-5 hover:text-sky-500 duration-300 sm:mr-6 md:mr-8 lg:mr-10">
                <Link href={"/Results"}>Kids</Link>
              </li>
              <li className="hidden md:inline-block mr-5 hover:text-sky-500 duration-300 sm:mr-6 md:mr-8 lg:mr-10">
                <Link href={"/Results"}>TV Guide</Link>
              </li>
              <li className="hidden md:inline-block mr-5 hover:text-sky-500 duration-300 sm:mr-6 md:mr-8 lg:mr-10">
                <Link href={"/Results"}>My List</Link>
              </li>
              <li className="hidden md:inline-block mr-5 hover:text-sky-500 duration-300 sm:mr-6 md:mr-8 lg:mr-10">
                <Link href={"/Results"}>Showmax</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="z-50 hidden sm:inline-block float-right mr-14 pt-1 lg:pt-3 lg:mr-6 ">
          <SearchIcon
            className="text-white hover:text-sky-500 duration-300 cursor-pointer"
            height={20}
            width={20}
          />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
