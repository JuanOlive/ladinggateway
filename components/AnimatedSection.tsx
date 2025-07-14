
import React, { useRef, useState, useEffect } from 'react';

interface AnimatedSectionProps {
    children: React.ReactNode;
    className?: string;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, className = '' }) => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.1,
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <div
            ref={sectionRef}
            className={`${className} transition-opacity duration-1000 ease-in ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-5'}`}
        >
            {children}
        </div>
    );
};
