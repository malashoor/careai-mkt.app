// Centralized, safe site URL resolver for all usages (metadata, sitemap, etc.)

function sanitize(u: string) {
  // trim spaces and trailing slash
  return u.trim().replace(/\/+$/, "");
}

export function getSiteUrl(): string {
  // Priority:
  // 1) NEXT_PUBLIC_SITE_URL (only set in *production* context)
  // 2) Netlify provided (DEPLOY_PRIME_URL for previews, URL for prod)
  // 3) Local dev fallback
  const raw =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.URL ||
    process.env.DEPLOY_PRIME_URL ||
    "http://localhost:3001";

  try {
    // Throws on invalid value (including masked strings like ********.app)
    const url = new URL(raw);
    return sanitize(url.toString());
  } catch {
    // Last-resort safe fallback for CLI/local
    return "http://localhost:3001";
  }
}
