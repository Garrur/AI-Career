"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, TrendingUp, Mic, FileText } from "lucide-react";
import MagneticButton from "@/components/ui/magnetic-button";
import SpotlightCard from "@/components/ui/spotlight-card";

/* ── Ascend Kinetic v2 — Deep Teal AI Palette ── */
const C = {
  bg: "#edeae3",
  bgLow: "#e6e2da",
  bgContainer: "#dedad2",
  primary: "#0d9488",       /* teal-600 */
  primaryDark: "#0f766e",   /* teal-700 */
  primaryLight: "#ccfbf1",  /* teal-100 */
  secondary: "#f97316",     /* coral/orange */
  tertiary: "#7c3aed",      /* violet */
  text: "#1a2120",
  textSub: "#404845",
  outline: "#7a8280",
  outlineVar: "#c4c0b8",
};

export default function HeroSection() {
  const imageRef = useRef(null);
  useEffect(() => {
    const el = imageRef.current;
    const onScroll = () => {
      if (window.scrollY > 80) el?.classList.add("scrolled");
      else el?.classList.remove("scrolled");
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden subtle-grid"
      style={{ backgroundColor: C.bg }}>
      {/* Ambient blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-20 pointer-events-none"
        style={{ background: `radial-gradient(circle, ${C.primary} 0%, transparent 70%)`, filter: "blur(90px)" }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-15 pointer-events-none"
        style={{ background: `radial-gradient(circle, ${C.secondary} 0%, transparent 70%)`, filter: "blur(60px)" }} />
      <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] rounded-full opacity-10 pointer-events-none"
        style={{ background: `radial-gradient(circle, ${C.tertiary} 0%, transparent 70%)`, filter: "blur(70px)" }} />

      <div className="container mx-auto px-6 md:px-12 pt-28 pb-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── LEFT ── */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
              style={{ backgroundColor: C.primaryLight, border: `1px solid ${C.primary}30` }}>
              <Sparkles className="w-3.5 h-3.5" style={{ color: C.primary }} />
              <span className="text-xs font-bold tracking-[0.2em] uppercase"
                style={{ fontFamily: "'Space Grotesk', sans-serif", color: C.primaryDark }}>
                Powered by Gemini AI
              </span>
            </div>

            {/* Overline */}
            <span className="block text-xs font-bold tracking-[0.35em] uppercase"
              style={{ color: C.outline, fontFamily: "'Space Grotesk', sans-serif" }}>
              Career Intelligence Platform
            </span>

            {/* Headline */}
            <h1 style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(3rem, 6vw, 5rem)",
              fontWeight: 900,
              lineHeight: 1.0,
              letterSpacing: "-0.02em",
              color: C.text,
            }}>
              Land The Job<br />
              <span className="gradient-title">You Deserve.</span>
            </h1>

            <p style={{ color: C.textSub, fontSize: "1.1rem", lineHeight: 1.75, maxWidth: "420px" }}>
              Ascend AI gives ambitious professionals the unfair advantage —
              hyper-personalized resumes, live interview simulations, and
              real salary intelligence.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <MagneticButton>
                <Link href="/dashboard" className="brutal-btn inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-bold text-white transition-all hover:-translate-y-1 block"
                  style={{ backgroundColor: C.primary, fontFamily: "'Space Grotesk', sans-serif", fontSize: "1rem" }}>
                  Start Free <ArrowRight className="w-4 h-4" />
                </Link>
              </MagneticButton>
              <MagneticButton>
                <Link href="/" className="neumorphic inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold transition-colors hover:bg-[#e0dcd2] block"
                  style={{ color: C.primary, fontFamily: "'Space Grotesk', sans-serif", fontSize: "1rem" }}>
                  Watch Demo
                </Link>
              </MagneticButton>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-3 pt-2">
              <div className="flex -space-x-2">
                {[C.primary, C.secondary, C.tertiary, "#16a34a"].map((c, i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 flex items-center justify-center text-white text-xs font-bold"
                    style={{ backgroundColor: c, borderColor: C.bg }}>
                    {["A","B","C","D"][i]}
                  </div>
                ))}
              </div>
              <p style={{ color: C.textSub, fontSize: "0.875rem" }}>
                Joined by <strong style={{ color: C.text }}>10,000+</strong> professionals this month
              </p>
            </div>
          </div>

          {/* ── RIGHT: Floating Cards ── */}
          <div className="relative h-[520px] hidden lg:block">

            {/* Resume Score card */}
            <div className="absolute top-0 right-0 w-72 float-a">
              <SpotlightCard spotColor={`${C.primary}30`} className="glass-card w-full h-full rounded-2xl p-5 brutal-card">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4" style={{ color: C.primary }} />
                    <span className="text-xs font-bold tracking-widest uppercase"
                      style={{ color: C.outline, fontFamily: "'Space Grotesk', sans-serif" }}>
                      Resume Score
                    </span>
                  </div>
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full"
                    style={{ backgroundColor: "#d1fae5", color: "#065f46" }}>+34 pts</span>
                </div>
                <div className="mb-2">
                  <span style={{ fontSize: "3.5rem", fontWeight: 900, color: C.text, fontFamily: "'Space Grotesk', sans-serif", lineHeight: 1 }}>94</span>
                  <span style={{ fontSize: "1.5rem", color: C.primary, fontWeight: 700 }}>%</span>
                </div>
                <p className="text-xs mb-4" style={{ color: C.textSub }}>ATS Compatibility Score</p>
                <div className="space-y-2">
                  {[["Keywords", 98], ["Formatting", 92], ["Impact", 87]].map(([label, val]) => (
                    <div key={label} className="flex items-center gap-3">
                      <span className="text-xs w-20 shrink-0" style={{ color: C.outline, fontFamily: "'Space Grotesk', sans-serif" }}>{label}</span>
                      <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: C.outlineVar }}>
                        <div className="h-full rounded-full" style={{ width: `${val}%`, backgroundColor: C.primary }} />
                      </div>
                      <span className="text-xs font-bold w-7 text-right" style={{ color: C.text }}>{val}</span>
                    </div>
                  ))}
                </div>
              </SpotlightCard>
            </div>

            {/* Live Mock card */}
            <div className="absolute left-0 top-48 w-64 float-b">
              <SpotlightCard spotColor={`${C.tertiary}30`} className="neumorphic w-full h-full rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: C.secondary }} />
                  <Mic className="w-3.5 h-3.5" style={{ color: C.primary }} />
                  <span className="text-xs font-bold tracking-widest uppercase"
                    style={{ color: C.outline, fontFamily: "'Space Grotesk', sans-serif" }}>Live Mock</span>
                </div>
                <p className="text-sm font-semibold mb-3 leading-snug" style={{ color: C.text }}>
                  "How do you handle conflict between design vision and timeline?"
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {["STAR", "Clarity", "Brevity"].map(t => (
                    <span key={t} className="text-xs px-2 py-0.5 rounded-full font-bold"
                      style={{ backgroundColor: C.primaryLight, color: C.primaryDark, fontFamily: "'Space Grotesk', sans-serif" }}>
                      {t}
                    </span>
                  ))}
                </div>
              </SpotlightCard>
            </div>

            {/* Salary badge */}
            <div className="absolute bottom-8 right-8 float-c">
              <SpotlightCard spotColor={`${C.secondary}30`} className="glass-card w-full h-full rounded-2xl px-5 py-4">
                <div className="flex items-center gap-2 mb-1">
                  <TrendingUp className="w-4 h-4" style={{ color: C.secondary }} />
                  <span className="text-xs font-bold tracking-widest uppercase"
                    style={{ color: C.outline, fontFamily: "'Space Grotesk', sans-serif" }}>Market Salary</span>
                </div>
                <p style={{ fontSize: "2rem", fontWeight: 900, color: C.text, fontFamily: "'Space Grotesk', sans-serif", lineHeight: 1.2 }}>$148K</p>
                <p className="text-xs font-bold mt-0.5" style={{ color: "#16a34a" }}>↑ 12% YoY</p>
                <p className="text-xs mt-1" style={{ color: C.outline }}>Global Intelligence Range</p>
              </SpotlightCard>
            </div>

            {/* Decorative letter */}
            <div className="absolute -top-8 -right-8 select-none pointer-events-none"
              style={{ fontSize: "200px", fontWeight: 900, fontFamily: "'Space Grotesk', sans-serif", color: C.primary, opacity: 0.05, lineHeight: 1 }}>
              A
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
