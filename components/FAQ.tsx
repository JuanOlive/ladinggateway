
import React, { useState } from 'react';
import { ChevronDownIcon } from './icons';
import { AnimatedSection } from './AnimatedSection';

const faqData = [
    {
        question: "Quanto tempo leva para criar um site?",
        answer: "O tempo de desenvolvimento varia de acordo com a complexidade do projeto. Um site institucional simples pode levar de 2 semanas ou menos, enquanto um e-commerce completo pode levar de 6 a 8 semanas. Sempre estabelecemos um cronograma claro no início."
    },
    {
        question: "Meu site funcionará em celulares e tablets?",
        answer: "Sim, todos os sites que desenvolvo são 100% responsivos. Isso significa que eles se adaptam perfeitamente a qualquer tamanho de tela, garantindo uma ótima experiência para todos os usuários."
    },
    {
        question: "O que preciso fornecer para começar?",
        answer: "Para começar, precisaremos do seu logotipo, conteúdo (textos e imagens) para as páginas, e uma ideia geral do estilo que você gosta. Se você não tiver algo, posso ajudar com a criação de conteúdo e identidade visual."
    },
    {
        question: "Vocês oferecem suporte após o lançamento?",
        answer: "Sim! Ofereço um período de suporte gratuito após o lançamento para corrigir eventuais problemas. Também ofereço planos de manutenção mensais para atualizações de segurança, backups e pequenas alterações."
    },
     {
        question: "Qual o valor dos sites?",
        answer: "Depende muito das suas vontades! Um site comum apenas anunciando algo (como este), cobro em torno de 19,90R$. Sites com loja funcional ou com algum sistema de pagamento, já podemos discutir outro valor. Se você desejar domínio personalizado, você pagará a mais."
    }
];

interface FAQItemProps {
    item: typeof faqData[0];
    isOpen: boolean;
    onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ item, isOpen, onClick }) => {
    return (
        <div className="border-b border-gray-200 py-4">
            <button
                onClick={onClick}
                className="w-full flex justify-between items-center text-left"
            >
                <span className="text-lg font-medium text-gray-800">{item.question}</span>
                <ChevronDownIcon className={`w-6 h-6 text-indigo-500 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 mt-4' : 'max-h-0'}`}>
                 <p className="text-gray-600 leading-relaxed">
                    {item.answer}
                 </p>
            </div>
        </div>
    );
};


export const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleClick = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-20 bg-[#02050a]">
            <div className="container mx-auto px-6">
                <AnimatedSection>
                    <h2 className="font-display text-3xl md:text-4xl text-white font-bold text-center mb-4">Dúvidas Frequentes</h2>
                    <p className="text-center text-lg text-gray-400 max-w-2xl mx-auto mb-12">
                        Tire suas principais dúvidas sobre o processo de criação de sites.
                    </p>
                </AnimatedSection>
                <AnimatedSection>
                    <div className="max-w-3xl mx-auto bg-gray-200 p-8 rounded-lg shadow-md">
                        {faqData.map((item, index) => (
                            <FAQItem
                                key={index}
                                item={item}
                                isOpen={openIndex === index}
                                onClick={() => handleClick(index)}
                            />
                        ))}
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
};
