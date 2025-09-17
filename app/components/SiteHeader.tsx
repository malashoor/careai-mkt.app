'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/#features', label: 'Features' },
  { href: '/partners', label: 'Partners' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function SiteHeader() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/images/careai_logo.png" alt="CareAI" width={32} height={32} className="rounded-md" />
          <span className="font-semibold">CareAI</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className={`hover:text-gray-900 ${pathname === l.href ? 'text-gray-900 font-medium' : 'text-gray-600'}`}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/ar" className="ml-2 text-gray-600 hover:text-gray-900">العربية</Link>
        </nav>
        <div className="md:hidden text-sm text-gray-500">Menu</div>
      </div>
    </header>
  );
}
