import { Space_Grotesk, Plus_Jakarta_Sans, Space_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });
const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-plus-jakarta" });
const spaceMono = Space_Mono({ weight: ["400", "700"], subsets: ["latin"], variable: "--font-space-mono" });

export const metadata = {
  title: "Ascend AI — Career Intelligence Platform",
  description: "Land the job you deserve with AI-powered resumes, interview simulations, and salary intelligence.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <head>
          <link rel="icon" href="/logo.png" sizes="any" />
        </head>
        <body className={`${spaceGrotesk.variable} ${plusJakartaSans.variable} ${spaceMono.variable} font-sans`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main className="min-h-screen">{children}</main>
            <Toaster richColors />

            <footer style={{ backgroundColor: "#dedad2", borderTop: "1px solid rgba(196, 192, 184, 0.5)" }}>
              <div className="container mx-auto px-6 md:px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
                <span className="font-black text-lg tracking-tight"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#0d9488" }}>
                  Ascend<span style={{ color: "#f97316" }}>.</span>AI
                </span>
                <p className="text-sm" style={{ color: "#404845" }}>Made with ♥ by Utkarsh &mdash; © 2025 Ascend AI. All rights reserved.</p>
                <div className="flex gap-5 text-sm" style={{ color: "#7a8280", fontFamily: "'Space Grotesk', sans-serif" }}>
                  <a href="#" className="hover:text-primary transition-colors">Privacy</a>
                  <a href="#" className="hover:text-primary transition-colors">Terms</a>
                  <a href="#" className="hover:text-primary transition-colors">Contact</a>
                </div>
              </div>
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
