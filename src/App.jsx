import React from 'react'
import Navbar from './components/Navbar'
import HeroScroll from './components/HeroScroll'
import MenuHighlight from './components/MenuHighlight'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-luxury-dark min-h-screen text-white font-sans selection:bg-luxury-gold selection:text-luxury-dark">
      <Navbar />

      <main>
        {/* 3D Image Sequence Hero */}
        <HeroScroll />

        {/* About / Transition Section */}
        <section id="experience" className="py-32 px-6 lg:px-12 max-w-7xl mx-auto text-center relative z-20 bg-luxury-dark">
          <span className="block text-luxury-gold uppercase tracking-[0.3em] text-sm mb-6 font-sans">
            Our Philosophy
          </span>
          <h2 className="text-3xl md:text-5xl font-serif mb-12 leading-tight max-w-4xl mx-auto text-white">
            Rooted in tradition, <br className="hidden md:block" />
            elevated through modern technique.
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto font-sans font-light leading-relaxed">
            At El Refugio, every dish tells a story of Mexico's rich culinary heritage.
            We source the finest ingredients locally and internationally to create an
            experience that transcends the ordinary dining occasion.
          </p>
        </section>

        {/* Menu Highlights */}
        <MenuHighlight />

        {/* Ambiance/Image Section */}
        <section id="private-dining" className="py-32 px-6 lg:px-12 bg-luxury-dark border-t border-white/5 relative z-20">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2">
              <span className="block text-luxury-gold uppercase tracking-[0.3em] text-sm mb-6">Private Dining</span>
              <h2 className="text-4xl md:text-6xl font-serif mb-8 text-white">An Exclusive Atmosphere</h2>
              <p className="text-gray-400 font-sans font-light mb-8 leading-relaxed">
                Our private dining room offers an intimate setting for your most important gatherings.
                Surrounded by curated art and a dedicated staff, experience El Refugio with uncompromised privacy and bespoke menus.
              </p>
              <button className="px-8 py-3 bg-luxury-gold text-luxury-dark uppercase tracking-widest text-sm font-sans hover:bg-luxury-gold-light transition-colors duration-300">
                Inquire Now
              </button>
            </div>
            <div className="md:w-1/2 w-full aspect-square md:aspect-[4/3] bg-luxury-dark-card border border-white/10 flex items-center justify-center relative overflow-hidden group">
              {/* Fallback pattern since we don't have a specific room image */}
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-luxury-gold/40 via-transparent to-transparent"></div>
              <span className="font-serif text-2xl text-white/50 uppercase tracking-widest group-hover:scale-110 transition-transform duration-700">View Gallery</span>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
