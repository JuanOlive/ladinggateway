
import React, { useState } from 'react';
import { MenuIcon, XIcon } from './icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';


interface HeaderProps {
    whatsAppNumber: string;
    whatsAppMessage: string;
}

export const Header: React.FC<HeaderProps> = ({ whatsAppNumber, whatsAppMessage }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const encodedMessage = encodeURIComponent(whatsAppMessage);
    const whatsappUrl = `https://wa.me/${whatsAppNumber}?text=${encodedMessage}`;

    const navLinks = [
        { href: '#sobre', label: 'Sobre Mim' },
        { href: '#portfolio', label: 'Portfólio' },
        { href: '#servicos', label: 'Serviços' },
        { href: '#faq', label: 'FAQ' },
    ];

    return (
        <header className="bg-[#02050a]/95 backdrop-blur-sm sticky top-0 z-40 shadow-sm" >
            <div className="container mx-auto px-6 py-3 flex justify-between items-center ">
                <a href="#" className="flex items-center">
   
    <img 
        src="/images/logojuanify (2).png" 
        alt="Logo"
        className="h-12 w-auto"  /* Altura fixa, largura automática */
    />
</a>

                <nav className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a key={link.href} href={link.href} className="text-white hover:text-indigo-600 font-medium transition-colors">
                            {link.label}
                        </a>
                    ))}
                </nav>

                <div className="flex items-center">
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-full font-bold hover:bg-green-600 transition-colors shadow-md">
                        <FontAwesomeIcon icon={faWhatsapp}  size={'xl'}/>
                        <span>WhatsApp</span>
                    </a>
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-700 hover:text-indigo-600 ml-4">
                        {isMenuOpen ? <XIcon className="w-7 h-7" /> : <MenuIcon className="w-7 h-7" />}
                    </button>
                </div>
            </div>
            {/* Mobile Menu */}
            {isMenuOpen && (
                 <div className="md:hidden bg-white shadow-lg">
                    <nav className="flex flex-col items-center space-y-4 py-4">
                         {navLinks.map((link) => (
                            <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-gray-600 hover:text-indigo-600 font-medium transition-colors text-lg">
                                {link.label}
                            </a>
                        ))}
                        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 bg-green-500 text-white px-6 py-3 rounded-full font-bold hover:bg-green-600 transition-colors shadow-md">
                             <FontAwesomeIcon icon={faWhatsapp}  size={'xl'}/>
                            <span>Contratar via WhatsApp</span>
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
};
