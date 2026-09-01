import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import Button from '../UI/Button';
import StudioCard from '../UI/StudioCard';
import SectionTitle from '../UI/SectionTitle';

gsap.registerPlugin(ScrollTrigger);

const collaborationAreas = [
  { title: 'Artists & 3D Modelers', desc: 'Environment art, character design, and texturing.' },
  { title: 'Game Designers', desc: 'Level design, systems balance, and core gameplay loops.' },
  { title: 'Programmers', desc: 'Gameplay engineering, shaders, and multiplayer netcode.' },
  { title: 'Audio Engineers', desc: 'Sound design, foley, and dynamic music composition.' }
];

const Careers = () => {
  const listRef = useRef(null);

  useGSAP(() => {
    // List items reveal
    const items = listRef.current.querySelectorAll('.collab-item');
    gsap.fromTo(items,
      { x: -50, opacity: 0 },
      {
        x: 0, opacity: 1, duration: 0.6, stagger: 0.1,
        ease: "back.out(1.2)",
        scrollTrigger: {
          trigger: listRef.current,
          start: 'top 80%'
        }
      }
    );
  }, { scope: listRef });

  return (
    <section id="careers" className="py-16 md:py-32 relative bg-[var(--color-secondary)] z-10 border-b border-[var(--color-border)]">

      {/* Background sketch elements */}
      <svg className="absolute top-20 left-10 w-24 h-24 text-[var(--color-accent)] opacity-10 -z-10 animate-[spin_30s_linear_infinite]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4,4">
        <circle cx="50" cy="50" r="45" />
      </svg>
      <svg className="absolute bottom-40 right-20 w-32 h-32 text-[var(--color-accent)] opacity-10 -z-10" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M10,10 L90,90 M90,10 L10,90" />
      </svg>

      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-16 items-start">

          <div className="w-full lg:w-5/12 sticky top-32 pt-8">
            <SectionTitle
              title="Collaborate?"
              subtitle="We are always open to connecting with passionate creators."
              annotation="04. JOIN US"
            />

            <div className="bg-[var(--color-card)] p-6 md:p-8 border border-[var(--color-border)] relative mb-8 group hover:border-[var(--color-accent)] transition-colors duration-500">
              <svg className="absolute -top-3 -right-3 w-6 h-6 text-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-opacity" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 3l18 18M3 21l18-18" />
              </svg>
              <p className="text-[var(--color-text-secondary)] font-sans text-base leading-relaxed">
                Mekavyuha is an early-stage studio focused on building genuine, high-quality experiences. If you share our passion for game development, we are always open to freelance, contract, or collaborative opportunities.
              </p>
            </div>

            <Button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Get in Touch
            </Button>
          </div>

          <div ref={listRef} className="w-full lg:w-7/12 flex flex-col gap-6 lg:mt-8">
            {collaborationAreas.map((area, idx) => (
              <a
                key={idx}
                href="#contact"
                className="collab-item group block"
              >
                <StudioCard
                  variant="base"
                  className="px-6 py-6 md:px-8 md:py-8 border border-[var(--color-border)] bg-[var(--color-primary)]"
                >
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-8 w-full h-full">
                    <div>
                      <h4 className="text-2xl font-sans font-bold uppercase tracking-wider mb-2 group-hover:text-[var(--color-accent)] transition-colors text-white">
                        {area.title}
                      </h4>
                      <p className="font-sans text-sm md:text-base text-[var(--color-muted)]">
                        {area.desc}
                      </p>
                    </div>

                    <div className="w-12 h-12 flex items-center justify-center group-hover:bg-[var(--color-accent)] text-white group-hover:text-black transition-all duration-300 flex-shrink-0 border border-[var(--color-border)] group-hover:border-[var(--color-accent)] relative overflow-hidden">
                      <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform relative z-10" strokeWidth={2.5} />
                    </div>
                  </div>
                </StudioCard>
              </a>
            ))}
          </div>

        </div>
      </div>

      {/* Philosophy Banner - Dark Studio Snapshot */}
      <div className="w-full mt-24 md:mt-32 relative flex items-center justify-center container-custom">
        <StudioCard variant="base" className="w-full max-w-5xl p-4 pb-16 md:p-6 md:pb-24 border border-[var(--color-border)] relative mx-auto group wobbly-lg">

          <div className="w-full h-[300px] md:h-[400px] border border-[var(--color-border)] overflow-hidden relative">
            <div className="absolute inset-0 bg-black/40 z-10 group-hover:bg-transparent transition-colors duration-700"></div>
            <img
              src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop"
              alt="Studio philosophy"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000 grayscale group-hover:grayscale-0"
            />
            {/* Overlay Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] [background-size:30px_30px] pointer-events-none z-20" />
          </div>

          <h2 className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 w-[90%] text-fluid-h2 font-kalam font-bold text-white text-center drop-shadow-lg z-30">
            Create. <span className="text-[var(--color-accent)]">Iterate.</span> Play.
          </h2>
        </StudioCard>
      </div>
    </section>
  );
};

export default Careers;
