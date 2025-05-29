'use client';
// import { useState } from 'react';
import Script from 'next/script';

// TypeScript declaration for HubSpot
type HubSpotForms = {
  forms: {
    create: (options: {
      portalId: string;
      formId: string;
      region: string;
      target: string;
    }) => void;
  };
};
declare global {
  interface Window {
    hbspt?: HubSpotForms;
  }
}

export default function Footer() {
  return (
    <footer className="w-full bg-[#18181b] text-white pt-12 pb-6 px-4 mt-12 rounded-t-[20px]">
      <div className="site-container flex flex-col md:flex-row gap-8 justify-center mx-auto">
        {/* Contact Info & Map */}
        <div className="w-full md:w-1/2 flex flex-col gap-8 min-w-[320px] max-w-[520px] md:pr-4">
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
            className="w-full h-full rounded-xl"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-117.747174%2C33.652436%2C-117.741174%2C33.656436&layer=mapnik&marker=33.654436%2C-117.744174"
            style={{ minHeight: 120, maxHeight: 180 }}
          ></iframe>
          <div>
            <h3 className="text-xl font-bold mb-2 text-[#dc1b36]">India Address</h3>
            <p className="text-gray-200">Workflo, Pride accord building, 2nd floor,<br />Opposite Symantec office, Baner road, Baner, Pune – 411045</p>
            <p className="text-gray-400">info@expressanalytics.com</p>
          </div>
        </div>
        {/* Callback Form */}
        <div id="footer-form" className="w-full flex flex-col gap-4 bg-[#232326] rounded-2xl p-6 shadow-lg">
          <h3 className="text-xl font-bold mb-4 text-[#dc1b36]">Request a Callback</h3>
          <div id="hubspot-form" className="flex flex-col gap-4"></div>
          <Script
            id="hubspot-forms-js"
            src="//js.hsforms.net/forms/embed/v2.js"
            strategy="afterInteractive"
            onLoad={() => {
              if (window.hbspt && window.hbspt.forms) {
                window.hbspt.forms.create({
                  portalId: '287495',
                  formId: '163b9bfb-3381-4980-802f-88b5ddf5fab1',
                  region: 'na1',
                  target: '#hubspot-form',
                });
              }
            }}
          />
          <div className="text-xs text-gray-400 mt-4">
            Don&#39;t submit a contact form for guest posts. Domains associated with guest posts will be blacklisted.
          </div>
        </div>
      </div>
      <div className="text-center text-gray-400 text-sm mt-10">
        &copy; {new Date().getFullYear()} Express Analytics. All rights reserved.
      </div>
    </footer>
  );
}
