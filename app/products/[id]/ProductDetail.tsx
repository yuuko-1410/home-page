"use client";

import Link from "next/link";
import {
  Brain,
  Cpu,
  GraduationCap,
  Battery,
  Feather,
  Shield,
  Smartphone,
  Target,
  Activity,
} from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import BottomNavigation from "@/components/BottomNavigation";

export default function ProductDetail() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    "/images/publicity/Aswfds.webp",
    "/images/publicity/Oswdas.webp",
    "/images/publicity/Qaxcef.webp",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white pb-16 md:pb-0">
      <Header activePath="/products/smart-knee" />

      {/* Hero Section */}
      <section className="py-20 bg-[#19166C] text-white pt-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-5xl lg:text-6xl font-semibold mb-6">
              森越® 仿生液压智能膝关节
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              以 SynchroMind™协同智能算法为核心，深度融合人工智能与生物力学，实现步态实时学习与动态自适应调节；采用微处理器控制与液压系统一体化设计，提供高精度控制与响应能力。
            </p>
            <div className="flex gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#FD5202] rounded-full" />
                <span>&lt;10ms 响应速度</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#FD5202] rounded-full" />
                <span>2-3天续航</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Image Carousel */}
      <section className="py-24 bg-gradient-to-b from-white to-blue-50/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Technical Specifications */}
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl lg:text-5xl font-semibold text-[#FD5202] mb-12 text-center">
                技术规格
              </h2>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-2xl hover:shadow-lg hover:shadow-blue-200/50 transition-all duration-300">
                  <div className="text-sm text-gray-600 mb-2">最大承重</div>
                  <div className="text-3xl font-bold text-black">150kg</div>
                </div>
                <div className="bg-gray-50 p-6 rounded-2xl hover:shadow-lg hover:shadow-blue-200/50 transition-all duration-300">
                  <div className="text-sm text-gray-600 mb-2">产品重量</div>
                  <div className="text-3xl font-bold text-black">1.68kg</div>
                </div>
                <div className="bg-gray-50 p-6 rounded-2xl hover:shadow-lg hover:shadow-blue-200/50 transition-all duration-300">
                  <div className="text-sm text-gray-600 mb-2">最大弯曲角度</div>
                  <div className="text-3xl font-bold text-black">131°</div>
                </div>
                <div className="bg-gray-50 p-6 rounded-2xl hover:shadow-lg hover:shadow-blue-200/50 transition-all duration-300">
                  <div className="text-sm text-gray-600 mb-2">防水等级</div>
                  <div className="text-3xl font-bold text-black">IP67</div>
                </div>
                <div className="bg-gray-50 p-6 rounded-2xl hover:shadow-lg hover:shadow-blue-200/50 transition-all duration-300">
                  <div className="text-sm text-gray-600 mb-2">结构高度</div>
                  <div className="text-3xl font-bold text-black">260mm</div>
                </div>
                <div className="bg-gray-50 p-6 rounded-2xl hover:shadow-lg hover:shadow-blue-200/50 transition-all duration-300">
                  <div className="text-sm text-gray-600 mb-2">续航时间</div>
                  <div className="text-3xl font-bold text-black">2-3 天</div>
                </div>
              </div>
            </div>

            {/* Right: Carousel */}
            <div className="order-1 lg:order-2 relative aspect-[3/4] max-w-md mx-auto w-full bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    index === currentSlide ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={slide}
                    alt={`产品图片 ${index + 1}`}
                    fill
                    className="object-contain bg-gray-50"
                    priority={index === 0}
                  />
                </div>
              ))}

              {/* Dots indicator */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? "bg-[#FD5202] w-8"
                        : "bg-white/70 hover:bg-white"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Features */}
      <section className="py-24 bg-gradient-to-b from-white to-blue-50/30">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-semibold text-[#FD5202] mb-16 text-center">
            核心特性
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-8 bg-gray-50 rounded-2xl hover:shadow-lg hover:shadow-blue-200/50 transition-all duration-300">
              <div className="w-12 h-12 bg-[#19166C] rounded-xl mb-6 flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                自然步态
              </h3>
              <p className="text-gray-600">
                131° 最大屈曲角度，接近生理步态，降低能耗，减少代偿性损伤。
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-8 bg-gray-50 rounded-2xl hover:shadow-lg hover:shadow-blue-200/50 transition-all duration-300">
              <div className="w-12 h-12 bg-[#19166C] rounded-xl mb-6 flex items-center justify-center">
                <Feather className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                轻量节能
              </h3>
              <p className="text-gray-600">
                仅重 1.68kg，功耗优化，续航持久（2-3 天）。
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 bg-gray-50 rounded-2xl hover:shadow-lg hover:shadow-blue-200/50 transition-all duration-300">
              <div className="w-12 h-12 bg-[#19166C] rounded-xl mb-6 flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                强劲动能
              </h3>
              <p className="text-gray-600">
                150kg 承重能力，复杂地形行走更安全。
              </p>
            </div>

            {/* Feature 4 */}
            <div className="p-8 bg-gray-50 rounded-2xl hover:shadow-lg hover:shadow-blue-200/50 transition-all duration-300">
              <div className="w-12 h-12 bg-[#19166C] rounded-xl mb-6 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                康复支持
              </h3>
              <p className="text-gray-600">
                为康复提供量化数据，实现精准指导。
              </p>
            </div>

            {/* Feature 5 */}
            <div className="p-8 bg-gray-50 rounded-2xl hover:shadow-lg hover:shadow-blue-200/50 transition-all duration-300">
              <div className="w-12 h-12 bg-[#19166C] rounded-xl mb-6 flex items-center justify-center">
                <Cpu className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                多元模式
              </h3>
              <p className="text-gray-600">
                自适应步态、防跌倒、骑行模式、爬楼梯模式。
              </p>
            </div>

            {/* Feature 6 */}
            <div className="p-8 bg-gray-50 rounded-2xl hover:shadow-lg hover:shadow-blue-200/50 transition-all duration-300">
              <div className="w-12 h-12 bg-[#19166C] rounded-xl mb-6 flex items-center justify-center">
                <Battery className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                其他特性
              </h3>
              <p className="text-gray-600">
                防水等级 IP67，结构高度 260mm。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* App Section */}
      <section className="py-24 bg-gradient-to-b from-blue-50/40 to-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="w-20 h-20 bg-[#19166C] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Smartphone className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-4xl lg:text-5xl font-semibold text-[#FD5202] mb-4">
                配套APP
              </h2>
              <p className="text-lg text-gray-600">
                Synrise App 是智能假肢的官方配套应用，通过蓝牙连接实现智能管理
              </p>
            </div>

            {/* Core Features */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Feature 1: 智能适配 */}
              <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl hover:shadow-blue-200/50 transition-all duration-300 border border-gray-100">
                <div className="w-14 h-14 bg-[#19166C] rounded-xl mb-6 flex items-center justify-center">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  智能适配
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  自动学习用户运动习惯并智能调参，实现假肢专属配置
                </p>
              </div>

              {/* Feature 2: 康复指导 */}
              <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl hover:shadow-blue-200/50 transition-all duration-300 border border-gray-100">
                <div className="w-14 h-14 bg-[#19166C] rounded-xl mb-6 flex items-center justify-center">
                  <Activity className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  康复指导
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  训练模式下，实时监测步态对称性、支撑稳定性、关节协调性等核心指标，反馈运动表现，提供科学、渐进的康复指导
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Link
                href="/download"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#FD5202] text-white font-medium rounded-full hover:bg-[#e04802] transition-all hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Smartphone className="w-5 h-5" />
                下载 Synrise App
              </Link>
              <p className="text-sm text-gray-500 mt-4">
                支持 iOS 和 Android 系统
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-semibold mb-6 text-white">
            准备好体验了吗？
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            立即联系我们，了解更多产品详情和预约体验
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-[#FD5202] text-white font-medium rounded-full hover:bg-[#e04802] transition-all hover:scale-105 inline-block"
            >
              联系我们
            </Link>
            <Link
              href="/technology"
              className="px-8 py-4 text-white font-medium rounded-full border-2 border-white hover:bg-white hover:text-[#19166C] transition-all hover:scale-105 inline-block"
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
