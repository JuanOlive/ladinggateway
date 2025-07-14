
import React from 'react';
import { AnimatedSection } from './AnimatedSection';

export const Hero: React.FC = () => {
    return (
        <section id="home" className="relative bg-gray-900 text-white min-h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/80 via-gray-900 to-black opacity-90"></div>
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse animation-delay-4000"></div>
            </div>
            <AnimatedSection className="relative z-10 text-center p-6">
                <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
                    Leve seu Negócio para o Digital com um Site <span className="text-indigo-400">Incrível</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                    Sites personalizados que transformam visitantes em clientes. Design, velocidade e performance para destacar sua marca.
                </p>
    <a
    href="#contato"
    className="
        bg-indigo-600 text-white font-bold
        text-sm sm:text-lg  <!-- Texto menor em mobile -->
        px-3 py-2 sm:px-6 sm:py-3  <!-- Padding reduzido em mobile -->
        rounded-full hover:bg-indigo-700
        transition-all duration-300
        transform hover:scale-105
        shadow-lg
        w-full xs:w-auto  <!-- Força largura total apenas em telas muito pequenas -->
        text-center
        whitespace-nowrap  <!-- Impede quebra de texto -->
        mx-auto  <!-- Centraliza se w-full -->
        max-w-xs  <!-- Limita largura máxima -->
    "
>
    Solicite um Orçamento Grátis
</a>
            </AnimatedSection>
        </section>
    );
};
