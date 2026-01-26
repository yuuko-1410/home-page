import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import BottomNavigation from "@/components/BottomNavigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "技术优势",
  description: "Synrise森越成行核心技术 - SynchroMind™协同智能算法。融合多元传感器数据，精准识别用户运动意图并实时预测动作，<10ms响应，99%识别准确率，实现身随心驭。",
};

export default function TechnologyPage() {
  return (
    <div className="min-h-screen bg-white pb-16 md:pb-0">
      <Header activePath="/technology" />

      {/* Hero Section */}
      <section className="py-20 bg-[#19166C] text-white pt-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-5xl lg:text-6xl font-semibold mb-6">
              SynchroMind™ 协同智能算法
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              融合多元传感器数据，精准识别用户运动意图并实时预测动作，实现"身随心驭"
            </p>
          </div>
        </div>
      </section>

      {/* Algorithm Introduction */}
      <section className="py-24 bg-gradient-to-b from-white to-blue-50/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-semibold text-[#FD5202] mb-6">
                SynchroMind™ AI核心算法
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                融合多元传感器数据，精准识别用户运动意图并实时预测动作，实现"身随心驭"。
              </p>
            </div>
            <div className="relative aspect-square bg-linear-to-br from-gray-100 to-gray-200 rounded-3xl overflow-hidden">
              <Image
                src="/images/publicity/IW23yV.webp"
                alt="SynchroMind算法示意图"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Three-Layer Architecture */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-semibold text-[#FD5202] mb-16 text-center">
            三层技术架构
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl overflow-hidden">
              {/* 感知层 */}
              <div className="p-8 border-b border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 bg-[#19166C] rounded-xl flex items-center justify-center text-white font-bold text-lg">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                      感知层
                    </h3>
                    <p className="text-gray-600">
                      通过力学、位姿、加速度传感器，实时采集足底压力、关节角度、运动速度等步态数据
                    </p>
                  </div>
                </div>
              </div>

              {/* 融合层 */}
              <div className="p-8 border-b border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 bg-[#19166C] rounded-xl flex items-center justify-center text-white font-bold text-lg">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                      融合层
                    </h3>
                    <p className="text-gray-600">
                      多源数据融合分析，还原重心轨迹，识别地形环境，在动作发生前预判用户意图
                    </p>
                  </div>
                </div>
              </div>

              {/* 控制层 */}
              <div className="p-8">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 bg-[#19166C] rounded-xl flex items-center justify-center text-white font-bold text-lg">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                      控制层
                    </h3>
                    <p className="text-gray-600">
                      根据意图识别结果驱动执行器，实现精准、即时的助力响应
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Advantages */}
      <section className="py-24 bg-gradient-to-b from-white to-blue-50/40">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-semibold text-[#FD5202] mb-16 text-center">
            核心技术优势
          </h2>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* 实时意图预判 */}
            <div className="flex gap-8 p-8 bg-gray-50 rounded-2xl">
              <div className="shrink-0 w-12 h-12 bg-[#19166C] rounded-xl flex items-center justify-center text-white font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  实时意图预判
                </h3>
                <p className="text-gray-600">
                  在动作发生前预判用户意图，实现"所想即所动"的直觉控制
                </p>
              </div>
            </div>

            {/* 适应多种地形 */}
            <div className="flex gap-8 p-8 bg-gray-50 rounded-2xl">
              <div className="shrink-0 w-12 h-12 bg-[#19166C] rounded-xl flex items-center justify-center text-white font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  适应多种地形
                </h3>
                <p className="text-gray-600">
                  自动识别并适应平地、斜坡、楼梯等不同环境
                </p>
              </div>
            </div>

            {/* 低延迟 */}
            <div className="flex gap-8 p-8 bg-gray-50 rounded-2xl">
              <div className="shrink-0 w-12 h-12 bg-[#19166C] rounded-xl flex items-center justify-center text-white font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  低延迟
                </h3>
                <p className="text-gray-600">
                  毫秒级响应，带来流畅自然的行走体验
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-semibold text-white mb-6">
            对技术感兴趣？
          </h2>
          <p className="text-xl text-white mb-12 max-w-2xl mx-auto">
            欢迎与我们交流，了解更多技术细节
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-[#FD5202] text-white font-medium rounded-full hover:bg-[#e04802] transition-all hover:scale-105 inline-block"
            >
              联系我们
            </Link>
            <Link
              href="/products/smart-knee"
              className="px-8 py-4 text-[#FD5202] font-medium rounded-full border-2 border-[#FD5202] hover:bg-[#FD5202] hover:text-white transition-all hover:scale-105 inline-block"
            >
              了解产品
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
      <BottomNavigation activePath="/technology" />
    </div>
  );
}
