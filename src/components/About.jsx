import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { Target, Users, Lightbulb, Award, Mail, MessageCircle, MapPin, Loader2 } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { useLanguage } from '@/context/LanguageContext';

const About = () => {
    const { toast } = useToast();
    const { t } = useLanguage();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const featureIcons = [Target, Users, Lightbulb, Award];

    const features = t.about.features.map((feature, index) => ({
        ...feature,
        icon: featureIcons[index]
    }));

    const handleContactSubmit = async (e) => {
        e.preventDefault();

        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        if (!serviceId || !templateId || !publicKey) {
            console.error('EmailJS configuration is missing keys');
            toast({
                title: "Config Error ⚙️",
                description: "Faltan las claves de configuración. Verifica los secretos en GitHub.",
                variant: "destructive",
            });
            return;
        }

        console.log('Keys detected, proceeding with submission...'); // Trigger build comment


        setIsSubmitting(true);

        try {
            const templateParams = {
                name: formData.name,
                email: formData.email,
                message: formData.message
            };

            await emailjs.send(
                serviceId,
                templateId,
                templateParams,
                publicKey
            );

            toast({
                title: "Mensaje Enviado! ✅",
                description: "Gracias por contactarnos. Te responderemos pronto.",
            });
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('Submission Error:', error);
            const errorMessage = error?.text || "Hubo un problema al enviar tu mensaje.";
            toast({
                title: "Error ❌",
                description: `Error: ${errorMessage}. Por favor intenta de nuevo.`,
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="about" className="py-24 relative overflow-hidden">
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
                        {t.about.title} <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">{t.about.titleHighlight}</span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        {t.about.subtitle}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <img
                            className="rounded-2xl shadow-2xl shadow-cyan-500/20 border border-cyan-500/20 w-full h-full object-cover"
                            alt="Alkan IA team working on AI solutions"
                            src="https://images.unsplash.com/photo-1651009188116-bb5f80eaf6aa" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col justify-center"
                    >
                        <h3 className="text-3xl font-bold mb-6">{t.about.titleHighlight}</h3>
                        <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                            {t.about.content1}
                        </p>
                        <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                            {t.about.content2}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {features.map((feature, index) => {
                                const Icon = feature.icon;
                                return (
                                    <motion.div
                                        key={index}
                                        whileHover={{ scale: 1.05 }}
                                        className="flex items-start gap-3"
                                    >
                                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-fuchsia-500 flex items-center justify-center flex-shrink-0">
                                            <Icon className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold mb-1">{feature.title}</h4>
                                            <p className="text-sm text-gray-400">{feature.description}</p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-cyan-500/20"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-3xl font-bold mb-6">{t.about.contact.title}</h3>
                            <p className="text-gray-300 text-lg mb-8">
                                {t.about.contact.subtitle}
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                                        <Mail className="w-6 h-6 text-cyan-400" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-400">{t.about.contact.email}</div>
                                        <div className="font-semibold">wessinsoriano@gmail.com</div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-fuchsia-500/20 flex items-center justify-center">
                                        <MessageCircle className="w-6 h-6 text-fuchsia-400" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-400">{t.about.contact.phone}</div>
                                        <div className="font-semibold">1-(809)-306-0215</div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                                        <MapPin className="w-6 h-6 text-cyan-400" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-400">{t.about.contact.location}</div>
                                        <div className="font-semibold">República Dominicana, Santo Domingo Este</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <form onSubmit={handleContactSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium mb-2">{t.about.contact.form.name}</label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full px-4 py-3 bg-white/5 border border-cyan-500/30 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
                                        placeholder={t.about.contact.form.placeholderName}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium mb-2">{t.about.contact.form.email}</label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full px-4 py-3 bg-white/5 border border-cyan-500/30 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
                                        placeholder={t.about.contact.form.placeholderEmail}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium mb-2">{t.about.contact.form.message}</label>
                                    <textarea
                                        id="message"
                                        required
                                        rows={4}
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="w-full px-4 py-3 bg-white/5 border border-cyan-500/30 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                                        placeholder={t.about.contact.form.placeholderMessage}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-fuchsia-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                            Enviando...
                                        </>
                                    ) : (
                                        t.about.contact.form.submit
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
