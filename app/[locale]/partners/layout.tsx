import { ReactNode } from "react";
import { localeCodes } from "@/i18n/config";

export async function generateStaticParams() {
  return localeCodes.map((code) => ({ locale: code }));
}

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
