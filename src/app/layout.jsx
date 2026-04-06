import { Inter } from "next/font/google";
import "./globals.css";

// GSAP Setup
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Navbar } from "@/components/layouts/Navbar";
import { ThemeProvider } from "@/providers/theme-providers";
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PPA — Master Focus & Get More Done",
  description: "Eliminate procrastination effortlessly.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}