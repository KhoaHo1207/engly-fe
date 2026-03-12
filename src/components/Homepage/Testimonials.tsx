"use client";
import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
  {
    id: 1,
    name: "Client Name",
    profession: "Profession",
    text: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=200&h=200&fit=crop",
  },
  {
    id: 2,
    name: "Client Name",
    profession: "Profession",
    text: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.",
    image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=200&h=200&fit=crop",
  },
  {
    id: 3,
    name: "Client Name",
    profession: "Profession",
    text: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&fit=crop",
  },
  {
    id: 4,
    name: "Client Name",
    profession: "Profession",
    text: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&h=200&fit=crop",
  },
  {
    id: 5,
    name: "Client Name",
    profession: "Profession",
    text: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&h=200&fit=crop",
  },
  {
    id: 6,
    name: "Client Name",
    profession: "Profession",
    text: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&h=200&fit=crop",
  },
];

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center", slidesToScroll: 1 },
    [Autoplay({ delay: 4000 })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onInit = useCallback(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onInit();
    onSelect();
    emblaApi.on("reInit", onInit);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  // With align: "center", selectedIndex is the center slide
  const centerIndex = selectedIndex;

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-2">
            <div className="w-12 h-[2px] bg-[#06bbcc]"></div>
            <h5 className="text-[#06bbcc] font-bold uppercase tracking-widest text-sm">Testimonial</h5>
            <div className="w-12 h-[2px] bg-[#06bbcc]"></div>
          </div>
          <h2 className="text-4xl font-extrabold text-[#181d38]">Our Students Say!</h2>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-6">
            {testimonials.map((item, index) => {
              const isCenter = index === centerIndex;
              return (
                <div
                  key={item.id}
                  className="pl-6 flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.3333%] min-w-0"
                >
                  <div className="flex flex-col items-center">
                    {/* Avatar */}
                    <div className="relative w-24 h-24 mb-4">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover rounded-full border-4 border-white shadow-md"
                      />
                    </div>
                    <h4
                      className={`text-lg font-bold mb-0.5 transition-colors duration-300 ${
                        isCenter ? "text-[#181d38]" : "text-gray-400"
                      }`}
                    >
                      {item.name}
                    </h4>
                    <p className="text-sm text-gray-400 mb-6">{item.profession}</p>

                    {/* Quote Box */}
                    <div
                      className={`p-8 w-full text-center transition-all duration-300 ${
                        isCenter
                          ? "bg-[#06bbcc] text-white"
                          : "bg-[#eaf9fa] text-gray-400"
                      }`}
                    >
                      <p className="leading-relaxed text-sm">{item.text}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-10">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`w-4 h-4 border-2 border-[#06bbcc] transition-colors duration-300 ${
                index === selectedIndex ? "bg-[#06bbcc]" : "bg-transparent"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
