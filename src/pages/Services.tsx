import { motion } from 'motion/react';
import { Activity, Search, Droplets, Flame, Wind, Stethoscope } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      id: 'endoscopy',
      icon: Search,
      title: 'Upper GI Endoscopy',
      description: 'A procedure to visually examine your upper digestive system with a tiny camera on the end of a long, flexible tube. Used to diagnose and treat conditions of the esophagus, stomach, and duodenum.',
      color: 'bg-sky-50 text-sky-600 border-sky-100'
    },
    {
      id: 'liver',
      icon: Droplets,
      title: 'Liver Disease Treatment',
      description: 'Comprehensive care for liver conditions including Hepatitis B & C, Fatty Liver Disease, Cirrhosis, and Liver Failure. We offer advanced diagnostics and personalized management plans.',
      color: 'bg-sky-50 text-sky-600 border-sky-100'
    },
    {
      id: 'gerd',
      icon: Flame,
      title: 'Acid Reflux / GERD',
      description: 'Expert management of Gastroesophageal Reflux Disease. From lifestyle modifications and medical therapy to evaluating the need for advanced interventions to prevent complications.',
      color: 'bg-orange-50 text-orange-600 border-orange-100'
    },
    {
      id: 'ibs',
      icon: Wind,
      title: 'IBS Treatment',
      description: 'Specialized care for Irritable Bowel Syndrome. We help manage symptoms like cramping, abdominal pain, bloating, gas, and diarrhea or constipation through tailored approaches.',
      color: 'bg-purple-50 text-purple-600 border-purple-100'
    },
    {
      id: 'pancreas',
      icon: Stethoscope,
      title: 'Pancreatic & Biliary Care',
      description: 'Diagnosis and treatment of acute and chronic pancreatitis, gallstones, and biliary tract diseases using modern medical and endoscopic techniques.',
      color: 'bg-rose-50 text-rose-600 border-rose-100'
    }
  ];

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
              <span className="text-sky-600 font-black text-xs uppercase tracking-[0.3em]">Advanced Diagnostics</span>
              <span className="h-[1px] w-12 bg-sky-600"></span>
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-black text-slate-900 dark:text-white leading-[0.8] mb-10 tracking-tighter">
              Clinical <br/>
              <span className="text-sky-600">Expertise.</span>
            </h1>

            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">
              Precision-driven diagnostic and therapeutic solutions for complex digestive, liver, and pancreatic disorders.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-32 relative">
        <div className="max-w-screen-2xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group relative flex flex-col bg-white dark:bg-[#0d1525] rounded-[3rem] p-12 shadow-sm border border-slate-100 dark:border-sky-900/40 hover:shadow-2xl hover:shadow-sky-100 dark:hover:shadow-none transition-all duration-500 hover:-translate-y-3"
              >
                {/* Service Identity (Number) */}
                <span className="absolute top-10 right-12 text-6xl font-black text-slate-50 dark:text-sky-900/10 group-hover:text-sky-50 dark:group-hover:text-sky-900/20 transition-colors duration-500 select-none">
                  0{idx + 1}
                </span>

                <div className={`w-20 h-20 rounded-3xl flex items-center justify-center mb-10 border-2 shadow-inner transition-transform group-hover:rotate-6 duration-500 ${service.color.replace('bg-', 'dark:bg-opacity-20 dark:bg-').replace('border-', 'dark:border-')}`}>
                  <service.icon size={36} />
                </div>
                
                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-6 tracking-tighter">{service.title}</h3>
                <div className="h-1 w-12 bg-sky-600 rounded-full mb-8 transform origin-left group-hover:scale-x-150 transition-transform duration-500"></div>
                
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed flex-grow mb-10 text-lg text-justify font-medium">
                  {service.description}
                </p>

                <div className="pt-8 border-t border-slate-50 dark:border-sky-900/20">
                  <a 
                    href="https://wa.me/919414158480" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group/btn relative px-8 py-3 bg-sky-600 text-white rounded-2xl font-black hover:bg-sky-700 transition-all inline-flex items-center overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center">
                      Inquire Now <span className="ml-2 group-hover/btn:translate-x-1 transition-transform">→</span>
                    </span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-slate-50 dark:bg-[#070b14]/50 relative overflow-hidden">
        {/* Background Accent */}
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-100 dark:bg-sky-900/10 blur-[100px] rounded-full z-0"></div>

        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="text-center mb-24">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <span className="h-[1px] w-8 bg-sky-600"></span>
              <span className="text-sky-600 font-bold text-xs uppercase tracking-[0.2em]">Patient Resources</span>
              <span className="h-[1px] w-8 bg-sky-600"></span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tighter">Common Queries.</h2>
          </div>

          <div className="space-y-8">
            {[
              {
                q: "Is an endoscopy painful?",
                a: "No, an endoscopy is not typically painful. You will be given a mild sedative or local anesthetic spray to numb your throat, ensuring you are comfortable throughout the brief procedure."
              },
              {
                q: "How long does a colonoscopy take?",
                a: "The actual procedure usually takes about 30 to 45 minutes. However, you should plan to be at the clinic for about 2 to 3 hours total to account for preparation and recovery time."
              },
              {
                q: "Do I need a referral to book an appointment?",
                a: "While referrals from general physicians are welcome, they are not strictly necessary. You can directly book a consultation if you are experiencing digestive issues."
              },
              {
                q: "What should I bring to my first appointment?",
                a: "Please bring any previous medical records, recent blood test reports, imaging scans (USG/CT/MRI), and a list of your current medications."
              }
            ].map((faq, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-[#0d1525] p-10 md:p-12 rounded-[2.5rem] shadow-sm border border-slate-100 dark:border-sky-900/30 hover:shadow-xl transition-all duration-500"
              >
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-sky-50 dark:bg-sky-900/30 rounded-2xl flex items-center justify-center text-sky-600 font-black text-xl flex-shrink-0">
                    ?
                  </div>
                  <div>
                    <h4 className="text-2xl font-black text-slate-900 dark:text-white mb-4 tracking-tight leading-snug">{faq.q}</h4>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg text-justify border-l-2 border-sky-100 dark:border-sky-900/40 pl-6">{faq.a}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
