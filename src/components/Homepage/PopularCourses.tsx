import React from 'react';
import Image from 'next/image';
import { User, Clock, Star } from 'lucide-react';

const courses = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&h=400&fit=crop',
    price: '$149.00',
    rating: 5,
    reviews: 123,
    title: 'Web Design & Development Course for Beginners',
    instructor: 'John Doe',
    duration: '1.49 Hrs',
    students: '30 Students'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&h=400&fit=crop',
    price: '$149.00',
    rating: 5,
    reviews: 123,
    title: 'Web Design & Development Course for Beginners',
    instructor: 'John Doe',
    duration: '1.49 Hrs',
    students: '30 Students'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=600&h=400&fit=crop',
    price: '$149.00',
    rating: 5,
    reviews: 123,
    title: 'Web Design & Development Course for Beginners',
    instructor: 'John Doe',
    duration: '1.49 Hrs',
    students: '30 Students'
  }
];

export default function PopularCourses() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-2">
            <div className="w-12 h-[2px] bg-[#06bbcc]"></div>
            <h5 className="text-[#06bbcc] font-bold uppercase tracking-widest text-sm">Courses</h5>
            <div className="w-12 h-[2px] bg-[#06bbcc]"></div>
          </div>
          <h2 className="text-4xl font-extrabold text-[#181d38]">Popular Courses</h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="bg-[#f0fcfc] flex flex-col group overflow-hidden">
              {/* Image Area */}
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlap Buttons */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 flex z-10">
                  <button className="bg-[#06bbcc] hover:bg-[#05a5b5] text-white text-sm font-semibold px-6 py-2 transition-colors rounded-l-full border-r border-[#05a5b5]/50">
                    Read More
                  </button>
                  <button className="bg-[#06bbcc] hover:bg-[#05a5b5] text-white text-sm font-semibold px-6 py-2 transition-colors rounded-r-full border-l border-[#05a5b5]/50">
                    Join Now
                  </button>
                </div>
              </div>

              {/* Content Area */}
              <div className="pt-10 pb-6 px-6 text-center grow flex flex-col justify-center">
                <h3 className="text-[28px] font-bold text-[#181d38] mb-1">{course.price}</h3>
                
                {/* Rating */}
                <div className="flex items-center justify-center gap-1 mb-4">
                  {[...Array(course.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-[#06bbcc]" fill="currentColor" />
                  ))}
                  <span className="text-gray-500 text-sm ml-1">({course.reviews})</span>
                </div>

                <h4 className="text-xl font-bold text-[#181d38] leading-tight px-2">
                  {course.title}
                </h4>
              </div>

              {/* Footer */}
              <div className="border-t border-gray-200/60 bg-[#e8f8f8] flex py-3 text-sm text-gray-500">
                <div className="flex-1 flex items-center justify-center gap-2 border-r border-gray-200/60">
                  <User size={15} className="text-[#06bbcc] stroke-[2.5]" />
                  <span className="font-medium text-gray-600 truncate">{course.instructor}</span>
                </div>
                <div className="flex-1 flex items-center justify-center gap-2 border-r border-gray-200/60">
                  <Clock size={15} className="text-[#06bbcc] stroke-[2.5]" />
                  <span className="font-medium text-gray-600 truncate">{course.duration}</span>
                </div>
                <div className="flex-1 flex items-center justify-center gap-2">
                  <User size={15} className="text-[#06bbcc] stroke-[2.5]" />
                  <span className="font-medium text-gray-600 truncate">{course.students}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
