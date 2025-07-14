
import React from 'react';
import { AnimatedSection } from './AnimatedSection';
import { ClockIcon, SparklesIcon, SearchCircleIcon, SupportIcon } from './icons';

const benefits = [
    {
        icon: <ClockIcon className="w-8 h-8 text-white" />,
        title: "Entrega Rápida",
        description: "Processos otimizados para entregar seu projeto no menor tempo possível, sem comprometer a qualidade.",
    },
    {
        icon: <SparklesIcon className="w-8 h-8 text-white" />,
        title: "Designs 100% Exclusivos",
        description: "Nenhum template pronto. Cada site é desenhado do zero para atender às necessidades específicas do seu negócio.",
    },
    {
        icon: <SearchCircleIcon className="w-8 h-8 text-white" />,
        title: "Código Otimizado para SEO",
        description: "Boas práticas de SEO são aplicadas desde o início para melhorar seu ranking no Google.",
    },
    {
        icon: <SupportIcon className="w-8 h-8 text-white" />,
        title: "Suporte Contínuo",
        description: "Estou aqui para ajudar com qualquer dúvida ou necessidade de atualização após o lançamento do site.",
    },
];

export const Benefits: React.FC = () => {
    return (
        <section id="benefits" className="py-20 bg-indigo-700 text-white">
            <div className="container mx-auto px-6">
                <AnimatedSection>
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">Por que me Escolher?</h2>
                    <p className="text-center text-lg text-indigo-200 max-w-2xl mx-auto mb-12">
                        Meu compromisso é com o seu sucesso. Veja as vantagens de trabalharmos juntos.
                    </p>
                </AnimatedSection>
                <AnimatedSection>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="text-center p-6 bg-indigo-600 rounded-lg shadow-lg">
                                <div className="flex items-center justify-center bg-indigo-500 w-16 h-16 rounded-full mx-auto mb-4">
                                    {benefit.icon}
                                </div>
                                <h3 className="font-display text-xl font-bold mb-2">{benefit.title}</h3>
                                <p className="text-indigo-200">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
};
