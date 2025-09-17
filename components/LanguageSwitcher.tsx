"use client";
import { usePathname, useRouter } from "next/navigation";
import { SUPPORTED_LOCALES } from "@/i18n/config";

export default function LanguageSwitcher({ className = "" }: { className?: string }) {
  const pathname = usePathname();
  const router = useRouter();
  const current = pathname?.split("/")[1] || "en";
  const switchTo = (code: string) => {
    if (!pathname) return;
    const parts = pathname.split("/");
    parts[1] = code;
    router.push(parts.join("/") || "/");
  };
  return (
    <div className={`inline-flex items-center gap-1 ${className}`} role="group" aria-label="Language">
              {SUPPORTED_LOCALES.map(({ code, label }) => (
                <button
                  key={code}
                  data-testid={`lang-${code}`}
                  onClick={() => switchTo(code)}
                  aria-current={current === code}
                  className={`px-3 py-1.5 rounded-full text-sm border transition
                    ${current === code ? "bg-black text-white border-black" : "bg-white text-black border-black/10 hover:bg-black/5"}`}
                >
                  {label}
                </button>
              ))}
    </div>
  );
}
