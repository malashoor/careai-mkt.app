import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";

type Props = LinkProps & { children: ReactNode; locale: string; className?: string };

export default function I18nLink({ href, locale, children, ...rest }: Props) {
  const url = typeof href === "string" ? href : href.pathname || "/";
  const prefixed = url.startsWith(`/${locale}`) ? url : `/${locale}${url.startsWith("/") ? url : `/${url}`}`;
  return <Link href={prefixed} {...rest}>{children}</Link>;
}
