"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);
  const brandRef = useRef<HTMLDivElement>(null);

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
    <div
      className="min-h-screen flex items-center justify-center px-6 py-16"
      style={{ backgroundColor: "#F7F6F3" }}
    >
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
              style={{ flexShrink: 0 }}
            >
              <rect
                width="28"
                height="28"
                rx="6"
                fill="#06bbcc"
              />
              <path
                d="M7 20V8h9v2.5H9.5v2H14.5v2.5h-5v1H16V20H7z"
                fill="#FFFFFF"
              />
            </svg>
            <span
              style={{
                fontFamily:
                  "'SF Pro Display', 'Geist Sans', 'Helvetica Neue', sans-serif",
                fontWeight: 700,
                fontSize: "1.25rem",
                color: "#111111",
                letterSpacing: "-0.02em",
              }}
            >
              ENGLY
            </span>
          </Link>

          <h1
            style={{
              fontFamily:
                "'Newsreader', 'Playfair Display', 'Instrument Serif', serif",
              fontWeight: 500,
              fontSize: "1.875rem",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              color: "#111111",
              margin: 0,
            }}
          >
            Welcome back
          </h1>
          <p
            style={{
              color: "#787774",
              fontSize: "0.9375rem",
              lineHeight: 1.6,
              marginTop: "0.5rem",
            }}
          >
            Sign in to continue your learning journey
          </p>
        </div>

        {/* Form Card */}
        <div
          ref={formRef}
          style={{
            backgroundColor: "#FFFFFF",
            border: "1px solid #EAEAEA",
            borderRadius: "12px",
            padding: "32px",
          }}
        >
          {/* Social Login */}
          <div className="flex gap-3 mb-6">
            <button
              className="flex-1 flex items-center justify-center gap-2.5 cursor-pointer"
              style={{
                padding: "10px 16px",
                backgroundColor: "#FFFFFF",
                border: "1px solid #EAEAEA",
                borderRadius: "6px",
                fontSize: "0.8125rem",
                fontWeight: 500,
                color: "#2F3437",
                transition: "box-shadow 200ms ease, transform 200ms ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 2px 8px rgba(0,0,0,0.04)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
              }}
            >
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
            <button
              className="flex-1 flex items-center justify-center gap-2.5 cursor-pointer"
              style={{
                padding: "10px 16px",
                backgroundColor: "#FFFFFF",
                border: "1px solid #EAEAEA",
                borderRadius: "6px",
                fontSize: "0.8125rem",
                fontWeight: 500,
                color: "#2F3437",
                transition: "box-shadow 200ms ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 2px 8px rgba(0,0,0,0.04)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <svg width="16" height="16" viewBox="0 0 18 18" fill="#1877F2">
                <path d="M18 9a9 9 0 10-10.406 8.89v-6.29H5.309V9h2.285V7.017c0-2.258 1.344-3.504 3.4-3.504.985 0 2.015.176 2.015.176v2.215h-1.135c-1.118 0-1.467.694-1.467 1.406V9h2.496l-.399 2.6h-2.097v6.29A9.003 9.003 0 0018 9z" />
              </svg>
              Facebook
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-3 mb-6">
            <div className="flex-1" style={{ height: "1px", backgroundColor: "#EAEAEA" }} />
            <span
              style={{
                fontSize: "0.6875rem",
                color: "#787774",
                fontWeight: 500,
                letterSpacing: "0.05em",
                textTransform: "uppercase" as const,
              }}
            >
              or
            </span>
            <div className="flex-1" style={{ height: "1px", backgroundColor: "#EAEAEA" }} />
          </div>

          {/* Form */}
          <form className="space-y-5">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                style={{
                  display: "block",
                  fontSize: "0.8125rem",
                  fontWeight: 600,
                  color: "#2F3437",
                  marginBottom: "6px",
                }}
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                style={{
                  width: "100%",
                  padding: "10px 14px",
                  backgroundColor: "#FBFBFA",
                  border: "1px solid #EAEAEA",
                  borderRadius: "6px",
                  fontSize: "0.875rem",
                  color: "#2F3437",
                  outline: "none",
                  transition: "border-color 200ms ease, box-shadow 200ms ease",
                  boxSizing: "border-box",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "#06bbcc";
                  e.currentTarget.style.boxShadow = "0 0 0 1px #06bbcc";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "#EAEAEA";
                  e.currentTarget.style.boxShadow = "none";
                }}
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                style={{
                  display: "block",
                  fontSize: "0.8125rem",
                  fontWeight: 600,
                  color: "#2F3437",
                  marginBottom: "6px",
                }}
              >
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  style={{
                    width: "100%",
                    padding: "10px 42px 10px 14px",
                    backgroundColor: "#FBFBFA",
                    border: "1px solid #EAEAEA",
                    borderRadius: "6px",
                    fontSize: "0.875rem",
                    color: "#2F3437",
                    outline: "none",
                    transition:
                      "border-color 200ms ease, box-shadow 200ms ease",
                    boxSizing: "border-box",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "#06bbcc";
                    e.currentTarget.style.boxShadow = "0 0 0 1px #06bbcc";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "#EAEAEA";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                  style={{
                    background: "none",
                    border: "none",
                    color: "#787774",
                    padding: "2px",
                    transition: "color 200ms ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#2F3437";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#787774";
                  }}
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

            {/* Remember + Forgot */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  style={{
                    width: "14px",
                    height: "14px",
                    accentColor: "#06bbcc",
                    borderRadius: "3px",
                  }}
                />
                <span style={{ fontSize: "0.8125rem", color: "#787774" }}>
                  Remember me
                </span>
              </label>
              <Link
                href="/forgot-password"
                style={{
                  fontSize: "0.8125rem",
                  fontWeight: 500,
                  color: "#06bbcc",

                  textDecoration: "none",
                  transition: "color 200ms ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#05a5b5";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#06bbcc";
                }}
              >
                Forgot password?
              </Link>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full cursor-pointer"
              style={{
                padding: "11px 0",
                backgroundColor: "#06bbcc",
                color: "#FFFFFF",
                fontSize: "0.875rem",
                fontWeight: 600,
                borderRadius: "6px",
                border: "none",
                transition: "background-color 200ms ease, transform 200ms ease",
                marginTop: "4px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#05a5b5";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#06bbcc";
              }}
              onMouseDown={(e) => {
                e.currentTarget.style.transform = "scale(0.98)";
              }}
              onMouseUp={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              Sign in
            </button>
          </form>
        </div>

        {/* Sign Up Link */}
        <p
          className="text-center"
          style={{
            marginTop: "1.75rem",
            fontSize: "0.8125rem",
            color: "#787774",
          }}
        >
          Don&apos;t have an account?{" "}
          <Link
            href="/register"
            style={{
              fontWeight: 600,
              color: "#06bbcc",
              textDecoration: "none",
              transition: "color 200ms ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#05a5b5";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#06bbcc";
            }}
          >
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
}
