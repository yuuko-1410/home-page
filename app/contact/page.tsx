import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import BottomNavigation from "@/components/BottomNavigation";
import { Mail, Phone, MessageCircle } from "lucide-react";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "联系我们",
  description:
    "联系Synrise森越成行。电子邮箱：synrise_tech@163.com。我们提供专业的产品咨询服务，24小时内回复您的邮件。欢迎通过微信公众号与我们联系。",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white pb-16 md:pb-0">
      <Header activePath="/contact" />

      {/* Hero Section */}
      <section className="py-20 bg-[#19166C] text-white pt-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-5xl lg:text-6xl font-semibold mb-6">
              联系我们
            </h1>
            <p className="text-xl text-gray-300">
              我们随时准备为您服务，期待与您的交流
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-semibold text-[#FD5202] mb-16 text-center">
              联系方式
            </h2>

            <div className="gap-8 mb-16">
              {/* Email */}
              <div className="p-8 bg-gray-50 rounded-2xl mb-8">
                <div className="w-12 h-12 bg-[#19166C] rounded-xl mb-4 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  电子邮箱
                </h3>
                <a
                  href="mailto:synrise_tech@163.com"
                  className="text-gray-600 mb-2 hover:text-[#19166C] hover:underline transition-colors inline-block"
                >
                  synrise_tech@163.com
                </a>
                <p className="text-sm text-gray-500">
                  我们会在 24 小时内回复您的邮件
                </p>
              </div>

              {/* Phone */}
              {/*<div className="p-8 bg-gray-50 rounded-2xl">
                <div className="w-12 h-12 bg-[#19166C] rounded-xl mb-4 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  客服热线
                </h3>
                <p className="text-gray-600 mb-2">400-888-8888</p>
                <p className="text-sm text-gray-500">
                  工作时间：周一至周五 9:00-18:00
                </p>
              </div>*/}

              {/* WeChat */}
              <div className="p-8 bg-gray-50 rounded-2xl">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="flex-1">
                    <div className="w-12 h-12 bg-[#19166C] rounded-xl mb-4 flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      微信咨询
                    </h3>
                    <p className="text-sm text-gray-500 mb-4">
                      关注微信公众号，获取最新资讯与专属服务
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="w-40 h-40 bg-white rounded-lg overflow-hidden">
                      <Image
                        src="/images/logo/weixin-qrcode.webp"
                        alt="微信公众号二维码"
                        width={160}
                        height={160}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-4xl lg:text-5xl font-semibold text-[#FD5202] mb-16 text-center">
              在线留言
            </h2>
            {/* Contact Form */}
            <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
              <p className="text-center text-gray-600 mb-8">
                填写下方表单，我们会尽快与您联系
              </p>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      姓名 *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#19166C] focus:border-transparent outline-none transition-all"
                      placeholder="请输入您的姓名"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      手机号码 *
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#19166C] focus:border-transparent outline-none transition-all"
                      placeholder="请输入您的手机号码"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    电子邮箱
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#19166C] focus:border-transparent outline-none transition-all"
                    placeholder="请输入您的电子邮箱"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    咨询类型 *
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#19166C] focus:border-transparent outline-none transition-all bg-white"
                  >
                    <option value="">请选择咨询类型</option>
                    <option value="product">产品咨询</option>
                    <option value="price">价格咨询</option>
                    <option value="cooperation">商务合作</option>
                    <option value="after-sales">售后服务</option>
                    <option value="other">其他</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    留言内容 *
                  </label>
                  <textarea
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#19166C] focus:border-transparent outline-none transition-all resize-none"
                    placeholder="请详细描述您的需求或问题"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-[#FD5202] text-white font-medium rounded-full hover:bg-[#e04802] transition-all hover:scale-105"
                >
                  提交留言
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
      <BottomNavigation activePath="/contact" />
    </div>
  );
}
