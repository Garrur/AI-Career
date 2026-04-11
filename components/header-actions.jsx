"use client";

import React from "react";
import Link from "next/link";
import { useUser, SignInButton, UserButton } from "@clerk/nextjs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  LayoutDashboard,
  FileText,
  GraduationCap,
  PenBox,
  ChevronDown,
  StarsIcon,
  Flame,
} from "lucide-react";

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

export default function HeaderActions() {
  const { isSignedIn, isLoaded } = useUser();

  if (!isLoaded) {
    return (
      <div className="flex items-center gap-2 md:gap-3 opacity-0 animate-pulse">
        <div className="w-24 h-9 bg-gray-200 rounded-lg" />
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 md:gap-3">
      {isSignedIn ? (
        <>
          {/* Dashboard Link */}
          <Link
            href="/dashboard"
            className="hidden md:flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold transition-all hover:-translate-y-0.5"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              color: C.textSub,
              backgroundColor: "rgba(53, 37, 205, 0.07)",
            }}
          >
            <LayoutDashboard className="w-4 h-4" />
            Industry Insights
          </Link>
          <Link href="/dashboard">
            <button
              className="md:hidden w-9 h-9 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: "rgba(53, 37, 205, 0.07)", color: C.primary }}
            >
              <LayoutDashboard className="w-4 h-4" />
            </button>
          </Link>

          {/* Growth Tools Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-bold transition-all hover:-translate-y-0.5"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  background: `linear-gradient(135deg, ${C.primary}, #7531e6)`,
                  color: "#fff",
                  boxShadow: `2px 2px 0px rgba(53,37,205,0.35)`,
                }}
              >
                <StarsIcon className="w-3.5 h-3.5" />
                <span className="hidden md:block">Growth Tools</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="w-52 rounded-xl p-1.5"
              style={{
                backgroundColor: "#fff",
                border: `1px solid ${C.outlineVar}`,
                boxShadow: `4px 4px 0px ${C.primary}`,
              }}
            >
              <DropdownMenuItem asChild>
                <Link
                  href="/resume"
                  className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium cursor-pointer"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", color: C.text }}
                >
                  <FileText className="w-4 h-4" style={{ color: C.primary }} /> Build Resume
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link
                  href="/ai-cover-letter"
                  className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium cursor-pointer"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", color: C.text }}
                >
                  <PenBox className="w-4 h-4" style={{ color: "#7531e6" }} /> Cover Letter
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link
                  href="/interview"
                  className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium cursor-pointer"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", color: C.text }}
                >
                  <GraduationCap className="w-4 h-4" style={{ color: C.secondary }} /> Interview Prep
                </Link>
              </DropdownMenuItem>
              <div
                className="h-px w-full my-1"
                style={{ backgroundColor: C.outlineVar, opacity: 0.5 }}
              />
              <DropdownMenuItem asChild>
                <Link
                  href="/roast"
                  className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-bold cursor-pointer"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    color: "#ef4444",
                    backgroundColor: "#fef2f2",
                  }}
                >
                  <Flame className="w-4 h-4" style={{ color: "#ef4444" }} /> Roast My Resume
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <UserButton
            appearance={{
              elements: {
                avatarBox: "w-9 h-9 ring-2 ring-offset-1",
                userButtonPopoverCard: "shadow-xl rounded-2xl",
                userPreviewMainIdentifier: "font-semibold",
              },
            }}
          />
        </>
      ) : (
        <SignInButton mode="modal">
          <button
            className="px-4 py-2 rounded-lg text-sm font-bold transition-all hover:-translate-y-0.5"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              color: C.primary,
              border: `2px solid ${C.primary}`,
              backgroundColor: "transparent",
              boxShadow: `2px 2px 0px ${C.primary}`,
            }}
          >
            Sign In
          </button>
        </SignInButton>
      )}
    </div>
  );
}
