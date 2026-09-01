import React, { lazy, Suspense } from 'react';
import Hero from '../components/Hero/Hero';

// Lazy load below-the-fold components
const About = lazy(() => import('../components/About/About'));
const Services = lazy(() => import('../components/Services/Services'));
const Projects = lazy(() => import('../components/Projects/Projects'));
const Manifesto = lazy(() => import('../components/Manifesto/Manifesto'));
const Careers = lazy(() => import('../components/Careers/Careers'));
const Contact = lazy(() => import('../components/Contact/Contact'));

const Home = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <Suspense fallback={<div className="h-screen w-full bg-[var(--color-primary)]"></div>}>
        <About />
        <Projects />
        <Services />
        <Manifesto />
        <Careers />
        <Contact />
      </Suspense>
    </div>
  );
};

export default Home;
