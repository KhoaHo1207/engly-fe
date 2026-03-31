"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { courseService, CourseType } from "@/services/course.service";
import { Briefcase, GraduationCap, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const COURSES = [
  {
    id: "TOEIC" as CourseType,
    title: "TOEIC Mastery",
    tag: "Professional",
    tagColor: { bg: "#E1F3FE", text: "#1F6C9F" },
    image: "https://picsum.photos/seed/toeic-corporate/800/500",
    description:
      "Focus on business communication and global proficiency. Engineered for corporate leaders and professionals navigating international markets.",
    icon: Briefcase,
  },
  {
    id: "IELTS" as CourseType,
    title: "IELTS Academic",
    tag: "Academic",
    tagColor: { bg: "#FBF3DB", text: "#956400" },
    image: "https://picsum.photos/seed/ielts-university/800/500",
    description:
      "Focus on academic English for higher education. Rigorous preparation for university admissions, research, and scholarly discourse.",
    icon: GraduationCap,
  },
];

export default function CourseSelectionPage() {
  const router = useRouter();
  const [loading, setLoading] = useState<CourseType | null>(null);
  const [error, setError] = useState("");
  const heroRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  const handleSelect = async (courseType: CourseType) => {
    setError("");
    setLoading(courseType);
    try {
      await courseService.selectCourse({ courseType });
      router.push("/");
    } catch (err: any) {
      setError(
        err.response?.data?.message ||
          "Failed to select course. Please try again."
      );
    } finally {
      setLoading(null);
    }
  };

  // Staggered entry animation
  useEffect(() => {
    const sections = [heroRef.current, cardsRef.current, footerRef.current];
    sections.forEach((el, i) => {
      if (!el) return;
      el.style.opacity = "0";
      el.style.transform = "translateY(12px)";
      setTimeout(() => {
        el.style.transition =
          "opacity 600ms cubic-bezier(0.16, 1, 0.3, 1), transform 600ms cubic-bezier(0.16, 1, 0.3, 1)";
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, i * 120);
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#F7F6F3]">
      {/* Ambient background */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 30% 20%, rgba(200,190,170,0.03), transparent), radial-gradient(ellipse 50% 40% at 70% 80%, rgba(180,175,160,0.03), transparent)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-16 md:py-24">
        {/* Hero */}
        <div ref={heroRef} className="text-center mb-14 md:mb-20">
          <p className="text-[0.6875rem] font-medium tracking-[0.12em] uppercase text-[#787774] mb-4">
            Step 1 of 2
          </p>
          <h1
            className="text-[2.25rem] md:text-[3.25rem] font-medium text-[#111111] leading-[1.1] tracking-tight m-0"
            style={{
              fontFamily:
                "'Newsreader', 'Playfair Display', 'Instrument Serif', serif",
            }}
          >
            Your Learning{" "}
            <em className="text-[#06bbcc] not-italic">Path</em>
          </h1>
          <p className="text-[#787774] text-[0.9375rem] leading-relaxed mt-4 max-w-lg mx-auto">
            Select the specialized track that aligns with your professional or
            academic ambitions.
          </p>
        </div>

        {/* Error */}
        {error && (
          <div className="mb-8 py-2.5 px-3.5 bg-[#FDEBEC] border border-[rgba(0,0,0,0.06)] rounded-lg text-[0.8125rem] text-[#9F2F2D] text-center max-w-lg mx-auto">
            {error}
          </div>
        )}

        {/* Course Cards */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16 md:mb-24"
        >
          {COURSES.map((course, idx) => (
            <div
              key={course.id}
              className="bg-white border border-[#EAEAEA] overflow-hidden transition-shadow duration-200 hover:shadow-[0_2px_8px_rgba(0,0,0,0.04)] group"
              style={{
                borderRadius: "12px",
                animationDelay: `calc(${idx} * 80ms)`,
              }}
            >
              {/* Image */}
              <div className="relative h-52 md:h-60 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  style={{
                    filter: "saturate(0.7) contrast(1.05)",
                  }}
                />
                {/* Warm overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(247,246,243,0.08) 0%, transparent 100%)",
                  }}
                />

                {/* Icon badge */}
                <div
                  className="absolute top-4 left-5 w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{
                    background: "rgba(255,255,255,0.92)",
                    border: "1px solid #EAEAEA",
                  }}
                >
                  <course.icon size={18} color="#111111" strokeWidth={2} />
                </div>
              </div>

              {/* Body */}
              <div className="p-6 md:p-8">
                {/* Tag */}
                <span
                  className="inline-block text-[0.6875rem] font-medium uppercase tracking-[0.05em] px-2.5 py-1 mb-4"
                  style={{
                    background: course.tagColor.bg,
                    color: course.tagColor.text,
                    borderRadius: "9999px",
                  }}
                >
                  {course.tag}
                </span>

                <h2
                  className="text-xl md:text-2xl font-semibold text-[#111111] tracking-tight leading-tight m-0 mb-3"
                  style={{
                    fontFamily:
                      "'Newsreader', 'Playfair Display', 'Instrument Serif', serif",
                  }}
                >
                  {course.title}
                </h2>

                <p className="text-[0.8125rem] text-[#787774] leading-relaxed m-0 mb-8">
                  {course.description}
                </p>

                {/* CTA Button */}
                <button
                  onClick={() => handleSelect(course.id)}
                  disabled={loading !== null}
                  className={`w-full flex items-center justify-center gap-2.5 py-3.5 text-sm font-semibold border-none transition-all duration-200 ${
                    loading === course.id
                      ? "bg-[#555555] text-white cursor-not-allowed"
                      : loading !== null
                      ? "bg-[#999999] text-white cursor-not-allowed"
                      : "bg-[#111111] text-white cursor-pointer hover:bg-[#333333] active:scale-[0.98]"
                  }`}
                  style={{ borderRadius: "6px" }}
                >
                  {loading === course.id ? (
                    "Selecting..."
                  ) : (
                    <>
                      Choose This Path
                      {/* Arrow */}
                      <ArrowRight size={16} />
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div ref={footerRef} className="text-center">
          <p className="text-[0.6875rem] text-[#787774] uppercase tracking-[0.08em] font-medium">
            Not sure? You can switch tracks later in your profile settings.
          </p>
        </div>
      </div>
    </div>
  );
}
