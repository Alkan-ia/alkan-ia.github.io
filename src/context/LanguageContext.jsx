import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const translations = {
    en: {
        nav: {
            services: 'Services',
            portfolio: 'Portfolio',
            about: 'About',
            contact: 'Contact Us',
        },
        hero: {
            badge: 'AI-Powered Automation',
            titleStart: 'Transform Your Business with',
            titleHighlight: 'AI Automation',
            description: 'We build intelligent automation solutions using n8n, Make, and cutting-edge AI agents to streamline your workflows and boost productivity.',
            explore: 'Explore Services',
            viewPortfolio: 'View Portfolio',
        },
        services: {
            title: 'Our',
            titleHighlight: 'Services',
            subtitle: 'Comprehensive AI and automation solutions tailored to your business needs',
            items: [
                {
                    title: 'n8n Automation',
                    description: 'Build powerful workflow automations with n8n to connect your apps and automate repetitive tasks seamlessly.',
                },
                {
                    title: 'Make Integration',
                    description: 'Create sophisticated automation scenarios with Make (formerly Integromat) for complex business processes.',
                },
                {
                    title: 'Gemini AI',
                    description: "Leverage Google's Gemini AI for advanced language understanding and multimodal AI capabilities.",
                },
                {
                    title: 'ChatGPT Solutions',
                    description: "Integrate OpenAI's ChatGPT to build intelligent chatbots and conversational AI applications.",
                },
                {
                    title: 'Claude AI',
                    description: "Deploy Anthropic's Claude for safe, helpful AI assistance with advanced reasoning capabilities.",
                },
                {
                    title: 'Copilot Integration',
                    description: 'Enhance productivity with Microsoft Copilot integration for intelligent code and content assistance.',
                },
            ],
        },
        portfolio: {
            title: 'Our',
            titleHighlight: 'Portfolio',
            subtitle: 'Explore our successful AI automation projects and solutions',
            viewProject: 'View Project',
            details: 'Details',
            items: [
                {
                    title: 'E-Commerce Automation',
                    description: 'Automated order processing and inventory management using n8n with real-time notifications and analytics.',
                    category: 'n8n Workflow',
                },
                {
                    title: 'AI Customer Support Bot',
                    description: 'Intelligent chatbot powered by ChatGPT providing 24/7 customer support with natural language understanding.',
                    category: 'ChatGPT Integration',
                },
                {
                    title: 'Marketing Automation Suite',
                    description: 'Complete marketing automation with Make integrating email campaigns, social media, and analytics.',
                    category: 'Make Platform',
                },
                {
                    title: 'Document Analysis AI',
                    description: 'Automated document processing and analysis using Claude AI for intelligent data extraction.',
                    category: 'Claude AI',
                },
                {
                    title: 'Content Generation System',
                    description: 'AI-powered content creation platform using Gemini for blogs, social media, and marketing materials.',
                    category: 'Gemini AI',
                },
                {
                    title: 'Development Workflow Optimizer',
                    description: 'Integrated Copilot solution for code review automation and development productivity enhancement.',
                    category: 'Copilot',
                },
            ],
        },
        about: {
            title: 'About',
            titleHighlight: 'Alkan IA',
            subtitle: 'Your trusted partner in AI-powered automation and intelligent solutions',
            content1: 'Alkan IA is a forward-thinking AI automation agency specializing in creating intelligent solutions that revolutionize how businesses operate. We combine the power of automation platforms like n8n and Make with cutting-edge AI agents to deliver transformative results.',
            content2: 'Our expertise spans across multiple AI platforms including Gemini, ChatGPT, Claude, and Copilot, enabling us to craft custom solutions that perfectly align with your unique business needs.',
            features: [
                { title: 'Our Mission', description: 'To empower businesses with cutting-edge AI automation solutions that drive efficiency and innovation.' },
                { title: 'Expert Team', description: 'A dedicated team of AI specialists and automation experts committed to delivering exceptional results.' },
                { title: 'Innovation', description: 'We stay at the forefront of AI technology, constantly exploring new possibilities and solutions.' },
                { title: 'Excellence', description: 'Proven track record of successful projects and satisfied clients across various industries.' },
            ],
            contact: {
                title: 'Get In Touch',
                subtitle: "Ready to transform your business with AI automation? Let's discuss how we can help you achieve your goals.",
                email: 'Email',
                phone: 'Phone',
                location: 'Location',
                form: {
                    name: 'Name',
                    email: 'Email',
                    message: 'Message',
                    submit: 'Send Message',
                    placeholderName: 'Your name',
                    placeholderEmail: 'your.email@example.com',
                    placeholderMessage: 'Tell us about your project...',
                }
            }
        },
        footer: {
            description: 'Empowering businesses with intelligent AI automation solutions for a smarter, more efficient future.',
            rights: 'All rights reserved.',
            links: {
                privacy: 'Privacy Policy',
                terms: 'Terms of Service',
                cookies: 'Cookie Policy',
            },
            sections: {
                services: 'Services',
                company: 'Company',
                resources: 'Resources',
            }
        }
    },
    es: {
        nav: {
            services: 'Servicios',
            portfolio: 'Portafolio',
            about: 'Nosotros',
            contact: 'Contáctanos',
        },
        hero: {
            badge: 'Automatización con IA',
            titleStart: '¡Dale super poderes a tu negocio!',
            titleHighlight: '',
            description: 'Creamos soluciones de automatización inteligente usando n8n, Make y agentes de IA avanzados para optimizar tus flujos de trabajo y aumentar la productividad.',
            explore: 'Explorar Servicios',
            viewPortfolio: 'Ver Portafolio',
        },
        services: {
            title: 'Nuestros',
            titleHighlight: 'Servicios',
            subtitle: 'Soluciones integrales de IA y automatización adaptadas a las necesidades de tu negocio',
            items: [
                {
                    title: 'Automatización n8n',
                    description: 'Construye potentes flujos de trabajo con n8n para conectar tus aplicaciones y automatizar tareas repetitivas sin problemas.',
                },
                {
                    title: 'Integración Make',
                    description: 'Crea escenarios de automatización sofisticados con Make (anteriormente Integromat) para procesos empresariales complejos.',
                },
                {
                    title: 'Gemini AI',
                    description: 'Aprovecha Gemini AI de Google para una comprensión avanzada del lenguaje y capacidades de IA multimodal.',
                },
                {
                    title: 'Soluciones ChatGPT',
                    description: 'Integra ChatGPT de OpenAI para construir chatbots inteligentes y aplicaciones de IA conversacional.',
                },
                {
                    title: 'Claude AI',
                    description: 'Implementa Claude de Anthropic para asistencia de IA segura y útil con capacidades avanzadas de razonamiento.',
                },
                {
                    title: 'Integración Copilot',
                    description: 'Mejora la productividad con la integración de Microsoft Copilot para asistencia inteligente en código y contenido.',
                },
            ],
        },
        portfolio: {
            title: 'Nuestro',
            titleHighlight: 'Portafolio',
            subtitle: 'Explora nuestros proyectos y soluciones exitosas de automatización con IA',
            viewProject: 'Ver Proyecto',
            details: 'Detalles',
            items: [
                {
                    title: 'Automatización E-Commerce',
                    description: 'Procesamiento automatizado de pedidos y gestión de inventario usando n8n con notificaciones y análisis en tiempo real.',
                    category: 'Flujo n8n',
                },
                {
                    title: 'Bot de Soporte IA',
                    description: 'Chatbot inteligente impulsado por ChatGPT que brinda soporte al cliente 24/7 con comprensión del lenguaje natural.',
                    category: 'Integración ChatGPT',
                },
                {
                    title: 'Suite de Automatización de Marketing',
                    description: 'Automatización completa de marketing con Make integrando campañas de correo, redes sociales y análisis.',
                    category: 'Plataforma Make',
                },
                {
                    title: 'Análisis de Documentos IA',
                    description: 'Procesamiento y análisis automatizado de documentos usando Claude AI para extracción inteligente de datos.',
                    category: 'Claude AI',
                },
                {
                    title: 'Sistema de Generación de Contenido',
                    description: 'Plataforma de creación de contenido impulsada por IA usando Gemini para blogs, redes sociales y materiales de marketing.',
                    category: 'Gemini AI',
                },
                {
                    title: 'Optimizador de Flujo de Desarrollo',
                    description: 'Solución integrada de Copilot para automatización de revisión de código y mejora de la productividad del desarrollo.',
                    category: 'Copilot',
                },
            ],
        },
        about: {
            title: 'Sobre',
            titleHighlight: 'Alkan IA',
            subtitle: 'Tu socio de confianza en automatización impulsada por IA y soluciones inteligentes',
            content1: 'Alkan IA es una agencia de automatización de IA con visión de futuro especializada en crear soluciones inteligentes que revolucionan cómo operan las empresas. Combinamos el poder de plataformas de automatización como n8n y Make con agentes de IA de vanguardia para ofrecer resultados transformadores.',
            content2: 'Nuestra experiencia abarca múltiples plataformas de IA incluyendo Gemini, ChatGPT, Claude y Copilot, permitiéndonos crear soluciones personalizadas que se alinean perfectamente con tus necesidades comerciales únicas.',
            features: [
                { title: 'Nuestra Misión', description: 'Empoderar a las empresas con soluciones de automatización de IA de vanguardia que impulsen la eficiencia y la innovación.' },
                { title: 'Equipo Experto', description: 'Un equipo dedicado de especialistas en IA y automatización comprometidos con entregar resultados excepcionales.' },
                { title: 'Innovación', description: 'Nos mantenemos a la vanguardia de la tecnología de IA, explorando constantemente nuevas posibilidades y soluciones.' },
                { title: 'Excelencia', description: 'Historial probado de proyectos exitosos y clientes satisfechos en diversas industrias.' },
            ],
            contact: {
                title: 'Contáctanos',
                subtitle: '¿Listo para transformar tu negocio con automatización de IA? Discutamos cómo podemos ayudarte a lograr tus objetivos.',
                email: 'Correo',
                phone: 'Teléfono',
                location: 'Ubicación',
                form: {
                    name: 'Nombre',
                    email: 'Correo',
                    message: 'Mensaje',
                    submit: 'Enviar Mensaje',
                    placeholderName: 'Tu nombre',
                    placeholderEmail: 'tu.correo@ejemplo.com',
                    placeholderMessage: 'Cuéntanos sobre tu proyecto...',
                }
            }
        },
        footer: {
            description: 'Empoderando empresas con soluciones inteligentes de automatización IA para un futuro más eficiente.',
            rights: 'Todos los derechos reservados.',
            links: {
                privacy: 'Política de Privacidad',
                terms: 'Términos de Servicio',
                cookies: 'Política de Cookies',
            },
            sections: {
                services: 'Servicios',
                company: 'Compañía',
                resources: 'Recursos',
            }
        }
    }
};

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('en');

    const toggleLanguage = () => {
        setLanguage(prev => prev === 'en' ? 'es' : 'en');
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t: translations[language] }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
