import React, { useRef, useState } from 'react';

const SpotlightCard = ({ children, className = '' }) => {
    const cardRef = useRef(null);
    const [mousePosition, setMousePosition] = useState({ x: -200, y: -200 });
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseMove = (e) => {
        if (cardRef.current) {
            const rect = cardRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            setMousePosition({ x, y });
        }
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`
        relative overflow-hidden rounded-2xl bg-black border border-gray-800 
        transition-transform duration-300 ease-out 
        ${isHovering ? 'scale-[1.015] border-blue-900 shadow-[0_0_20px_2px_rgba(168,85,247,0.3)]' : ''}
        ${className}
      `}
            style={{ cursor: isHovering ? 'pointer' : 'default' }}
        >
            {/* Spotlight effect */}
            <div
                className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300 ease-out"
                style={{
                    opacity: isHovering ? 1 : 0,
                   background: `radial-gradient(circle 200px at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 0, 255, 0.2), transparent 70%)`,



                }}
            />

            {/* Content */}
            <div className="relative z-20 p-8">
                {children}
            </div>
        </div>
    );
};

export default SpotlightCard;