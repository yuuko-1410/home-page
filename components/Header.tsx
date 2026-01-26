"use client";

import { useState, useEffect, useRef } from "react";
import { Globe, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface HeaderProps {
  activePath?: string;
}

export default function Header({ activePath = "/" }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const langDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        langDropdownRef.current &&
        !langDropdownRef.current.contains(event.target as Node)
      ) {
        setIsLangOpen(false);
      }
    };

    if (isLangOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isLangOpen]);

  const navItems = [
    { href: "/", label: "首页" },
    { href: "/products/smart-knee", label: "产品" },
    { href: "/technology", label: "技术" },
    { href: "/about", label: "我们" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-300 ${
        isScrolled ? "bg-white/90 border-b border-gray-200/50" : "bg-white/50"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            isScrolled ? "h-14" : "h-20"
          }`}
        >
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo_111.png"
              alt="Synrise"
              width={isScrolled ? 32 : 52}
              height={isScrolled ? 32 : 52}
              className="object-contain"
              priority
            />
            {/*<span className={`font-semibold text-gray-900 transition-all duration-300 ${
              isScrolled ? "text-lg" : "text-2xl"
            }`}>
              Synrise
            </span>*/}
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-all duration-300 ${
                  activePath === item.href
                    ? "text-[#FD5202] font-semibold"
                    : "text-gray-600 hover:text-[#FD5202]"
                } ${isScrolled ? "text-xs" : "text-base"}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-4">
            <div className="relative" ref={langDropdownRef}>
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className={`flex items-center gap-1 text-gray-600 hover:text-[#FD5202] transition-all duration-300 ${
                  isScrolled ? "text-xs" : "text-base"
                }`}
              >
                <Globe className="w-4 h-4" />
                <span>中文</span>
                <ChevronDown
                  className={`w-3 h-3 transition-transform duration-200 ${
                    isLangOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isLangOpen && (
                <div className="absolute right-0 mt-2 py-2 w-32 bg-white rounded-lg shadow-lg border border-gray-200">
                  <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                    中文
                  </button>
                  <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                    English
                  </button>
                </div>
              )}
            </div>
            <Link
              href="/contact"
              className={`bg-[#FD5202] text-white font-medium rounded-full hover:bg-[#e04802] transition-all duration-300 inline-block ${
                isScrolled ? "px-3 py-1 text-xs" : "px-4 py-1.5 text-base"
              }`}
            >
              联系我们
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
