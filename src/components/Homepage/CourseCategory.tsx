import React from "react";
import Image from "next/image";

const CourseCategory = () => {
  return (
    <div className="container mx-auto px-4 max-w-6xl py-16">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="flex justify-center items-center gap-4 mb-2">
          <div className="h-[2px] w-8 bg-[#06bbcc]"></div>
          <span className="text-[#06bbcc] font-bold tracking-widest uppercase text-sm">
            Categories
          </span>
          <div className="h-[2px] w-8 bg-[#06bbcc]"></div>
        </div>
        <h2 className="text-4xl font-extrabold text-[#181d38]">
          Courses Categories
        </h2>
      </div>

      {/* Mosaic Grid */}
      <div className="grid grid-cols-3 grid-rows-2 gap-4 h-[580px]">

        {/* Web Design — top-left, spans 2 columns */}
        <div className="col-span-2 row-span-1 relative group overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=900&fit=crop"
            alt="Web Design"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute bottom-0 right-0 bg-white px-6 py-4 min-w-[160px]">
            <h3 className="text-[#181d38] font-bold text-lg hover:text-[#06bbcc] cursor-pointer transition-colors">
              Web Design
            </h3>
            <p className="text-[#06bbcc] text-sm mt-0.5">49 Courses</p>
          </div>
        </div>

        {/* Online Marketing — right, spans 2 rows */}
        <div className="col-span-1 row-span-2 relative group overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=600&fit=crop"
            alt="Online Marketing"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute bottom-0 right-0 bg-white px-6 py-4 min-w-[160px]">
            <h3 className="text-[#181d38] font-bold text-lg hover:text-[#06bbcc] cursor-pointer transition-colors">
              Online Marketing
            </h3>
            <p className="text-[#06bbcc] text-sm mt-0.5">49 Courses</p>
          </div>
        </div>

        {/* Graphic Design — bottom-left */}
        <div className="col-span-1 row-span-1 relative group overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=600&fit=crop"
            alt="Graphic Design"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute bottom-0 right-0 bg-white px-6 py-4 min-w-[150px]">
            <h3 className="text-[#181d38] font-bold text-lg hover:text-[#06bbcc] cursor-pointer transition-colors">
              Graphic Design
            </h3>
            <p className="text-[#06bbcc] text-sm mt-0.5">49 Courses</p>
          </div>
        </div>

        {/* Video Editing — bottom-center */}
        <div className="col-span-1 row-span-1 relative group overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=600&fit=crop"
            alt="Video Editing"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute bottom-0 right-0 bg-white px-6 py-4 min-w-[150px]">
            <h3 className="text-[#181d38] font-bold text-lg hover:text-[#06bbcc] cursor-pointer transition-colors">
              Video Editing
            </h3>
            <p className="text-[#06bbcc] text-sm mt-0.5">49 Courses</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CourseCategory;
