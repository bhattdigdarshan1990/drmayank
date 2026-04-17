import React, { useRef } from 'react';
import { motion, useAnimationControls } from 'motion/react';
import { ArrowRight, Activity, Heart, Shield, Clock, Star, CheckCircle2, Phone, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroBg from '../assets/hero.png';
import drAmeta from '../assets/doctor.png';

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 432; // card width + gap
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white dark:bg-[#070b14]">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        ></div>
        {/* Gradient Overlay - Adjusted for better background visibility while keeping text readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-blue-50/10 dark:from-[#070b14]/95 dark:via-[#070b14]/70 dark:to-transparent"></div>
        
        <div className="max-w-screen-2xl mx-auto px-4 pt-36 pb-20 md:pt-48 md:pb-32 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block py-1 px-4 rounded-full bg-sky-100 dark:bg-sky-900/30 text-sky-800 dark:text-sky-300 text-sm font-bold mb-6 shadow-sm border border-sky-200/50 dark:border-sky-800/50">
                Expert Gastroenterologist in Udaipur
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight mb-6">
                Advanced Digestive Care with <span className="text-sky-600 dark:text-sky-400">Compassion</span> & Expertise
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed max-w-lg text-justify">
                Comprehensive diagnosis and treatment for all gastrointestinal, liver, and pancreatic disorders by <span className="md:whitespace-nowrap">Dr. Mayank Ameta</span>.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-sky-200 dark:bg-sky-900/40 rounded-full blur-3xl opacity-50 transform translate-x-10 translate-y-10"></div>
              <img 
                src={drAmeta} 
                alt="Dr. Mayank Ameta" 
                className="relative z-10 rounded-2xl shadow-2xl object-cover w-full max-w-md mx-auto aspect-[4/5] object-top border-4 border-white dark:border-blue-900/50 bg-white dark:bg-slate-800"
              />
              
              {/* Floating Badge */}
              <div className="absolute bottom-10 -left-10 bg-white dark:bg-[#0d1525] p-5 rounded-2xl shadow-2xl z-20 flex items-center gap-4 animate-bounce border border-sky-100 dark:border-sky-900/40" style={{ animationDuration: '3s' }}>
                <div className="bg-sky-100 dark:bg-sky-900/50 p-3 rounded-xl text-sky-600 dark:text-sky-400">
                  <Activity size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-slate-400 font-bold uppercase tracking-wider">Experience</p>
                  <p className="text-xl font-black text-slate-800 dark:text-white">10+ Years</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Highlights / Features */}
      <section className="py-16 bg-white dark:bg-[#070b14]">
        <div className="max-w-screen-2xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 -mt-24 relative z-20">
            {[
              { icon: Shield, title: 'Expert Care', desc: 'Highly qualified specialist with extensive experience in managed complex gastrointestinal and hepatic cases.' },
              { icon: Heart, title: 'Patient-Centric', desc: 'A compassionate, empathetic approach focusing on patient comfort, holistic well-being and clear communication.' },
              { icon: Clock, title: 'Consultant', desc: 'Serving as a highly trusted Consultant Gastroenterologist at the prestigious Pacific Hospital, Udaipur.' }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white dark:bg-[#0d1525] p-8 rounded-3xl shadow-xl border border-sky-100 dark:border-sky-900/30 hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="w-14 h-14 bg-sky-50 dark:bg-sky-900/30 rounded-2xl flex items-center justify-center text-sky-600 dark:text-sky-400 mb-6 border border-sky-100 dark:border-sky-800/50">
                  <feature.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight">{feature.title}</h3>
                <p className="text-slate-700 dark:text-slate-400 leading-relaxed text-sm text-justify">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brief Intro */}
      <section className="py-24 bg-slate-100/80 dark:bg-blue-950/20 ring-1 ring-slate-200 dark:ring-white/10">
        <div className="max-w-screen-2xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn} className="relative">
              <div className="absolute inset-0 bg-sky-400/20 blur-3xl transform rotate-6 scale-90"></div>
              <img 
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1000&auto=format&fit=crop" 
                alt="Clinic Setup" 
                className="rounded-3xl shadow-2xl w-full relative z-10 border-8 border-white dark:border-sky-900/30"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -right-6 bg-sky-600 text-white p-10 rounded-3xl shadow-2xl hidden md:block z-20">
                <p className="text-5xl font-black mb-1">5000+</p>
                <p className="text-sky-100 font-bold tracking-widest uppercase text-xs">Happy Patients</p>
              </div>
            </motion.div>
            
            <motion.div {...fadeIn}>
              <h2 className="text-sky-700 dark:text-sky-400 font-black tracking-widest uppercase text-xs mb-4">About The Doctor</h2>
              <h3 className="text-4xl md:text-5xl font-black text-slate-950 dark:text-white mb-8 tracking-tighter md:whitespace-nowrap">Dr. Mayank Ameta</h3>
              <p className="text-lg text-slate-900 dark:text-slate-100 mb-6 font-medium leading-relaxed text-justify">
                Dr. Mayank Ameta is a Gastroenterologist in Madhuban, Udaipur. He is a renowned and highly trusted personality in the medical fraternity with rich experience in Gastroenterology. Dr. Ameta operates his consultation clinic and also serves as a Consultant at Pacific Hospital, Udaipur.
              </p>
              <p className="text-lg text-slate-900 dark:text-slate-100 mb-8 font-medium leading-relaxed text-justify">
                He offers advanced medical treatments for Achalasia, Achlorhydria, Acute Liver Failure, Acute Pancreatitis, Barrett Esophagus, Cholangitis, Cholecystitis, Acalculous Cholecystitis, Acute Fatty Liver of Pregnancy, and more.
              </p>
              <ul className="space-y-5 mb-10">
                {[
                  'Consultant at Pacific Hospital, Udaipur',
                  'MBBS, MD (Medicine), DM (Gastroenterology)',
                  'Expert in Liver Disease Management',
                  'Personalized Treatment Plans'
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="text-sky-700 mr-4 shrink-0 mt-1" size={22} />
                    <span className="text-slate-950 dark:text-blue-100 font-black">{item}</span>
                  </li>
                ))}
              </ul>
              <Link 
                to="/about"
                className="inline-flex items-center px-6 py-3 bg-sky-50 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 font-bold rounded-xl hover:bg-sky-600 hover:text-white dark:hover:bg-sky-400 dark:hover:text-sky-950 transition-all group"
              >
                Read Full Profile 
                <ArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-white dark:bg-[#070b14]">
        <div className="max-w-screen-2xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-sky-600 dark:text-sky-400 font-black tracking-widest uppercase text-xs mb-4">Our Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">Comprehensive Care</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Endoscopy', desc: 'Advanced upper GI diagnostics and therapeutics.', image: '/endoscopy-icon.png' },
              { title: 'Liver Disease', desc: 'Expert management of hepatitis, fatty liver, etc.', icon: '🩸' },
              { title: 'Acid Reflux / GERD', desc: 'Effective treatment plans for chronic heartburn.', icon: '🔥' }
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-sky-50/30 dark:bg-[#0d1525] p-10 rounded-3xl text-center hover:bg-sky-100 dark:hover:bg-sky-900/40 transition-all group cursor-pointer border border-sky-100 dark:border-sky-900/30 flex flex-col items-center"
              >
                <div className="w-20 h-20 bg-white dark:bg-[#1e293b] rounded-2xl flex items-center justify-center text-4xl mb-8 shadow-xl shadow-sky-200/20 dark:shadow-none group-hover:rotate-6 transition-transform overflow-hidden border border-sky-50 dark:border-sky-800">
                  {service.image ? (
                    <img src={service.image} alt={service.title} className="w-12 h-12 object-contain" />
                  ) : (
                    service.icon
                  )}
                </div>
                <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">{service.title}</h4>
                <p className="text-slate-700 dark:text-slate-400 text-sm mb-8 leading-relaxed text-justify">{service.desc}</p>
                <Link to="/services" className="text-sky-600 dark:text-sky-400 font-bold text-sm hover:underline flex items-center mt-auto">
                  Details <ArrowRight size={16} className="ml-1" />
                </Link>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Link 
              to="/services"
              className="inline-flex items-center justify-center bg-white dark:bg-sky-950 text-sky-700 dark:text-sky-400 border-2 border-sky-600 dark:border-sky-500 px-10 py-4 rounded-full font-black hover:bg-sky-600 dark:hover:bg-sky-500 hover:text-white dark:hover:text-slate-950 transition-all shadow-lg hover:shadow-sky-200 dark:hover:shadow-none"
            >
              Explore All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-slate-100/80 dark:bg-blue-950/20 ring-1 ring-slate-200 dark:ring-white/10">
        <div className="max-w-screen-2xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-sky-700 dark:text-sky-400 font-black tracking-widest uppercase text-xs mb-4">Visit Our Clinic</h2>
              <h3 className="text-4xl md:text-5xl font-black text-slate-950 dark:text-white mb-8 tracking-tighter">Locate Us in Udaipur</h3>
              <p className="text-lg text-slate-950 dark:text-slate-100 mb-10 leading-relaxed uppercase font-black tracking-tight">
                Advanced Gastroenterology & Hepatology Centre <br/>
                Opposite SBI Bank, Madhuban, Udaipur, <br />
                Rajasthan, India - 313001
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <a 
                  href="https://maps.app.goo.gl/RUgGqAZXVKrNsQJy7" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-sky-600 text-white font-black rounded-2xl hover:bg-sky-700 transition-all shadow-xl shadow-sky-200 dark:shadow-none"
                >
                  <MapPin className="mr-2" size={20} /> Get Directions
                </a>
                <Link 
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 border border-sky-200 dark:border-sky-800 font-black rounded-2xl hover:bg-sky-50 dark:hover:bg-sky-900/50 transition-all"
                >
                  Contact Details
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[450px] md:h-[550px] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white dark:border-sky-900/30 group"
            >
              <iframe 
                src="https://maps.google.com/maps?q=Dr.+Mayank+Ameta+-+Advanced+Gastroenterology+%26+Hepatology+Centre,+Opposite+SBI+Bank,+Madhuban,+Udaipur&t=&z=16&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location"
                className="dark:invert dark:hue-rotate-180 dark:grayscale dark:opacity-80 transition-[filter,opacity] duration-700 group-hover:grayscale-0 group-hover:opacity-100"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Google Reviews Marquee */}
      <section className="py-24 bg-white dark:bg-[#070b14] overflow-hidden">
        <div className="max-w-screen-2xl mx-auto px-4 mb-16 text-center">
           <div className="flex items-center justify-center space-x-3 mb-6">
              <span className="h-[1px] w-8 bg-sky-600"></span>
              <span className="text-sky-600 font-bold text-xs uppercase tracking-[0.2em]">Patient Voices</span>
              <span className="h-[1px] w-8 bg-sky-600"></span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tighter">Trusted by Thousands.</h2>
        </div>

        {/* Carousel Container */}
        <div className="relative group">
          {/* Navigation Arrows */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-8 top-1/2 -translate-y-1/2 z-30 p-4 rounded-full bg-white/90 dark:bg-[#070b14]/90 backdrop-blur-md border border-gray-100 dark:border-white/10 text-gray-900 dark:text-white shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 hover:bg-sky-500 hover:text-white dark:hover:bg-sky-500 hover:scale-110 active:scale-95 hidden md:flex items-center justify-center cursor-pointer"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={() => scroll('right')}
            className="absolute right-8 top-1/2 -translate-y-1/2 z-30 p-4 rounded-full bg-white/90 dark:bg-[#070b14]/90 backdrop-blur-md border border-gray-100 dark:border-white/10 text-gray-900 dark:text-white shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 hover:bg-sky-500 hover:text-white dark:hover:bg-sky-500 hover:scale-110 active:scale-95 hidden md:flex items-center justify-center cursor-pointer"
            aria-label="Next review"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Fades */}
          <div className="absolute left-0 inset-y-0 w-32 bg-gradient-to-r from-white dark:from-[#070b14] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 inset-y-0 w-32 bg-gradient-to-l from-white dark:from-[#070b14] to-transparent z-10 pointer-events-none"></div>

          <div 
            ref={scrollRef}
            className="flex overflow-x-auto scroll-smooth hide-scrollbar snap-x snap-mandatory py-10"
          >
            <div className="flex space-x-8 px-4 md:px-24 py-4">
              {[
                { name: "Digdarshan Bhatt", rating: 5, text: "BEST DOCTOR , HE IS EXPERT OF HIS FIELD", date: "Recently" },
                { name: "Kishor Patidar", rating: 5, text: "Got 100% recovery from ulcers in just 3 days with Dr. Mayank Ameta's medicine after month-long treatment elsewhere failed. Thank you doctor.", date: "10 months ago" },
                { name: "Priyanka Ameta", rating: 5, text: "Most knowledgeable and genuine doctor in his field. Strongly recommended.", date: "7 months ago" },
                { name: "Parshu Ram Dhaker", rating: 5, text: "He is the best Doctor in Udaipur, behavior is very good.", date: "8 months ago" },
                { name: "Abhishek Singh Gurjar", rating: 5, text: "Such a gem of a person, very soft spoken, intellect yet down to earth. Provides proper guidance.", date: "A year ago" },
                { name: "Vinod Saini", rating: 5, text: "Very best doctor in diagnostic & treatment in Udaipur gastroenterology.", date: "8 months ago" }
              ].map((review, idx) => (
                <div 
                  key={idx} 
                  className="flex-shrink-0 w-[280px] md:w-[400px] bg-white dark:bg-[#0d1525] p-8 rounded-[2.5rem] shadow-sm border border-slate-100 dark:border-sky-900/30 snap-center hover:border-sky-500/50 transition-all duration-500 group/card"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-sky-100 dark:bg-sky-900/30 rounded-xl flex items-center justify-center font-black text-sky-600 transition-transform group-hover/card:scale-110">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-black text-slate-900 dark:text-white tracking-tight">{review.name}</p>
                      <div className="flex gap-0.5 mt-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} size={12} className="fill-sky-500 text-sky-500" />
                        ))}
                      </div>
                    </div>
                    <div className="ml-auto opacity-10">
                       <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google" className="h-4" />
                    </div>
                  </div>
                  <p className="text-slate-800 dark:text-slate-200 italic leading-relaxed text-sm mb-4 font-medium">"{review.text}"</p>
                  <p className="text-[10px] uppercase font-black tracking-widest text-slate-500">{review.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-sky-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30"></div>
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-sky-900/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tighter">Ready to Improve Your Digestive Health?</h2>
          <p className="text-sky-100 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Don't let stomach or liver issues affect your quality of life. Schedule a consultation today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a 
              href="https://wa.me/919414158480" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-sky-600 px-10 py-5 rounded-full font-black hover:bg-sky-50 hover:scale-105 transition-all shadow-2xl text-lg"
            >
              Book via WhatsApp
            </a>
            <a 
              href="tel:+919414158480"
              className="bg-sky-900/40 backdrop-blur-md border-2 border-white/30 text-white px-10 py-5 rounded-full font-black hover:bg-sky-900/60 hover:scale-105 transition-all shadow-2xl text-lg flex items-center justify-center"
            >
              <Phone className="mr-3" size={24} /> Call Now
            </a>
          </div>
        </div>
      </section>
    </div>

  );
}
