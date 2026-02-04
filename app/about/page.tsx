import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import BottomNavigation from "@/components/BottomNavigation";
import { Lightbulb, Heart, Shield } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "关于我们",
  description:
    "森越成行(Synrise Technology)是一家具身智能企业，致力于通过感知、决策与执行的深度融合，帮助全球运动受限人群重新定义运动的边界。",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white pb-16 md:pb-0">
      <Header activePath="/about" />

      {/* Hero Section */}
      <section className="relative h-[500px] bg-[#19166C] text-white overflow-hidden flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/bg/icpark.webp"
            alt="公司背景"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/60 to-black/75" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 lg:px-8 space-y-12">
          <div className="max-w-4xl">
            <h1 className="text-5xl lg:text-6xl font-semibold mb-6">
              关于森越成行
            </h1>
            {/*<p className="text-xl text-gray-200">
              用科技重获行动自由，让生命重拾精彩
            </p>*/}
          </div>

          <div className="max-w-3xl">
            <p className="text-lg text-gray-100 leading-relaxed">
              森越成行(Synrise
              Technology)是一家具身智能企业，致力于通过感知、决策与执行的深度融合，帮助全球运动受限人群重新定义运动的边界。公司自研的SynchroMind™协同算法，能够实时理解用户意图并自主完成复杂的运动协同，让智能设备真正成为身体的一部分。核心团队由清华大学"姚班"等全球顶尖学府的算法精英，以及国际假肢巨头前技术总监、ISPO认证矫形师等产业领军人物组成，兼具前沿科研深度与产业落地经验。以智能膝关节为起点，森越成行正逐步构建服务全球运动受限人群的人机协同生态。
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-blue-50/50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-12 rounded-2xl">
              <h3 className="text-3xl font-semibold text-[#FD5202] mb-6">
                使命
              </h3>
              {/*<p className="text-xl text-gray-600 leading-relaxed mb-6">
                以科技唤醒本能，让行走回归自然
              </p>*/}
              <p className="text-xl text-gray-600 leading-relaxed">
                以科技之力，重塑行动自由
              </p>
            </div>
            <div className="bg-white p-12 rounded-2xl">
              <h3 className="text-3xl font-semibold text-[#FD5202] mb-6">
                愿景
              </h3>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                让运动自由，触手可及
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-gradient-to-b from-white to-blue-50/30">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-semibold text-[#FD5202] mb-16 text-center">
            核心价值观
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#19166C] rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <Lightbulb className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                创新
              </h3>
              <p className="text-gray-600">
                持续突破技术边界，用创新解决真实问题
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-[#19166C] rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                普惠
              </h3>
              <p className="text-gray-600">
                让好产品触手可及，让科技惠及更多人
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-[#19166C] rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                责任
              </h3>
              <p className="text-gray-600">
                对用户和产品负责，用行动践行社会责任
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Responsibility */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-blue-50/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-semibold text-[#FD5202] mb-12 text-center">
              社会责任
            </h2>
            <div className="bg-white p-12 rounded-2xl shadow-sm mb-12">
              <p className="text-xl text-gray-600 leading-relaxed text-center">
                森越成行积极践行社会责任，与各地残联、公益基金会、社会研究机构及公募平台建立深度合作，围绕义肢适配、康复训练、经济援助等环节，为肢体残障群体提供全链条支持，助力他们重获行动自由。
              </p>
            </div>

            {/* Partner Logos Animation */}
            <div className="overflow-hidden">
              <div className="flex items-center gap-12 animate-scroll">
                {/* First set of logos */}
                <div className="flex items-center gap-12 shrink-0">
                  <img
                    src="/images/cooperation/chengdu-next-gen-foundation.webp"
                    alt="成都市关心下一代基金会"
                    className="h-20 object-contain opacity-60 hover:opacity-100 transition-opacity"
                  />
                  <img
                    src="/images/cooperation/chenxing-home.webp"
                    alt="晨星之家"
                    className="h-20 object-contain opacity-60 hover:opacity-100 transition-opacity"
                  />
                  <img
                    src="/images/cooperation/tech-for-good.webp"
                    alt="科技向善"
                    className="h-20 object-contain opacity-60 hover:opacity-100 transition-opacity"
                  />
                  <img
                    src="/images/cooperation/tencent-charity.webp"
                    alt="腾讯公益"
                    className="h-20 object-contain opacity-60 hover:opacity-100 transition-opacity"
                  />
                  <img
                    src="/images/cooperation/wucai-foundation.webp"
                    alt="五彩基金"
                    className="h-20 object-contain opacity-60 hover:opacity-100 transition-opacity"
                  />
                  {/*<img
                    src="/images/cooperation/cdpf-logo.webp"
                    alt="中国残联"
                    className="h-20 object-contain opacity-60 hover:opacity-100 transition-opacity"
                  />*/}
                </div>
                {/* Duplicate set for seamless loop */}
                <div className="flex items-center gap-12 shrink-0">
                  <img
                    src="/images/cooperation/chengdu-next-gen-foundation.webp"
                    alt="成都市关心下一代基金会"
                    className="h-20 object-contain opacity-60 hover:opacity-100 transition-opacity"
                  />
                  <img
                    src="/images/cooperation/chenxing-home.webp"
                    alt="晨星之家"
                    className="h-20 object-contain opacity-60 hover:opacity-100 transition-opacity"
                  />
                  <img
                    src="/images/cooperation/tech-for-good.webp"
                    alt="科技向善"
                    className="h-20 object-contain opacity-60 hover:opacity-100 transition-opacity"
                  />
                  <img
                    src="/images/cooperation/tencent-charity.webp"
                    alt="腾讯公益"
                    className="h-20 object-contain opacity-60 hover:opacity-100 transition-opacity"
                  />
                  <img
                    src="/images/cooperation/wucai-foundation.webp"
                    alt="五彩基金"
                    className="h-20 object-contain opacity-60 hover:opacity-100 transition-opacity"
                  />
                  {/*<img
                    src="/images/cooperation/cdpf-logo.webp"
                    alt="中国残联"
                    className="h-20 object-contain opacity-60 hover:opacity-100 transition-opacity"
                  />*/}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-semibold mb-6 text-white">
            加入我们
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            如果您也热爱科技，期待用技术改变世界，欢迎加入我们
          </p>
          <Link
            href="/contact"
            className="px-8 py-4 bg-[#FD5202] text-white font-medium rounded-full hover:bg-[#e04802] transition-all hover:scale-105 inline-block"
          >
            联系我们
          </Link>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
      <BottomNavigation activePath="/about" />
    </div>
  );
}
