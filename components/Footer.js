import React from "react";
import Link from "next/link";
import Image from "next/image";
import facebook from "../public/facebook.svg";
import twitter from "../public/icons8-twitter-squared-48.png";
import google from "../public/google.svg";
import apple from "../public/apple.svg";

const Footer = () => {
  return (
    <div className="mt-10">
      <div className="flex items-center justify-between bg-neutral-800 w-full py-4 px-12">
        <div className="">
          <ul className="flex">
            <li className="border-r px-2 text-sm py-0 hover:text-sky-500 duration-300">
              <Link href="">DStv.com</Link>
            </li>
            <li className="border-r px-2 text-sm py-0 hover:text-sky-500 duration-300">
              <Link href="">FAQs</Link>
            </li>
            <li className=" px-2 text-sm py-0 hover:text-sky-500 duration-300">
              <Link href="">Live Chat</Link>
            </li>
          </ul>
        </div>
        <div className="flex">
          <div className="h-14 w-14 relative">
            <Image src={facebook} />
          </div>
          <div className="h-14 w-14 relative">
            <Image src={twitter} />
          </div>
        </div>
      </div>
      <div className="py-8 bg-neutral-900">
        <ul className="flex flex-wrap justify-center text-neutral-500">
          <li className="border-r border-neutral-500 text-xs py-0 px-2 hover:text-sky-500 duration-300">
            <Link href="">Terms & Conditions</Link>
          </li>
          <li className="border-r border-neutral-500 text-xs py-0 px-2 hover:text-sky-500 duration-300">
            <Link href="">Privacy & Cookie Policy</Link>
          </li>
          <li className="border-r border-neutral-500 text-xs py-0 px-2 hover:text-sky-500 duration-300">
            <Link href="">Responsible Disclosure Policy</Link>
          </li>
          <li className="border-r border-neutral-500 text-xs py-0 px-2 hover:text-sky-500 duration-300">
            <Link href="">Copyright</Link>
          </li>
          <li className="border-r border-neutral-500 text-xs py-0 px-2 hover:text-sky-500 duration-300">
            <Link href="">Open Source</Link>
          </li>
          <li className="border-r border-neutral-500 text-xs py-0 px-2 hover:text-sky-500 duration-300">
            <Link href="">Contact Us</Link>
          </li>
          <li className="border-r border-neutral-500 text-xs py-0 px-2 hover:text-sky-500 duration-300">
            <Link href="">Careers</Link>
          </li>
          <li className=" text-xs py-0 px-2 hover:text-sky-500 duration-300">
            <Link href="">Scam Alert</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
