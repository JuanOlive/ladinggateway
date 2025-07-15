
import React from 'react';

interface FooterProps {
    whatsAppNumber: string;
    whatsAppMessage: string;
}

export const Footer: React.FC<FooterProps> = ({ whatsAppNumber, whatsAppMessage }) => {
    const encodedMessage = encodeURIComponent(whatsAppMessage);
    const whatsappUrl = `https://wa.me/${whatsAppNumber}?text=${encodedMessage}`;
    
    return (
        <footer id="contato" className="bg-gray-900 text-white">
            <div className="container mx-auto px-6 py-20 text-center">
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Vamos Construir seu Site Juntos?</h2>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
                    Estou pronto para transformar sua ideia em um projeto de sucesso. Envie uma mensagem e vamos começar!
                </p>
                <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-indigo-600 text-white font-bold text-lg px-8 py-4 rounded-full hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                    Fale Comigo Agora
                </a>
            </div>
            <div className="bg-black py-4">
                <div className="container mx-auto px-6 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Juanify. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
};
