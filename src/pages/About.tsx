import { motion } from 'motion/react';
import { Award, BookOpen, Target, Users } from 'lucide-react';
import drAmeta from '../assets/doctor.webp';

export default function About() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="bg-white dark:bg-[#070b14] min-h-screen">
      {/* Page Header */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-36 bg-white dark:bg-[#070b14] overflow-hidden">
        {/* Decorative Grid Pattern */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] z-0"></div>
        
        {/* Background Mesh Blobs */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-sky-50 dark:bg-sky-950/20 blur-[150px] rounded-full z-0"></div>

        <div className="max-w-screen-2xl mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center space-x-4 mb-8">
              <span className="h-[1px] w-12 bg-sky-600"></span>
              <span className="text-sky-600 font-black text-xs uppercase tracking-[0.3em]">The Clinic Legacy</span>
              <span className="h-[1px] w-12 bg-sky-600"></span>
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-black text-slate-900 dark:text-white leading-[0.8] mb-10 tracking-tighter">
              A Legacy Of <br/>
              <span className="text-sky-600">Excellence.</span>
            </h1>

            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">
              Dr. Mayank Ameta's journey in gastroenterology is defined by precision, compassion, and a relentless pursuit of patient well-being.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="pb-32 relative">
        <div className="max-w-screen-2xl mx-auto px-4">
          <div className="bg-white dark:bg-[#0d1525] rounded-[3rem] shadow-2xl overflow-hidden border border-slate-100 dark:border-sky-900/40 relative">
            
            {/* Corner Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-sky-50 dark:bg-sky-900/20 rounded-bl-[100px] z-0"></div>

            <div className="grid lg:grid-cols-12 gap-0 relative z-10">
              <div className="lg:col-span-5 relative min-h-[500px] bg-slate-50 dark:bg-sky-950/10">
                <img 
                  src={drAmeta} 
                  alt="Dr. Mayank Ameta" 
                  className="absolute inset-0 w-full h-full object-contain object-top pt-10 px-6 scale-105"
                />
                
                {/* Floating Experience Badge */}
                <div className="absolute bottom-10 right-10 bg-white/80 dark:bg-sky-950/80 backdrop-blur-md p-6 rounded-3xl shadow-xl border border-white/20">
                  <p className="text-4xl font-black text-sky-600 leading-none mb-1">10+</p>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Years Service</p>
                </div>
              </div>
              
              <div className="lg:col-span-7 p-10 md:p-16 flex flex-col justify-center">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-sky-600 rounded-xl flex items-center justify-center text-white">
                    <Award size={20} />
                  </div>
                  <span className="text-sky-600 font-bold text-sm tracking-widest uppercase">Certified Specialist</span>
                </div>
                
                <h2 className="text-5xl font-black text-slate-900 dark:text-white mb-4 tracking-tighter md:whitespace-nowrap">Dr. Mayank Ameta</h2>
                <div className="h-1.5 w-24 bg-sky-600 rounded-full mb-8"></div>
                
                <p className="text-sky-600 dark:text-sky-400 font-black text-lg mb-8 uppercase tracking-widest">Consultant Gastroenterologist & Hepatologist</p>
                
                <div className="space-y-6 text-slate-600 dark:text-slate-300 leading-relaxed mb-12 text-justify text-lg border-l-4 border-slate-50 dark:border-sky-900/40 pl-8">
                  <p>
                    Dr. Mayank Ameta is a distinguished Gastroenterologist in Madhuban, Udaipur, whose name is synonymous with clinical excellence and patient trust across Rajasthan.
                  </p>
                  <p>
                    Currently serving as a <span className="text-slate-900 dark:text-white font-bold">Consultant Gastroenterologist at Pacific Hospital</span>, he specializes in managing acute liver failure, complex pancreatitis, and advanced endoscopies with a focus on minimally invasive recovery.
                  </p>
                  <p>
                    His clinic serves as a beacon of hope for those suffering from chronic GI conditions, offering not just treatment, but a pathway to redefined wellness through evidence-based personalized care.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-8 pt-10 border-t border-slate-100 dark:border-sky-900/40">
                  <div className="flex items-center">
                    <div className="bg-sky-50 dark:bg-sky-900/30 p-4 rounded-[1.5rem] text-sky-600 dark:text-sky-400 mr-5">
                      <Award size={32} />
                    </div>
                    <div>
                      <h4 className="font-black text-slate-400 dark:text-slate-500 text-[10px] uppercase tracking-[0.2em] mb-1">Qualifications</h4>
                      <p className="text-slate-900 dark:text-white font-black text-lg">MBBS, MD, DM</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-sky-50 dark:bg-sky-900/30 p-4 rounded-[1.5rem] text-sky-600 dark:text-sky-400 mr-5">
                      <BookOpen size={32} />
                    </div>
                    <div>
                      <h4 className="font-black text-slate-400 dark:text-slate-500 text-[10px] uppercase tracking-[0.2em] mb-1">Domain</h4>
                      <p className="text-slate-900 dark:text-white font-black text-lg">Gastroenterology</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white dark:bg-[#070b14] relative">
        <div className="max-w-screen-2xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
            <motion.div 
              {...fadeIn}
              className="group bg-sky-50 dark:bg-sky-900/10 p-12 md:p-16 rounded-[4rem] border border-sky-100 dark:border-sky-900/20 shadow-sm hover:shadow-2xl hover:shadow-sky-100 transition-all duration-700"
            >
              <div className="w-20 h-20 bg-white dark:bg-sky-950 rounded-3xl flex items-center justify-center text-sky-600 mb-10 shadow-lg group-hover:rotate-6 transition-transform">
                <Target size={40} />
              </div>
              <h3 className="text-4xl font-black text-slate-900 dark:text-white mb-6 tracking-tighter">Our Mission</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-xl text-justify">
                To provide world-class, comprehensive, and compassionate gastrointestinal and liver care to the community. We strive to utilize the latest medical advancements to ensure accurate diagnosis and effective treatment plans tailored to each patient's unique needs.
              </p>
            </motion.div>

            <motion.div 
              {...fadeIn}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group bg-slate-50 dark:bg-sky-950/10 p-12 md:p-16 rounded-[4rem] border border-slate-100 dark:border-sky-900/20 shadow-sm hover:shadow-2xl hover:shadow-blue-50 transition-all duration-700"
            >
              <div className="w-20 h-20 bg-white dark:bg-sky-950 rounded-3xl flex items-center justify-center text-blue-600 mb-10 shadow-lg group-hover:rotate-6 transition-transform">
                <Users size={40} />
              </div>
              <h3 className="text-4xl font-black text-slate-900 dark:text-white mb-6 tracking-tighter">Our Vision</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-xl text-justify">
                To be the most trusted center for digestive health in Rajasthan, recognized for clinical excellence, ethical practices, and patient-first approach. We aim to promote digestive wellness through education, prevention, and advanced therapeutic interventions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}
