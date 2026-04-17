import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const images = [
    {
      src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop",
      alt: "Clinic Reception Area",
      category: "Clinic"
    },
    {
      src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop",
      alt: "Consultation Room",
      category: "Clinic"
    },
    {
      src: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&auto=format&fit=crop",
      alt: "Patient Discussion",
      category: "Consultation"
    },
    {
      src: "https://images.unsplash.com/photo-1551076805-e18690c5e561?q=80&w=800&auto=format&fit=crop",
      alt: "Hospital Ward",
      category: "Pacific Hospital"
    },
    {
      src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop",
      alt: "Medical Staff",
      category: "Team"
    },
    {
      src: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=800&auto=format&fit=crop",
      alt: "Hospital Exterior",
      category: "Pacific Hospital"
    }
  ];

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
              <span className="text-sky-600 font-black text-xs uppercase tracking-[0.3em]">Visual Journey</span>
              <span className="h-[1px] w-12 bg-sky-600"></span>
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-black text-slate-900 dark:text-white leading-[0.8] mb-10 tracking-tighter">
              Clinic <br/>
              <span className="text-sky-600">Gallery.</span>
            </h1>

            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">
              Witness the intersection of modern medical technology and a compassionate healing environment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Tabs/Filters (Subtle visual improvement) */}
      <div className="max-w-screen-2xl mx-auto px-4 mb-12">
         <div className="flex flex-wrap justify-center gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
            <span className="text-sky-600 px-4 py-2 border-b-2 border-sky-600">All Collections</span>
            <span className="hover:text-slate-600 dark:hover:text-white transition-colors cursor-pointer px-4 py-2 border-b-2 border-transparent">Clinical Space</span>
            <span className="hover:text-slate-600 dark:hover:text-white transition-colors cursor-pointer px-4 py-2 border-b-2 border-transparent">Technology</span>
            <span className="hover:text-slate-600 dark:hover:text-white transition-colors cursor-pointer px-4 py-2 border-b-2 border-transparent">Patient Comfort</span>
         </div>
      </div>

      {/* Gallery Grid */}
      <section className="pb-32 relative">
        <div className="max-w-screen-2xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-10">
            {images.map((img, idx) => {
              // Create a masonry-style alternating grid layout
              const colSpan = (idx === 0 || idx === 5) ? 'md:col-span-8' : 'md:col-span-4';
              const aspect = (idx === 0 || idx === 5) ? 'aspect-[21/9]' : 'aspect-square';
              
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className={`relative group cursor-pointer overflow-hidden rounded-[2.5rem] shadow-sm border border-slate-100 dark:border-sky-900/40 bg-slate-50 dark:bg-[#0d1525] ${colSpan} ${aspect}`}
                  onClick={() => setSelectedImg(img.src)}
                >
                  <img 
                    src={img.src} 
                    alt={img.alt} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Luxury Overlay */}
                  <div className="absolute inset-x-6 bottom-6 p-8 bg-white/10 dark:bg-black/10 backdrop-blur-md rounded-[2rem] border border-white/20 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <div className="flex justify-between items-end">
                      <div>
                        <span className="text-white/60 text-[10px] font-black uppercase tracking-[0.2em] block mb-2">{img.category}</span>
                        <h3 className="text-white font-black text-2xl tracking-tighter leading-none">{img.alt}</h3>
                      </div>
                      <div className="w-12 h-12 rounded-full border border-white/40 flex items-center justify-center text-white">
                         <span className="scale-150">＋</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-slate-950/98 backdrop-blur-2xl flex items-center justify-center p-8 md:p-16"
            onClick={() => setSelectedImg(null)}
          >
            <button 
              className="absolute top-10 right-10 text-white/50 hover:text-white transition-colors"
              onClick={() => setSelectedImg(null)}
            >
              <X size={48} strokeWidth={1} />
            </button>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative max-w-7xl w-full max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImg}
                alt="Enlarged view"
                className="w-full h-full object-contain rounded-3xl"
                referrerPolicy="no-referrer"
              />
              {/* Optional: Add image meta inside lightbox if desired */}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
