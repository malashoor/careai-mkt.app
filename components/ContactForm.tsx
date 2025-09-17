'use client';

import { useState } from 'react';

type Locale = 'en' | 'ar';

export default function ContactForm({ locale = 'en' as Locale }) {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ ok: boolean; ticketId?: string; error?: string } | null>(null);

  const t = {
    en: {
      name: 'Full Name',
      email: 'Email',
      subject: 'Subject',
      message: 'Message',
      submit: loading ? 'Sending…' : 'Send Message',
      success: (id: string) => `Thank you — your message was received. Ticket ${id}. We'll get back to you as soon as possible.`,
      error: 'Sorry, there was an error. Please try again.',
      required: 'This field is required',
    },
    ar: {
      name: 'الاسم الكامل',
      email: 'البريد الإلكتروني',
      subject: 'الموضوع',
      message: 'الرسالة',
      submit: loading ? 'جاري الإرسال…' : 'إرسال الرسالة',
      success: (id: string) => `شكرًا لك — تم استلام رسالتك. رقم التذكرة ${id}. سنعود إليك في أقرب وقت ممكن.`,
      error: 'عذرًا، حدث خطأ. يرجى المحاولة مرة أخرى.',
      required: 'هذا الحقل مطلوب',
    },
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      setResult({ ok: true, ticketId: 'TKT-' + Date.now() });
    } catch (error) {
      setResult({ ok: false, error: t[locale].error });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
          {t[locale].name}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          {t[locale].email}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
          {t[locale].subject}
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          {t[locale].message}
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {t[locale].submit}
      </button>

      {result && (
        <div className={`p-4 rounded-md ${
          result.ok ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
        }`}>
          {result.ok ? t[locale].success(result.ticketId!) : result.error}
        </div>
      )}
    </form>
  );
}
