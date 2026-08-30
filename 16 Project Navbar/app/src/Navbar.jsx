import React, { useState } from "react";
import { FaCartArrowDown } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { AiOutlineMenuFold } from "react-icons/ai";


const Navbar = () => {

    const[mobileView,setMobileView]=useState(false);

    return (
        <nav className="w-full h-16 px-8 flex items-center justify-between bg-white shadow-md">

            {/* Logo */}
            <div>
                <h1 className="text-2xl font-bold text-gray-800">Logo</h1>
            </div>

            {/* Links */}
            <div className="flex items-center gap-8 max-[720px]:hidden">
                <a href="#"className="text-gray-700 font-medium hover:text-blue-500 transition">Home</a>

                <a href="#" className="text-gray-700 font-medium hover:text-blue-500 transition">About</a>

                <a href="#" className="text-gray-700 font-medium hover:text-blue-500 transition">Contact</a>

                <a href="#" className="text-gray-700 font-medium hover:text-blue-500 transition">Services</a>

                <a href="#" className="text-gray-700 font-medium hover:text-blue-500 transition">Help</a>
            </div>

            {/* Icons */}
            <div className="flex items-center gap-5 ">
                <span className="text-xl text-blue-500 cursor-pointer transition max-[720px]:hidden">
                    <FaCartArrowDown />
                </span>

                <span className="text-xl text-red-500 cursor-pointer transition max-[720px]:hidden">
                    <FaHeart />
                </span>
                <span onClick={()=>{
                    setMobileView(true);
                }} className="text-3xl text-Black-500 cursor-pointer transition min-[720px]:hidden" ><AiOutlineMenuFold/></span>
            </div>

        {/* Mobile View without side animation */}
        {/* {mobileView && */}
        <div className={`absolute flex flex-col w-[20rem] h-screen bg-black text-white top-0 left-0
        ${mobileView ? "translate-x-0" : "-translate-x-full"}
    transition-transform duration-300`}
>

            <button className="absolute top-[1rem] right-[1rem] bg-[#242424]" onClick={()=>{
            setMobileView(false);
          }}>❌</button>
                <a href="#"className="text-white-700 mt-[4rem] flex item-center justify-center font-medium hover:text-blue-500 p-3 hover:bg-[#161414] transition">Home</a>

                <a href="#" className="text-white-700 flex item-center justify-center font-medium hover:text-blue-500 p-3 hover:bg-[#161414]transition">About</a>

                <a href="#" className="text-white-700 flex item-center justify-center font-medium hover:text-blue-500 p-3 hover:bg-[#161414] transition">Contact</a>

                <a href="#" className="text-white-700 flex item-center justify-center font-medium hover:text-blue-500 p-3 hover:bg-[#161414] transition">Services</a>

                <a href="#" className="text-white-700 flex item-center justify-center font-medium hover:text-blue-500 p-3 hover:bg-[#161414] transition">Help</a>
            </div>


        {/* } */}
        </nav>
    );
};

export default Navbar;