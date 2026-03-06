import { ArrowRight } from "lucide-react";
import Image from "next/image";

const AboutSection = () => {
  const benefits = [
    "Skilled Instructors",
    "Online Classes",
    "International Certificate",
    "Skilled Instructors",
    "Online Classes",
    "International Certificate",
  ];

  return (
    <section className="container mx-auto px-4 py-16 flex flex-col md:flex-row gap-12 items-stretch">
      <div className="relative w-full md:w-1/2">
        <Image src="/about.jpg" alt="About" fill className="object-cover" />
      </div>

      <div className="w-full md:w-1/2 flex flex-col gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[#06bbcc] font-bold tracking-widest uppercase text-sm">
              About Us
            </span>
            <div className="h-[2px] w-10 bg-[#06bbcc]"></div>
          </div>
          <h2 className="text-4xl font-bold text-[#181d38] mb-4">
            Welcome to eLEARNING
          </h2>
        </div>

        <p className="text-[#52565b] leading-relaxed">
          Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
          diam amet diam et eos. Clita erat ipsum et lorem et sit.
        </p>

        <p className="text-[#52565b] leading-relaxed">
          Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
          diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
          lorem sit clita duo justo magna dolore erat amet.
        </p>

        <div className="grid grid-cols-2 gap-y-3 gap-x-4">
          {benefits.map((text, index) => (
            <div key={index} className="flex items-center gap-2 text-[#52565b]">
              <ArrowRight className="text-[#06bbcc]" size={18} />
              <span>{text}</span>
            </div>
          ))}
        </div>

        <button className="bg-[#06bbcc] text-white font-bold py-4 px-10 w-fit mt-4 hover:bg-[#05a8b8] transition-all">
          Read More
        </button>
      </div>
    </section>
  );
};

export default AboutSection;
