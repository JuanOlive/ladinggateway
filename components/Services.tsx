
import React from 'react';
import { PaletteIcon, DeviceMobileIcon, RocketIcon, ShoppingCartIcon, RefreshIcon, CheckCircleIcon } from './icons';
import { AnimatedSection } from './AnimatedSection';

const services = [
    {
        icon: <PaletteIcon className="w-10 h-10 text-indigo-500" />,
        title: "Criação de Sites",
        description: "Desenvolvimento de sites institucionais e blogs do zero, 100% personalizados para sua marca.",
    },
    {
        icon: <DeviceMobileIcon className="w-10 h-10 text-indigo-500" />,
        title: "Otimização para Celular",
        description: "Garanta que seu site funcione perfeitamente em todos os dispositivos, de desktops a smartphones.",
    },
    {
        icon: <RocketIcon className="w-10 h-10 text-indigo-500" />,
        title: "Landing Pages",
        description: "Páginas de alta conversão focadas em campanhas de marketing e lançamento de produtos.",
    },
    {
        icon: <ShoppingCartIcon className="w-10 h-10 text-indigo-500" />,
        title: "Lojas Virtuais (E-commerce)",
        description: "Criação de lojas online completas e seguras para você vender seus produtos na internet.",
    },
    {
        icon: <RefreshIcon className="w-10 h-10 text-indigo-500" />,
        title: "Redesigns e Manutenção",
        description: "Modernize seu site atual ou conte com suporte para atualizações e melhorias contínuas.",
    },
    {
        icon: <CheckCircleIcon className="w-10 h-10 text-indigo-500" />,
        title: "Otimização SEO",
        description: "Estrutura de código otimizada para ajudar seu site a ser encontrado nos mecanismos de busca.",
    }
];

export const Services: React.FC = () => {
    return (
        <section id="servicos" className="py-20 bg-gray-100">
            <div className="container mx-auto px-6">
                <AnimatedSection>
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">Soluções Completas para sua Presença Online</h2>
                    <p className="text-center text-lg text-gray-600 max-w-2xl mx-auto mb-12">
                        Ofereço tudo o que você precisa para construir e manter um site de sucesso.
                    </p>
                </AnimatedSection>
                <AnimatedSection>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="bg-white p-8 rounded-lg shadow-md text-center transform hover:-translate-y-2 transition-transform duration-300">
                                <div className="flex justify-center items-center mb-4 bg-indigo-100 rounded-full w-20 h-20 mx-auto">
                                    {service.icon}
                                </div>
                                <h3 className="font-display text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                                <p className="text-gray-600">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
};
