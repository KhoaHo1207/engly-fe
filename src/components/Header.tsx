import React from "react";

const Header = () => {
  return (
    <div className="flex items-center ">
      <h2 className="ml-10">Engly</h2>
      <div className="flex items-center ml-auto gap-4 font-semibold">
        <div className="hover:text-blue-500 p-4 cursor-pointer">Home</div>
        <div className="hover:text-blue-500 p-4 cursor-pointer">About</div>
        <div className="hover:text-blue-500 p-4 cursor-pointer">Courses</div>
        <div className="hover:text-blue-500 p-4 cursor-pointer">Pages</div>
        <div className="hover:text-blue-500 p-4 cursor-pointer">Contact</div>
        <button className="bg-[#06bbcc] text-white px-6 p-4 cursor-pointer ">
          Join Now{" "}
        </button>
      </div>
    </div>
  );
};

export default Header;
