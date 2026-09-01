import { useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from '../UI/Button';
import { ChevronDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useGSAP(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      // Scroll parallax effect
      gsap.to(textRef.current, {
        y: -100,
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'start start',
          end: 'center start',
          scrub: true
        }
      });

      gsap.to(imageRef.current, {
        y: 50,
        scale: 1.05,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'start start',
          end: 'bottom top',
          scrub: true
        }
      });
    });

  }, { scope: containerRef });

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-[100dvh] w-full flex flex-col overflow-hidden pt-32 pb-16"
    >

      {/* Grid Background */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-100 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:40px_40px]" />

      {/* Cinematic Dark Gradient & Subtle Noise */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,90,31,0.05)_0%,rgba(5,5,5,1)_70%)]" />
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')]" />
      </div>

      <div className="container-custom relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center my-auto">

        {/* Text Content */}
        <div ref={textRef} className="flex flex-col items-start text-left order-2 lg:order-1 pt-12 md:pt-0 relative will-change-transform">

          <motion.div
            className="absolute -top-12 left-10 hidden md:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <span className="text-[var(--color-accent)] font-kalam text-lg -rotate-6 inline-block">
              // SYSTEM ACTIVE
            </span>
          </motion.div>

          <motion.div
            className="mb-8 border border-[var(--color-accent)] px-3 py-1 bg-black/50"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="text-[var(--color-accent)] font-bangers text-sm sm:text-base tracking-[0.2em] uppercase">
              // Independent Game Studio
            </span>
          </motion.div>

          <motion.h1
            className="text-[clamp(2.5rem,5vw,5.5rem)] font-bangers font-bold text-white leading-[0.85] tracking-tight mb-8 relative flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <span>WE BUILD</span>
            <span className="text-[var(--color-text-secondary)] opacity-80">WORLDS</span>
            <span className="relative inline-block">
              FROM <span className="text-[var(--color-accent)]">CHAOS.</span>
              {/* Wavy underline under CHAOS */}
              <svg className="absolute -bottom-4 md:-bottom-6 right-0 w-[50%] h-4 md:h-8 text-[var(--color-accent)]" preserveAspectRatio="none" viewBox="0 0 200 40" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round">
                <path d="M5 20 Q 30 5, 55 20 T 105 20 T 155 20 T 195 20" />
              </svg>
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-[var(--color-muted-subtle)] mb-12 font-sans tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Games • Systems • Stories
          </motion.p>

          <motion.div
            className="relative mt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Button
              className="bg-[var(--color-accent)] border border-[var(--color-accent)] text-black font-bangers text-lg md:text-xl px-8 py-3 wobbly hover:scale-105 transition-all !shadow-none"
              onClick={() => document.getElementById('games')?.scrollIntoView({ behavior: 'smooth' })}
            >
              EXPLORE OUR GAMES &rarr;
            </Button>

            <div className="absolute -bottom-10 left-6">
              <span className="text-[var(--color-accent)] font-kalam text-base rotate-3 inline-block">
                // START HERE
              </span>
            </div>
          </motion.div>
        </div>

        {/* Image Content */}
        <motion.div
          className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square flex justify-center items-center order-1 lg:order-2"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
        >
          <div ref={imageRef} className="relative w-full h-full will-change-transform">
            {/* Dark premium frame */}
            <div className="absolute inset-0 bg-[var(--color-card)] border border-[var(--color-border)] p-2 md:p-3 transform rotate-1 shadow-featured wobbly-lg">
              <div className="relative w-full h-full overflow-hidden border border-[var(--color-border)] wobbly-md">
                <div className="absolute inset-0 bg-black/20 z-10 hover:bg-transparent transition-colors duration-500" />
                <img
                  src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop"
                  alt="gaming background"
                  loading="eager"
                  decoding="sync"
                  className="w-full h-full object-cover scale-105 aspect-[4/3] md:aspect-square"
                />
              </div>
            </div>

            {/* HUD / Tech Elements (Overlaid around image) */}
            <div className="absolute -left-32 top-1/4 hidden xl:flex flex-col gap-2 font-mono text-[10px] text-[var(--color-muted-subtle)] tracking-widest z-0">
              <p>LAT: 45.9</p>
              <p>LON: 12.3</p>
              <p>ENV: UNSTABLE</p>

              <div className="absolute top-0 -right-40 w-40 h-[1px] bg-[var(--color-border)] border-dashed -z-10 rotate-[20deg] origin-left"></div>
            </div>

            <div className="absolute -right-24 top-1/4 hidden xl:block z-20">
              <span className="text-[var(--color-accent)] font-kalam text-lg -rotate-12 inline-block">
                // WORLD 001
              </span>
            </div>

            <div className="absolute -left-20 bottom-1/4 hidden xl:block z-20">
              <div className="relative">
                <svg width="80" height="80" viewBox="0 0 100 100" fill="none" stroke="var(--color-accent)" strokeWidth="1" className="opacity-30">
                  <circle cx="50" cy="50" r="45" strokeDasharray="4 4" />
                  <circle cx="50" cy="50" r="4" fill="var(--color-accent)" />
                  <line x1="50" y1="0" x2="50" y2="100" opacity="0.5" />
                  <line x1="0" y1="50" x2="100" y2="50" opacity="0.5" />
                </svg>
                <div className="absolute top-1/2 left-[110%] -translate-y-1/2 whitespace-nowrap">
                  <span className="text-[var(--color-accent)] font-kalam text-lg rotate-6 inline-block">
                    // BUILDING...
                  </span>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

      </div>


    </section>
  );
};

export default Hero;
