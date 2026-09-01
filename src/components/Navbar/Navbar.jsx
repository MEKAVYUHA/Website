import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '../UI/Button';
import Button from '../UI/Button';

const navLinks = [
  { name: 'Home', path: '/#home', type: 'anchor' },
  { name: 'About', path: '/#about', type: 'anchor' },
  { name: 'Games', path: '/#games', type: 'anchor' },
  { name: 'Services', path: '/#services', type: 'anchor' },
  { name: 'Team', path: '/#careers', type: 'anchor' }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);

          // Scroll Spy logic
          const sections = navLinks.filter(l => l.type === 'anchor').map(link => link.path.substring(2));
          let current = '';
          
          for (const section of sections) {
            const element = document.getElementById(section);
            if (element) {
              const rect = element.getBoundingClientRect();
              if (rect.top <= window.innerHeight * 0.4 && rect.bottom >= window.innerHeight * 0.4) {
                current = `/#${section}`;
                break;
              }
            }
          }
          if (current !== activeSection) {
            setActiveSection(current);
            // Update URL hash without jumping
            if (current) {
              window.history.replaceState(null, '', current);
            } else {
              window.history.replaceState(null, '', window.location.pathname);
            }
          }
          
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled ? "py-4 bg-[var(--color-primary)] border-b border-[var(--color-border)]" : "py-6 bg-transparent"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-[1px] bg-[var(--color-accent)] origin-left z-50 shadow-[0_0_10px_rgba(255,90,31,0.5)]"
          style={{ scaleX }}
        />

        <div className="container-custom flex justify-between items-center">
          <Link to="/" className="text-3xl font-kalam font-bold text-white flex items-center gap-2 z-50 relative hover:-rotate-2 transition-transform duration-300">
            <span className="text-[var(--color-accent)]">M</span>EKAVYUHA
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link, idx) => (
              link.type === 'anchor' ? (
                <a 
                  key={idx} 
                  href={link.path}
                  className={cn(
                    "text-sm font-sans font-bold uppercase tracking-[0.2em] transition-all duration-300 relative group",
                    activeSection === link.path 
                      ? "text-[var(--color-accent)]" 
                      : "text-[var(--color-muted)] hover:text-white"
                  )}
                >
                  {link.name}
                  <span className={cn(
                    "absolute -bottom-2 left-0 w-full h-[2px] bg-[var(--color-accent)] transition-transform origin-left duration-300",
                    activeSection === link.path ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  )}></span>
                </a>
              ) : (
                <Link 
                  key={idx} 
                  to={link.path}
                  className="text-sm font-sans font-bold uppercase tracking-[0.2em] transition-all duration-300 relative group text-[var(--color-muted)] hover:text-white"
                >
                  {link.name}
                  <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-[var(--color-accent)] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                </Link>
              )
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <Button variant="secondary" href="/#contact" className="!px-6 !py-2 !min-h-[40px] !text-sm">
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-white z-50 relative p-3 -mr-3 flex items-center justify-center min-h-[48px] min-w-[48px] hover:text-[var(--color-accent)] transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Fullscreen Menu */}
      <motion.div
        className="fixed inset-0 bg-[var(--color-primary)] z-40 flex flex-col pt-32 px-6 lg:hidden overflow-y-auto overscroll-contain"
        initial={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
        animate={{ 
          opacity: isMobileMenuOpen ? 1 : 0, 
          clipPath: isMobileMenuOpen ? "circle(150% at 100% 0)" : "circle(0% at 100% 0)" 
        }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{ pointerEvents: isMobileMenuOpen ? 'auto' : 'none' }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] [background-size:40px_40px] pointer-events-none" />

        <div className="flex flex-col gap-6 items-center text-center pb-24 relative z-10">
          {navLinks.map((link, idx) => (
            link.type === 'anchor' ? (
              <motion.a
                key={idx}
                href={link.path}
                className="text-3xl sm:text-4xl font-kalam font-bold tracking-wider text-white hover:text-[var(--color-accent)] transition-colors min-h-[48px] flex items-center justify-center"
                onClick={() => setIsMobileMenuOpen(false)}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: isMobileMenuOpen ? 0 : 20, opacity: isMobileMenuOpen ? 1 : 0 }}
                transition={{ delay: 0.1 + idx * 0.05 }}
              >
                {link.name}
              </motion.a>
            ) : (
              <motion.div
                key={idx}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: isMobileMenuOpen ? 0 : 20, opacity: isMobileMenuOpen ? 1 : 0 }}
                transition={{ delay: 0.1 + idx * 0.05 }}
              >
                <Link
                  to={link.path}
                  className="text-3xl sm:text-4xl font-kalam font-bold tracking-wider text-white hover:text-[var(--color-accent)] transition-colors min-h-[48px] flex items-center justify-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </motion.div>
            )
          ))}

          <Button
            variant="primary"
            href="/#contact"
            className="mt-8"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact Us
          </Button>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
