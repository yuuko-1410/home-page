import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import BottomNavigation from "@/components/BottomNavigation";

export default function Home() {
  return (
    <div className="min-h-screen bg-white pb-16 md:pb-0">
      <Header activePath="/" />

      {/* Hero Section */}
      <section className="relative h-screen bg-black flex items-center justify-center overflow-hidden pt-20">
        {/* Video Background */}
        {/*<video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://website-image.brainco.cn/video/2AB431c65bhdriQN.webm"
            type="video/webm"
          />
        </video>*/}
        {/* Image Background */}
        <Image
          src="/images/publicity/h8tAFk.webp"
          alt="森越成行"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="relative z-10 text-center text-white px-6 w-full">
          <p className="text-6xl lg:text-6xl mb-4">身随心驭</p>
          <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
            多维融合 智能洞悉 仿生自如 重塑行动本能
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products/smart-knee"
              className="px-8 py-4 bg-[#FD5202] text-white font-medium rounded-full hover:bg-[#e04802] transition-all hover:scale-105 inline-block"
            >
              了解产品
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 text-white font-medium rounded-full border-2 border-white hover:bg-white hover:text-[#19166C] transition-all hover:scale-105 inline-block"
            >
              关于我们
            </Link>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-24 bg-gradient-to-b from-white to-blue-50/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-semibold text-[#FD5202] mb-6">
              关于森越成行
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              森越成行成立于2025年，是国内领先的具身智能义肢研发企业。
              <br />
              我们致力于通过
              AI与生物力学的深度融合，为肢体残障人士提供更自然、更智能的行动解决方案。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="text-5xl font-semibold text-black mb-4">30+</div>
              <div className="text-lg text-gray-900 mb-2">科研合作</div>
              <div className="text-sm text-gray-600">自主研发核心技术</div>
            </div>
            <div className="text-center p-8">
              <div className="text-5xl font-semibold text-black mb-4">20+</div>
              <div className="text-lg text-gray-900 mb-2">研发团队</div>
              <div className="text-sm text-gray-600">清华姚班精英团队</div>
            </div>
            <div className="text-center p-8">
              <div className="text-5xl font-semibold text-black mb-4">1/6</div>
              <div className="text-lg text-gray-900 mb-2">进口价格</div>
              <div className="text-sm text-gray-600">让科技触手可及</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-semibold text-[#FD5202] mb-6">
                使命
              </h3>
              {/*<p className="text-lg text-gray-600 leading-relaxed mb-6">
                以科技唤醒本能，让行走回归自然
              </p>*/}
              <p className="text-lg text-gray-600 leading-relaxed">
                以科技之力，重塑行动自由
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-semibold text-[#FD5202] mb-6">
                愿景
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                以技术重构康复生态，成为全球智能康复领域引导者
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-semibold mb-6 text-white">
            了解更多？
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            探索产品与技术，开启自由行走的每一步
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products/smart-knee"
              className="px-8 py-4 bg-[#fd5202] text-white font-medium rounded-full hover:bg-[#fd5202] transition-all hover:scale-105 inline-block"
            >
              探索产品
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
      <BottomNavigation activePath="/" />
    </div>
  );
}
