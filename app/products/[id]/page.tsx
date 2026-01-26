import { Metadata } from "next";
import ProductDetail from "./ProductDetail";

export async function generateStaticParams() {
  return [{ id: "smart-knee" }];
}

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  return {
    title: "森越® 仿生液压智能膝关节 - Synrise",
    description:
      "以 SynchroMind™协同智能算法为核心，深度融合人工智能与生物力学，实现步态实时学习与动态自适应调节",
  };
}

export default function ProductDetailPage() {
  return <ProductDetail />;
}
