"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { authService } from "@/services/auth.service";

export default function RegisterPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);
  const brandRef = useRef<HTMLDivElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    setLoading(true);

    try {
      const response = await authService.register({ email, password, name });
      localStorage.setItem("access_token", response.data.access_token);
      router.push("/");
    } catch (err: any) {
      setError(
        err.response?.data?.message || "Registration failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const elements = [formRef.current, brandRef.current];
    elements.forEach((el, i) => {
      if (!el) return;
      el.style.opacity = "0";
      el.style.transform = "translateY(12px)";
      setTimeout(() => {
        el.style.transition =
          "opacity 600ms cubic-bezier(0.16, 1, 0.3, 1), transform 600ms cubic-bezier(0.16, 1, 0.3, 1)";
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, i * 80);
    });
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-16 bg-[#F7F6F3]">
      {/* Ambient background */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 30% 20%, rgba(200,190,170,0.03), transparent), radial-gradient(ellipse 50% 40% at 70% 80%, rgba(180,175,160,0.03), transparent)",
        }}
      />

      <div className="w-full max-w-md relative z-10">
        {/* Branding */}
        <div ref={brandRef} className="mb-12 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2.5 no-underline mb-8"
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              className="shrink-0"
            >
              <rect width="28" height="28" rx="6" fill="#06bbcc" />
              <path
                d="M7 20V8h9v2.5H9.5v2H14.5v2.5h-5v1H16V20H7z"
                fill="#FFFFFF"
              />
            </svg>
            <span className="font-bold text-xl text-[#111111] tracking-tight font-[family-name:var(--font-sans,'SF_Pro_Display','Geist_Sans','Helvetica_Neue',sans-serif)]">
              ENGLY
            </span>
          </Link>

          <h1 className="text-3xl font-medium text-[#111111] tracking-tight leading-tight m-0 font-[family-name:var(--font-serif,'Newsreader','Playfair_Display','Instrument_Serif',serif)]">
            Create your account
          </h1>
          <p className="text-[#787774] text-[0.9375rem] leading-relaxed mt-2">
            Start your learning journey today
          </p>
        </div>

        {/* Form Card */}
        <div
          ref={formRef}
          className="bg-white border border-[#EAEAEA] rounded-xl p-8"
        >
          {/* Social Login */}
          <div className="flex gap-3 mb-6">
            <button className="flex-1 flex items-center justify-center gap-2.5 cursor-pointer py-2.5 px-4 bg-white border border-[#EAEAEA] rounded-md text-[0.8125rem] font-medium text-[#2F3437] transition-shadow duration-200 hover:shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
              <svg width="16" height="16" viewBox="0 0 18 18">
                <path
                  d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 01-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"
                  fill="#4285F4"
                />
                <path
                  d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z"
                  fill="#34A853"
                />
                <path
                  d="M3.964 10.71A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.997 8.997 0 000 9c0 1.452.348 2.827.957 4.042l3.007-2.332z"
                  fill="#FBBC05"
                />
                <path
                  d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z"
                  fill="#EA4335"
                />
              </svg>
              Google
            </button>
            <button className="flex-1 flex items-center justify-center gap-2.5 cursor-pointer py-2.5 px-4 bg-white border border-[#EAEAEA] rounded-md text-[0.8125rem] font-medium text-[#2F3437] transition-shadow duration-200 hover:shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
              <svg width="16" height="16" viewBox="0 0 18 18" fill="#1877F2">
                <path d="M18 9a9 9 0 10-10.406 8.89v-6.29H5.309V9h2.285V7.017c0-2.258 1.344-3.504 3.4-3.504.985 0 2.015.176 2.015.176v2.215h-1.135c-1.118 0-1.467.694-1.467 1.406V9h2.496l-.399 2.6h-2.097v6.29A9.003 9.003 0 0018 9z" />
              </svg>
              Facebook
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-3 mb-6">
            <div className="flex-1 h-px bg-[#EAEAEA]" />
            <span className="text-[0.6875rem] text-[#787774] font-medium tracking-widest uppercase">
              or
            </span>
            <div className="flex-1 h-px bg-[#EAEAEA]" />
          </div>

          {/* Form */}
          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-[0.8125rem] font-semibold text-[#2F3437] mb-1.5"
              >
                Full Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full py-2.5 px-3.5 bg-[#FBFBFA] border border-[#EAEAEA] rounded-md text-sm text-[#2F3437] outline-none transition-all duration-200 box-border focus:border-[#06bbcc] focus:ring-1 focus:ring-[#06bbcc]"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-[0.8125rem] font-semibold text-[#2F3437] mb-1.5"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full py-2.5 px-3.5 bg-[#FBFBFA] border border-[#EAEAEA] rounded-md text-sm text-[#2F3437] outline-none transition-all duration-200 box-border focus:border-[#06bbcc] focus:ring-1 focus:ring-[#06bbcc]"
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-[0.8125rem] font-semibold text-[#2F3437] mb-1.5"
              >
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="At least 6 characters"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full py-2.5 pl-3.5 pr-11 bg-[#FBFBFA] border border-[#EAEAEA] rounded-md text-sm text-[#2F3437] outline-none transition-all duration-200 box-border focus:border-[#06bbcc] focus:ring-1 focus:ring-[#06bbcc]"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer bg-transparent border-none text-[#787774] p-0.5 transition-colors duration-200 hover:text-[#2F3437]"
                >
                  {showPassword ? (
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94" />
                      <path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19" />
                      <line x1="1" y1="1" x2="23" y2="23" />
                    </svg>
                  ) : (
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-[0.8125rem] font-semibold text-[#2F3437] mb-1.5"
              >
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                placeholder="Re-enter your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="w-full py-2.5 px-3.5 bg-[#FBFBFA] border border-[#EAEAEA] rounded-md text-sm text-[#2F3437] outline-none transition-all duration-200 box-border focus:border-[#06bbcc] focus:ring-1 focus:ring-[#06bbcc]"
              />
            </div>

            {/* Terms */}
            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                id="terms"
                required
                className="w-3.5 h-3.5 accent-[#06bbcc] rounded-sm mt-0.5 shrink-0"
              />
              <label
                htmlFor="terms"
                className="text-[0.8125rem] text-[#787774] leading-snug cursor-pointer"
              >
                I agree to the{" "}
                <Link
                  href="/terms"
                  className="text-[#06bbcc] no-underline font-medium hover:text-[#05a5b5]"
                >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  href="/privacy"
                  className="text-[#06bbcc] no-underline font-medium hover:text-[#05a5b5]"
                >
                  Privacy Policy
                </Link>
              </label>
            </div>

            {/* Error Message */}
            {error && (
              <div className="py-2.5 px-3.5 bg-red-50 border border-red-200 rounded-md text-[0.8125rem] text-red-600">
                {error}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-2.5 text-white text-sm font-semibold rounded-md border-none transition-all duration-200 mt-1 ${
                loading
                  ? "bg-[#87DDE5] cursor-not-allowed"
                  : "bg-[#06bbcc] cursor-pointer hover:bg-[#05a5b5] active:scale-[0.98]"
              }`}
            >
              {loading ? "Creating account..." : "Create account"}
            </button>
          </form>
        </div>

        {/* Sign In Link */}
        <p className="text-center mt-7 text-[0.8125rem] text-[#787774]">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-semibold text-[#06bbcc] no-underline transition-colors duration-200 hover:text-[#05a5b5]"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
