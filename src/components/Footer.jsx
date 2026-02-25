import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-luxury-dark-card border-t border-white/5 pt-24 pb-12 z-20 relative">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-3xl font-serif text-white mb-6 uppercase tracking-widest">El Refugio</h3>
                        <p className="text-gray-400 font-sans font-light max-w-sm mb-8 leading-relaxed">
                            Elevating traditional Mexican cuisine to an art form. An unforgettable dining experience in the heart of the city.
                        </p>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-luxury-gold uppercase tracking-[0.2em] text-xs font-sans mb-6">Location & Hours</h4>
                        <ul className="space-y-4 text-gray-400 font-sans font-light text-sm">
                            <li>123 Culinary Ave</li>
                            <li>Gastronomy District, NY 10012</li>
                            <li className="pt-4">Mon - Thu: 5pm - 10pm</li>
                            <li>Fri - Sat: 5pm - 11pm</li>
                            <li>Sunday: Reserved</li>
                        </ul>
                    </div>

                    {/* Reservations */}
                    <div>
                        <h4 className="text-luxury-gold uppercase tracking-[0.2em] text-xs font-sans mb-6">Reservations</h4>
                        <ul className="space-y-4 text-gray-400 font-sans font-light text-sm">
                            <li>+1 (555) 123-4567</li>
                            <li>reservations@elrefugio.com</li>
                            <li className="pt-4">
                                <a href="#" className="underline decoration-luxury-gold underline-offset-4 hover:text-white transition-colors duration-300">
                                    Book via OpenTable
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-8 mt-8">
                    <p className="text-gray-500 font-sans text-xs mb-4 md:mb-0">
                        &copy; {new Date().getFullYear()} El Refugio. All rights reserved.
                    </p>
                    <div className="flex space-x-6">
                        <a href="#" className="text-gray-500 hover:text-luxury-gold transition-colors"><span className="sr-only">Instagram</span> INSTAGRAM</a>
                        <a href="#" className="text-gray-500 hover:text-luxury-gold transition-colors"><span className="sr-only">Facebook</span> FACEBOOK</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
