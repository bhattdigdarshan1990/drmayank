import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import React from 'react';

export default function Contact() {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen pb-20">
      {/* Page Header */}
      <div className="bg-teal-700 text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-screen-2xl mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-teal-100 text-lg max-w-2xl mx-auto">
            Get in touch to schedule an appointment or ask a question.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-16">
        <div>
          {/* Contact Info & Map */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-lg border border-gray-100 dark:border-slate-800">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Clinic Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-teal-50 dark:bg-teal-900/30 p-3 rounded-xl text-teal-600 dark:text-teal-400 mr-4 shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-1">Location</h4>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      Opposite SBI Bank, Madhuban,<br />
                      Udaipur, Rajasthan, India
                    </p>
                    <a 
                      href="https://maps.app.goo.gl/RUgGqAZXVKrNsQJy7" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-teal-600 dark:text-teal-400 font-semibold text-sm mt-2 inline-flex items-center hover:text-teal-800 dark:hover:text-teal-300 transition-colors"
                    >
                      Get Directions <span className="ml-1">→</span>
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-teal-50 dark:bg-teal-900/30 p-3 rounded-xl text-teal-600 dark:text-teal-400 mr-4 shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-1">Phone</h4>
                    <p className="text-slate-600 dark:text-slate-400">+91 94141 58480</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-teal-50 dark:bg-teal-900/30 p-3 rounded-xl text-teal-600 dark:text-teal-400 mr-4 shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-1">Email</h4>
                    <p className="text-slate-600 dark:text-slate-400">info@drmayankameta.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-teal-50 dark:bg-teal-900/30 p-3 rounded-xl text-teal-600 dark:text-teal-400 mr-4 shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-1">Working Hours</h4>
                    <div className="text-slate-600 dark:text-slate-400 space-y-1">
                      <p className="flex justify-between w-48"><span>Mon - Sat:</span> <span>10:00 AM - 2:00 PM</span></p>
                      <p className="flex justify-between w-48"><span>Evening:</span> <span>5:00 PM - 8:00 PM</span></p>
                      <p className="flex justify-between w-48 text-rose-500 font-medium"><span>Sunday:</span> <span className="dark:text-rose-400">Closed</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-2 shadow-lg border border-gray-100 dark:border-slate-800 h-[300px] overflow-hidden">
              <iframe 
                src="https://maps.google.com/maps?q=Dr.+Mayank+Ameta,+Opposite+SBI+Bank,+Madhuban,+Udaipur&t=&z=16&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0, borderRadius: '1.25rem' }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Clinic Location"
                className="dark:invert dark:hue-rotate-180 dark:grayscale"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
