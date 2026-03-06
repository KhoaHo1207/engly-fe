import React from "react";

const Header = () => {
  return (
    <div className="flex items-center ">
      <img src="./logo2.png" alt="Logo" className="w-24 h-19 ml-4" />
      <div className="flex items-center ml-auto gap-4 font-semibold">
        <div className="hover:text-blue-500 p-4 cursor-pointer">Home</div>
        <div className="hover:text-blue-500 p-4 cursor-pointer">About</div>
        <div className="hover:text-blue-500 p-4 cursor-pointer">Courses</div>
        <div className="hover:text-blue-500 p-4 cursor-pointer">Pages</div>
        <div className="hover:text-blue-500 p-4 cursor-pointer">Contact</div>
        <button className="bg-[#06bbcc] text-white p-7 px-14 cursor-pointer">
          Join Now{" "}
        </button>
      </div>
    </div>
  );
};

export default Header;
