"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="col-span-1">
            <div className="flex items-center mb-4">
              <Image
                src="/images/gergens-logo.png"
                alt="Gergen's Orthodontic Lab"
                width={200}
                height={50}
                className="h-10 w-auto bg-white p-1 rounded"
                priority
              />
            </div>
            <p className="text-gray-300 mb-4">
              Gergen's Orthodontic Lab provides cutting-edge dental laboratory services with a special focus on sleep apnea solutions and oral appliances.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/sleep-solutions" className="text-gray-300 hover:text-white">
                  Sleep Solutions
                </Link>
              </li>
              <li>
                <Link href="/orthodontic-products" className="text-gray-300 hover:text-white">
                  Orthodontic Products
                </Link>
              </li>
              <li>
                <Link href="/crown-bridge" className="text-gray-300 hover:text-white">
                  Crown & Bridge
                </Link>
              </li>
              <li>
                <Link href="/clear-aligners" className="text-gray-300 hover:text-white">
                  Clear Aligners
                </Link>
              </li>
              <li>
                <Link href="/submit-case/new" className="text-gray-300 hover:text-white">
                  Submit a Case
                </Link>
              </li>
              <li>
                <Link href="/pay-online/invoice" className="text-gray-300 hover:text-white">
                  Pay Online
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/resources/submit-case-guide" className="text-gray-300 hover:text-white">
                  How to Submit a Case
                </Link>
              </li>
              <li>
                <Link href="/resources/shipping" className="text-gray-300 hover:text-white">
                  Shipping Instructions
                </Link>
              </li>
              <li>
                <Link href="/resources/prescription-forms" className="text-gray-300 hover:text-white">
                  Prescription Forms
                </Link>
              </li>
              <li>
                <Link href="/resources/faqs" className="text-gray-300 hover:text-white">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/about-us/blog" className="text-gray-300 hover:text-white">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <address className="not-italic text-gray-300">
              <p className="mb-2">Gergen's Orthodontic Lab</p>
              <p className="mb-2">1-623-879-6000</p>
              <p className="mb-2">info@gergensortho.com</p>
              <p className="mb-2">Phoenix, Arizona</p>
            </address>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            &copy; {new Date().getFullYear()} Gergen's Orthodontic Lab. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li>
                <Link href="/privacy-policy" className="text-gray-300 hover:text-white text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-gray-300 hover:text-white text-sm">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/about-us/contact" className="text-gray-300 hover:text-white text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
