import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import About from '@/components/About';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';
import { LanguageProvider } from '@/context/LanguageContext';

function App() {
    return (
        <LanguageProvider>
            <Helmet>
                <title>Alkan IA - AI Automation & Agent Solutions</title>
                <meta name="description" content="Professional AI automation agency specializing in n8n, Make workflows, and advanced AI agents including Gemini, ChatGPT, Claude, and Copilot." />
            </Helmet>
            <div className="min-h-screen bg-black text-white">
                <Navbar />
                <Hero />
                <Services />
                <Portfolio />
                <About />
                <Footer />
                <Toaster />
            </div>
        </LanguageProvider>
    );
}

export default App;
