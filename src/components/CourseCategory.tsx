import React from "react";

const categories = [
  {
    title: "Web Design",
    courses: 49,
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=800",
    className: "md:col-span-2 md:row-span-1",
  },
  {
    title: "Online Marketing",
    courses: 49,
    image:
      "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=800",
    className: "md:col-span-1 md:row-span-2",
  },
  {
    title: "Graphic Design",
    courses: 49,
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Video Editing",
    courses: 49,
    image:
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=800",
    className: "md:col-span-1 md:row-span-1",
  },
];

const CourseCategory = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-10">
        <div className="flex justify-center items-center gap-2 mb-2">
          <div className="h-[2px] w-8 bg-[#06bbcc]"></div>
          <span className="text-[#06bbcc] font-bold tracking-widest uppercase text-sm">
            Categories
          </span>
          <div className="h-[2px] w-8 bg-[#06bbcc]"></div>
        </div>
        <h2 className="text-4xl font-bold text-[#181d38]">
          Courses Categories
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 md:gap-6 auto-rows-[250px] md:h-[600px]">
        {categories.map((cat, index) => (
          <div
            key={index}
            className={`relative group overflow-hidden ${cat.className}`}
          >
            <img
              src={cat.image}
              alt={cat.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute bottom-0 right-0 bg-white px-6 py-4 flex flex-col items-center justify-center transition-all duration-300">
              <h3 className="text-[#0B1A42] font-semibold text-lg hover:text-[#06BBCC] cursor-pointer transition-colors duration-300">
                {cat.title}
              </h3>
              <p className="text-[#06BBCC] text-sm mt-1">
                {cat.courses} Courses
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseCategory;
