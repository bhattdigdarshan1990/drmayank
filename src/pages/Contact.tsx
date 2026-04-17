import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import React from 'react';

export default function Contact() {
  return (
    <div className="bg-white dark:bg-[#070b14] min-h-screen">
      {/* Page Header */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-36 bg-white dark:bg-[#070b14] overflow-hidden">
        {/* Decorative Grid Pattern */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] z-0"></div>
        
        {/* Background Mesh Blobs */}
        <div className="absolute top-0 left-0 w-1/2 h-full bg-sky-50 dark:bg-sky-950/20 blur-[150px] rounded-full z-0"></div>

        <div className="max-w-screen-2xl mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center space-x-4 mb-8">
              <span className="h-[1px] w-12 bg-sky-600"></span>
              <span className="text-sky-600 font-black text-xs uppercase tracking-[0.3em]">Direct Access</span>
              <span className="h-[1px] w-12 bg-sky-600"></span>
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-black text-slate-900 dark:text-white leading-[0.8] mb-10 tracking-tighter">
              Connect <br/>
              <span className="text-sky-600">With Us.</span>
            </h1>

            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">
              Our clinical desk is ready to assist you with appointments, inquiries, and advanced medical consultations.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-screen-2xl mx-auto px-4 pb-32">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-12"
          >
            <div className="bg-white dark:bg-[#0d1525] rounded-[3rem] p-12 shadow-sm border border-slate-100 dark:border-sky-900/40 relative overflow-hidden">
              {/* Decorative Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-50 dark:bg-sky-900/10 rounded-bl-full flex items-center justify-center">
                <Mail className="text-sky-600/20" size={48} />
              </div>

              <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-12 tracking-tighter leading-none">Clinical <br/> Information.</h2>
              
              <div className="space-y-12">
                {/* Location */}
                <div className="flex items-start gap-8">
                  <div className="w-16 h-16 bg-sky-50 dark:bg-sky-900/40 rounded-2xl flex items-center justify-center text-sky-600 border border-sky-100 dark:border-sky-800 shrink-0 shadow-inner">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black text-sky-600 mb-3 uppercase tracking-[0.2em]">Our Location</h4>
                    <p className="text-xl text-slate-600 dark:text-slate-300 leading-snug font-bold">
                      Opposite SBI Bank, Madhuban,<br />
                      Udaipur, Rajasthan, India
                    </p>
                    <a 
                      href="https://maps.app.goo.gl/RUgGqAZXVKrNsQJy7" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-sky-600 dark:text-sky-400 font-extrabold text-sm mt-6 inline-flex items-center hover:text-sky-800 dark:hover:text-sky-300 transition-all group"
                    >
                      View on Interactive Map <span className="ml-2 transform group-hover:translate-x-2 transition-transform">→</span>
                    </a>
                  </div>
                </div>

                {/* Communication */}
                <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-8">
                  <div className="flex items-start gap-8">
                    <div className="w-16 h-16 bg-sky-50 dark:bg-sky-900/40 rounded-2xl flex items-center justify-center text-sky-600 border border-sky-100 dark:border-sky-800 shrink-0 shadow-inner">
                      <Phone size={28} />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-black text-sky-600 mb-3 uppercase tracking-[0.2em]">Medical Desk</h4>
                      <p className="text-2xl text-slate-900 dark:text-white font-black">+91 94141 58480</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-8">
                    <div className="w-16 h-16 bg-sky-50 dark:bg-sky-900/40 rounded-2xl flex items-center justify-center text-sky-600 border border-sky-100 dark:border-sky-800 shrink-0 shadow-inner">
                      <Mail size={28} />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-black text-sky-600 mb-3 uppercase tracking-[0.2em]">Official Email</h4>
                      <p className="text-lg text-slate-600 dark:text-slate-300 font-bold break-all">info@drmayankameta.com</p>
                    </div>
                  </div>
                </div>

                {/* Hours Card */}
                <div className="bg-slate-50 dark:bg-sky-950/20 p-10 rounded-[2.5rem] border border-slate-100 dark:border-sky-900/30">
                  <div className="flex items-center gap-4 mb-8">
                    <Clock className="text-sky-600" size={24} />
                    <h4 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-[0.2em]">Consultation Hours</h4>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center border-b border-sky-100 dark:border-sky-900/30 pb-3">
                      <span className="text-slate-500 font-bold text-sm uppercase tracking-wider">Morning</span>
                      <span className="text-slate-900 dark:text-white font-black">10:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-sky-100 dark:border-sky-900/30 pb-3">
                      <span className="text-slate-500 font-bold text-sm uppercase tracking-wider">Evening</span>
                      <span className="text-slate-900 dark:text-white font-black">5:00 PM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center pt-2">
                       <span className="text-rose-500 font-black text-xs uppercase tracking-widest">Sunday</span>
                       <span className="text-rose-500/50 font-black uppercase tracking-tighter italic">Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Large Map Placeholder / Container */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 h-full"
          >
            <div className="bg-white dark:bg-[#0d1525] rounded-[3.5rem] p-4 shadow-sm border border-slate-100 dark:border-sky-900/40 h-[600px] lg:h-[850px] overflow-hidden sticky top-32 group">
              <iframe 
                src="https://maps.google.com/maps?q=Dr.+Mayank+Ameta,+Opposite+SBI+Bank,+Madhuban,+Udaipur&t=&z=16&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0, borderRadius: '2.5rem' }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Clinic Location"
                className="dark:invert dark:hue-rotate-180 dark:grayscale dark:opacity-80 transition-all duration-1000 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110"
              ></iframe>
              
              {/* Map Floating Badge */}
              <div className="absolute bottom-12 right-12 bg-white dark:bg-slate-900 px-8 py-5 rounded-3xl shadow-2xl border border-sky-100 dark:border-sky-900/50 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-sky-600 rounded-full animate-pulse"></div>
                  <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-900 dark:text-white">Live Clinic Location</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
