"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed right-8 z-50 p-4 bg-blue-600 text-white rounded-full shadow-lg transition-all duration-300 hover:bg-blue-700 hover:scale-110 ${
        showScrollTop
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10 pointer-events-none"
      } bottom-24 md:bottom-8`}
      aria-label="回到顶部"
    >
      <ArrowUp className="w-6 h-6" />
    </button>
  );
}
