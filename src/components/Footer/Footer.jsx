import { Link } from 'react-router-dom';
import { FiInstagram, FiLinkedin, FiYoutube, FiGithub } from 'react-icons/fi';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-[var(--color-primary)] py-8 relative overflow-hidden z-20">
      <div className="container-custom relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="flex flex-col md:flex-row items-center gap-4">
          <Link to="/" className="text-3xl font-kalam font-bold text-white flex items-center gap-2 hover:-rotate-2 transition-transform">
            <span className="text-[var(--color-accent)]">M</span>EKAVYUHA
          </Link>
          <div className="hidden md:block w-[1px] h-6 bg-[var(--color-border)]"></div>
          <p className="text-[var(--color-muted)] font-sans text-xs uppercase tracking-widest hidden md:block mt-1">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4">
          {[
            { Icon: FaXTwitter, url: 'https://x.com/mekavyuha', label: 'Twitter/X' },
            { Icon: FiInstagram, url: 'https://instagram.com/mekavyuha', label: 'Instagram' },
            { Icon: FiLinkedin, url: 'https://linkedin.com/company/mekavyuha', label: 'LinkedIn' },
            { Icon: FiYoutube, url: 'https://youtube.com/@mekavyuha', label: 'YouTube' },
            { Icon: FiGithub, url: 'https://github.com/mekavyuha', label: 'GitHub' }
          ].map(({ Icon, url, label }, idx) => (
            <a
              key={idx}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit our ${label} page`}
              className="w-12 h-12 border border-[var(--color-border)] bg-[var(--color-card)] flex items-center justify-center hover:bg-[var(--color-accent)] hover:border-[var(--color-accent)] text-white hover:text-black transition-all duration-300 wobbly"
            >
              <Icon size={20} strokeWidth={2} />
            </a>
          ))}
        </div>

        <p className="text-[var(--color-muted)] font-sans text-xs uppercase tracking-widest md:hidden">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
