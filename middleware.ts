import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { localeCodes, DEFAULT_LOCALE } from "@/i18n/config";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const hasLocale = localeCodes.some(code => pathname.startsWith(`/${code}/`) || pathname === `/${code}`);
  if (!hasLocale && pathname === "/") {
    const url = req.nextUrl.clone();
    url.pathname = `/${DEFAULT_LOCALE}`;
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/((?!_next|.*\\..*).*)"],
};
