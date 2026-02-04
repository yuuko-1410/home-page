import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import BottomNavigation from "@/components/BottomNavigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "新闻 - Synrise 森越成行",
  description: "森越成行最新动态、技术突破、合作伙伴关系等新闻资讯。",
};

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-white pb-16 md:pb-0">
      <Header activePath="/news" />

      {/* Hero Section */}
      <section className="relative h-[300px] bg-[#19166C] text-white overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/bg/icpark.webp"
            alt="新闻背景"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 container mx-auto px-6 lg:px-8">
          <h1 className="text-5xl lg:text-6xl font-semibold">新闻中心</h1>
        </div>
      </section>

      {/* News List */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            {/* News Item */}
            <article className="mb-16 pb-16 border-b border-gray-200">
              <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 bg-[#FD5202] text-white text-sm font-medium rounded-full">
                  公司动态
                </span>
                <span className="text-gray-500 text-sm">2025-02-04</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-6 hover:text-[#FD5202] transition-colors cursor-pointer">
                森越成行完成种子轮融资，以具身智能定义人机共生新范式
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                近日，国内具身智能领域的创新企业森越成行 (Synrise Technology)
                宣布完成种子轮融资。本轮融资由祥峰中国（Vertex Ventures
                China）领投，险峰K2（K2VC）跟投，浪潮资本担任长期独家财务顾问。
              </p>
              <Link
                href="https://mp.weixin.qq.com/s/AVIKCjm0JHBd-CY057ZdGQ"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#19166C] font-medium hover:text-[#FD5202] transition-colors"
              >
                阅读全文 <span className="text-sm">→</span>
              </Link>
            </article>

            {/* More news items can be added here following the same pattern */}
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
      <BottomNavigation activePath="/news" />
    </div>
  );
}
