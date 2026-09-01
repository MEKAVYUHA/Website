import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionTitle from '../UI/SectionTitle';
import StudioCard from '../UI/StudioCard';
import Button from '../UI/Button';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: 'HOUSE OF HORROR',
    subtitle: 'CO-OP HORROR',
    desc: 'Face your deepest fears in our upcoming co-op survival horror experience.',
    buttonText: 'Read Devlog',
    image: '/images/house_of_horror.png',
  },
  {
    id: 2,
    title: 'IMAGINATION BEYOND REALITY',
    subtitle: 'SCI-FI FANTASY',
    desc: 'Explore a breathtaking new universe that pushes the boundaries of imagination.',
    buttonText: 'Explore Concept',
    image: '/images/imagination_beyond_reality.png',
  }
];

const Projects = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      ScrollTrigger.batch('.project-card', {
        interval: 0.1,
        batchMax: 4,
        onEnter: (batch) => gsap.fromTo(batch, 
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, stagger: 0.15, duration: 0.6, ease: 'power2.out', overwrite: true }
        ),
        start: 'top 85%'
      });
    });

    mm.add("(max-width: 767px)", () => {
      ScrollTrigger.batch('.project-card', {
        interval: 0.1,
        batchMax: 2,
        onEnter: (batch) => gsap.fromTo(batch, 
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, stagger: 0.1, duration: 0.4, ease: 'power1.out', overwrite: true }
        ),
        start: 'top 90%'
      });
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="games" className="relative w-full py-16 md:py-32 z-20 bg-[var(--color-secondary)] border-y border-[var(--color-border)]">
      
      {/* Subtle vertical accent line */}
      <div className="absolute top-0 bottom-0 left-8 md:left-16 w-[1px] bg-[var(--color-border)] opacity-50 z-0"></div>
      
      <div className="container-custom mb-16 relative z-10">
        <SectionTitle 
          title="Current Projects" 
          subtitle="Cinematic universes built for players who demand more."
          annotation="02. OUR WORLDS"
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, idx) => (
            <StudioCard
              key={project.id}
              variant="base"
              className="project-card flex flex-col w-full h-full group cursor-pointer opacity-0"
            >
              <div className="relative w-full aspect-[16/9] overflow-hidden border-b border-[var(--color-border)] wobbly-md">
                <div className="absolute inset-0 bg-black/40 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute top-4 left-4 z-20 bg-[var(--color-primary)] border border-[var(--color-accent)] px-3 py-1">
                  <span className="text-[var(--color-accent)] font-sans text-xs font-bold tracking-widest uppercase">
                    {project.subtitle}
                  </span>
                </div>
              </div>

              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-fluid-h3 font-kalam font-bold text-white uppercase leading-none">
                    {project.title}
                  </h3>
                  <span className="text-[var(--color-muted)] font-kalam text-xl">0{idx + 1}</span>
                </div>

                <p className="text-[var(--color-muted)] text-fluid-body font-sans mb-8 flex-grow">
                  {project.desc}
                </p>

                <div className="pt-6 border-t border-[var(--color-border)]">
                  <Button variant="ghost" className="!px-0 w-full justify-start !text-[var(--color-accent)]">
                    {project.buttonText}
                  </Button>
                </div>
              </div>
            </StudioCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
