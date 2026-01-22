import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { language, toggleLanguage, t } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false);
        }
    };

    const navItems = [
        { id: 'services', label: t.nav.services },
        { id: 'portfolio', label: t.nav.portfolio },
        { id: 'about', label: t.nav.about },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-xl border-b border-cyan-500/20' : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center gap-3 cursor-pointer"
                        onClick={() => scrollToSection('hero')}
                    >
                        <img
                            src="https://horizons-cdn.hostinger.com/c0250367-9258-483f-8c22-9a383c3e3373/t-M22ki.jpg"
                            alt="Alkan IA Logo"
                            className="h-10 w-10"
                        />
                        <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">
                            Alkan IA
                        </span>
                    </motion.div>

                    <div className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <motion.button
                                key={item.id}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => scrollToSection(item.id)}
                                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                            >
                                {item.label}
                            </motion.button>
                        ))}

                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={toggleLanguage}
                            className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 px-3 py-1 rounded-full border border-gray-700 hover:border-cyan-500"
                        >
                            <Globe size={18} />
                            <span className="uppercase text-sm font-semibold">{language}</span>
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => scrollToSection('about')}
                            className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-fuchsia-500 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
                        >
                            {t.nav.contact}
                        </motion.button>
                    </div>

                    <div className="md:hidden flex items-center gap-4">
                        <button
                            onClick={toggleLanguage}
                            className="text-white flex items-center gap-2 px-3 py-1 rounded-full border border-gray-700"
                        >
                            <span className="uppercase text-sm font-semibold">{language}</span>
                        </button>
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-white p-2"
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="md:hidden bg-black/95 backdrop-blur-xl border-b border-cyan-500/20"
                >
                    <div className="px-4 py-6 space-y-4">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className="block w-full text-left text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium py-2"
                            >
                                {item.label}
                            </button>
                        ))}
                        <button
                            onClick={() => scrollToSection('about')}
                            className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-fuchsia-500 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
                        >
                            {t.nav.contact}
                        </button>
                    </div>
                </motion.div>
            )}
        </motion.nav>
    );
};

export default Navbar;
