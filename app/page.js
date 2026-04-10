import React from "react";
import Link from "next/link";
import HeroSection from "@/components/hero";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from "next/image";
import { testimonial } from "@/data/testimonial";
import { faqs } from "@/data/faqs";
import MagneticButton from "@/components/ui/magnetic-button";
import SpotlightCard from "@/components/ui/spotlight-card";
import { ArrowRight, BrainCircuit, Briefcase, LineChart, ScrollText, CheckCircle2, UserPlus, FileEdit, Users, Zap } from "lucide-react";

/* ── Ascend Kinetic v2 — Deep Teal AI Palette ── */
const C = {
  bg: "#edeae3",
  bgLow: "#e6e2da",
  bgContainer: "#dedad2",
  bgLowest: "#f8f6f2",
  bgHigh: "#d4d0c8",
  primary: "#0d9488",
  primaryDark: "#0f766e",
  primaryLight: "#ccfbf1",
  secondary: "#f97316",
  tertiary: "#7c3aed",
  text: "#1a2120",
  textSub: "#404845",
  outline: "#7a8280",
  outlineVar: "#c4c0b8",
};

const TICKER_ITEMS = [
  "50+ Industries", "95% Success Rate", "10,000+ Professionals",
  "ATS-Optimized Resumes", "24/7 AI Coaching", "Real Salary Data",
  "Live Interview Simulations", "Weekly Market Updates",
];

const features = [
  {
    tag: "INTELLIGENCE", icon: <BrainCircuit className="w-6 h-6" />, color: C.primary, bg: C.primaryLight,
    title: "Hyper-Personalized Career Guidance",
    desc: "Our AI maps your precise background to real opportunities — not generic advice. It identifies skill gaps and builds a personalized growth plan updated weekly.",
    wide: true,
    stats: [["3×", "More Callbacks"], ["68%", "Avg Salary Boost"], ["2 min", "Resume Draft"]],
  },
  {
    tag: "RESUME", icon: <ScrollText className="w-6 h-6" />, color: C.tertiary, bg: "#ede9fe",
    title: "ATS-First Resume Builder",
    desc: "Beat the bots before humans ever see you. Every resume is tuned for applicant tracking systems and tailored per job description.",
    wide: false,
  },
  {
    tag: "INTERVIEW PREP", icon: <Briefcase className="w-6 h-6" />, color: C.secondary, bg: "#ffedd5",
    title: "Role-Specific Interview Simulations",
    desc: "Practice real questions for your exact level and role. Get structured AI feedback on STAR clarity, depth, and impact — then redo it instantly.",
    wide: false,
  },
  {
    tag: "MARKET", icon: <LineChart className="w-6 h-6" />, color: "#16a34a", bg: "#d1fae5",
    title: "Live Salary & Trend Intelligence",
    desc: "Know your worth with real-time salary benchmarks and hiring trend reports updated weekly from 50+ industries.",
    wide: true,
    bars: [["Software Engineering", 94], ["Product Management", 87], ["Data Science", 91]],
  },
];

const steps = [
  { n: "01", icon: <UserPlus className="w-7 h-7" />, title: "Build Your Profile", desc: "Tell us your industry, experience level, and goals. 3 minutes. Done." },
  { n: "02", icon: <FileEdit className="w-7 h-7" />, title: "Generate Your Documents", desc: "Craft a powerful, ATS-ready resume and cover letter tailored to your exact job target." },
  { n: "03", icon: <Users className="w-7 h-7" />, title: "Simulate Interviews", desc: "Practice with AI-powered mock interviews and receive structured, detailed feedback." },
  { n: "04", icon: <Zap className="w-7 h-7" />, title: "Land the Offer", desc: "Track improvement over time. Negotiate with data. Get the salary you deserve." },
];

