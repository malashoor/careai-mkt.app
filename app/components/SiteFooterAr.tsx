import Link from 'next/link';

export default function SiteFooterAr() {
  return (
    <footer className="mt-16 border-t">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        <div className="space-y-2">
          <div className="font-semibold">CareAI</div>
          <p className="text-gray-600">أدوات مدعومة بالذكاء الاصطناعي للعائلات ومقدمي الرعاية.</p>
        </div>
        <div className="space-y-2">
          <div className="font-semibold">المنتج</div>
          <ul className="space-y-1">
            <li><Link href="/ar#features" className="text-gray-600 hover:text-gray-900">المميزات</Link></li>
          </ul>
        </div>
        <div className="space-y-2">
          <div className="font-semibold">الشركة</div>
          <ul className="space-y-1">
            <li><Link href="/ar/about" className="text-gray-600 hover:text-gray-900">عنّا</Link></li>
            <li><Link href="/ar/contact" className="text-gray-600 hover:text-gray-900">اتصل بنا</Link></li>
            <li><Link href="/ar/legal/privacy" className="text-gray-600 hover:text-gray-900">الخصوصية</Link></li>
            <li><Link href="/ar/legal/terms" className="text-gray-600 hover:text-gray-900">الشروط</Link></li>
          </ul>
        </div>
      </div>
      <div className="px-6 lg:px-8 pb-8 text-xs text-gray-500 text-center">
        © {new Date().getFullYear()} CareAI. جميع الحقوق محفوظة.
      </div>
    </footer>
  );
}
