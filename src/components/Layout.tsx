import { Outlet, Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, MessageCircle, Activity, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans transition-all duration-700 ease-in-out bg-slate-50 text-gray-800 dark:bg-slate-950 dark:text-slate-200">
      <div className="fixed w-full z-50 top-0 left-0 flex flex-col transition-all duration-300">
        {/* Top Bar */}
        <div className={`py-2 px-4 hidden md:block transition-colors duration-700 ${isScrolled ? 'bg-teal-800 text-white' : (isHome ? 'bg-teal-900/30 backdrop-blur-sm text-white' : 'bg-teal-700 text-white')}`}>
          <div className="max-w-screen-2xl mx-auto flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <span className="flex items-center"><Phone size={16} className="mr-2" /> +91 94141 58480</span>
              <span className="flex items-center"><Mail size={16} className="mr-2" /> info@drmayankameta.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <a href="https://maps.app.goo.gl/RUgGqAZXVKrNsQJy7" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-teal-200 transition-colors">
                <MapPin size={16} className="mr-2" /> Udaipur, Rajasthan
              </a>
            </div>
          </div>
        </div>

        {/* Navbar */}
        <header
          className={`transition-all duration-700 ${
            isScrolled ? 'bg-white shadow-md py-3 dark:bg-slate-900' : (isHome ? 'bg-white/70 backdrop-blur-md py-5 dark:bg-slate-900/70' : 'bg-white shadow-sm py-5 dark:bg-slate-900')
          }`}
        >
        <div className="max-w-screen-2xl mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-teal-700 shadow-lg shadow-teal-500/30 group-hover:shadow-teal-500/50 transition-all duration-300 transform group-hover:-translate-y-0.5">
              <Activity className="text-white w-6 h-6" />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center transition-colors duration-700">
                <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
              </div>
            </div>
            <div className="flex flex-col">
              <h1 className="text-2xl font-extrabold tracking-tight text-slate-800 dark:text-white leading-none mb-1 transition-colors duration-700">
                Dr. Mayank <span className="text-teal-600">Ameta</span>
              </h1>
              <p className="text-[10px] font-bold tracking-widest text-slate-500 dark:text-slate-400 uppercase transition-colors duration-700">
                Gastroenterologist
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-medium transition-all duration-700 hover:text-teal-600 ${
                  location.pathname === link.path ? 'text-teal-600 border-b-2 border-teal-600' : 'text-gray-600 dark:text-slate-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Premium Theme Toggle Switch */}
            <button
              onClick={toggleTheme}
              className="relative w-14 h-7 rounded-full bg-slate-200 dark:bg-teal-900/50 transition-colors duration-700 focus:outline-none focus:ring-2 focus:ring-teal-500 overflow-hidden"
              aria-label="Toggle Theme"
            >
              <motion.div
                className="absolute top-1 left-1 w-5 h-5 rounded-full bg-white dark:bg-teal-400 shadow-sm flex items-center justify-center z-10"
                animate={{ x: theme === 'dark' ? 28 : 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                {theme === 'light' ? (
                  <Sun size={12} className="text-amber-500" />
                ) : (
                  <Moon size={12} className="text-teal-900" />
                )}
              </motion.div>
              <div className="flex justify-between items-center h-full px-2 opacity-40">
                <Sun size={12} className="dark:text-white" />
                <Moon size={12} className="text-slate-600 dark:text-white" />
              </div>
            </button>
          </nav>

          {/* Mobile Actions */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="relative w-12 h-6 rounded-full bg-slate-100 dark:bg-slate-800 transition-colors duration-700 focus:outline-none"
              aria-label="Toggle Theme"
            >
              <motion.div
                className="absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white dark:bg-teal-500 shadow-sm flex items-center justify-center"
                animate={{ x: theme === 'dark' ? 24 : 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                {theme === 'light' ? <Sun size={10} className="text-amber-500" /> : <Moon size={10} className="text-white" />}
              </motion.div>
            </button>
            <button
              className="text-gray-600 dark:text-slate-300 hover:text-teal-600 transition-colors duration-700"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white dark:bg-slate-900 border-t dark:border-slate-800 mt-3 overflow-hidden"
            >
              <div className="flex flex-col px-4 py-4 space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`font-medium px-2 py-1 ${
                      location.pathname === link.path ? 'text-teal-600' : 'text-gray-600 dark:text-slate-300'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
      </div>

      {/* Main Content */}
      <motion.main 
        key={theme}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className={`flex-grow ${isHome ? '' : 'pt-[116px]'}`}
      >
        <Outlet />
      </motion.main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
        <div className="max-w-screen-2xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                MA
              </div>
              <div>
                <h2 className="text-xl font-bold text-white leading-tight">Dr. Mayank Ameta</h2>
                <p className="text-xs text-teal-400 font-medium">Gastroenterologist</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Providing advanced digestive care with compassion and expertise. Dedicated to improving your gastrointestinal health and overall well-being.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="hover:text-teal-400 transition-colors flex items-center">
                    <span className="mr-2">›</span> {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li><Link to="/services" className="hover:text-teal-400 transition-colors flex items-center"><span className="mr-2">›</span> Endoscopy</Link></li>
              <li><Link to="/services" className="hover:text-teal-400 transition-colors flex items-center"><span className="mr-2">›</span> Colonoscopy</Link></li>
              <li><Link to="/services" className="hover:text-teal-400 transition-colors flex items-center"><span className="mr-2">›</span> Liver Disease Treatment</Link></li>
              <li><Link to="/services" className="hover:text-teal-400 transition-colors flex items-center"><span className="mr-2">›</span> Acid Reflux / GERD</Link></li>
              <li><Link to="/services" className="hover:text-teal-400 transition-colors flex items-center"><span className="mr-2">›</span> IBS Treatment</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 text-teal-500 shrink-0 mt-1" size={20} />
                <a href="https://maps.app.goo.gl/RUgGqAZXVKrNsQJy7" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors">
                  Opposite SBI Bank, Madhuban, Udaipur, Rajasthan
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 text-teal-500 shrink-0" size={20} />
                <span>+91 94141 58480</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 text-teal-500 shrink-0" size={20} />
                <span>info@drmayankameta.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-screen-2xl mx-auto px-4 mt-12 pt-8 border-t border-slate-800 text-sm text-center flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Dr. Mayank Ameta. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919414158480"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 hover:scale-110 transition-all z-50 flex items-center justify-center group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} />
        <span className="absolute right-full mr-4 bg-gray-900 text-white text-sm px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Chat with us
        </span>
      </a>
    </div>
  );
}
