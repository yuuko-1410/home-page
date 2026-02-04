"use client";

import { Home, Box, Wrench, Newspaper, Users, Mail } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface BottomNavigationProps {
  activePath?: string;
}

export default function BottomNavigation({
  activePath = "/",
}: BottomNavigationProps) {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "首页", icon: Home },
    { href: "/products/smart-knee", label: "产品", icon: Box },
    { href: "/technology", label: "技术", icon: Wrench },
    { href: "/news", label: "新闻", icon: Newspaper },
    { href: "/about", label: "我们", icon: Users },
    { href: "/contact", label: "联系", icon: Mail },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 md:hidden z-50">
      <div className="flex items-center justify-around h-16">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href || activePath === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex flex-col items-center justify-center gap-1 flex-1 h-full"
            >
              <Icon
                className={`w-5 h-5 transition-colors ${
                  isActive ? "text-[#FD5202]" : "text-gray-600"
                }`}
              />
              <span
                className={`text-xs transition-colors ${
                  isActive ? "text-[#FD5202] font-medium" : "text-gray-600"
                }`}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
