"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { UploadCloud, Flame, CheckCircle, Search, RefreshCw, Download, Share2 } from "lucide-react";
import SpotlightCard from "@/components/ui/spotlight-card";
import html2canvas from "html2canvas";

export default function RoastClient() {
  const [file, setFile] = useState(null);
  const [scanState, setScanState] = useState("idle"); // idle, scanning, complete
  const [roastData, setRoastData] = useState(null);
  const badgeRef = useRef(null);

  // Deep Teal AI Gamified Colors
  const colors = {
    bgDark: "#1a2120",
    bgCard: "#232e2c",
    primary: "#0d9488",
    danger: "#ef4444",
    accent: "#f97316",
    textMuted: "#7a8280",
    textLight: "#ccfbf1",
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    if (scanState !== "idle") return;
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && droppedFile.type === "application/pdf") {
      startRoast(droppedFile);
    } else {
      alert("Please upload a PDF file.");
    }
  };

  const handleFileSelect = (e) => {
    if (scanState !== "idle") return;
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      startRoast(selectedFile);
    }
  };

  const startRoast = (file) => {
    setFile(file);
    setScanState("scanning");

    // Simulate AI scanning and roast generation (this would be an API call)
    setTimeout(() => {
      setRoastData({
        score: 42,
        title: "The 'I put Microsoft Word under skills' Resume",
        verdict: "A recruiter would spend exactly 3.4 seconds on this before throwing it in the digital trash bin.",
        tags: ["Format: 1999", "Impact: Non-existent", "Keywords: Weak"],
        points: [
          "Your summary objective says you 'want a challenging role'. Everyone does. It's wasted space.",
          "You listed 'Team Player' as a skill. That's a minimum requirement for employment, not a hard skill.",
          "Bullet points read like a job description rather than achievements. Where are the numbers?",
        ],
      });
      setScanState("complete");
    }, 4500);
  };

  const downloadBadge = async () => {
    if (badgeRef.current) {
      const canvas = await html2canvas(badgeRef.current, { backgroundColor: colors.bgDark });
      const link = document.createElement("a");
      link.download = "ascend-resume-roast.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    }
  };

  const resetRoast = () => {
    setFile(null);
    setScanState("idle");
    setRoastData(null);
  };

  return (
    <div className="w-full">
      {/* ── STAGE 1: IDLE UPLOAD ── */}
      {scanState === "idle" && (
        <SpotlightCard spotColor={`${colors.primary}50`} className="rounded-2xl border-2 p-1 relative overflow-hidden" 
          style={{ borderColor: colors.bgDark, backgroundColor: colors.bgDark }}>
          <div
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            className="w-full h-80 rounded-xl border-dashed border-2 flex flex-col items-center justify-center relative cursor-pointer group transition-all"
            style={{ borderColor: colors.textMuted, backgroundColor: colors.bgCard }}
          >
            <input
              type="file"
              accept=".pdf"
              onChange={handleFileSelect}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
            />
            <div className="p-4 rounded-full bg-black/20 group-hover:scale-110 transition-transform duration-300">
              <UploadCloud className="w-10 h-10" style={{ color: colors.primary }} />
            </div>
            <h3 className="mt-4 text-xl font-bold font-mono tracking-tight" style={{ color: "white" }}>
              Drop your PDF here
            </h3>
            <p className="mt-2 text-sm max-w-sm text-center" style={{ color: colors.textMuted }}>
              (We promise to be ruthless. Only upload if you can handle the truth.)
            </p>
          </div>
        </SpotlightCard>
      )}

      {/* ── STAGE 2: SCANNING ANIMATION ── */}
      {scanState === "scanning" && (
        <div className="w-full h-80 rounded-2xl flex flex-col items-center justify-center border-2 relative overflow-hidden"
          style={{ borderColor: colors.primary, backgroundColor: colors.bgDark }}>
          
          {/* Scanning line */}
          <motion.div
            className="absolute top-0 left-0 w-full h-1 z-20"
            style={{ backgroundColor: colors.primary, boxShadow: `0 0 20px 5px ${colors.primary}` }}
            animate={{ top: ["0%", "100%", "0%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />

          <div className="relative z-10 flex flex-col items-center">
            <Search className="w-12 h-12 animate-pulse mb-6" style={{ color: colors.primary }} />
            <h3 className="text-2xl font-bold font-mono tracking-tight" style={{ color: "white" }}>
              Scanning for weak points...
            </h3>
            <div className="mt-4 flex flex-col gap-2 w-64">
              <motion.div className="h-2 rounded-full" style={{ backgroundColor: colors.bgCard }}>
                <motion.div className="h-full rounded-full" style={{ backgroundColor: colors.primary }}
                  animate={{ width: ["0%", "100%"] }} transition={{ duration: 4.5, ease: "easeInOut" }} />
              </motion.div>
              <div className="flex justify-between text-xs font-mono" style={{ color: colors.textLight }}>
                <span>Detecting clichés</span>
                <span className="animate-pulse">Loading models...</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── STAGE 3: THE ROAST ── */}
      {scanState === "complete" && roastData && (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          
          <div className="flex justify-end gap-3">
             <button onClick={resetRoast} className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold border-2 transition-all hover:bg-red-50"
              style={{ borderColor: colors.danger, color: colors.danger }}>
              <RefreshCw className="w-4 h-4" /> Try Again?
            </button>
            <button onClick={downloadBadge} className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold text-white transition-all shadow-[4px_4px_0px_#f97316] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#f97316]"
              style={{ backgroundColor: colors.bgDark, border: `2px solid ${colors.bgDark}` }}>
              <Download className="w-4 h-4 text-orange-500" /> Save Badge
            </button>
          </div>

          {/* Shareable Badge Container */}
          <div ref={badgeRef} className="rounded-3xl p-8 relative overflow-hidden text-left"
            style={{ backgroundColor: colors.bgDark, color: "white", boxShadow: `0 20px 40px -10px rgba(0,0,0,0.5)` }}>
            
            {/* Ambient Background Glow inside Badge */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full opacity-10 blur-[80px] pointer-events-none"
              style={{ background: `radial-gradient(circle, ${colors.danger} 0%, transparent 70%)` }} />
            
            <div className="relative z-10 flex flex-col md:flex-row gap-10 items-start">
              
              {/* Score Column */}
              <div className="flex-shrink-0 text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded border font-mono text-xs font-bold uppercase tracking-widest"
                  style={{ borderColor: `${colors.danger}50`, color: colors.danger, backgroundColor: `${colors.danger}10` }}>
                  <Flame className="w-3.5 h-3.5 fill-red-500" />
                  Brutal Analysis
                </div>
                <div className="font-mono mt-2" style={{ fontSize: "5rem", fontWeight: 900, lineHeight: 1, color: "white" }}>
                  {roastData.score}<span className="text-3xl text-gray-400">%</span>
                </div>
                <p className="mt-2 text-sm max-w-[120px]" style={{ color: colors.textMuted }}>Overall Survival Score</p>
              </div>

              {/* Verdict Column */}
              <div className="flex-grow">
                <h2 className="text-2xl md:text-3xl font-black mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  "{roastData.title}"
                </h2>
                <div className="p-4 rounded-xl mb-5 text-sm md:text-base leading-relaxed italic"
                  style={{ backgroundColor: colors.bgCard, color: colors.textLight, borderLeft: `4px solid ${colors.danger}` }}>
                  "{roastData.verdict}"
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {roastData.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded text-xs font-bold font-mono"
                      style={{ backgroundColor: "rgba(255,255,255,0.05)", color: colors.textMuted, border: "1px solid rgba(255,255,255,0.1)" }}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: colors.primary }}>The Hard Truths:</h4>
                  {roastData.points.map((point, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 mt-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: colors.danger }} />
                      <p className="text-sm leading-relaxed" style={{ color: "#d1d5db" }}>{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Branding Footer for Screenshot */}
            <div className="mt-10 pt-4 flex items-center justify-between border-t border-white/10">
              <span className="font-black text-sm tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif", color: colors.primary }}>
                Ascend<span style={{ color: colors.accent }}>.</span>AI <span className="font-normal text-gray-500 text-xs ml-1 font-sans tracking-normal">| Roast My Resume</span>
              </span>
              <span className="text-xs font-mono" style={{ color: colors.textMuted }}>Get your score at ascend.ai/roast</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
