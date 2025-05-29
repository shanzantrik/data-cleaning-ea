'use client';

import Image from "next/image";
import { motion } from 'framer-motion'
import { FaGem, FaDatabase, FaCheckCircle, FaChartLine, FaFileAlt, FaSearch, FaShieldAlt, FaUpload, FaCogs, FaDownload, FaPlay } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import StripePaymentModal from '@/components/StripePaymentModal';

function CookieConsent() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const consent = localStorage.getItem('cookie_consent');
      if (!consent) setVisible(true);
    }
  }, []);
  const accept = () => {
    localStorage.setItem('cookie_consent', 'true');
    setVisible(false);
  };
  if (!visible) return null;
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 w-full z-[100] flex justify-center items-end pointer-events-none"
    >
      <div className="pointer-events-auto bg-white text-[#18181b] shadow-xl rounded-t-2xl p-6 m-4 max-w-xl w-full flex flex-col md:flex-row items-center gap-4 border border-gray-200">
        <span className="flex-1 text-sm" id="cookie-message">
          We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies. <a href="/privacy" className="underline text-[#dc1b36]" aria-label="Read our privacy policy">Learn more</a>.
        </span>
        <button
          onClick={accept}
          className="bg-[#dc1b36] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#a31225] transition-colors"
          aria-label="Accept cookies"
        >
          Accept
        </button>
      </div>
    </div>
  );
}

