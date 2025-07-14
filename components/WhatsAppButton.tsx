
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

interface WhatsAppButtonProps {
    whatsAppNumber: string;
    message: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ whatsAppNumber, message }) => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsAppNumber}?text=${encodedMessage}`;
    

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300"
            aria-label="Fale conosco pelo WhatsApp"
        >
            <FontAwesomeIcon icon={faWhatsapp}  size={'2x'}/>
        </a>
    );
};
