
import React from 'react';
import { AnimatedSection } from './AnimatedSection';

export const About: React.FC = () => {
    return (
        <section id="sobre" className="py-20 bg-white">
            <AnimatedSection className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/3 flex justify-center">
                        <img 
                            src="images/WhatsApp Image 2025-06-03 at 15.05.06.jpeg" 
                            alt="Foto do Designer" 
                            className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover shadow-xl border-4 border-indigo-200"
                        />
                    </div>
                    <div className="md:w-2/3 text-center md:text-left">
                        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Olá, eu sou Juan!</h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Um web designer apaixonado por ajudar empreendedores e pequenas empresas a crescerem no ambiente online. Meu foco é criar sites que não são apenas bonitos, mas também <strong>rápidos, intuitivos e otimizados para converter visitantes em clientes</strong>.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed mt-4">
                            Com uma combinação de design criativo e código limpo, eu transformo suas ideias em uma presença digital de sucesso.
                        </p>
                    </div>
                </div>
            </AnimatedSection>
        </section>
    );
};
