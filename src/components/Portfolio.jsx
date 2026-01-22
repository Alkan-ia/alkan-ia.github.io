import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const Portfolio = () => {
    const { t } = useLanguage();

    const projectImages = [
        'https://images.unsplash.com/photo-1572177812156-58036aae439c',
        'https://horizons-cdn.hostinger.com/c0250367-9258-483f-8c22-9a383c3e3373/df5f41d5fb816cb605f3fed87dfb6e97.png',
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
        'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb',
        'https://images.unsplash.com/photo-1542744173-8e7e53415bb0',
        'https://images.unsplash.com/photo-1461749280684-dccba630e2f6'
    ];

    const projects = t.portfolio.items.map((item, index) => ({
        ...item,
        image: projectImages[index]
    }));

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <section id="portfolio" className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-fuchsia-950/10 to-black" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        {t.portfolio.title} <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">{t.portfolio.titleHighlight}</span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        {t.portfolio.subtitle}
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -10 }}
                            className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-cyan-500/20 hover:border-fuchsia-500/50 transition-all duration-300"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    alt={project.title}
                                    src={project.image}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                                <div className="absolute top-4 right-4">
                                    <span className="px-3 py-1 bg-gradient-to-r from-cyan-500/80 to-fuchsia-500/80 backdrop-blur-sm rounded-full text-xs font-semibold">
                                        {project.category}
                                    </span>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                                    {project.title}
                                </h3>
                                <p className="text-gray-300 leading-relaxed">
                                    {project.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Portfolio;
