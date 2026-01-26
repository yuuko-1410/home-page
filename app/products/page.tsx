import type { Metadata } from "next";
import ProductsPage from "./ProductsPage";

export const metadata: Metadata = {
  title: "产品系列",
  description: "探索Synrise森越成行的智能义肢产品系列。Synrise Pro智能膝关节，搭载SynchroMind™协同智能算法，50+核心专利，<10ms响应速度，24h超长续航。",
};

export default function Page() {
  return <ProductsPage />;
}
