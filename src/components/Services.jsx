import React from 'react';
import { motion } from 'framer-motion';
import { Workflow, Bot, Zap, Brain, MessageSquare, Cpu } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const Services = () => {
    const { t } = useLanguage();

    const serviceIcons = [Workflow, Zap, Brain, MessageSquare, Bot, Cpu];
    const serviceColors = [
        'from-cyan-500 to-blue-500',
        'from-fuchsia-500 to-pink-500',
        'from-cyan-400 to-teal-400',
        'from-emerald-500 to-cyan-500',
        'from-purple-500 to-fuchsia-500',
        'from-blue-500 to-cyan-500'
    ];

    const services = t.services.items.map((item, index) => ({
        ...item,
        icon: serviceIcons[index],
        color: serviceColors[index]
    }));

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <section id="services" className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-cyan-950/10 to-black" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        {t.services.title} <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">{t.services.titleHighlight}</span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        {t.services.subtitle}
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ y: -10, scale: 1.02 }}
                                className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <Icon className="w-8 h-8 text-white" />
                                </div>

                                <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                                    {service.title}
                                </h3>
                                <p className="text-gray-300 leading-relaxed">
                                    {service.description}
                                </p>

                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
