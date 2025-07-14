
import React from 'react';
import { AnimatedSection } from './AnimatedSection';

const testimonials = [
    {
        quote: "O novo site superou todas as nossas expectativas! O design ficou incrível e o tempo de entrega foi recorde. Recomendo fortemente!",
        name: "Ana Silva",
        title: "CEO da Moda & Cia",
        avatar: "https://picsum.photos/seed/woman1/100/100",
    },
    {
        quote: "Profissionalismo exemplar do início ao fim. Entendeu perfeitamente nossa visão e a transformou em um site funcional e bonito.",
        name: "Carlos Souza",
        title: "Fundador da TechInova",
        avatar: "https://picsum.photos/seed/man1/100/100",
    },
    {
        quote: "Desde que lançamos a nova landing page, nossas conversões aumentaram 40%. Um trabalho que realmente trouxe resultados.",
        name: "Juliana Pereira",
        title: "Gerente de Marketing na AppMax",
        avatar: "https://picsum.photos/seed/woman2/100/100",
    },
];

export const Testimonials: React.FC = () => {
    return (
        <section id="testimonials" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <AnimatedSection>
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">O que Meus Clientes Dizem</h2>
                    <p className="text-center text-lg text-gray-600 max-w-2xl mx-auto mb-12">
                        A satisfação de quem confia no meu trabalho é minha maior recompensa.
                    </p>
                </AnimatedSection>
                <AnimatedSection>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="bg-gray-100 p-8 rounded-lg shadow-sm">
                                <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
                                <div className="flex items-center">
                                    <img src={testimonial.avatar} alt={testimonial.name} className="w-14 h-14 rounded-full mr-4" />
                                    <div>
                                        <p className="font-bold text-gray-800">{testimonial.name}</p>
                                        <p className="text-sm text-gray-500">{testimonial.title}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
};
