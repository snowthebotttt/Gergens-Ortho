"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Advanced Sleep Solutions
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Cutting-edge dental appliances for sleep apnea treatment and orthodontic care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/submit-case/new"
                  className="bg-white text-blue-900 hover:bg-blue-50 px-6 py-3 rounded-md font-medium text-lg transition-colors"
                >
                  Submit a Case
                </Link>
                <Link 
                  href="/sleep-solutions"
                  className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-6 py-3 rounded-md font-medium text-lg transition-colors"
                >
                  Explore Sleep Solutions
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              {/* Placeholder for 3D animation of sleep appliance */}
              <div className="bg-blue-800/50 rounded-xl p-8 w-full max-w-md aspect-square flex items-center justify-center">
                <p className="text-center text-blue-200">
                  3D Sleep Appliance Animation
                  <br />
                  (Placeholder)
                </p>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Product Categories */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Our Product Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Sleep Solutions',
                description: 'Advanced appliances for sleep apnea and airway management',
                icon: '😴',
                link: '/sleep-solutions'
              },
              {
                title: 'Orthodontic Products',
                description: 'Retainers, fixed appliances, and functional orthopedics',
                icon: '😁',
                link: '/orthodontic-products'
              },
              {
                title: 'Crown & Bridge',
                description: 'High-quality dental restorations and implant solutions',
                icon: '👑',
                link: '/crown-bridge'
              },
              {
                title: 'Clear Aligners',
                description: 'G-Force aligner systems for effective teeth straightening',
                icon: '✨',
                link: '/clear-aligners'
              }
            ].map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <Link href={category.link} className="block h-full">
                  <div className="p-6 flex flex-col h-full">
                    <div className="text-4xl mb-4">{category.icon}</div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">{category.title}</h3>
                    <p className="text-gray-600 mb-4 flex-grow">{category.description}</p>
                    <div className="text-blue-600 font-medium flex items-center">
                      Learn more
                      <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sleep Apnea Focus Area */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Sleep Apnea Solutions Expertise
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                At Gergen's Orthodontic Lab, we specialize in creating custom oral appliances designed to treat sleep apnea and improve airway function. Our team of experts works closely with dental professionals to deliver effective solutions for patients suffering from sleep-disordered breathing.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Custom-fitted oral appliances for optimal comfort and effectiveness',
                  'Advanced digital design and manufacturing processes',
                  'Comprehensive range of FDA-approved devices',
                  'Expert consultation and support for dental professionals'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Link 
                href="/sleep-solutions"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
              >
                Explore Sleep Solutions
              </Link>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="aspect-video bg-gray-200 rounded-lg mb-6 flex items-center justify-center">
                <p className="text-gray-500">Sleep Appliance Image Placeholder</p>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Why Choose Our Sleep Appliances?</h3>
              <p className="text-gray-700 mb-4">
                Our sleep appliances are designed with patient comfort and treatment efficacy in mind. Using the latest digital technology, we create precise, custom-fitted devices that effectively manage sleep apnea while ensuring patient comfort and compliance.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="font-bold text-blue-800 text-lg mb-1">95%</div>
                  <div className="text-sm text-gray-700">Patient satisfaction rate</div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="font-bold text-blue-800 text-lg mb-1">24h</div>
                  <div className="text-sm text-gray-700">Average production time</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'G-Force Sleep Appliance',
                category: 'Sleep Solutions',
                price: '$395',
                image: 'sleep-appliance.jpg',
                link: '/sleep-solutions/appliances/g-force'
              },
              {
                title: 'Clear Aligner System',
                category: 'Clear Aligners',
                price: 'From $199/arch',
                image: 'clear-aligner.jpg',
                link: '/clear-aligners/g-force-systems'
              },
              {
                title: 'Premium Night Guard',
                category: 'Orthodontic Products',
                price: '$125',
                image: 'night-guard.jpg',
                link: '/orthodontic-products/splints-night-guards'
              }
            ].map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <Link href={product.link} className="block">
                  <div className="aspect-video bg-gray-200 flex items-center justify-center">
                    <p className="text-gray-500">Product Image Placeholder</p>
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-blue-600 mb-1">{product.category}</div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">{product.title}</h3>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-900 font-bold">{product.price}</span>
                      <span className="text-blue-600 font-medium flex items-center">
                        View details
                        <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-blue-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What Dental Professionals Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Gergen's Orthodontic Lab has been an invaluable partner in treating my sleep apnea patients. Their appliances are consistently high-quality and their turnaround time is exceptional.",
                author: "Dr. Sarah Johnson",
                title: "DDS, Sleep Medicine Specialist"
              },
              {
                quote: "The team at Gergen's is incredibly knowledgeable and responsive. Their G-Force aligners have become a cornerstone of my practice, with excellent results and patient satisfaction.",
                author: "Dr. Michael Chen",
                title: "DMD, Orthodontist"
              },
              {
                quote: "I've worked with many dental labs over my 20-year career, and Gergen's stands out for their precision, attention to detail, and commitment to staying at the forefront of dental technology.",
                author: "Dr. Robert Williams",
                title: "DDS, FAGD"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-blue-800 rounded-xl p-6 shadow-lg"
              >
                <svg className="w-10 h-10 text-blue-300 mb-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-blue-100 mb-6">{testimonial.quote}</p>
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-blue-300 text-sm">{testimonial.title}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Showcase */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Our Technology
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Digital Workflow & Manufacturing Precision</h3>
              <p className="text-lg text-gray-700 mb-6">
                At Gergen's Orthodontic Lab, we leverage cutting-edge digital technology to ensure precision and efficiency in every step of our manufacturing process.
              </p>
              <div className="space-y-6">
                {[
                  {
                    title: "3D Digital Scanning",
                    description: "High-precision digital scanning technology for accurate impressions and models."
                  },
                  {
                    title: "CAD/CAM Design",
                    description: "Computer-aided design and manufacturing for precise appliance creation."
                  },
                  {
                    title: "3D Printing",
                    description: "Advanced 3D printing capabilities for rapid prototyping and production."
                  },
                  {
                    title: "Quality Control",
                    description: "Rigorous quality assurance processes to ensure every appliance meets our high standards."
                  }
                ].map((tech, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0 h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-blue-600 font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">{tech.title}</h4>
                      <p className="text-gray-700">{tech.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="bg-gray-200 rounded-xl aspect-square flex items-center justify-center">
                <p className="text-gray-500">Technology Image Placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="bg-gray-50 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link 
              href="/submit-case/new"
              className="bg-white rounded-xl shadow-lg p-8 flex items-center hover:shadow-xl transition-shadow"
            >
              <div className="bg-blue-100 rounded-full p-4 mr-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1 text-gray-900">Submit a Case</h3>
                <p className="text-gray-600">Start a new case submission or upload files</p>
              </div>
            </Link>
            <Link 
              href="/pay-online/invoice"
              className="bg-white rounded-xl shadow-lg p-8 flex items-center hover:shadow-xl transition-shadow"
            >
              <div className="bg-green-100 rounded-full p-4 mr-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1 text-gray-900">Pay Online</h3>
                <p className="text-gray-600">Make a payment or view your statements</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Latest Articles
            </h2>
            <Link 
              href="/about-us/blog"
              className="text-blue-600 font-medium flex items-center"
            >
              View all articles
              <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Advances in Sleep Apnea Treatment: The Role of Oral Appliances",
                date: "April 2, 2025",
                excerpt: "Explore the latest research on oral appliances for sleep apnea treatment and their effectiveness compared to CPAP therapy.",
                link: "/about-us/blog/sleep-apnea-treatment-advances"
              },
              {
                title: "Digital Dentistry: How Technology is Transforming Orthodontics",
                date: "March 28, 2025",
                excerpt: "Learn how digital scanning, 3D printing, and CAD/CAM technology are revolutionizing the field of orthodontics.",
                link: "/about-us/blog/digital-dentistry-technology"
              },
              {
                title: "Clear Aligners vs. Traditional Braces: A Comprehensive Comparison",
                date: "March 15, 2025",
                excerpt: "A detailed analysis of the pros and cons of clear aligners and traditional braces for different orthodontic cases.",
                link: "/about-us/blog/aligners-vs-braces"
              }
            ].map((post, index) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <Link href={post.link} className="block">
                  <div className="aspect-video bg-gray-200 flex items-center justify-center">
                    <p className="text-gray-500">Blog Image Placeholder</p>
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-gray-500 mb-2">{post.date}</div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">{post.title}</h3>
                    <p className="text-gray-700 mb-4">{post.excerpt}</p>
                    <span className="text-blue-600 font-medium">Read more</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Partner with Gergen's Orthodontic Lab?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join the many dental professionals who trust us for high-quality dental appliances and exceptional service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/submit-case/new"
              className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-3 rounded-md font-medium text-lg transition-colors"
            >
              Submit Your First Case
            </Link>
            <Link 
              href="/about-us/contact"
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-md font-medium text-lg transition-colors"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
