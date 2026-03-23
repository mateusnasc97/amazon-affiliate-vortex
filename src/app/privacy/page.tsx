import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: "Privacy Policy | Daily Kitchen Deals 2026",
  description: "Privacy Policy and Data Protection guidelines for Daily Kitchen Deals.",
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-gray-50 font-sans text-gray-900 py-12 px-6">
      <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border">
        <Link href="/" className="text-sm text-orange-600 hover:text-orange-700 font-semibold mb-6 inline-block">
          &larr; Back to Home
        </Link>
        <h1 className="text-3xl font-extrabold mb-4">Privacy Policy</h1>
        <p className="text-gray-500 mb-8 text-sm">Last updated: March 2026</p>
        
        <div className="space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">1. Introduction</h2>
            <p>Welcome to Daily Kitchen Deals. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">2. The Data We Collect</h2>
            <p>Personal data, or personal information, means any information about an individual from which that person can be identified. We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
            <ul className="list-disc pl-5 mt-3 space-y-2">
              <li><strong>Usage Data:</strong> includes information about how you use our website, products and services.</li>
              <li><strong>Technical Data:</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
            </ul>
            <p className="mt-3">We do not collect any Special Categories of Personal Data about you (this includes details about your race or ethnicity, religious or philosophical beliefs, sex life, sexual orientation, political opinions, trade union membership, information about your health, and genetic and biometric data).</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">3. How We Use Your Personal Data</h2>
            <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
            <ul className="list-disc pl-5 mt-3 space-y-2">
              <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
              <li>Where we need to comply with a legal obligation.</li>
              <li>To improve our website, products/services, marketing, customer relationships and experiences.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">4. Affiliate Links / Amazon Associate</h2>
            <p>We are a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for us to earn fees by linking to Amazon.com and affiliated sites. When you click on links to various merchants on this site and make a purchase, this can result in this site earning a commission. This does not affect the price you pay and helps us continue providing quality content.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">5. Cookies and Web Beacons</h2>
            <p>You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly. We use cookies to store information about visitor preferences and record user-specific information on what pages users access or visit.</p>
          </section>
        </div>

        <div className="mt-12 pt-6 border-t text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Daily Kitchen Deals. All rights reserved.
          </p>
        </div>
      </div>
    </main>
  );
}
