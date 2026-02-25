import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const menuItems = [
    {
        name: "Ceviche de Robalo",
        description: "Line-caught sea bass, leche de tigre, charapita pepper, sweet potato puree, crispy corn.",
        price: "$28"
    },
    {
        name: "Wagyu Carne Asada",
        description: "A5 Japanese Wagyu, black garlic mole, charred spring onions, heirloom corn tortillas.",
        price: "$85"
    },
    {
        name: "Enchiladas de Langosta",
        description: "Maine lobster, creamy poblano sauce, aged cotija, micro cilantro.",
        price: "$45"
    },
    {
        name: "Tamal con Caviar",
        description: "Sweet corn tamal, cultured crema, Ossetra caviar, gold leaf.",
        price: "$55"
    }
];

const MenuHighlight = () => {
    const sectionRef = useRef(null);
    const itemsRef = useRef([]);

    useEffect(() => {
        // Reveal animation for menu items
        itemsRef.current.forEach((item, index) => {
            gsap.fromTo(
                item,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: item,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });

        // Subtitle reveal
        gsap.fromTo(
            ".menu-subtitle",
            { opacity: 0, scale: 0.9 },
            {
                opacity: 1,
                scale: 1,
                duration: 1.5,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                }
            }
        );
    }, []);

    return (
        <section
            id="menu"
            ref={sectionRef}
            className="py-32 bg-luxury-dark text-white relative flex flex-col items-center z-20"
        >
            <div className="max-w-4xl mx-auto px-6 w-full">
                {/* Section Header */}
                <div className="text-center mb-24">
                    <span className="menu-subtitle block text-luxury-gold uppercase tracking-[0.3em] text-sm mb-4 font-sans">
                        Culinary Excellence
                    </span>
                    <h2 className="text-4xl md:text-6xl font-serif mb-8 text-white">Signature Dishes</h2>
                    <div className="w-24 h-px bg-luxury-gold/50 mx-auto"></div>
                </div>

                {/* Menu Items */}
                <div className="space-y-16">
                    {menuItems.map((item, index) => (
                        <div
                            key={index}
                            ref={el => itemsRef.current[index] = el}
                            className="group flex flex-col md:flex-row justify-between items-start md:items-center border-b border-white/10 pb-8 hover:border-luxury-gold/50 transition-colors duration-500"
                        >
                            <div className="md:w-3/4 pr-8">
                                <h3 className="text-2xl md:text-3xl font-serif text-white group-hover:text-luxury-gold transition-colors duration-300 mb-3">
                                    {item.name}
                                </h3>
                                <p className="text-gray-400 font-sans font-light leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                            <div className="md:w-1/4 text-left md:text-right mt-4 md:mt-0">
                                <span className="text-xl text-luxury-gold font-sans tracking-wider">
                                    {item.price}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-24">
                    <button className="px-10 py-4 border border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-dark transition-all duration-300 uppercase tracking-[0.2em] text-sm font-sans">
                        View Full Menu
                    </button>
                </div>
            </div>
        </section>
    );
};

export default MenuHighlight;
