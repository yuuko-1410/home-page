import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import BottomNavigation from "@/components/BottomNavigation";
import { Brain, Radar, Bone } from "lucide-react";

export default function TechnologyPage() {
  return (
    <div className="min-h-screen bg-white pb-16 md:pb-0">
      <Header activePath="/technology" />

      {/* Hero Section */}
      <section className="py-20 bg-black text-white pt-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-5xl lg:text-6xl font-semibold mb-6">
              SynchroMind™ 协同智能算法
            </h1>
            <p className="text-xl text-gray-300 mb-8">重新定义智能义肢标准</p>
          </div>
        </div>
      </section>

      {/* Main Technology */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900 mb-6">
                什么是 SynchroMind™？
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                SynchroMind™协同智能算法，深度耦合生物力学与智能感知技术，实现康复辅具步态实时感知、动态自适应适配，为肢残群体提供更贴合生理习性的精准行走康复方案。
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                算法内置动态生物力学数据库，可根据用户步态数据自主学习、持续优化适配策略，适配日常行走、上下楼梯、坡道行进等全场景运动需求；其开放的技术接口更可与智能康复评估系统、远程医疗平台无缝对接，构建
                &quot;实时感知 - 智能适配 - 数据反馈&quot;
                的闭环康复生态，以技术创新驱动智能康复行业的标准化与智能化升级。
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-4xl font-semibold text-blue-600 mb-2">
                    &lt;10ms
                  </div>
                  <div className="text-sm text-gray-600">响应速度</div>
                </div>
                <div>
                  <div className="text-4xl font-semibold text-blue-600 mb-2">
                    99%
                  </div>
                  <div className="text-sm text-gray-600">识别准确率</div>
                </div>
              </div>
            </div>
            <div className="aspect-square bg-linear-to-br from-gray-100 to-gray-200 rounded-3xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4" />
                <p className="text-gray-500">算法示意图</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Technologies */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900 mb-16 text-center">
            核心技术
          </h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Technology 1 */}
            <div className="bg-white p-8 rounded-2xl">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl mb-6 flex items-center justify-center">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                深度学习
              </h3>
              <p className="text-gray-600 mb-6">
                基于神经网络的深度学习模型，持续学习用户的行走习惯，越用越智能。
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                  实时步态分析
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                  动作意图预测
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                  自适应优化
                </li>
              </ul>
            </div>

            {/* Technology 2 */}
            <div className="bg-white p-8 rounded-2xl">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl mb-6 flex items-center justify-center">
                <Radar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                多传感器融合
              </h3>
              <p className="text-gray-600 mb-6">
                高精度传感器阵列，全方位采集运动数据，确保每一步都精准可靠。
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                  陀螺仪传感器
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                  加速度传感器
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                  压力传感器
                </li>
              </ul>
            </div>

            {/* Technology 3 */}
            <div className="bg-white p-8 rounded-2xl">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl mb-6 flex items-center justify-center">
                <Bone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                生物力学建模
              </h3>
              <p className="text-gray-600 mb-6">
                基于人体生物力学的精确建模，模拟自然行走逻辑，宛若天成。
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                  步态周期分析
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                  关节运动学
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                  动态平衡控制
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Advantages */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900 mb-16 text-center">
            技术优势
          </h2>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Advantage 1 */}
            <div className="flex gap-8 p-8 bg-gray-50 rounded-2xl">
              <div className="shrink-0 w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  超快响应速度
                </h3>
                <p className="text-gray-600">
                  从感知到决策再到执行，全流程响应时间小于 10ms，
                  比人类神经反应速度更快，真正做到心有灵犀。
                </p>
              </div>
            </div>

            {/* Advantage 2 */}
            <div className="flex gap-8 p-8 bg-gray-50 rounded-2xl">
              <div className="shrink-0 w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  持续学习优化
                </h3>
                <p className="text-gray-600">
                  系统持续学习用户的行走习惯和偏好，随着时间的推移，
                  义肢会越来越懂您，使用体验不断优化。
                </p>
              </div>
            </div>

            {/* Advantage 3 */}
            <div className="flex gap-8 p-8 bg-gray-50 rounded-2xl">
              <div className="shrink-0 w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  多场景适应
                </h3>
                <p className="text-gray-600">
                  自适应平地行走、上下楼梯、斜坡行走等多种场景，
                  无论室内室外，都能提供稳定的支撑。
                </p>
              </div>
            </div>

            {/* Advantage 4 */}
            <div className="flex gap-8 p-8 bg-gray-50 rounded-2xl">
              <div className="shrink-0 w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  低功耗设计
                </h3>
                <p className="text-gray-600">
                  采用先进的边缘计算架构和能效优化算法，
                  在保证性能的同时实现超长续航，24小时无忧使用。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research & Development */}
      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-semibold mb-6">
                强大的研发实力
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                我们的研发团队由清华姚班精英领衔，在 AI、生物力学、
                材料科学等领域拥有深厚的积累。
              </p>
              <div className="space-y-6">
                <div>
                  <div className="text-5xl font-semibold text-blue-600 mb-2">
                    30+
                  </div>
                  <div className="text-gray-300">科研合作</div>
                </div>
                <div>
                  <div className="text-5xl font-semibold text-blue-600 mb-2">
                    20+
                  </div>
                  <div className="text-gray-300">研发团队</div>
                </div>
                <div>
                  <div className="text-5xl font-semibold text-blue-600 mb-2">
                    1/6
                  </div>
                  <div className="text-gray-300">进口价格</div>
                </div>
              </div>
            </div>
            <div className="aspect-square bg-linear-to-br from-gray-800 to-gray-900 rounded-3xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-gray-700 rounded-full mx-auto mb-4" />
                <p className="text-gray-500">团队照片占位</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900 mb-6">
            对技术感兴趣？
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            欢迎与我们交流，了解更多技术细节
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-all hover:scale-105 inline-block"
            >
              联系我们
            </Link>
            <Link
              href="/products/smart-knee"
              className="px-8 py-4 text-gray-900 font-medium rounded-full border-2 border-gray-900 hover:bg-gray-900 hover:text-white transition-all hover:scale-105 inline-block"
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
