"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import BottomNavigation from "@/components/BottomNavigation";
import { useState, useEffect, useMemo } from "react";

export default function ProductsPage() {
  const [activeSection, setActiveSection] = useState("lower-limb");

  const categories = useMemo(
    () => [
      {
        id: "lower-limb",
        name: "下肢义肢",
        description: "智能下肢义肢产品系列",
        products: [
          {
            id: "smart-knee",
            name: "Synrise Pro 智能膝关节",
            description: "搭载 SynchroMind™ 协同智能算法，重新定义智能义肢标准",
            features: ["50+ 核心专利", "<10ms 响应速度", "24h 超长续航"],
          },
        ],
      },
      {
        id: "coming-soon",
        name: "即将推出",
        description: "更多智能义肢产品正在研发中",
        products: [],
        comingSoon: true,
      },
    ],
    []
  );

  useEffect(() => {
    const handleScroll = () => {
      const sections = categories.map((c) => document.getElementById(c.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(categories[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [categories]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white pb-16 md:pb-0">
      <Header activePath="/products" />

      {/* Hero Section */}
      <section className="py-20 bg-black text-white pt-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-5xl lg:text-6xl font-semibold mb-6">
              产品系列
            </h1>
            <p className="text-xl text-gray-300">
              探索我们的智能义肢产品，重获行动自由
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories with Sidebar */}
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex gap-8">
          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {categories.map((category) => (
              <section
                key={category.id}
                id={category.id}
                className="py-24 bg-white"
              >
                {/* Category Header */}
                <div className="mb-12">
                  <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900 mb-4">
                    {category.name}
                  </h2>
                  <p className="text-xl text-gray-600">
                    {category.description}
                  </p>
                </div>

                {/* Products Grid */}
                {category.products.length > 0 ? (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {category.products.map((product) => (
                      <Link
                        key={product.id}
                        href={`/products/${product.id}`}
                        className="group"
                      >
                        <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                          {/* Product Image */}
                          <div className="aspect-square bg-linear-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                            <div className="text-center">
                              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4" />
                              <p className="text-gray-500">产品图片占位</p>
                            </div>
                          </div>

                          {/* Product Info */}
                          <div className="p-8">
                            <h3 className="text-2xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                              {product.name}
                            </h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                              {product.description}
                            </p>

                            {/* Features */}
                            <div className="space-y-2 mb-6">
                              {product.features.map((feature, index) => (
                                <div
                                  key={index}
                                  className="flex items-center gap-2 text-sm text-gray-600"
                                >
                                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                                  <span>{feature}</span>
                                </div>
                              ))}
                            </div>

                            {/* Learn More Link */}
                            <div className="flex items-center gap-2 text-blue-600 font-medium group-hover:gap-4 transition-all">
                              了解产品
                              <svg
                                className="w-5 h-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  /* Coming Soon Placeholder */
                  <div className="bg-gray-50 rounded-3xl p-12 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-linear-to-br from-blue-50 to-blue-100 rounded-2xl mb-6">
                      <svg
                        className="w-8 h-8 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                      即将推出
                    </h3>
                    <p className="text-gray-600">更多智能义肢产品正在研发中</p>
                  </div>
                )}
              </section>
            ))}
          </div>

          {/* Sidebar Navigation */}
          <aside className="hidden lg:block w-64 sticky top-20 pt-20 h-fit self-start shrink-0">
            <nav>
              <h3 className="text-sm font-semibold text-gray-900 mb-4">目录</h3>
              <ul className="space-y-2">
                {categories.map((category) => (
                  <li key={category.id}>
                    <button
                      onClick={() => scrollToSection(category.id)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-all duration-200 ${
                        activeSection === category.id
                          ? "bg-blue-600 text-white font-medium"
                          : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                      }`}
                    >
                      {category.name}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        </div>
      </div>

      {/* Technology Highlight */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900 mb-6">
              核心技术驱动
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              所有产品均搭载 SynchroMind™ 协同智能算法
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6">
                <div className="text-4xl font-semibold text-blue-600 mb-2">
                  &lt;10ms
                </div>
                <div className="text-sm text-gray-600">响应速度</div>
              </div>
              <div className="p-6">
                <div className="text-4xl font-semibold text-blue-600 mb-2">
                  99%
                </div>
                <div className="text-sm text-gray-600">识别准确率</div>
              </div>
              <div className="p-6">
                <div className="text-4xl font-semibold text-blue-600 mb-2">
                  24h
                </div>
                <div className="text-sm text-gray-600">超长续航</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-semibold mb-6">
            需要帮助选择？
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            我们的产品顾问随时为您提供专业咨询服务
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
