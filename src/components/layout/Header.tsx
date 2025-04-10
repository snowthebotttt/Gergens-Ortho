"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Navigation structure based on requirements
const navigation = [
  {
    name: 'Sleep Solutions',
    href: '/sleep-solutions',
    submenu: [
      { name: 'Sleep Appliances', href: '/sleep-solutions/appliances' },
      { name: 'Airway-Focused Treatments', href: '/sleep-solutions/airway-treatments' },
      { name: 'Patient Resources', href: '/sleep-solutions/patient-resources' },
    ],
  },
  {
    name: 'Orthodontic Products',
    href: '/orthodontic-products',
    submenu: [
      { name: 'Retainers', href: '/orthodontic-products/retainers' },
      { name: 'Fixed Appliances', href: '/orthodontic-products/fixed-appliances' },
      { name: 'Functional Orthopedics', href: '/orthodontic-products/functional-orthopedics' },
      { name: 'Splints & Night Guards', href: '/orthodontic-products/splints-night-guards' },
      { 
        name: 'Lab Services', 
        href: '/orthodontic-products/lab-services',
        submenu: [
          { name: 'Model Services', href: '/orthodontic-products/lab-services/model-services' },
          { name: 'Appliance Fabrication', href: '/orthodontic-products/lab-services/appliance-fabrication' },
        ]
      },
    ],
  },
  {
    name: 'Crown & Bridge',
    href: '/crown-bridge',
    submenu: [
      { name: 'Single Units', href: '/crown-bridge/single-units' },
      { name: 'Multiple Units', href: '/crown-bridge/multiple-units' },
      { name: 'Bridges', href: '/crown-bridge/bridges' },
      { name: 'Materials', href: '/crown-bridge/materials' },
      { name: 'Implant Solutions', href: '/crown-bridge/implant-solutions' },
    ],
  },
  {
    name: 'Clear Aligners',
    href: '/clear-aligners',
    submenu: [
      { name: 'G-Force Systems', href: '/clear-aligners/g-force-systems' },
      { name: 'Aligner Benefits', href: '/clear-aligners/benefits' },
      { name: 'Case Examples', href: '/clear-aligners/case-examples' },
    ],
  },
  {
    name: 'Resources',
    href: '/resources',
    submenu: [
      { name: 'How to Submit a Case', href: '/resources/submit-case-guide' },
      { name: 'Shipping Instructions', href: '/resources/shipping' },
      { name: 'Prescription Forms', href: '/resources/prescription-forms' },
      { name: 'FAQs', href: '/resources/faqs' },
      { name: 'Educational Materials', href: '/resources/educational-materials' },
    ],
  },
  {
    name: 'Submit a Case',
    href: '/submit-case',
    submenu: [
      { name: 'New Case Submission', href: '/submit-case/new' },
      { name: 'Case Status', href: '/submit-case/status' },
      { name: 'Upload Files', href: '/submit-case/upload' },
    ],
  },
  {
    name: 'About Us',
    href: '/about-us',
    submenu: [
      { name: 'Our Lab', href: '/about-us/lab' },
      { name: 'Our Team', href: '/about-us/team' },
      { name: 'Contact Us', href: '/about-us/contact' },
      { name: 'Blog', href: '/about-us/blog' },
    ],
  },
  {
    name: 'Pay Online',
    href: '/pay-online',
    submenu: [
      { name: 'Invoice Payment', href: '/pay-online/invoice' },
      { name: 'View Statements', href: '/pay-online/statements' },
    ],
  },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleSubmenu = (name: string) => {
    setActiveMenu(activeMenu === name ? null : name);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Image
                src="/images/gergens-logo.png"
                alt="Gergen's Orthodontic Lab"
                width={200}
                height={50}
                className="h-10 w-auto"
                priority
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:ml-6 md:flex md:space-x-4">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link 
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-900 hover:bg-gray-50 rounded-md"
                >
                  {item.name}
                </Link>
                
                {item.submenu && (
                  <div className="absolute z-10 left-0 mt-2 w-56 origin-top-left bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div className="py-1">
                      {item.submenu.map((subItem) => (
                        <React.Fragment key={subItem.name}>
                          <Link 
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                          >
                            {subItem.name}
                          </Link>
                          {subItem.submenu && subItem.submenu.map((nestedItem) => (
                            <Link 
                              key={nestedItem.name}
                              href={nestedItem.href}
                              className="block px-8 py-2 text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                            >
                              {nestedItem.name}
                            </Link>
                          ))}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded="false"
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              <svg
                className={`${mobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Icon when menu is open */}
              <svg
                className={`${mobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <motion.div 
        className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: mobileMenuOpen ? 'auto' : 0,
          opacity: mobileMenuOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navigation.map((item) => (
            <div key={item.name}>
              <div 
                className="flex justify-between items-center px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-900 hover:bg-gray-50 rounded-md cursor-pointer"
                onClick={() => toggleSubmenu(item.name)}
              >
                <Link href={item.href}>{item.name}</Link>
                {item.submenu && (
                  <svg 
                    className={`ml-2 h-5 w-5 transition-transform ${activeMenu === item.name ? 'transform rotate-180' : ''}`} 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                )}
              </div>
              
              {item.submenu && activeMenu === item.name && (
                <motion.div 
                  className="pl-4 pr-2 py-2 space-y-1"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {item.submenu.map((subItem) => (
                    <React.Fragment key={subItem.name}>
                      <Link 
                        href={subItem.href}
                        className="block px-3 py-2 text-sm font-medium text-gray-600 hover:text-blue-900 hover:bg-gray-50 rounded-md"
                      >
                        {subItem.name}
                      </Link>
                      {subItem.submenu && subItem.submenu.map((nestedItem) => (
                        <Link 
                          key={nestedItem.name}
                          href={nestedItem.href}
                          className="block px-6 py-2 text-sm font-medium text-gray-500 hover:text-blue-900 hover:bg-gray-50 rounded-md"
                        >
                          {nestedItem.name}
                        </Link>
                      ))}
                    </React.Fragment>
                  ))}
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
