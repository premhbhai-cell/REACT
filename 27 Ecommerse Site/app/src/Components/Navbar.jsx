import React from "react";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    <div className="w-full h-16 flex items-center gap-16 text-white px-8 bg-gray-800 shadow-lg overflow-hidden">


      <div className="flex gap-5 p-5">
        {/* <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Products</NavLink> */}

        <Menu to={"/"} titel={"Home"} />
        <Menu to={"/products"} titel={"Products"} />

      </div>
    </div>
  );
};

const Menu = ({ to, titel }) => {
  return (
    <NavLink className={({ isActive }) => isActive ? "text-orange-400" : ""} to={to}>{titel}</NavLink>
  )
}
export default Navbar;