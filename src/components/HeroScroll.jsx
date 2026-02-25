import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HeroScroll = () => {
    const containerRef = useRef(null);
    const canvasRef = useRef(null);
    const heroTextRef = useRef(null);
    const text1Ref = useRef(null);
    const text2Ref = useRef(null);
    const text3Ref = useRef(null);
    const [images, setImages] = useState([]);
    const [loadedCount, setLoadedCount] = useState(0);
    const frameCount = 112;

    // Preload images
    useEffect(() => {
        const loadedImages = [];
        let loaded = 0;
        for (let i = 1; i <= frameCount; i++) {
            const img = new Image();
            // ezgif-frame-001.png to ezgif-frame-112.png
            const paddedIndex = i.toString().padStart(3, '0');

            img.onload = () => {
                loaded++;
                setLoadedCount(loaded);
            };
            img.onerror = () => {
                loaded++;
                setLoadedCount(loaded);
            };

            img.src = `/sequence/ezgif-frame-${paddedIndex}.png`;
            loadedImages.push(img);
        }
        setImages(loadedImages);
    }, []);

    useEffect(() => {
        if (loadedCount !== frameCount || images.length !== frameCount || !canvasRef.current) return;

        const ctx = canvasRef.current.getContext('2d');

        // Set initial canvas size based on window
        const resizeCanvas = () => {
            canvasRef.current.width = window.innerWidth;
            canvasRef.current.height = window.innerHeight;
            renderFrame(0);
        };

        const renderFrame = (index) => {
            if (!images[index]) return;
            const img = images[index];

            // Using Math.max guarantees the image covers the entire screen (full quality / full screen)
            const hRatio = canvasRef.current.width / img.width;
            const vRatio = canvasRef.current.height / img.height;
            const ratio = Math.max(hRatio, vRatio); // Use Max for COVER!

            const centerShift_x = (canvasRef.current.width - img.width * ratio) / 2;
            // Shift Y slightly down to give room for top text, or just perfectly centered
            const centerShift_y = (canvasRef.current.height - img.height * ratio) / 2;

            ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
            ctx.drawImage(
                img,
                0, 0, img.width, img.height,
                centerShift_x, centerShift_y, img.width * ratio, img.height * ratio
            );
        };

        // Initialize first frame immediately
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Setup GSAP Animation
        let scrollObj = { frame: 0 };

        // We pin the container and scrub through the image sequence over a longer scroll distance
        ScrollTrigger.create({
            trigger: containerRef.current,
            start: 'top top',
            end: '+=800%', // Increased scroll distance for smoother animation
            pin: true,
            scrub: 1, // 1 second smoothing
            animation: gsap.to(scrollObj, {
                frame: frameCount - 1,
                snap: 'frame',
                ease: 'none',
                onUpdate: () => renderFrame(scrollObj.frame),
            }),
        });

        // Setup Text Sequence Animation
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top top',
                end: '+=800%',
                scrub: 1, // Match the scrub value for consistency
            }
        });

        // The timeline represents the entire scroll progress
        tl.to(heroTextRef.current, { opacity: 0, y: -50, duration: 1 })
            .to({}, { duration: 0.5 }) // small pause
            .to(text1Ref.current, { opacity: 1, y: 0, duration: 1 })
            .to(text1Ref.current, { opacity: 0, y: -50, duration: 1 })
            .to({}, { duration: 0.5 }) // small pause
            .to(text2Ref.current, { opacity: 1, y: 0, duration: 1 })
            .to(text2Ref.current, { opacity: 0, y: -50, duration: 1 })
            .to({}, { duration: 0.5 }) // small pause
            .to(text3Ref.current, { opacity: 1, y: 0, duration: 1 });

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, [images, loadedCount]);

    const isLoading = loadedCount < frameCount;
    const progress = Math.round((loadedCount / frameCount) * 100);

    return (
        <section ref={containerRef} className="relative w-full h-screen bg-luxury-dark overflow-hidden">
            {/* Loading Overlay */}
            {isLoading && (
                <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-luxury-dark text-white">
                    <h2 className="text-3xl md:text-5xl font-serif mb-6 text-luxury-gold tracking-widest uppercase drop-shadow-lg text-center px-4">Loading El Refugio</h2>
                    <div className="w-64 md:w-96 h-1 bg-gray-800 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-luxury-gold transition-all duration-300 ease-out"
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>
                    <p className="mt-4 font-sans text-sm text-luxury-gold-light opacity-80 tracking-widest">
                        {progress}%
                    </p>
                </div>
            )}

            {/* Canvas for 3D Sequence rendering */}
            <canvas
                ref={canvasRef}
                className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"
            />

            {/* Subtle overlay for text contrast depending on the image */}
            <div className="absolute inset-0 bg-gradient-to-b from-luxury-dark/60 via-transparent to-luxury-dark/80 z-10 pointer-events-none"></div>

            {/* Hero Main Typography - Fades out early */}
            <div
                ref={heroTextRef}
                className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4"
            >
                <span className="uppercase tracking-[0.3em] text-sm md:text-base text-luxury-gold-light mb-4 font-sans drop-shadow-lg">Est. 1994</span>
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-white mb-6 uppercase tracking-wider drop-shadow-2xl">
                    El Refugio
                </h1>
                <p className="max-w-xl text-lg md:text-2xl text-gray-200 font-sans font-light drop-shadow-lg">
                    A transcendent culinary journey through the heart of Mexico.
                </p>

                {/* Scroll indicator */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
                    <span className="text-xs uppercase tracking-widest mb-2 text-luxury-gold-light">Scroll to Explore</span>
                    <div className="w-px h-12 bg-gradient-to-b from-luxury-gold to-transparent"></div>
                </div>
            </div>

            {/* Sequence Texts - Hidden by default, animated in by GSAP */}

            <div
                ref={text1Ref}
                className="absolute z-20 inset-0 flex flex-col items-start justify-center px-12 md:px-32 opacity-0 translate-y-12 pointer-events-none"
            >
                <h2 className="text-4xl md:text-6xl font-serif text-luxury-gold-light mb-4 max-w-lg leading-tight drop-shadow-xl">
                    Fire & Spice
                </h2>
                <p className="text-xl md:text-2xl font-sans font-light text-white max-w-md drop-shadow-lg">
                    We honor the ancient techniques of slow roasting and mezcal infusion.
                </p>
            </div>

            <div
                ref={text2Ref}
                className="absolute z-20 inset-0 flex flex-col items-end text-right justify-center px-12 md:px-32 opacity-0 translate-y-12 pointer-events-none"
            >
                <h2 className="text-4xl md:text-6xl font-serif text-white mb-4 max-w-lg leading-tight drop-shadow-xl">
                    Locally Sourced
                </h2>
                <p className="text-xl md:text-2xl font-sans font-light text-luxury-gold-light max-w-md drop-shadow-lg">
                    Partnering with local farmers to bring the freshest ingredients to your plate.
                </p>
            </div>

            <div
                ref={text3Ref}
                className="absolute z-20 inset-0 flex flex-col items-center justify-end pb-32 px-4 text-center opacity-0 translate-y-12 pointer-events-none"
            >
                <h2 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight drop-shadow-xl">
                    Savor the <span className="text-luxury-gold">Moment</span>
                </h2>
                <p className="text-lg md:text-xl font-sans font-light text-gray-300 max-w-2xl drop-shadow-lg">
                    Discover why El Refugio is the city's premier destination for fine Mexican dining.
                </p>
            </div>

        </section>
    );
};

export default HeroScroll;
