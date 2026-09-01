import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import { cn } from './Button';

gsap.registerPlugin(ScrollTrigger);

const SectionTitle = React.memo(({ title, subtitle, className, alignment = 'left', annotation }) => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const annotationRef = useRef(null);

  useEffect(() => {
    if (!titleRef.current) return;

    const splitTitle = new SplitType(titleRef.current, { types: 'chars,words' });
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      }
    });

    tl.fromTo(splitTitle.chars, 
      { y: 20, opacity: 0, scale: 0.9 },
      { y: 0, opacity: 1, scale: 1, stagger: 0.02, duration: 0.5, ease: 'power2.out' }
    );

    if (subtitleRef.current) {
      tl.fromTo(subtitleRef.current,
        { y: 10, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' },
        "-=0.3"
      );
    }
    
    if (annotationRef.current) {
      tl.fromTo(annotationRef.current,
        { opacity: 0, x: -10, rotation: -10 },
        { opacity: 1, x: 0, rotation: -2, duration: 0.4, ease: 'back.out(1.5)' },
        "-=0.2"
      );
    }

    return () => {
      splitTitle.revert();
    };
  }, []);

  const alignments = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  };

  return (
    <div ref={containerRef} className={cn("flex flex-col mb-12 relative", alignments[alignment], className)}>
      {annotation && (
        <span ref={annotationRef} className="text-[var(--color-accent)] font-kalam text-xl md:text-2xl font-bold mb-2 inline-block">
          {annotation}
        </span>
      )}
      <h2 
        ref={titleRef} 
        className="text-4xl sm:text-5xl md:text-6xl font-kalam font-bold text-white uppercase tracking-wider mb-4 leading-none"
      >
        {title}
      </h2>
      {subtitle && (
        <p ref={subtitleRef} className="text-[var(--color-muted)] text-base sm:text-lg md:text-xl font-sans max-w-2xl mt-2 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
});

export default SectionTitle;
