import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import StudioCard from '../UI/StudioCard';
import SectionTitle from '../UI/SectionTitle';
import { Gamepad2, Monitor, Smartphone, Cpu, Palette, Users, Globe, Code } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const services = [
  { icon: Gamepad2, title: 'Indie Game Development', desc: 'We can help build your game from early concept to playable prototype.' },
  { icon: Cpu, title: 'Unity & Unreal', desc: 'We utilize modern industry-leading engines for our original IPs.' },
  { icon: Palette, title: 'Environment Design', desc: 'Crafting immersive spaces, atmospheric lighting, and detailed worlds.' },
  { icon: Users, title: 'Multiplayer Prototyping', desc: 'Experimenting with and building shared online experiences.' },
  { icon: Monitor, title: 'Gameplay Programming', desc: 'Building polished, responsive, and satisfying core mechanics.' },
  { icon: Smartphone, title: 'Optimization', desc: 'Ensuring stable frame rates and smooth gameplay on target hardware.' },
  { icon: Globe, title: 'Build Deployment', desc: 'Navigating the technical process of delivering builds to test platforms.' },
  { icon: Code, title: 'Game UI/UX', desc: 'Creating intuitive, diegetic interfaces that enhance player engagement.' }
];

const Services = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Fade in the whole marquee container
    gsap.fromTo(containerRef.current, 
      { opacity: 0, y: 50 },
      {
        opacity: 1, y: 0, duration: 1, ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        }
      }
    );
  }, { scope: containerRef });

  // Duplicate services to ensure seamless loop
  const marqueeItems = [...services, ...services];

  return (
    <section id="services" className="py-16 md:py-32 relative bg-[var(--color-primary)] border-b border-[var(--color-border)]">
      
      <div className="container-custom mb-16 relative z-10">
        <SectionTitle 
          title="Our Capabilities" 
          subtitle="We are open to collaboration, freelance development, and contract work."
          alignment="center"
          annotation="03. WHAT WE DO"
        />
      </div>

      <div ref={containerRef} className="w-full overflow-hidden relative pb-8 pt-4">
        {/* Gradient fades on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-48 bg-gradient-to-r from-[var(--color-primary)] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-48 bg-gradient-to-l from-[var(--color-primary)] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee hover:[animation-play-state:paused] flex gap-6 md:gap-8 px-4">
          {marqueeItems.map((service, idx) => {
            return (
              <StudioCard 
                key={idx} 
                variant="base"
                className="w-72 sm:w-80 md:w-96 shrink-0 flex flex-col items-start gap-4 p-8 group transition-all duration-500 border border-[var(--color-border)]"
              >
                {/* Icon Container */}
                <div className="relative mb-4">

                  
                  <div className="relative text-white group-hover:text-[var(--color-accent)] transition-colors duration-300">
                    <service.icon size={36} strokeWidth={2.5} />
                  </div>
                </div>

                <h3 className="text-2xl font-kalam font-bold tracking-wider text-white uppercase group-hover:text-[var(--color-accent)] transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-[var(--color-muted)] text-base font-sans leading-relaxed">
                  {service.desc}
                </p>
                

              </StudioCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
