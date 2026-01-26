import type { Metadata } from "next";
import DownloadPage from "./DownloadPage";

export const metadata: Metadata = {
  title: "App下载",
  description: "下载Synrise App - Synrise智能假肢的官方配套应用。通过蓝牙连接，轻松调节假肢参数、进行固件升级、查看使用数据等。支持iOS和Android平台。",
};

export default function Page() {
  return <DownloadPage />;
}
