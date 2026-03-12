import React from 'react';
import Image from 'next/image';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const instructors = [
  {
    id: 1,
    name: 'Instructor Name',
    designation: 'Designation',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&h=600&fit=crop',
  },
  {
    id: 2,
    name: 'Instructor Name',
    designation: 'Designation',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&h=600&fit=crop',
  },
  {
    id: 3,
    name: 'Instructor Name',
    designation: 'Designation',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&h=600&fit=crop',
  },
  {
    id: 4,
    name: 'Instructor Name',
    designation: 'Designation',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&h=600&fit=crop',
  }
];

export default function Instructors() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-2">
            <div className="w-12 h-[2px] bg-[#06bbcc]"></div>
            <h5 className="text-[#06bbcc] font-bold uppercase tracking-widest text-sm">Instructors</h5>
            <div className="w-12 h-[2px] bg-[#06bbcc]"></div>
          </div>
          <h2 className="text-4xl font-extrabold text-[#181d38]">Expert Instructors</h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {instructors.map((instructor) => (
            <div key={instructor.id} className="bg-[#f0fcfc] flex flex-col group overflow-hidden">
              {/* Image Area */}
              <div className="relative w-full aspect-square overflow-hidden">
                <Image
                  src={instructor.image}
                  alt={instructor.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Social Icons Overlay - Matches the white box cut-out effect */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center justify-center z-10 bg-[#f0fcfc] px-3 pt-3">
                  <div className="flex gap-1">
                    <button className="bg-[#06bbcc] hover:bg-[#05a5b5] text-white p-2 transition-colors">
                      <Facebook size={16} fill="currentColor" strokeWidth={0} />
                    </button>
                    <button className="bg-[#06bbcc] hover:bg-[#05a5b5] text-white p-2 transition-colors">
                      <Twitter size={16} fill="currentColor" strokeWidth={0} />
                    </button>
                    <button className="bg-[#06bbcc] hover:bg-[#05a5b5] text-white p-2 transition-colors">
                      <Instagram size={16} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Content Area */}
              <div className="pt-6 pb-8 px-4 text-center">
                <h4 className="text-xl font-bold text-[#181d38] mb-1">{instructor.name}</h4>
                <p className="text-sm text-gray-500">{instructor.designation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
