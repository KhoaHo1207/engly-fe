"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image"; // Nên dùng thẻ Image của Next.js
import { ArrowLeft, ArrowRight } from "lucide-react";

interface CarouselProps {
  images: string[];
}

export default function Carousel({ images }: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <div className="relative w-full h-screen">
      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className="flex h-full">
          {images.map((src, index) => (
            <div key={index} className="relative flex-none w-full h-full">
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                fill
                priority={index === 0}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white p-10 text-center">
                <div className="max-w-3xl">
                  <h2 className="text-xl font-bold text-[#06bbcc] mb-2 uppercase">
                    Best online course
                  </h2>
                  <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
                    Learn English with us
                  </h1>
                  <p className="text-lg opacity-90 mb-10">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Impedit aspernatur similique sint, sapiente beatae facilis.
                  </p>
                  <div className="flex gap-4 justify-center">
                    <button className="px-8 py-6 bg-[#06bbcc] text-white font-bold hover:bg-[#05a8b8] transition-all transform hover:scale-105">
                      Read more
                    </button>
                    <button className="px-8 py-6 bg-white text-black font-bold hover:bg-gray-200 transition-all transform hover:scale-105">
                      Join now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={() => emblaApi?.scrollPrev()}
          className="absolute left-4 top-1/2 z-20 bg-white/20 p-3 rounded-full hover:bg-white/40 text-white"
        >
          <ArrowLeft size={20} />
        </button>
        <button
          onClick={() => emblaApi?.scrollNext()}
          className="absolute right-4 top-1/2 z-20 bg-white/20 p-3 rounded-full hover:bg-white/40 text-white"
        >
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}
