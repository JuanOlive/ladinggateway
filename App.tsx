
import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Portfolio } from './components/Portfolio';
import { About } from './components/About';
import { Services } from './components/Services';
import { Benefits } from './components/Benefits';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

const App: React.FC = () => {
    const WHATSAPP_NUMBER = "5511982930769"; // Use a real number with country code
    const WHATSAPP_MESSAGE = "Olá! Vi seu site e gostaria de um orçamento para um projeto.";

    return (
        <div className="font-sans">
            <Header whatsAppNumber={WHATSAPP_NUMBER} whatsAppMessage={WHATSAPP_MESSAGE} />
            <main>
                <Hero />
                <About />
                <Portfolio />
                <Services />
                <Benefits />
                <Testimonials />
                <FAQ />
            </main>
            <Footer whatsAppNumber={WHATSAPP_NUMBER} whatsAppMessage={WHATSAPP_MESSAGE} />
            <WhatsAppButton whatsAppNumber={WHATSAPP_NUMBER} message={WHATSAPP_MESSAGE} />
        </div>
    );
};

export default App;
