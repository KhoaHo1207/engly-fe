import Image from "next/image";

const benefits = [
  "Skilled Instructors",
  "Online Classes",
  "International Certificate",
  "Skilled Instructors",
  "Online Classes",
  "International Certificate",
];

const AboutSection = () => {
  return (
    <section>
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Left: Image */}
          <div className="w-full md:w-1/2 relative min-h-[420px]">
            <Image
              src="/about.jpg"
              alt="About eLearning"
              fill
              className="object-cover"
            />
          </div>

          {/* Right: Content */}
          <div className="w-full md:w-1/2 flex flex-col gap-5">
            {/* Header */}
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-[#06bbcc] font-bold tracking-widest uppercase text-sm">
                  About Us
                </span>
                <div className="h-[2px] w-10 bg-[#06bbcc]"></div>
              </div>
              <h2 className="text-4xl font-extrabold text-[#181d38]">
                Welcome to eLEARNING
              </h2>
            </div>

            {/* Paragraphs */}
            <p className="text-gray-600 leading-relaxed text-sm">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.{" "}
              <span className="text-[#06bbcc]">Aliqu diam amet diam et</span>{" "}
              eos. Clita erat ipsum et lorem et sit.
            </p>

            <p className="text-[#06bbcc] leading-relaxed text-sm">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.{" "}
              <span className="text-[#06bbcc]">Aliqu diam amet diam et</span>{" "}
              eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita
              duo justo magna dolore erat amet.
            </p>

            {/* Benefits Grid */}
            <div className="grid grid-cols-2 gap-y-2.5 gap-x-4">
              {benefits.map((text, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-[#06bbcc] text-sm"
                >
                  <span className="text-lg leading-none">→</span>
                  <span>{text}</span>
                </div>
              ))}
            </div>

            {/* Button */}
            <div className="mt-2">
              <button className="bg-[#06bbcc] hover:bg-[#05a8b8] text-white font-semibold py-3 px-10 transition-colors cursor-pointer">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
