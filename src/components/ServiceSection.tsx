import { GraduationCap, Globe, Home, BookOpen } from "lucide-react";

const features = [
  {
    title: "Skilled Instructors",
    desc: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
    icon: <GraduationCap size={48} />,
  },
  {
    title: "Online Classes",
    desc: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
    icon: <Globe size={48} />,
  },
  {
    title: "Home Projects",
    desc: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
    icon: <Home size={48} />,
  },
  {
    title: "Book Library",
    desc: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
    icon: <BookOpen size={48} />,
  },
];

const ServiceSection = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((item) => (
          <div
            key={item.title}
            className="group bg-[#f0fbfe] p-8 flex flex-col items-center text-center gap-4 transition-all duration-300 hover:bg-[#06bbcc] cursor-pointer"
          >
            <div className="text-[#06bbcc] group-hover:text-white transition-colors duration-300">
              {item.icon}
            </div>

            <h3 className="font-bold text-[#181d38] text-xl group-hover:text-white transition-colors duration-300">
              {item.title}
            </h3>
            <p className="text-[#52565b] leading-relaxed group-hover:text-white transition-colors duration-300">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceSection;
