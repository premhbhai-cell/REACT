import React from "react";
import Buttoms from "./Buttoms";
import { RiInstagramLine } from "react-icons/ri";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";

const Usercard = () => {
  return (
    <div className="w-[20rem] h-[30rem] bg-white-500 rounded-xl overflow-hidden shadow-lg">
      {/* Top Part */}
      <div className="relative w-[full] h-[10rem] bg-blue-400">
        <img
          className="absolute bg-white h-[10rem] w-[10rem] rounded-full aspect-square object-cover object-center translate-x-[50%] translate-y-[25%] border-5 border-blue-400 bg-white p-1"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsI33SDrE10NX3qCLF8Tq7AI47xxUEkaC35hBsOZQIKQ&s=10"
          alt="Error Loading Img"
        />
      </div>

      {/* Buttom Part */}
      <div className="flex flex-col items-center pt-[3rem]  ">
        <h1 className="text-xl font-bold">Prem Kumar Jha</h1>
        <p className="text-gray-600">Software Engineer</p>
        <div className="flex pt-[2rem] gap-6 ">
          <FaFacebook className="w-8 h-8 text-blue-600" />
          <FaTwitter className="w-8 h-8 text-sky-500" />
          <RiInstagramLine className="w-8 h-8 text-pink-500" />
          <FaYoutube className="w-8 h-8 text-red-500" />
        </div>
        {/* buttom Part */}
        <div className="flex gap-4 pt-[1rem]">
          <Buttoms text="Follow" />
          <Buttoms text="Subscribe" />
        </div>

        {/* low icons part */}
        <div className="flex gap-4 pt-[3rem] text-gray-500 text-lg">
          <div className="flex items-center gap-1">
            <CiHeart /> <span>60.4K</span>
          </div>
            <Line />
          <div className="flex items-center gap-1">
            <CiHeart /> <span>128.9K</span>
          </div>
            <Line />

          <div className="flex items-center gap-1">
            <CiHeart /> <span>38.7K</span>
          </div>

        </div>
      </div>
    </div>
  );
};

const Line = () => {
  return (
    <div className="w-[0.1rem] h-[1.6rem] bg-gray-300"></div>
      
  )
}




export default Usercard;
