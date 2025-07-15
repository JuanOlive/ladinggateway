
import React from 'react';
import { AnimatedSection } from './AnimatedSection';

const portfolioItems = [
    {
        id: 1,
        title: "E-commerce de Moda íntima",
        description: "Loja virtual moderna e responsiva para uma marca de roupas íntimas femininas.",
        imageUrl: "images/Captura4.png",
        link: "https://luxurylovable.netlify.app/",
    },
    {
        id: 2,
        title: "Site Institucional para Startup",
        description: "Plataforma de apresentação para uma startup de tecnologia com foco em UX.",
        imageUrl: "images/Captura3.png",
        link: "https://app.icontrolweb.com.br/",
    },
    {
        id: 3,
        title: "Landing Page de Produto",
        description: "Página de vendas de alta conversão para o lançamento de um app.",
        imageUrl: "images/Captura1.png",
        link: "https://chronoxsmart.netlify.app/",
    },
    {
        id: 4,
        title: "Blog de Culinária",
        description: "Design clean e focado em conteúdo para um blog de receitas.",
        imageUrl: "images/Captura5.png",
        link: "https://gourmandeblog.netlify.app/",
    },
    {
        id: 5,
        title: "Portfólio para Fotógrafo",
        description: "Site minimalista e visual para exibir o trabalho de um fotógrafo.",
        imageUrl: "images/Captura2.png",
        link: "https://josephfotografis.netlify.app/",
    },
    {
        id: 6,
        title: "Site para Consultoria",
        description: "Design corporativo para uma empresa de consultoria financeira.",
        imageUrl: "images/Captura6.png",
        link: "https://profinancelp.netlify.app/",
    },
];

interface PortfolioCardProps {
    item: typeof portfolioItems[0];
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ item }) => (
    <div className="group bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300">
        <a href={item.link} target="_blank" rel="noopener noreferrer">
            <img src={item.imageUrl} alt={item.title} className="w-full h-48 object-cover group-hover:opacity-90 transition-opacity" />
            <div className="p-6">
                <h3 className="font-display text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
            </div>
        </a>
    </div>
);

export const Portfolio: React.FC = () => {
    return (
        <section id="portfolio" className="py-20 bg-[#02050a]">
            <div className="container mx-auto px-6">
                <AnimatedSection>
                    <h2 className="font-display text-gray-100 text-3xl md:text-4xl font-bold text-center mb-4">Meus Trabalhos Recentes</h2>
                    <p className="text-center text-lg text-gray-300 max-w-2xl mx-auto mb-12">
                        Confira alguns dos projetos que tive o prazer de criar para meus clientes.
                    </p>
                </AnimatedSection>
                <AnimatedSection>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {portfolioItems.map(item => (
                            <PortfolioCard key={item.id} item={item} />
                        ))}
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
};
