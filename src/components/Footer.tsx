'use client';
import { useState } from 'react';

export default function Footer() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    // Here you would handle the form submission (API call, etc.)
  }

  return (
    <footer className="w-full bg-[#18181b] text-white pt-12 pb-6 px-4 mt-12 rounded-t-[20px]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 md:gap-8 justify-between">
        {/* Contact Info & Map */}
        <div className="flex-1 flex flex-col gap-8">
          <div>
            <h3 className="text-xl font-bold mb-2 text-[#dc1b36]">Corporate Headquarters (USA)</h3>
            <p className="text-gray-200">300, Spectrum Centre Drive Suite 400,<br />Irvine, California – 92618</p>
            <p className="text-gray-400">info@expressanalytics.com</p>
          </div>
          <iframe
            title="Express Analytics USA HQ Map"
            width="100%"
            height="100%"
            frameBorder="0"
            scrolling="no"
            marginHeight={0}
            marginWidth={0}
            className="w-full h-full"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-117.747174%2C33.652436%2C-117.741174%2C33.656436&layer=mapnik&marker=33.654436%2C-117.744174"
            style={{ minHeight: 180 }}
          ></iframe>
          <div>
            <h3 className="text-xl font-bold mb-2 text-[#dc1b36]">India Address (PUNE)</h3>
            <p className="text-gray-200">Workflo, Pride accord building, 2nd floor,<br />Opposite Symantec office, Baner road, Baner, Pune – 411045</p>
            <p className="text-gray-400">info@expressanalytics.com</p>
          </div>
        </div>
        {/* Callback Form */}
        <div className="flex-1 flex flex-col gap-4 bg-[#232326] rounded-2xl p-6 shadow-lg max-w-md mx-auto">
          <h3 className="text-xl font-bold mb-4 text-[#dc1b36]">Request a Callback</h3>
          {submitted ? (
            <div className="text-green-400 font-semibold text-center py-8">Thank you! We will contact you soon.</div>
          ) : (
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                required
                placeholder="Your Name"
                className="px-4 py-2 rounded-lg bg-[#18181b] border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#dc1b36]"
                value={form.name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Your Email"
                className="px-4 py-2 rounded-lg bg-[#18181b] border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#dc1b36]"
                value={form.email}
                onChange={handleChange}
              />
              <input
                type="tel"
                name="phone"
                required
                placeholder="Your Phone"
                className="px-4 py-2 rounded-lg bg-[#18181b] border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#dc1b36]"
                value={form.phone}
                onChange={handleChange}
              />
              <textarea
                name="message"
                rows={3}
                placeholder="How can we help?"
                className="px-4 py-2 rounded-lg bg-[#18181b] border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#dc1b36]"
                value={form.message}
                onChange={handleChange}
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-[#dc1b36] to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-[#a31225] hover:to-purple-800 transition-colors shadow-lg mt-2"
              >
                Request Callback
              </button>
            </form>
          )}
          <div className="text-xs text-gray-400 mt-4">
            Don&#39;t submit a contact form for guest posts. For guest post inquiries, please reach out to <a href="mailto:marketing@expressanalytics.net" className="underline text-[#dc1b36]">marketing@expressanalytics.net</a>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-400 text-sm mt-10">
        &copy; {new Date().getFullYear()} Express Analytics. All rights reserved.
      </div>
    </footer>
  );
}
