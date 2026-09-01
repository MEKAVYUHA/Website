import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Mail, CheckCircle2, AlertCircle } from 'lucide-react';
import StudioCard from '../UI/StudioCard';
import Button from '../UI/Button';
import SectionTitle from '../UI/SectionTitle';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState(null); // 'submitting', 'success', 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    const formData = new FormData(e.target);
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE");

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      // Avoid exposing raw backend errors directly
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        e.target.reset();

        setTimeout(() => setStatus(null), 5000);
      } else {
        console.error("Submission failed");
        setStatus('error');
        setErrorMessage('Failed to send message. Please verify your information and try again.');
      }
    } catch (error) {
      clearTimeout(timeoutId);
      console.error("Submission error");
      setStatus('error');
      if (error.name === 'AbortError') {
        setErrorMessage('Request timed out. Please check your connection and try again.');
      } else {
        setErrorMessage('An unexpected error occurred. Please try again later.');
      }
    }
  };

  useGSAP(() => {
    gsap.fromTo(formRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: formRef.current,
          start: 'top 80%'
        }
      }
    );
  }, { scope: formRef });

  return (
    <section id="contact" className="py-16 md:py-32 relative bg-[var(--color-primary)] overflow-hidden z-10 border-b border-[var(--color-border)]">

      {/* Background sketch decoration */}
      <svg className="absolute top-0 right-0 w-64 h-64 text-[var(--color-accent)] opacity-5 -z-10 animate-[spin_20s_linear_infinite]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2,8">
        <path d="M10,90 C40,90 40,10 90,10 C40,10 40,90 10,90 Z" />
        <path d="M20,80 C50,80 50,20 80,20 C50,20 50,80 20,80 Z" />
      </svg>

      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

          <div>
            <SectionTitle
              title="Let's Build Something Great Together"
              subtitle="Whether you're looking for a development partner, have a project idea, or simply want to connect, we'd love to hear from you."
              annotation="05. CONTACT"
            />

            <div className="space-y-8 mt-12">
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-14 h-14 shrink-0 border border-[var(--color-border)] bg-[var(--color-card)] flex items-center justify-center text-white group-hover:border-[var(--color-accent)] group-hover:text-[var(--color-accent)] transition-all duration-300">
                  <Mail size={24} strokeWidth={2} />
                </div>
                <div className="min-w-0 overflow-hidden">
                  <p className="text-[var(--color-muted)] font-sans text-xs font-bold uppercase tracking-widest mb-1 group-hover:text-white transition-colors">General Inquiries</p>
                  <p className="font-kalam font-bold text-[clamp(1rem,4vw,1.5rem)] tracking-wider whitespace-nowrap overflow-hidden text-ellipsis text-white group-hover:text-[var(--color-accent)] transition-colors">contact@mekavyuha.store</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-14 h-14 shrink-0 border border-[var(--color-border)] bg-[var(--color-card)] flex items-center justify-center text-white group-hover:border-[var(--color-accent)] group-hover:text-[var(--color-accent)] transition-all duration-300">
                  <MapPin size={24} strokeWidth={2} />
                </div>
                <div className="min-w-0 overflow-hidden">
                  <p className="text-[var(--color-muted)] font-sans text-xs font-bold uppercase tracking-widest mb-1 group-hover:text-white transition-colors">Location</p>
                  <p className="font-kalam font-bold text-[clamp(1rem,4vw,1.5rem)] tracking-wider whitespace-nowrap overflow-hidden text-ellipsis text-white group-hover:text-[var(--color-accent)] transition-colors">REMOTE FIRST</p>
                </div>
              </div>
            </div>

            {/* Hand drawn sketch arrow */}
            <svg className="w-24 h-24 text-[var(--color-accent)] mt-12 hidden lg:block opacity-60" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10,50 Q50,90 90,50" />
              <path d="M70,50 L90,50 L90,70" />
            </svg>
          </div>

          <div ref={formRef}>
            <StudioCard variant="base" className="p-8 md:p-12 border border-[var(--color-border)] wobbly-lg">
              <h3 className="text-3xl md:text-4xl font-kalam font-bold tracking-wider mb-8 text-white uppercase group-hover:text-[var(--color-accent)] transition-colors duration-300">
                Send a Message
              </h3>

              <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="font-sans text-xs font-bold uppercase tracking-widest text-[var(--color-muted)]">Name</label>
                    <input id="name" type="text" name="name" required className="w-full min-h-[48px] bg-[var(--color-card-dark)] border-2 border-[#292929] p-4 focus:outline-none focus:border-[var(--color-accent)] focus:shadow-[0_0_0_2px_rgba(255,90,31,0.15)] transition-all font-sans text-[16px] text-white wobbly-md" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="font-sans text-xs font-bold uppercase tracking-widest text-[var(--color-muted)]">Email</label>
                    <input id="email" type="email" name="email" required className="w-full min-h-[48px] bg-[var(--color-card-dark)] border-2 border-[#292929] p-4 focus:outline-none focus:border-[var(--color-accent)] focus:shadow-[0_0_0_2px_rgba(255,90,31,0.15)] transition-all font-sans text-[16px] text-white wobbly-md" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="font-sans text-xs font-bold uppercase tracking-widest text-[var(--color-muted)]">Subject</label>
                  <input id="subject" type="text" name="subject" required className="w-full min-h-[48px] bg-[var(--color-card-dark)] border-2 border-[#292929] p-4 focus:outline-none focus:border-[var(--color-accent)] focus:shadow-[0_0_0_2px_rgba(255,90,31,0.15)] transition-all font-sans text-[16px] text-white wobbly-md" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="font-sans text-xs font-bold uppercase tracking-widest text-[var(--color-muted)]">Message</label>
                  <textarea id="message" name="message" required rows="5" className="w-full min-h-[120px] bg-[var(--color-card-dark)] border-2 border-[#292929] p-4 focus:outline-none focus:border-[var(--color-accent)] focus:shadow-[0_0_0_2px_rgba(255,90,31,0.15)] transition-all font-sans text-[16px] text-white resize-y wobbly-md"></textarea>
                </div>

                {status === 'success' && (
                  <div className="p-4 bg-transparent border border-[var(--color-accent)] text-[var(--color-accent)] flex items-center gap-3 mt-4 font-sans font-bold uppercase tracking-widest text-xs">
                    <CheckCircle2 size={20} />
                    <p>Message sent successfully</p>
                  </div>
                )}

                {status === 'error' && (
                  <div className="p-4 bg-transparent border border-red-500 text-red-500 flex items-center gap-3 mt-4 font-sans font-bold uppercase tracking-widest text-xs">
                    <AlertCircle size={20} />
                    <p>{errorMessage}</p>
                  </div>
                )}

                <div className="pt-4">
                  <Button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full"
                  >
                    {status === 'submitting' ? 'Sending...' : 'Send Message'}
                  </Button>
                </div>
              </form>
            </StudioCard>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
