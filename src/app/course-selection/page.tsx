"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { courseService, CourseType } from "@/services/course.service";
import {
  BookOpen,
  Clock,
  CheckCircle,
  Monitor,
  FileText,
  PenLine,
  BookOpenText,
  Briefcase,
  ArrowRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const COURSES = [
  {
    id: "IELTS" as CourseType,
    badge: "IELTS Academic",
    badgeIcon: BookOpenText,
    image: "https://picsum.photos/seed/ielts-campus/800/400",
    subtitle: "Academic Mastery",
    description:
      "Designed for students aiming for undergraduate or postgraduate admission in English-language universities worldwide.",
    features: [
      {
        icon: BookOpen,
        title: "48 Learning Units",
        desc: "Comprehensive coverage of all 4 modules",
      },
      {
        icon: Clock,
        title: "12 Mock Exams",
        desc: "Timed simulations with expert feedback",
      },
      {
        icon: CheckCircle,
        title: "C1+ Target Mastery",
        desc: "Advanced vocabulary and structural precision",
      },
    ],
    cta: "Enroll Now",
    accentBg: "rgba(6, 187, 204, 0.06)",
  },
  {
    id: "TOEIC" as CourseType,
    badge: "TOEIC Professional",
    badgeIcon: Briefcase,
    image: "https://picsum.photos/seed/toeic-office/800/400",
    subtitle: "Business Communication",
    description:
      "Tailored for professionals looking to enhance their global career prospects and master workplace communication.",
    features: [
      {
        icon: Monitor,
        title: "32 Business English Units",
        desc: "Real-world corporate scenarios",
      },
      {
        icon: FileText,
        title: "20 Practice Sets",
        desc: "Focus on Listening and Reading speed",
      },
      {
        icon: PenLine,
        title: "900+ Score Goal",
        desc: "Elite certification for top-tier firms",
      },
    ],
    cta: "Start Learning",
    accentBg: "rgba(6, 187, 204, 0.06)",
  },
];

export default function CourseSelectionPage() {
  const router = useRouter();
  const [loading, setLoading] = useState<CourseType | null>(null);
  const [error, setError] = useState("");
  const heroRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const sections = [heroRef.current, cardsRef.current, bottomRef.current];
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
        {/* Branding */}
        <div className="mb-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2.5 no-underline"
          >
            <div className="w-7 h-7 rounded-md bg-[#06bbcc] flex items-center justify-center">
              <span className="text-white text-xs font-bold leading-none">
                E
              </span>
            </div>
            <span className="font-bold text-xl text-[#111111] tracking-tight font-[family-name:var(--font-sans,'SF_Pro_Display','Geist_Sans','Helvetica_Neue',sans-serif)]">
              ENGLY
            </span>
          </Link>
        </div>

        {/* Hero */}
        <div ref={heroRef} className="mb-14 md:mb-20">
          <p className="text-[0.6875rem] font-medium tracking-[0.12em] uppercase text-[#787774] mb-3">
            Select your learning path
          </p>
          <h1 className="text-[2.25rem] md:text-[3rem] font-medium text-[#111111] leading-[1.1] tracking-tight m-0 font-[family-name:var(--font-serif,'Newsreader','Playfair_Display','Instrument_Serif',serif)]">
            Define your academic or{" "}
            <br className="hidden md:block" />
            professional{" "}
            <span className="text-[#06bbcc]">trajectory.</span>
          </h1>
          <p className="text-[#787774] text-[0.9375rem] leading-relaxed mt-4 max-w-xl">
            Choose the specialized framework designed for your specific goals.
            Our curated learning paths offer rigorous preparation for global
            benchmarks.
          </p>
        </div>

        {/* Error */}
        {error && (
          <div className="mb-6 py-2.5 px-3.5 bg-[#FDEBEC] border border-[rgba(0,0,0,0.06)] rounded-lg text-[0.8125rem] text-[#9F2F2D]">
            {error}
          </div>
        )}

        {/* Course Cards */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16 md:mb-24"
        >
          {COURSES.map((course, idx) => {
            const BadgeIcon = course.badgeIcon;
            return (
              <div
                key={course.id}
                className="bg-white border border-[#EAEAEA] rounded-xl overflow-hidden transition-shadow duration-200 hover:shadow-[0_2px_8px_rgba(0,0,0,0.04)] group"
                style={{
                  animationDelay: `calc(${idx} * 80ms)`,
                }}
              >
                {/* Card Image */}
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.badge}
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
                        "linear-gradient(to top, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.05) 60%)",
                    }}
                  />
                  {/* Badge */}
                  <div className="absolute bottom-4 left-5 flex items-center gap-2">
                    <div className="w-7 h-7 rounded-md bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <BadgeIcon size={16} color="#FFFFFF" strokeWidth={2} />
                    </div>
                    <span className="text-white font-semibold text-base tracking-tight">
                      {course.badge}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 md:p-7">
                  <h3 className="text-lg font-semibold text-[#111111] tracking-tight mb-1.5">
                    {course.subtitle}
                  </h3>
                  <p className="text-[0.8125rem] text-[#787774] leading-relaxed mb-6">
                    {course.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-4 mb-7">
                    {course.features.map((feat, i) => {
                      const FeatureIcon = feat.icon;
                      return (
                        <div key={i} className="flex items-start gap-3">
                          <div
                            className="shrink-0 w-9 h-9 rounded-lg flex items-center justify-center mt-0.5"
                            style={{ background: course.accentBg }}
                          >
                            <FeatureIcon
                              size={20}
                              color="#06bbcc"
                              strokeWidth={2}
                            />
                          </div>
                          <div>
                            <p className="text-[0.8125rem] font-semibold text-[#2F3437] leading-snug">
                              {feat.title}
                            </p>
                            <p className="text-[0.75rem] text-[#787774] leading-snug mt-0.5">
                              {feat.desc}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* CTA */}
                  <button
                    onClick={() => handleSelect(course.id)}
                    disabled={loading !== null}
                    className={`w-full flex items-center justify-center gap-2 py-3 text-white text-sm font-semibold rounded-md border-none transition-all duration-200 ${
                      loading === course.id
                        ? "bg-[#555555] cursor-not-allowed"
                        : loading !== null
                        ? "bg-[#999999] cursor-not-allowed"
                        : "bg-[#111111] cursor-pointer hover:bg-[#333333] active:scale-[0.98]"
                    }`}
                  >
                    {loading === course.id ? (
                      "Selecting..."
                    ) : (
                      <>
                        {course.cta}
                        <ArrowRight size={16} />
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div
          ref={bottomRef}
          className="border-t border-[#EAEAEA] pt-10 md:pt-14 pb-8"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="max-w-md">
              <h2 className="text-xl md:text-2xl font-semibold text-[#111111] tracking-tight leading-tight m-0">
                Not sure which path is right for you?
              </h2>
              <p className="text-[0.8125rem] text-[#787774] leading-relaxed mt-2">
                Our diagnostic tool analyzes your current level and future
                ambitions to recommend the most effective curriculum for your
                success.
              </p>
            </div>
            <div className="flex gap-3">
              <button className="py-2.5 px-5 bg-white border border-[#EAEAEA] rounded-md text-[0.8125rem] font-semibold text-[#2F3437] cursor-pointer transition-shadow duration-200 hover:shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                Compare Paths
              </button>
              <button className="py-2.5 px-5 bg-white border border-[#EAEAEA] rounded-md text-[0.8125rem] font-semibold text-[#2F3437] cursor-pointer transition-shadow duration-200 hover:shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                Take Quiz
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-[#EAEAEA] pt-8 pb-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <p className="text-[0.8125rem] font-semibold text-[#2F3437]">
              ENGLY
            </p>
            <p className="text-[0.75rem] text-[#787774] mt-0.5">
              2024 ENGLY. All rights reserved.
            </p>
          </div>
          <div className="flex gap-5">
            <Link
              href="/privacy"
              className="text-[0.75rem] text-[#787774] no-underline hover:text-[#2F3437] transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-[0.75rem] text-[#787774] no-underline hover:text-[#2F3437] transition-colors duration-200"
            >
              Terms of Service
            </Link>
            <Link
              href="/support"
              className="text-[0.75rem] text-[#787774] no-underline hover:text-[#2F3437] transition-colors duration-200"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
