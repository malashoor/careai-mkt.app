'use client';

import * as React from 'react';
import { useState } from 'react';
import PremiumCTAButton from '@/components/premium-cta-button';

export default function ContactFormClient({ dict }: { dict: any }): JSX.Element {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    // TODO: Implement form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-brand-border rounded-2xl p-8 shadow-brand">
      <div className="mb-6">
        <label htmlFor="name" className="block text-sm font-medium text-brand-fg mb-2">
          {dict.contact?.form?.name || "Name"}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-brand-border rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent"
          placeholder={dict.contact?.form?.name || "Name"}
        />
      </div>
      
      <div className="mb-6">
        <label htmlFor="email" className="block text-sm font-medium text-brand-fg mb-2">
          {dict.contact?.form?.email || "Email"}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-brand-border rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent"
          placeholder={dict.contact?.form?.email || "Email"}
        />
      </div>
      
      <div className="mb-6">
        <label htmlFor="subject" className="block text-sm font-medium text-brand-fg mb-2">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-brand-border rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent"
          placeholder="Subject"
        />
      </div>
      
      <div className="mb-8">
        <label htmlFor="message" className="block text-sm font-medium text-brand-fg mb-2">
          {dict.contact?.form?.message || "Message"}
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-3 border border-brand-border rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent resize-none"
          placeholder={dict.contact?.form?.message || "Message"}
        />
      </div>
      
      <div className="text-center">
        <button 
          onClick={handleSubmit}
          className="w-full justify-center px-6 py-3 text-base rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-600/20 hover:shadow-lg hover:shadow-blue-600/30 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2"
        >
          {dict.contact?.form?.submit || "Send Message"}
        </button>
      </div>
    </form>
  );
}
