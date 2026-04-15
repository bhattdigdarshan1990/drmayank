import { motion } from 'motion/react';
import { ArrowRight, Activity, Heart, Shield, Clock, Star, CheckCircle2, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroBg from '../assets/hero.png';
import drAmeta from '../assets/doctor.png';

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        ></div>
        {/* Gradient Overlay - Adjusted for better background visibility while keeping text readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/60 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 pt-36 pb-20 md:pt-48 md:pb-32 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-teal-100 text-teal-800 text-sm font-semibold mb-6">
                Expert Gastroenterologist in Udaipur
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
                Advanced Digestive Care with <span className="text-teal-600">Compassion</span> & Expertise
              </h1>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg text-justify">
                Comprehensive diagnosis and treatment for all gastrointestinal, liver, and pancreatic disorders by Dr. Mayank Ameta.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-teal-200 rounded-full blur-3xl opacity-50 transform translate-x-10 translate-y-10"></div>
              <img 
                src={drAmeta} 
                alt="Dr. Mayank Ameta" 
                className="relative z-10 rounded-2xl shadow-2xl object-cover w-full max-w-md mx-auto aspect-[4/5] object-top border-4 border-white bg-white"
              />
              
              {/* Floating Badge */}
              <div className="absolute bottom-10 -left-10 bg-white p-4 rounded-xl shadow-xl z-20 flex items-center gap-4 animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                  <Activity size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Experience</p>
                  <p className="text-xl font-bold text-slate-800">10+ Years</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Highlights / Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 -mt-24 relative z-20">
            {[
              { icon: Shield, title: 'Expert Care', desc: 'Highly qualified specialist with extensive experience in complex GI cases.' },
              { icon: Heart, title: 'Patient-Centric', desc: 'Compassionate approach focusing on patient comfort and clear communication.' },
              { icon: Clock, title: 'Consultant', desc: 'Serving as a trusted Consultant Gastroenterologist at Pacific Hospital, Udaipur.' }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="w-14 h-14 bg-teal-50 rounded-xl flex items-center justify-center text-teal-600 mb-6">
                  <feature.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brief Intro */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn} className="relative">
              <img 
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1000&auto=format&fit=crop" 
                alt="Clinic Setup" 
                className="rounded-2xl shadow-lg w-full"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -right-6 bg-teal-600 text-white p-8 rounded-2xl shadow-xl hidden md:block">
                <p className="text-4xl font-bold mb-1">5000+</p>
                <p className="text-teal-100 font-medium">Happy Patients</p>
              </div>
            </motion.div>
            
            <motion.div {...fadeIn}>
              <h2 className="text-teal-600 font-semibold tracking-wider uppercase text-sm mb-3">About The Doctor</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Dr. Mayank Ameta</h3>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed text-justify">
                Dr. Mayank Ameta is a Gastroenterologist in Madhuban, Udaipur. He is a renowned and highly trusted personality in the medical fraternity with rich experience in Gastroenterology. Dr. Ameta operates his consultation clinic and also serves as a Consultant at Pacific Hospital, Udaipur.
              </p>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed text-justify">
                He offers advanced medical treatments for Achalasia, Achlorhydria, Acute Liver Failure, Acute Pancreatitis, Barrett Esophagus, Cholangitis, Cholecystitis, Acalculous Cholecystitis, Acute Fatty Liver of Pregnancy, and more. He has numerous successful treatment cases registered in his name and patients are very happy with the kind of hospitality displayed to him.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Consultant at Pacific Hospital, Udaipur',
                  'MBBS, MD (Medicine), DM (Gastroenterology)',
                  'Expert in Liver Disease Management',
                  'Personalized Treatment Plans'
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="text-emerald-500 mr-3 shrink-0 mt-1" size={20} />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Link 
                to="/about"
                className="text-teal-600 font-semibold hover:text-teal-700 flex items-center group"
              >
                Read Full Profile 
                <ArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-teal-600 font-semibold tracking-wider uppercase text-sm mb-3">Our Expertise</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Comprehensive Gastroenterology Services</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Endoscopy', desc: 'Advanced upper GI diagnostics and therapeutics.', image: '/endoscopy-icon.png' },
              { title: 'Liver Disease', desc: 'Expert management of hepatitis, fatty liver, etc.', icon: '🩸' },
              { title: 'Acid Reflux / GERD', desc: 'Effective treatment plans for chronic heartburn.', icon: '🔥' }
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-slate-50 p-8 rounded-2xl text-center hover:bg-teal-50 transition-colors group cursor-pointer border border-slate-100"
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-3xl mx-auto mb-6 shadow-sm group-hover:scale-110 transition-transform overflow-hidden">
                  {service.image ? (
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                  ) : (
                    service.icon
                  )}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
                <p className="text-slate-600 text-sm mb-6 text-justify">{service.desc}</p>
                <Link to="/services" className="text-teal-600 font-semibold text-sm hover:text-teal-800 flex items-center justify-center">
                  Learn More <ArrowRight size={16} className="ml-1" />
                </Link>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/services"
              className="inline-flex items-center justify-center bg-white text-teal-700 border-2 border-teal-600 px-8 py-3 rounded-full font-bold hover:bg-teal-600 hover:text-white transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-teal-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Improve Your Digestive Health?</h2>
          <p className="text-teal-100 text-lg mb-10 max-w-2xl mx-auto">
            Don't let stomach or liver issues affect your quality of life. Schedule a consultation with Dr. Mayank Ameta today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="https://wa.me/919876543210" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-teal-700 px-8 py-4 rounded-full font-bold hover:bg-teal-50 transition-colors shadow-lg text-lg"
            >
              Book an Appointment
            </a>
            <a 
              href="tel:+919876543210"
              className="bg-teal-600 border border-teal-500 text-white px-8 py-4 rounded-full font-bold hover:bg-teal-500 transition-colors shadow-lg text-lg flex items-center justify-center"
            >
              <Phone className="mr-2" size={20} /> Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
