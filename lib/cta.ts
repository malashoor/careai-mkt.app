// lib/cta.ts
type Dest = "onboarding" | "contact" | "partners" | "download-ios" | "download-android" | "deeplink";
const DEST = (process.env.NEXT_PUBLIC_CTA_DESTINATION || "onboarding") as Dest;

export function getGetStartedHref(locale: string) {
  switch (DEST) {
    case "onboarding":      return "/app";
    case "contact":         return `/${locale}/contact`;
    case "partners":        return `/${locale}/partners`;
    case "download-ios":    return "https://apps.apple.com/app/idXXXXXXXXX"; // TODO: Add your iOS App Store ID
    case "download-android":return "https://play.google.com/store/apps/details?id=com.careai.app"; // TODO: Add your Android package name
    case "deeplink":        return "careai://onboarding";
    default:                return `/${locale}/contact`;
  }
}

export function getLearnMoreHref(locale: string) {
  return `/${locale}/features`;
}

// Helper to check if we're using app store links
export function isAppStoreLink() {
  return DEST === "download-ios" || DEST === "download-android";
}

// Helper to check if we're using deep links
export function isDeepLink() {
  return DEST === "deeplink";
}
