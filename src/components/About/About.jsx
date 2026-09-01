import { useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const capabilities = ['GAMEPLAY', 'SYSTEMS', 'WORLD BUILDING', 'ART', 'CODE', 'SOUND'];

const flowchart = ['IDEA', 'PROTOTYPE', 'PLAY', 'BREAK', 'REBUILD', 'SHIP'];

const About = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Parallax or fade effects can be added here if desired.
    // For now, keeping it simple as per the design.
    gsap.fromTo('.col-right-anim',
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0, duration: 0.6, stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%'
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section id="about" ref={containerRef} className="py-16 md:py-32 relative overflow-hidden bg-[var(--color-primary)] z-10 border-b border-[var(--color-border)]">

      {/* Very subtle noise grid background */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left Column */}
          <div className="flex flex-col">

            {/* Annotation Header */}
            <motion.div 
              className="flex items-center gap-4 mb-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1, duration: 0.8 }}
            >
              <div className="font-sans font-bold text-lg md:text-xl tracking-widest flex gap-2">
                <span className="text-[var(--color-accent)]">01</span>
                <span className="text-white">THE STUDIO</span>
              </div>
              <div className="h-[1px] bg-[var(--color-border)] flex-grow max-w-[200px]"></div>
            </motion.div>

            {/* Main Heading */}
            <motion.h2 
              className="text-fluid-h1 font-kalam font-bold text-white uppercase tracking-wider mb-10 leading-[1.1]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              SMALL TEAM.<br />
              <span className="relative inline-block mt-2">
                BIG WORLDS.
                {/* Wavy underline */}
                <svg className="absolute -bottom-2 md:-bottom-4 left-0 w-full h-3 md:h-5 text-[var(--color-accent)]" preserveAspectRatio="none" viewBox="0 0 200 40" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round">
                  <path d="M5 20 Q 30 5, 55 20 T 105 20 T 155 20 T 195 20" />
                </svg>
              </span>
            </motion.h2>

            {/* Paragraphs */}
            <motion.div 
              className="space-y-6 text-[var(--color-muted-subtle)] font-sans text-base md:text-lg leading-relaxed font-light mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <p>
                Mekavyuha is an independent game development studio built on the belief that the best games emerge from experimentation, iteration, and a little bit of chaos.
              </p>
              <p>
                We don't build generic treadmills. We build systemic, atmospheric worlds that respect the player's intelligence. Our process is heavily iterative—we prototype quickly, break things often, and let the mechanics dictate the experience.
              </p>
            </motion.div>

            {/* Capabilities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <h3 className="text-[var(--color-accent)] font-kalam text-xl md:text-2xl mb-6 tracking-wide">
                // CORE CAPABILITIES
              </h3>
              <div className="flex flex-wrap gap-4">
                {capabilities.map((cap, idx) => (
                  <div key={idx} className="border border-[#292929] bg-[var(--color-card)] px-4 py-3 font-kalam font-bold tracking-widest text-white text-sm md:text-base uppercase hover:border-[var(--color-accent)] transition-colors cursor-default wobbly-md">
                    [ {cap} ]
                  </div>
                ))}
              </div>
            </motion.div>

          </div>

          {/* Right Column (Flowchart) */}
          <div className="flex flex-col items-center lg:items-end relative mt-16 lg:mt-0 w-full lg:pr-12">


            {/* Content Wrapper for center alignment within right column */}
            <div className="flex flex-col items-center w-full max-w-[280px]">
              {/* Flowchart Title */}
              <h3 className="text-[var(--color-accent)] font-kalam font-bold text-xl md:text-2xl tracking-widest mb-10 text-center uppercase">
                HOW WE BUILD
              </h3>

              {/* Flowchart Items */}
              <div className="flex flex-col items-center w-full relative">
                {flowchart.map((step, idx) => (
                  <div key={idx} className="flex flex-col items-center w-full relative col-right-anim">

                    {/* Box */}
                    <div className="w-full border border-[#292929] bg-[var(--color-card)] py-5 flex justify-center items-center group hover:border-[var(--color-accent)] transition-colors relative z-10 wobbly-md hover:-translate-y-1 shadow-hard-subtle">
                      <span className="text-white font-kalam font-bold text-xl tracking-widest uppercase">{step}</span>
                    </div>

                    {/* Annotation for BREAK */}
                    {step === 'BREAK' && (
                      <div className="absolute top-1/2 -translate-y-1/2 left-[120%] w-[150px] rotate-12 hidden md:block z-20">
                        <span className="text-[var(--color-accent)] font-kalam text-lg leading-tight block">
                          This is where<br />it hurts
                        </span>
                      </div>
                    )}

                    {/* Arrow to next step (except last) */}
                    {idx < flowchart.length - 1 && (
                      <div className="py-2 flex flex-col items-center gap-0 relative z-0">
                        <div className="w-[1px] h-4 border-l border-dashed border-[var(--color-accent)] opacity-50"></div>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 5v14M19 12l-7 7-7-7" />
                        </svg>
                      </div>
                    )}

                  </div>
                ))}

                {/* V1.0 Annotation */}
                <div className="absolute -bottom-8 -left-32 hidden lg:block col-right-anim">
                  <span className="text-[var(--color-accent)] font-kalam text-lg tracking-widest">
                    // V1.0
                  </span>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
