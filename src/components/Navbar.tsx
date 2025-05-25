'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';
import { FiMenu, FiX } from 'react-icons/fi';

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
  const [menuOpen, setMenuOpen] = useState(false);

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

  // Prevent background scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const handleNavClick = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <nav className="w-full px-0 py-4 flex justify-center bg-white sticky top-0 z-50 shadow-md">
      <div className="site-container flex items-center justify-between">
        <a href="#hero">
          <Image src="/logo.png" alt="Express Analytics Logo" width={210} height={60} priority />
        </a>
        {/* Desktop Nav */}
        <div className="hidden md:flex flex-1 flex-col items-center">
          <ul className="flex space-x-8 text-[#dc1b36] font-semibold text-lg">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => handleNavClick(section.id)}
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
        {/* Desktop Socials */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="https://www.linkedin.com/company/express-analytics" target="_blank" rel="noopener noreferrer" className="text-[#dc1b36] hover:text-[#7a2323] text-2xl">
            <FaLinkedin />
          </a>
          <a href="https://x.com/ExpresAnalytics" target="_blank" rel="noopener noreferrer" className="text-[#dc1b36] hover:text-[#7a2323] text-2xl">
            <FaTwitter />
          </a>
        </div>
        {/* Hamburger Icon */}
        <button
          className="md:hidden flex items-center justify-center text-[#dc1b36] text-3xl p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#dc1b36] transition-all"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <FiX className="transition-transform duration-200 scale-110" /> : <FiMenu className="transition-transform duration-200" />}
        </button>
      </div>
      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        aria-hidden={!menuOpen}
        onClick={() => setMenuOpen(false)}
      />
      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 md:hidden font-sans ${menuOpen ? 'translate-y-0' : '-translate-y-full'}`}
        style={{ fontFamily: 'var(--font-montserrat)' }}
        aria-modal="true"
        role="dialog"
      >
        <div className="bg-white rounded-b-2xl shadow-xl pt-6 pb-8 px-6 flex flex-col items-center border-b-2 border-[#dc1b36]">
          <div className="w-full flex items-center justify-between mb-6">
            <a href="#hero" onClick={() => setMenuOpen(false)}>
              <Image src="/logo.png" alt="Express Analytics Logo" width={160} height={48} priority />
            </a>
            <button
              className="text-[#dc1b36] text-3xl p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#dc1b36]"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            >
              <FiX />
            </button>
          </div>
          <ul className="flex flex-col space-y-6 text-[#dc1b36] font-bold text-xl w-full items-center mb-8">
            {sections.map((section) => (
              <li key={section.id} className="w-full text-center">
                <button
                  onClick={() => handleNavClick(section.id)}
                  className={
                    active === section.id
                      ? 'border-b-2 border-[#dc1b36] pb-1 text-[#dc1b36]'
                      : 'text-[#dc1b36] opacity-80 hover:opacity-100'
                  }
                  style={{ background: 'none', border: 'none', padding: 0, margin: 0, cursor: 'pointer', width: '100%' }}
                >
                  {section.label}
                </button>
              </li>
            ))}
          </ul>
          <div className="flex items-center space-x-6 justify-center">
            <a href="https://www.linkedin.com/company/express-analytics" target="_blank" rel="noopener noreferrer" className="text-[#dc1b36] hover:text-[#7a2323] text-3xl">
              <FaLinkedin />
            </a>
            <a href="https://x.com/ExpresAnalytics" target="_blank" rel="noopener noreferrer" className="text-[#dc1b36] hover:text-[#7a2323] text-3xl">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
