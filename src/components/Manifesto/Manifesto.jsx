import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Manifesto = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    // Parallax background text
    gsap.to('.manifesto-bg-text', {
      x: '-10%',
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });

    // Reveal text
    gsap.fromTo(textRef.current.children, 
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1, 
        stagger: 0.2, 
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%'
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative py-24 md:py-40 bg-[var(--color-primary)] overflow-hidden border-b border-[var(--color-border)] flex items-center min-h-[70vh]">
      
      {/* Huge Background Text */}
      <div className="absolute top-1/2 -translate-y-1/2 w-[150%] left-0 pointer-events-none select-none z-0 manifesto-bg-text">
        <h2 className="text-fluid-massive font-kalam font-bold text-white/[0.02] whitespace-nowrap leading-none tracking-tighter">
          NOT ANOTHER GAME
        </h2>
      </div>

      <div className="container-custom relative z-10 flex flex-col md:flex-row items-start w-full">
        
        {/* Left Side: Vertical text */}
        <div className="hidden md:flex flex-col items-center mr-16 shrink-0 h-full justify-center">
          <div className="w-[1px] h-24 bg-[var(--color-border)] mb-6"></div>
          <p className="[writing-mode:vertical-rl] rotate-180 text-[var(--color-accent)] font-sans font-bold tracking-[0.3em] uppercase text-sm">
            // Manifesto
          </p>
          <div className="w-[1px] h-24 bg-[var(--color-border)] mt-6"></div>
        </div>

        {/* Main Text Content */}
        <div ref={textRef} className="flex flex-col w-full relative">
          
          {/* Top annotation */}
          <div className="flex items-center gap-2 mb-2 ml-4">
            <span className="text-[var(--color-accent)] font-kalam text-xl">*</span>
            <span className="text-[var(--color-accent)] font-kalam text-lg italic">Read carefully</span>
          </div>

          {/* First Line */}
          <h2 className="text-fluid-h1 font-kalam font-bold text-[var(--color-muted)] leading-[0.9] tracking-normal mb-4 sm:mb-2 uppercase">
            We don't want to
            <br className="md:hidden" />
            <span className="md:ml-4">
              make <span className="text-white relative inline-block">
                MORE
                {/* Strikethrough line */}
                <div className="absolute top-1/2 left-[-5%] w-[110%] h-[4px] md:h-[8px] bg-[var(--color-accent)] -translate-y-1/2 transform -rotate-2"></div>
              </span> games.
            </span>
          </h2>

          {/* Second Line */}
          <h2 className="text-fluid-h1 font-kalam font-bold text-white leading-[0.9] tracking-normal uppercase">
            We want to make
            <br className="md:hidden" />
            <span className="md:ml-4 block mt-2">
              games you <span className="text-[var(--color-accent)] relative inline-block">
                REMEMBER.
                {/* Wavy underline */}
                <svg className="absolute -bottom-2 md:-bottom-6 left-0 w-full h-4 md:h-8 text-[var(--color-accent)]" preserveAspectRatio="none" viewBox="0 0 200 40" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round">
                  <path d="M5 20 Q 30 5, 55 20 T 105 20 T 155 20 T 195 20" />
                </svg>
              </span>
            </span>
          </h2>


          
        </div>
      </div>
    </section>
  );
};

export default Manifesto;
