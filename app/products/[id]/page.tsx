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
  const products: Record<string, { title: string; description: string; keywords: string[] }> = {
    "smart-knee": {
      title: "森越® 仿生液压智能膝关节",
      description: "以 SynchroMind™协同智能算法为核心，深度融合人工智能与生物力学，实现步态实时学习与动态自适应调节。50+核心专利，<10ms响应速度，24h超长续航。",
      keywords: ["智能膝关节", "仿生义肢", "大腿义肢", "Synrise Pro", "智能假肢", "AI义肢", "液压膝关节"]
    }
  };

  const product = products[params.id] || products["smart-knee"];

  return {
    title: product.title,
    description: product.description,
    keywords: product.keywords,
    openGraph: {
      title: product.title,
      description: product.description,
      type: 'website',
    },
  };
}

export default function ProductDetailPage() {
  return <ProductDetail />;
}
