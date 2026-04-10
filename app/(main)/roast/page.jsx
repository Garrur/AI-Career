import React from "react";
import RoastClient from "./_components/roast-client";

export default function RoastPage() {
  return (
    <div className="container mx-auto px-6 md:px-12 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="mb-10 text-center">
          <span className="text-xs font-bold tracking-[0.3em] uppercase block mb-3 text-red-500 font-mono">
            Experimental Feature
          </span>
          <h1 className="text-5xl font-black tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Roast My <span className="gradient-title">Resume.</span>
          </h1>
          <p className="mt-4 text-sm text-gray-500 max-w-lg mx-auto">
            Upload your resume and get brutally honest feedback from our AI FAANG Recruiter. No sugar-coating. Just actionable truths to fix your application.
          </p>
        </div>

        {/* Client-side gamified UI */}
        <RoastClient />
      </div>
    </div>
  );
}
