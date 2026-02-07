import Link from "next/link";
import { Linkedin, Instagram, X } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white py-12 border-t border-gray-200">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-sm font-semibold mb-4 text-gray-900">产品</h4>
            <ul className="space-y-2 text-xs text-gray-600">
              <li>
                <Link
                  href="/products/smart-knee"
                  className="hover:text-[#19166C] transition-colors"
                >
                  森越® 仿生液压智能膝关节
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4 text-gray-900">公司</h4>
            <ul className="space-y-2 text-xs text-gray-600">
              <li>
                <Link
                  href="/about"
                  className="hover:text-[#19166C] transition-colors"
                >
                  关于我们
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#19166C] transition-colors"
                >
                  加入我们
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4 text-gray-900">技术</h4>
            <ul className="space-y-2 text-xs text-gray-600">
              <li>
                <Link
                  href="/technology"
                  className="hover:text-[#19166C] transition-colors"
                >
                  SynchroMind™
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#19166C] transition-colors"
                >
                  科研合作
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4 text-gray-900">联络</h4>
            <ul className="space-y-2 text-xs text-gray-600">
              <li>synrise_tech@163.com</li>
              {/*<li>400-888-8888</li>*/}
              <li>四川省成都市高新区合顺路2号2栋1单元22楼07号</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              <span className="text-xs text-gray-600">社交媒体</span>
              <div className="flex items-center gap-4">
                <a
                  href="https://www.linkedin.com/company/synrisetechnology"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#19166C] transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/synrise_technology/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#19166C] transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://x.com/Synrise_Tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#19166C] transition-colors"
                  aria-label="X"
                >
                  <X className="w-5 h-5" />
                </a>
              </div>
            </div>
            <p className="text-xs text-gray-600">
              © 2025 Synrise 森越成行. 保留所有权利. 蜀ICP备2025174766号-1
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