export default function Home() {
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  // Scroll to the footer form
  const scrollToFooterForm = () => {
    const el = document.getElementById('footer-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#f5f6fa] text-[#18181b]">
      <StripePaymentModal
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
      />
      <CookieConsent />
      {/* Hero Section */}
      <section id="hero" className="relative flex flex-col md:flex-row items-center justify-center min-h-[80vh] bg-[#f5f6fa] overflow-hidden" aria-labelledby="hero-heading">
        <div className="z-10 flex-1 flex flex-col justify-center items-start px-6 md:px-16 py-16">
          <h1 id="hero-heading" className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#dc1b36] to-purple-600 text-transparent bg-clip-text animate-gradient">
            Still Manually Cleaning Data?
          </h1>
          <h2 className="text-2xl md:text-3xl mb-8 text-black drop-shadow">
            Let Us Handle 200K Records for $1,000
          </h2>
          <p className="text-xl mb-8 text-[#18181b]">
            Precision-Cleaned Data from As Low As 5 cents Delivered at Operational Velocity.
          </p>
          <div>
            <button
              onClick={scrollToFooterForm}
              className="flex items-center gap-2 bg-gradient-to-r from-[#dc1b36] to-purple-600 text-white px-8 py-4 rounded-lg text-xl font-semibold hover:from-[#a31225] hover:to-purple-800 transition-colors shadow-lg focus:outline-none focus:ring-2 focus:ring-[#dc1b36] focus:ring-offset-2"
              aria-label="Claim your discount now"
            >
              <FaGem className="text-white text-2xl animate-bounce" aria-hidden="true" />
              Claim Your Discount Now
            </button>
          </div>
        </div>
        {/* Main data cleaning hero image, no overlays */}
        <div className="flex-1 flex items-center justify-center relative w-full h-[400px] md:h-[600px]">
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse', delay: 0.5 }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 shadow-2xl rounded-2xl overflow-hidden border border-gray-200"
            style={{ width: '90%', maxWidth: 700, zIndex: 2 }}
            aria-hidden="true"
          >
            <Image
              src="/data-cleaning-hero.webp"
              alt="Data Cleaning and Management Hero"
              width={900}
              height={600}
              className="object-cover w-full h-full brightness-110"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* Advanced Informative Section */}
      <section className="relative w-full bg-black text-white overflow-hidden rounded-[20px] my-12">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden rounded-[20px]">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute w-full h-full object-cover opacity-20 rounded-[20px]"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-futuristic-devices-99786-large.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 rounded-[20px]"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto text-center py-24 px-4"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-8"
          >
            <span className="text-[#dc1b36]">Get Clean Data</span> at the Speed of <span className="text-[#dc1b36]">Your Business!</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6 mb-12"
          >
            <p className="text-xl text-gray-200">
              Your AI is only as smart as your data! Dirty data drains your budget as well as leads to bad decisions.
            </p>
            <p className="text-xl text-gray-200">
              Poor data leads to poor AI performance, wasted campaigns, and lost revenue. What if data peace of mind cost you less than the cost of a paperclip per record, worth every byte!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12 shadow-lg border border-white/20"
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold text-[#dc1b36] mb-4">Clean your 200,000 records for just $1,000</h3>
              <p className="text-lg text-gray-200 mb-6">Yes, that&#39;s $0.005 per record or just 50 cents per 1,000 records.</p>
              <ul className="space-y-3 text-left max-w-md mx-auto">
                <li className="flex items-center gap-2 text-gray-200">
                  <span className="text-[#dc1b36]">✓</span>
                  <span>You get more than just a clean dataset.</span>
                </li>
                <li className="flex items-center gap-2 text-gray-200">
                  <span className="text-[#dc1b36]">✓</span>
                  <span>You get back your time. You get back control. You get back clarity.</span>
                </li>
                <li className="flex items-center gap-2 text-gray-200">
                  <span className="text-[#dc1b36]">✓</span>
                  <span>Only 100 spots available. Grab yours before it&#39;s gone</span>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <span className="inline-block bg-[#dc1b36]/20 text-[#dc1b36] px-4 py-2 rounded-full font-semibold text-lg animate-pulse border border-[#dc1b36]/30">
              Limited-Time Offer on Cleaning Services!
            </span>
            <div>
              <button
                onClick={scrollToFooterForm}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#dc1b36] to-purple-600 text-white px-8 py-4 rounded-lg text-xl font-semibold hover:from-[#a31225] hover:to-purple-800 transition-colors shadow-lg"
              >
                <FaGem className="text-white text-2xl animate-bounce" />
                <span>Talk to Our Data Experts</span>
              </button>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose" className="w-full bg-[#f5f6fa] py-24">
        <div className="site-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-[#dc1b36] mb-8 text-center">Why Choose Express Analytics?</h2>

            <p className="text-lg text-gray-700 mb-12 text-center">
              We understand, it might seem easier to hand off the data cleanup to your internal team. But is that really the best use of their time? Many of our clients thought the same, until they realized it was slowing them down. That&#39;s when they let us step in, with faster, cleaner, and more cost-effective results.
            </p>

            <div className="space-y-4 mb-12">
              {[
                {
                  number: "01",
                  title: "Better, Quicker, Cheaper",
                  content: "While your team's tied up in spreadsheets, we clean and return your data, at your business speed. No distractions. No delays. Just clean, ready-to-use data, delivered fast."
                },
                {
                  number: "02",
                  title: "Precision plus Scale",
                  content: "Whether it's 20K or 2 million records, our system is built for high-volume accuracy with human oversight at every step."
                },
                {
                  number: "03",
                  title: "Dedicated SFTP Setup",
                  content: "Every customer gets their own secure SFTP Vault, set up as soon as your client ID is created. Your data never touches shared servers, privacy is built-in."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#dc1b36] rounded-full flex items-center justify-center text-white font-bold text-xl">
                        {item.number}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-[#dc1b36] mb-2">{item.title}</h3>
                        <p className="text-gray-700">{item.content}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >

            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Bento Grid Section */}
      <section id="bento" className="w-full bg-[#f5f6fa] py-24">
        <div className="site-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-7xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-[#dc1b36] mb-8 text-center">What&#39;s Included in This Offer?</h2>
            <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto">
              We&#39;ll not just &quot;clean&quot; your data, we&#39;ll refine it too.
            </p>

            {/* Bento Grid - 2 rows x 3 columns, all equal size */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {[
                {
                  title: "Data Deduplication",
                  desc: "Remove repeated entries that mess with analysis and campaign metrics.",
                  img: "/data_duplication.png",
                  color: "bg-white text-black",
                  icon: FaDatabase,
                  link: "#services"
                },
                {
                  title: "Validation & Standardization",
                  desc: "Bring consistency to names, phone numbers, emails, dates; across records.",
                  img: "/data_quality.png",
                  color: "bg-[#a259f7] text-white",
                  icon: FaCheckCircle,
                  link: "#services"
                },
                {
                  title: "Missing Value Imputation",
                  desc: "Use proven methods to fill in blanks intelligently, not randomly.",
                  img: "/missing_value.png",
                  color: "bg-[#f72585] text-white",
                  icon: FaChartLine,
                  link: "#services"
                },
                {
                  title: "Data Quality Report",
                  desc: "You will get a complete report showing what was fixed, cleaned, and enriched, transparency included.",
                  img: "/data_quality.png",
                  color: "bg-black text-white",
                  icon: FaFileAlt,
                  link: "#services"
                },
                {
                  title: "Error Correction & Formatting",
                  desc: "Fix spelling, punctuation, and field-level issues to make data analysis-ready.",
                  img: "/error_correction.png",
                  color: "bg-[#b5179e] text-white",
                  icon: FaShieldAlt,
                  link: "#services"
                },
                {
                  title: "Data Enrichment",
                  desc: "Add missing demographic, firmographic, or geolocation data for better targeting.",
                  img: "/data_enrichment.png",
                  color: "bg-[#4361ee] text-white",
                  icon: FaSearch,
                  link: "#services"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`group relative rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col justify-between ${item.color}`}
                  style={{ minHeight: '340px' }}
                >
                  <div className="flex flex-col h-full p-6 pb-0">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-black/20">
                        {item.icon ? <item.icon className="text-2xl" /> : null}
                      </div>
                      <h3 className="text-2xl font-bold leading-tight flex-1">{item.title || ''}</h3>
                    </div>
                    <p className="mb-4 text-base font-medium flex-1">{item.desc}</p>
                    {/* {item.title === 'Data Deduplication' && (
                      <button
                        onClick={scrollToFooterForm}
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-[#dc1b36] to-purple-600 text-white px-6 py-3 rounded-lg text-base font-semibold hover:from-[#a31225] hover:to-purple-800 transition-colors shadow-lg mb-4"
                      >
                        <FaGem className="text-white text-xl animate-bounce" />
                        <span>Start Deduplication</span>
                      </button>
                    )} */}
                  </div>
                  <div className="w-full mt-auto">
                    {item.img ? (
          <Image
                        src={item.img}
                        alt={item.title || 'Data Cleaning'}
                        width={400}
                        height={120}
                        className={`w-full object-cover object-center rounded-b-2xl h-32`}
                      />
                    ) : null}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <button
                onClick={scrollToFooterForm}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#dc1b36] to-purple-600 text-white px-8 py-4 rounded-lg text-xl font-semibold hover:from-[#a31225] hover:to-purple-800 transition-colors shadow-lg"
              >
                <FaGem className="text-white text-2xl animate-bounce" />
                <span>Let&#39;s Clean Your Data</span>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section (moved out of bento grid) */}
      <section id="how-it-works" className="w-full py-24">
        <div className="site-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative rounded-2xl shadow-lg overflow-hidden flex flex-col justify-between p-8 bg-gradient-to-br from-[#dc1b36] via-purple-600 to-[#4361ee] text-white items-center text-center"
            style={{ minHeight: '340px' }}
          >
            <h3 className="text-3xl font-bold mb-6 text-center">How It Works</h3>
            <p className="text-lg mb-8 text-center">
              You&apos;re 3 steps away from working with clean, reliable data -
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
              {[
                {
                  icon: FaUpload,
                  title: "Upload Your Dataset",
                  desc: "We will give you a dedicated SFTP link for secure data transfer."
                },
                {
                  icon: FaCogs,
                  title: "Let the Experts Take Over",
                  desc: "Our team starts processing the moment your file lands in the vault. No waiting around."
                },
                {
                  icon: FaDownload,
                  title: "Get Clean Data at the Speed of Your Business",
                  desc: "You receive a fully-cleaned file plus a quality report, ready to plug into your workflows."
                }
              ].map((step, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center mb-3">
                    <step.icon className="text-white text-2xl" />
                  </div>
                  <h4 className="text-lg font-bold mb-1">{step.title}</h4>
                  <p className="text-sm">{step.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Video Section */}
      <section id="video" className="w-full bg-[#f5f6fa] py-24">
        <div className="site-container max-w-4xl mx-auto flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#dc1b36] mb-4">Why Is Data Cleaning Your Performance Differentiator?</h2>
          <p className="text-lg text-gray-700 mb-2">Poor data leads to poor decisions. Period.</p>
          <p className="text-md text-gray-600 mb-8">Watch this quick video to see how companies are turning messy spreadsheets into revenue generators:</p>
          <VideoModalTrigger />
          <button
            onClick={scrollToFooterForm}
            className="mt-8 inline-flex items-center gap-2 bg-gradient-to-r from-[#dc1b36] to-purple-600 text-white px-8 py-4 rounded-lg text-xl font-semibold hover:from-[#a31225] hover:to-purple-800 transition-colors shadow-lg"
          >
            <FaGem className="text-white text-2xl animate-bounce" />
            <span>Claim Your Discount Now</span>
          </button>
        </div>
      </section>

      {/* Who Is This For Section */}
      <section id="who-for" className="w-full bg-[#f5f6fa] py-24">
        <div className="site-container max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#dc1b36] mb-10 text-center">Who Is This For?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Data Analysts */}
            <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center">
              <FaDatabase className="text-[#dc1b36] text-4xl mb-4" />
              <h3 className="text-xl font-bold mb-2">Data Analysts</h3>
              <p className="text-gray-700">Who need clean CRM data or campaign lists</p>
            </div>
            {/* Marketing Operations */}
            <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center">
              <FaChartLine className="text-[#a259f7] text-4xl mb-4" />
              <h3 className="text-xl font-bold mb-2">Marketing Operations</h3>
              <p className="text-gray-700">Teams looking to reduce bounce rates and increase engagement</p>
            </div>
            {/* Business Analysts */}
            <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center">
              <FaCogs className="text-[#4361ee] text-4xl mb-4" />
              <h3 className="text-xl font-bold mb-2">Business Analysts</h3>
              <p className="text-gray-700">Who can&#39;t afford to work with messy exports anymore</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials & About Section */}
      <section id="testimonials-about" className="w-full bg-[#f5f6fa] py-24">
        <div className="site-container max-w-5xl mx-auto flex flex-col md:flex-row gap-10 items-stretch">
          {/* About Us Left */}
          <div className="flex-1 bg-white rounded-2xl shadow-xl p-8 flex flex-col justify-center mb-8 md:mb-0 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-[#dc1b36] mb-4">About Us</h2>
            <p className="text-lg text-gray-700 max-w-xl mx-auto md:mx-0">
              Founded in 2005, Express Analytics is a global data analytics company trusted by over 100 businesses worldwide. We specialize in turning raw, unorganized data into high-quality, actionable insights. With a team of experienced data scientists and engineers, we&#39;re committed to speed, accuracy, and absolute data security. Whether it&#39;s for marketing, operations, or AI readiness, clean data is at the heart of every smart decision. Let us help you power those decisions, one record at a time.
            </p>
          </div>
          {/* Testimonials Right */}
          <div className="flex-1 bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center justify-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#dc1b36] mb-8 text-center">Real Results from Our Clients</h2>
            <TestimonialSlider autoScroll />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="w-full bg-[#f5f6fa] py-24">
        <div className="site-container max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#dc1b36] mb-10 text-center">Frequently Asked Questions</h2>
          <FAQAccordion />
        </div>
      </section>

      {/* Pricing Section - Dark CTA */}
      <section id="pricing" className="w-full bg-[#18181b] py-24 text-white rounded-[20px]">
        <div className="site-container max-w-2xl mx-auto flex flex-col items-center text-center rounded-[20px]">
          <h2 className="text-3xl md:text-4xl font-bold text-[#dc1b36] mb-6">Boost ROI by Cleaning Up Your Data</h2>
          <p className="text-lg mb-4 text-gray-200">Data is the foundation behind every decision you make. If it&#39;s messy, your outcomes will be too.</p>
          <p className="text-lg mb-8 text-gray-400">Don&#39;t let bad data drag you down.</p>
          <div className="bg-[#232326] rounded-2xl shadow-lg p-8 mb-8 w-full">
            <div className="text-2xl font-bold mb-2 text-white">Clean 200,000 records for just <span className="text-[#dc1b36]">$1,000</span></div>
            <div className="text-lg text-gray-200 mb-2">Data solutions that keep pace with tech evolution</div>
            <div className="text-lg text-gray-400 mb-2">Fully secure and confidential</div>
          </div>
          <button
            onClick={scrollToFooterForm}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#dc1b36] to-purple-600 text-white px-8 py-4 rounded-lg text-xl font-semibold hover:from-[#a31225] hover:to-purple-800 transition-colors shadow-lg mb-4"
          >
            <FaGem className="text-white text-2xl animate-bounce" />
            <span>Claim Your Clean Data – Only 100 Spots Left!</span>
          </button>
        </div>
      </section>
    </div>
  );
}

// Video Modal Trigger and Modal
function VideoModalTrigger() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="relative w-full max-w-3xl mx-auto cursor-pointer group mb-2" onClick={() => setOpen(true)}>
          <Image
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80"
          alt="Data analytics dashboard preview"
          width={1200}
          height={420}
          className="rounded-2xl shadow-lg w-full h-[420px] object-cover object-center"
          priority
        />
        <span className="absolute inset-0 flex items-center justify-center">
          <FaPlay className="text-[#dc1b36] text-6xl animate-pulse drop-shadow-lg group-hover:scale-110 transition-transform" style={{ filter: 'drop-shadow(0 0 16px #dc1b36)' }} aria-hidden="true" />
        </span>
      </div>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="relative bg-black rounded-2xl shadow-2xl max-w-4xl w-full mx-4">
            <button
              className="absolute top-2 right-2 text-white text-2xl bg-black/60 rounded-full p-2 hover:bg-[#dc1b36] transition-colors z-10"
              onClick={() => setOpen(false)}
              aria-label="Close video"
            >
              ×
            </button>
            <div className="w-full rounded-2xl overflow-hidden" style={{ aspectRatio: '16/7' }}>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/FQwCgSWRrcI?autoplay=1"
                title="Why Is Data Cleaning Your Performance Differentiator?"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="rounded-2xl w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// Testimonial Slider Component with auto-scroll
function TestimonialSlider({ autoScroll }: { autoScroll?: boolean }) {
  const testimonials = [
    {
      quote: "“We used to burn 8 hours a week on lead cleanup. Express Analytics gives us back that time, and the results are 10x better.”",
      author: "Marketing Ops Manager, SaaS Firm",
      img: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80"
    },
    {
      quote: "“The turnaround time was incredible. We uploaded 150K records, and got everything back, clean and validated, in 90 minutes.”",
      author: "Sr. Data Analyst, Retail Chain",
      img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=400&q=80"
    },
  ];
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    if (!autoScroll) return;
    const interval = setInterval(() => {
      setIdx((prev: number) => (prev + 1) % testimonials.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [autoScroll, testimonials.length]);
  return (
    <div className="w-full flex flex-col items-center">
          <Image
        src={testimonials[idx].img}
        alt={testimonials[idx].author}
        width={64}
        height={64}
        className="w-16 h-16 rounded-full object-cover mb-4 border-4 border-[#f5f6fa] shadow"
      />
      <blockquote className="italic text-xl text-gray-800 mb-4 min-h-[80px] transition-all duration-300">
        {testimonials[idx].quote}
      </blockquote>
      <div className="font-bold text-[#dc1b36] mb-4">{testimonials[idx].author}</div>
      <div className="flex gap-2 justify-center">
        {testimonials.map((_, i) => (
          <button
            key={i}
            className={`w-3 h-3 rounded-full border-2 border-[#dc1b36] transition-all duration-200 ${i === idx ? 'bg-[#dc1b36]' : 'bg-white'}`}
            onClick={() => setIdx(i)}
            aria-label={`Show testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function FAQAccordion() {
  const faqs = [
    {
      q: 'Is my data secure?',
      a: 'Yes. Every client gets a unique SFTP Vault for upload. Data is never shared, reused, or exposed.'
    },
    {
      q: 'Can you handle custom formats or weirdly messy files?',
      a: 'Absolutely. From Excel sheets with merged cells to JSON exports—we\'ve seen it all.'
    },
    {
      q: 'What do I get with this plan?',
      a: 'A cleaned dataset, a comprehensive data quality report, and results that move as fast as your goals.'
    },
    {
      q: 'Why not do this in-house?',
      a: 'Because your team\'s time is valuable. Data cleaning is repetitive, thankless, and error-prone. We do it faster, better, and cheaper.'
    },
    {
      q: 'Can I hire a dedicated resource if I need frequent help?',
      a: 'Yes, of course. We offer dedicated monthly data specialists for companies with ongoing cleaning needs.'
    },
  ];
  const [openIdx, setOpenIdx] = useState(0);
  return (
    <div className="space-y-4">
      {faqs.map((faq, i) => (
        <div key={i} className="bg-white rounded-xl shadow p-4">
          <button
            className="flex justify-between items-center w-full text-left text-lg font-semibold text-[#dc1b36] focus:outline-none"
            onClick={() => setOpenIdx(openIdx === i ? -1 : i)}
            aria-expanded={openIdx === i}
            aria-controls={`faq-panel-${i}`}
          >
            <span>{faq.q}</span>
            <span className={`ml-2 transition-transform ${openIdx === i ? 'rotate-90' : ''}`}>▶</span>
          </button>
          <div
            id={`faq-panel-${i}`}
            className={`overflow-hidden transition-all duration-300 ${openIdx === i ? 'max-h-40 mt-2' : 'max-h-0'}`}
            aria-hidden={openIdx !== i}
          >
            <p className="text-gray-700 text-base px-1 pb-2">{faq.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
