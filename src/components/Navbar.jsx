import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-luxury-dark/95 backdrop-blur-md py-4 shadow-xl' : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
                {/* Logo */}
                <div className="font-serif text-2xl lg:text-3xl text-white uppercase tracking-widest cursor-pointer">
                    El Refugio
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center space-x-10">
                    <a href="#menu" className="font-sans text-sm uppercase tracking-widest text-gray-300 hover:text-luxury-gold transition-colors duration-300">Menu</a>
                    <a href="#experience" className="font-sans text-sm uppercase tracking-widest text-gray-300 hover:text-luxury-gold transition-colors duration-300">Experience</a>
                    <a href="#private-dining" className="font-sans text-sm uppercase tracking-widest text-gray-300 hover:text-luxury-gold transition-colors duration-300">Private Dining</a>
                    <button className="px-6 py-2 border border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-dark transition-all duration-300 uppercase tracking-widest text-sm font-sans cursor-pointer">
                        Reserve
                    </button>
                </div>

                {/* Mobile menu button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-white hover:text-luxury-gold transition-colors"
                    >
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-luxury-dark border-t border-white/10 p-6 flex flex-col space-y-6 shadow-2xl">
                    <a href="#menu" className="font-sans text-lg uppercase tracking-widest text-center text-gray-300 hover:text-luxury-gold">Menu</a>
                    <a href="#experience" className="font-sans text-lg uppercase tracking-widest text-center text-gray-300 hover:text-luxury-gold">Experience</a>
                    <a href="#private-dining" className="font-sans text-lg uppercase tracking-widest text-center text-gray-300 hover:text-luxury-gold">Private Dining</a>
                    <button className="w-full py-4 border border-luxury-gold text-luxury-gold uppercase tracking-widest text-base font-sans">
                        Reserve a Table
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
