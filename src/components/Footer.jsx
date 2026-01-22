import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const { t } = useLanguage();

    const socialLinks = [
        { icon: Github, href: '#', label: 'GitHub' },
        { icon: Linkedin, href: '#', label: 'LinkedIn' },
        { icon: Twitter, href: '#', label: 'Twitter' },
        { icon: Mail, href: '#', label: 'Email' }
    ];

    const footerLinks = [
        {
            title: t.footer.sections.services,
            links: t.services.items.slice(0, 4).map(item => item.title)
        },
        {
            title: t.footer.sections.company,
            links: [t.nav.about, 'Our Team', 'Careers', t.nav.contact]
        },
        {
            title: t.footer.sections.resources,
            links: ['Blog', 'Documentation', 'Case Studies', 'Support']
        }
    ];

    return (
        <footer className="relative bg-black border-t border-cyan-500/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-3 mb-4">
                            <img
                                src="https://horizons-cdn.hostinger.com/c0250367-9258-483f-8c22-9a383c3e3373/a7d56ca3dbd3e16aa3c1c199aaa82fd9.png"
                                alt="Alkan IA Logo"
                                className="h-10 w-10"
                            />
                            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">
                                Alkan IA
                            </span>
                        </div>
                        <p className="text-gray-400 mb-6 max-w-sm">
                            {t.footer.description}
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map((social, index) => {
                                const Icon = social.icon;
                                return (
                                    <motion.a
                                        key={index}
                                        href={social.href}
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="w-10 h-10 rounded-lg bg-white/5 border border-cyan-500/30 flex items-center justify-center hover:bg-cyan-500/20 hover:border-cyan-500 transition-all duration-300"
                                        aria-label={social.label}
                                    >
                                        <Icon className="w-5 h-5" />
                                    </motion.a>
                                );
                            })}
                        </div>
                    </div>

                    {footerLinks.map((section, index) => (
                        <div key={index}>
                            <span className="font-semibold text-lg mb-4 block">{section.title}</span>
                            <ul className="space-y-2">
                                {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <a
                                            href="#"
                                            className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="pt-8 border-t border-cyan-500/20">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-400 text-sm">
                            © {currentYear} Alkan IA. {t.footer.rights}
                        </p>
                        <div className="flex gap-6 text-sm">
                            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                                {t.footer.links.privacy}
                            </a>
                            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                                {t.footer.links.terms}
                            </a>
                            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                                {t.footer.links.cookies}
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50" />
        </footer>
    );
};

export default Footer;
