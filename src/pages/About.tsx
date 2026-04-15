import { motion } from 'motion/react';
import { Award, BookOpen, Target, Users } from 'lucide-react';
import drAmeta from '../assets/doctor.png';

export default function About() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Page Header */}
      <div className="bg-teal-700 text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Dr. Mayank Ameta</h1>
          <p className="text-teal-100 text-lg max-w-2xl mx-auto">
            Dedicated to excellence in Gastroenterology and Hepatology
          </p>
        </div>
      </div>

      {/* Profile Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-12 gap-0">
              <div className="md:col-span-5 relative h-[400px] md:h-auto">
                <img 
                  src={drAmeta} 
                  alt="Dr. Mayank Ameta" 
                  className="absolute inset-0 w-full h-full object-contain object-top bg-white"
                />
              </div>
              <div className="md:col-span-7 p-8 md:p-12 lg:p-16">
                <h2 className="text-3xl font-bold text-slate-900 mb-2">Dr. Mayank Ameta</h2>
                <p className="text-teal-600 font-medium text-lg mb-6">Consultant Gastroenterologist & Hepatologist</p>
                
                <div className="space-y-4 text-slate-600 leading-relaxed mb-8 text-justify">
                  <p>
                    Dr. Mayank Ameta is a Gastroenterologist in Madhuban, Udaipur. He is a renowned and highly trusted personality in the medical fraternity with rich experience in Gastroenterology.
                  </p>
                  <p>
                    He operates his consultation clinic and also serves as a Consultant Gastroenterologist at Pacific Hospital, Udaipur. He offers advanced medical treatments for Achalasia, Achlorhydria, Acute Liver Failure, Acute Pancreatitis, Barrett Esophagus, Cholangitis, Cholecystitis, Acalculous Cholecystitis, Acute Fatty Liver of Pregnancy, and many other complex GI conditions.
                  </p>
                  <p>
                    He has numerous successful treatment cases registered in his name. His approach to patient care is rooted in evidence-based medicine combined with deep empathy, and patients are consistently happy with the high level of hospitality and care displayed to them.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="flex items-start">
                    <div className="bg-teal-50 p-3 rounded-lg text-teal-600 mr-4">
                      <Award size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Qualifications</h4>
                      <p className="text-sm text-slate-600">MBBS, MD, DM (Gastro)</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-teal-50 p-3 rounded-lg text-teal-600 mr-4">
                      <BookOpen size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Experience</h4>
                      <p className="text-sm text-slate-600">10+ Years in Practice</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              {...fadeIn}
              className="bg-blue-50 p-10 rounded-3xl border border-blue-100"
            >
              <Target className="text-blue-600 mb-6" size={40} />
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
              <p className="text-slate-700 leading-relaxed">
                To provide world-class, comprehensive, and compassionate gastrointestinal and liver care to the community. We strive to utilize the latest medical advancements to ensure accurate diagnosis and effective treatment plans tailored to each patient's unique needs.
              </p>
            </motion.div>

            <motion.div 
              {...fadeIn}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-emerald-50 p-10 rounded-3xl border border-emerald-100"
            >
              <Users className="text-emerald-600 mb-6" size={40} />
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
              <p className="text-slate-700 leading-relaxed">
                To be the most trusted center for digestive health in Rajasthan, recognized for clinical excellence, ethical practices, and patient-first approach. We aim to promote digestive wellness through education, prevention, and advanced therapeutic interventions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}
