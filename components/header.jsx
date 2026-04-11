import React from "react";
import Link from "next/link";
import HeaderActions from "./header-actions";
import { checkUser } from "@/lib/checkUser";

const C = {
  primary: "#0d9488",
  primaryDark: "#0f766e",
  secondary: "#f97316",
  tertiary: "#7c3aed",
  text: "#1a2120",
  textSub: "#404845",
  outline: "#7a8280",
  outlineVar: "#c4c0b8",
  bg: "#edeae3",
};

export default async function Header() {
  await checkUser();

  return (
    <header
      className="fixed top-0 w-full z-50"
      style={{
        background: "rgba(237, 234, 227, 0.75)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        borderBottom: `1px solid rgba(199, 196, 216, 0.4)`,
      }}
    >
      <nav className="container mx-auto px-6 md:px-12 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center font-black text-white text-sm"
            style={{
              background: `linear-gradient(135deg, ${C.primary}, #7531e6)`,
              fontFamily: "'Space Grotesk', sans-serif",
              boxShadow: `2px 2px 0px ${C.primary}`,
            }}>
            A
          </div>
          <span className="font-black text-xl tracking-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif", color: C.primary }}>
            Ascend<span style={{ color: C.secondary }}>.</span>AI
          </span>
        </Link>

        <HeaderActions />
      </nav>
    </header>
  );
}
