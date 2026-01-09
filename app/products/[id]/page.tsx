"use client";

import Link from "next/link";
import {
  Brain,
  Cpu,
  GraduationCap,
  Battery,
  Feather,
  Shield,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import BottomNavigation from "@/components/BottomNavigation";

export default function ProductDetailPage() {
  return (
    <div className="min-h-screen bg-white pb-16 md:pb-0">
      <Header activePath="/products/smart-knee" />

      {/* Hero Section */}
      <section className="py-20 bg-black text-white pt-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-5xl lg:text-6xl font-semibold mb-6">
              Synrise Pro 智能膝关节
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              搭载 SynchroMind™ 协同智能算法，重新定义智能义肢标准
            </p>
            <div className="flex gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full" />
                <span>50+ 核心专利</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full" />
                <span>&lt;10ms 响应速度</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full" />
                <span>24h 超长续航</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Image Placeholder */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="aspect-video bg-linear-to-br from-gray-100 to-gray-200 rounded-3xl flex items-center justify-center">
            <div className="text-center">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4" />
              <p className="text-gray-500">产品图片占位</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Features */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900 mb-16 text-center">
            核心特性
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-8 bg-gray-50 rounded-2xl">
              <div className="w-12 h-12 bg-blue-600 rounded-xl mb-6 flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                SynchroMind™ 算法
              </h3>
              <p className="text-gray-600">
                AI与生物力学深度融合，实时感知步态，预判行动意图，比人类神经反应更快。
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-8 bg-gray-50 rounded-2xl">
              <div className="w-12 h-12 bg-blue-600 rounded-xl mb-6 flex items-center justify-center">
                <Cpu className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                多传感器融合
              </h3>
              <p className="text-gray-600">
                高精度传感器阵列，全方位采集运动数据，确保每一步都精准可靠。
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 bg-gray-50 rounded-2xl">
              <div className="w-12 h-12 bg-blue-600 rounded-xl mb-6 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                自适应学习
              </h3>
              <p className="text-gray-600">
                系统持续学习您的行走习惯，越用越懂您，让义肢真正成为身体的一部分。
              </p>
            </div>

            {/* Feature 4 */}
            <div className="p-8 bg-gray-50 rounded-2xl">
              <div className="w-12 h-12 bg-blue-600 rounded-xl mb-6 flex items-center justify-center">
                <Battery className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                24h 超长续航
              </h3>
              <p className="text-gray-600">
                高容量电池系统，全天候使用无忧。2小时快速充电，随时准备出发。
              </p>
            </div>

            {/* Feature 5 */}
            <div className="p-8 bg-gray-50 rounded-2xl">
              <div className="w-12 h-12 bg-blue-600 rounded-xl mb-6 flex items-center justify-center">
                <Feather className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                轻量化设计
              </h3>
              <p className="text-gray-600">
                采用航空级材料，整机重量更轻，佩戴更舒适，行动更自如。
              </p>
            </div>

            {/* Feature 6 */}
            <div className="p-8 bg-gray-50 rounded-2xl">
              <div className="w-12 h-12 bg-blue-600 rounded-xl mb-6 flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                IP67 防水防尘
              </h3>
              <p className="text-gray-600">
                工业级防护，无惧风雨，适应各种复杂环境，让生活更加自由。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900 mb-16 text-center">
            技术规格
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8">
              <div className="space-y-6">
                <div className="flex justify-between items-center py-4 border-b border-gray-200">
                  <span className="text-gray-600">响应速度</span>
                  <span className="font-semibold text-gray-900">&lt;10ms</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-gray-200">
                  <span className="text-gray-600">续航时间</span>
                  <span className="font-semibold text-gray-900">24小时</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-gray-200">
                  <span className="text-gray-600">充电时间</span>
                  <span className="font-semibold text-gray-900">2小时</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-gray-200">
                  <span className="text-gray-600">重量</span>
                  <span className="font-semibold text-gray-900">约 1.2 kg</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-gray-200">
                  <span className="text-gray-600">防护等级</span>
                  <span className="font-semibold text-gray-900">IP67</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-gray-200">
                  <span className="text-gray-600">适配身高</span>
                  <span className="font-semibold text-gray-900">
                    155-190 cm
                  </span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-gray-200">
                  <span className="text-gray-600">最大承重</span>
                  <span className="font-semibold text-gray-900">120 kg</span>
                </div>
                <div className="flex justify-between items-center py-4">
                  <span className="text-gray-600">质保期</span>
                  <span className="font-semibold text-gray-900">2年</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-semibold mb-6">
            准备好体验了吗？
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            立即联系我们，了解更多产品详情和预约体验
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-all hover:scale-105 inline-block"
            >
              联系我们
            </Link>
            <Link
              href="/technology"
              className="px-8 py-4 text-white font-medium rounded-full border-2 border-white hover:bg-white hover:text-gray-900 transition-all hover:scale-105 inline-block"
            >
              了解技术
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
      <BottomNavigation activePath="/products" />
    </div>
  );
}