export default function LandingPage() {
  return (
    <div style={{ backgroundColor: C.bg, color: C.text }}>
      <HeroSection />

      {/* ── MARQUEE ── */}
      <div className="w-full py-4 overflow-hidden" style={{ backgroundColor: C.primaryDark }}>
        <div className="marquee-track">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-3 mx-10 text-sm font-bold tracking-widest uppercase"
              style={{ color: "#fff", fontFamily: "'Space Grotesk', sans-serif", whiteSpace: "nowrap" }}>
              <span className="w-1.5 h-1.5 rounded-full inline-block flex-shrink-0" style={{ backgroundColor: C.secondary }} />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ── FEATURES BENTO GRID ── */}
      <section className="w-full py-28 subtle-grid" style={{ backgroundColor: C.bg }}>
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="text-xs font-bold tracking-[0.3em] uppercase block mb-3"
                style={{ color: C.outline, fontFamily: "'Space Grotesk', sans-serif" }}>What We Offer</span>
              <h2 className="text-5xl font-black leading-tight tracking-tight"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Everything you need<br /><span className="gradient-title">to break through.</span>
              </h2>
            </div>
            <p className="text-sm leading-relaxed max-w-xs md:text-right" style={{ color: C.textSub }}>
              Four focused tools. One mission: get you hired faster and paid better.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* Wide card 1 */}
            <div className="brutal-card lg:col-span-2 rounded-2xl p-8" style={{ backgroundColor: C.bgLowest }}>
              <span className="text-xs font-bold tracking-[0.25em] uppercase" style={{ color: C.primary, fontFamily: "'Space Grotesk', sans-serif" }}>{features[0].tag}</span>
              <div className="flex items-start gap-4 mt-5">
                <div className="p-3 rounded-xl flex-shrink-0" style={{ backgroundColor: C.primaryLight }}>
                  <span style={{ color: C.primary }}>{features[0].icon}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{features[0].title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: C.textSub }}>{features[0].desc}</p>
                </div>
              </div>
              <div className="mt-8 flex flex-wrap gap-8">
                {features[0].stats.map(([val, lab]) => (
                  <div key={lab}>
                    <p className="text-3xl font-black" style={{ color: C.primary, fontFamily: "'Space Grotesk', sans-serif" }}>{val}</p>
                    <p className="text-xs mt-0.5" style={{ color: C.outline, fontFamily: "'Space Grotesk', sans-serif" }}>{lab}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Card 2 */}
            <SpotlightCard spotColor="rgba(124, 58, 237, 0.15)" className="glass-card rounded-2xl p-7 h-full">
              <span className="text-xs font-bold tracking-[0.25em] uppercase" style={{ color: C.tertiary, fontFamily: "'Space Grotesk', sans-serif" }}>{features[1].tag}</span>
              <div className="p-3 rounded-xl w-fit mt-4 mb-3" style={{ backgroundColor: "#ede9fe" }}>
                <span style={{ color: C.tertiary }}>{features[1].icon}</span>
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{features[1].title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: C.textSub }}>{features[1].desc}</p>
            </SpotlightCard>

            {/* Card 3 */}
            <SpotlightCard spotColor="rgba(249, 115, 22, 0.15)" className="neumorphic rounded-2xl p-7 h-full">
              <span className="text-xs font-bold tracking-[0.25em] uppercase" style={{ color: C.secondary, fontFamily: "'Space Grotesk', sans-serif" }}>{features[2].tag}</span>
              <div className="p-3 rounded-xl w-fit mt-4 mb-3" style={{ backgroundColor: "#ffedd5" }}>
                <span style={{ color: C.secondary }}>{features[2].icon}</span>
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{features[2].title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: C.textSub }}>{features[2].desc}</p>
            </SpotlightCard>

            {/* Wide card 4 */}
            <div className="lg:col-span-2 rounded-2xl p-8 border-2"
              style={{ backgroundColor: C.bgLowest, borderColor: "#1a2120", boxShadow: "4px 4px 0px #16a34a" }}>
              <span className="text-xs font-bold tracking-[0.25em] uppercase" style={{ color: "#16a34a", fontFamily: "'Space Grotesk', sans-serif" }}>{features[3].tag}</span>
              <div className="flex items-start gap-4 mt-5">
                <div className="p-3 rounded-xl flex-shrink-0" style={{ backgroundColor: "#d1fae5" }}>
                  <span style={{ color: "#16a34a" }}>{features[3].icon}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{features[3].title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: C.textSub }}>{features[3].desc}</p>
                </div>
              </div>
              <div className="mt-8 space-y-3 max-w-md">
                {features[3].bars.map(([role, val]) => (
                  <div key={role} className="flex items-center gap-4">
                    <span className="text-xs w-40 shrink-0" style={{ color: C.outline, fontFamily: "'Space Grotesk', sans-serif" }}>{role}</span>
                    <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: C.bgHigh }}>
                      <div className="h-full rounded-full" style={{ width: `${val}%`, backgroundColor: "#16a34a" }} />
                    </div>
                    <span className="text-xs font-bold w-8 text-right" style={{ color: C.text }}>{val}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="w-full py-28" style={{ backgroundColor: C.bgContainer }}>
        <div className="container mx-auto px-6 md:px-12">
          <div className="mb-16">
            <span className="text-xs font-bold tracking-[0.3em] uppercase block mb-3" style={{ color: C.outline, fontFamily: "'Space Grotesk', sans-serif" }}>The Process</span>
            <h2 className="text-5xl font-black tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Four steps to<br /><span className="gradient-title">your next role.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div key={i} className="relative group">
                <div className="absolute -top-6 -left-2 select-none pointer-events-none"
                  style={{ fontSize: "7rem", fontWeight: 900, fontFamily: "'Space Grotesk', sans-serif", color: C.primary, opacity: 0.07, lineHeight: 1 }}>
                  {step.n}
                </div>
                <div className="glass-card rounded-2xl p-6 h-full relative z-10">
                  <div className="p-3 rounded-lg w-fit mb-4" style={{ backgroundColor: C.primaryLight }}>
                    <span style={{ color: C.primary }}>{step.icon}</span>
                  </div>
                  <p className="text-xs font-bold tracking-widest mb-2" style={{ color: C.primary, fontFamily: "'Space Grotesk', sans-serif" }}>{step.n}</p>
                  <h3 className="text-lg font-bold mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{step.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: C.textSub }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="w-full py-28 relative overflow-hidden" style={{ backgroundColor: C.bg }}>
        <div className="absolute -top-32 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle, ${C.primaryLight}, transparent)`, opacity: 0.6 }} />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="mb-16">
            <span className="text-xs font-bold tracking-[0.3em] uppercase block mb-3" style={{ color: C.outline, fontFamily: "'Space Grotesk', sans-serif" }}>Social Proof</span>
            <h2 className="text-5xl font-black tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Real people.<br /><span className="gradient-title">Real results.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonial.map((t, i) => (
              <div key={i}
                className={i === 1 ? "rounded-2xl p-8 relative border-2" : "glass-card rounded-2xl p-8 relative"}
                style={i === 1 ? { backgroundColor: C.bgLowest, borderColor: "#1a2120", boxShadow: `4px 4px 0px ${C.primary}` } : {}}>
                <span className="absolute top-4 left-6 select-none"
                  style={{ fontSize: "5rem", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 900, color: C.primary, opacity: 0.08, lineHeight: 1 }}>"</span>
                <div className="relative z-10">
                  <p className="text-base leading-relaxed mb-8 italic" style={{ color: C.textSub }}>"{t.quote}"</p>
                  <div className="flex items-center gap-3">
                    <Image width={44} height={44} src={t.image} alt={t.author} className="rounded-full ring-2 object-cover"
                      style={{ outlineColor: C.primaryLight }} />
                    <div>
                      <p className="font-bold text-sm" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{t.author}</p>
                      <p className="text-xs" style={{ color: C.textSub }}>{t.role}</p>
                      <p className="text-xs font-bold" style={{ color: C.primary, fontFamily: "'Space Grotesk', sans-serif" }}>{t.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="w-full py-28 subtle-grid" style={{ backgroundColor: C.bgLow }}>
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div className="lg:sticky lg:top-24">
              <span className="text-xs font-bold tracking-[0.3em] uppercase block mb-3" style={{ color: C.outline, fontFamily: "'Space Grotesk', sans-serif" }}>FAQ</span>
              <h2 className="text-5xl font-black tracking-tight mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Got<br /><span className="gradient-title">questions?</span>
              </h2>
              <p className="text-base leading-relaxed mb-8 max-w-xs" style={{ color: C.textSub }}>
                Everything you need to know about Ascend AI and how we help you land your next role.
              </p>
              <MagneticButton>
                <Link href="/dashboard" className="brutal-btn inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-white transition-all hover:-translate-y-1"
                  style={{ backgroundColor: C.primary, fontFamily: "'Space Grotesk', sans-serif" }}>
                  Get Started Free <ArrowRight className="w-4 h-4" />
                </Link>
              </MagneticButton>
            </div>
            <div>
              <Accordion type="single" collapsible className="space-y-3">
                {faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="glass-card rounded-2xl px-6 border-none">
                    <AccordionTrigger className="text-left font-bold py-5 hover:no-underline"
                      style={{ fontFamily: "'Space Grotesk', sans-serif", color: C.text }}>
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm pb-5 leading-relaxed" style={{ color: C.textSub }}>
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="w-full py-28 relative overflow-hidden" style={{ backgroundColor: C.primaryDark }}>
        <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(255,255,255,0.08), transparent)", filter: "blur(40px)" }} />
        <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle, ${C.secondary}40, transparent)`, filter: "blur(50px)" }} />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div>
              <span className="text-xs font-bold tracking-[0.3em] uppercase block mb-3"
                style={{ color: "rgba(255,255,255,0.45)", fontFamily: "'Space Grotesk', sans-serif" }}>Ascend AI</span>
              <h2 className="text-5xl md:text-6xl font-black leading-tight tracking-tight"
                style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#ffffff" }}>
                Ready to<br />
                <span style={{ color: C.secondary }}>Ascend?</span>
              </h2>
              <p className="mt-4 text-base leading-relaxed max-w-md" style={{ color: "rgba(255,255,255,0.6)" }}>
                Join 10,000+ professionals who switched from guessing to growing. Free to start — no credit card required.
              </p>
            </div>
            <div className="flex flex-col gap-6 items-start lg:items-end">
              <div className="flex flex-col gap-3">
                {["ATS-Optimized Resume", "Role-Specific Interview Prep", "Live Salary Intelligence", "AI Cover Letter"].map(f => (
                  <div key={f} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: C.secondary }} />
                    <span className="text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>{f}</span>
                  </div>
                ))}
              </div>
              <MagneticButton>
                <Link href="/dashboard" className="inline-flex items-center gap-2 px-10 py-4 rounded-xl font-black text-lg transition-all hover:-translate-y-1 block"
                  style={{ backgroundColor: "#ffffff", color: C.primaryDark, fontFamily: "'Space Grotesk', sans-serif", boxShadow: "0 8px 30px rgba(0,0,0,0.2)" }}>
                  Start Free Today <ArrowRight className="w-5 h-5" />
                </Link>
              </MagneticButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
