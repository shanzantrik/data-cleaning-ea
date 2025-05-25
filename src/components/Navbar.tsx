'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';

const sections = [
  { id: 'why-choose', label: 'Why Choose Us' },
  { id: 'bento', label: "What's Included" },
  { id: 'video', label: 'Video' },
  { id: 'who-for', label: 'Who Is This For' },
  { id: 'testimonials-about', label: 'Testimonials' },
  { id: 'faq', label: 'FAQ' },
  { id: 'pricing', label: 'Pricing' },
];

export default function Navbar() {
  const [active, setActive] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      let found = 'hero';
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom > 80) {
            found = section.id;
            break;
          }
        }
      }
      setActive(found);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="w-full px-0 py-4 flex justify-center bg-white sticky top-0 z-50 shadow-md">
      <div className="site-container flex items-center justify-between">
        <a href="#hero">
          <Image src="/logo.png" alt="Express Analytics Logo" width={210} height={60} priority />
        </a>
        <div className="flex-1 flex flex-col items-center">
          <ul className="flex space-x-8 text-[#dc1b36] font-semibold text-lg">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => {
                    const el = document.getElementById(section.id);
                    if (el) {
                      const yOffset = -80; // Adjust this to your navbar height
                      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                      window.scrollTo({ top: y, behavior: 'smooth' });
                    }
                  }}
                  className={
                    active === section.id
                      ? 'border-b-2 border-[#dc1b36] pb-1 text-[#dc1b36]'
                      : 'text-[#dc1b36] opacity-70 hover:opacity-100'
                  }
                  style={{ background: 'none', border: 'none', padding: 0, margin: 0, cursor: 'pointer' }}
                >
                  {section.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center space-x-4">
          <a href="https://www.linkedin.com/company/express-analytics" target="_blank" rel="noopener noreferrer" className="text-[#dc1b36] hover:text-[#7a2323] text-2xl">
            <FaLinkedin />
          </a>
          <a href="https://x.com/ExpresAnalytics" target="_blank" rel="noopener noreferrer" className="text-[#dc1b36] hover:text-[#7a2323] text-2xl">
            <FaTwitter />
          </a>
        </div>
      </div>
    </nav>
  );
}
