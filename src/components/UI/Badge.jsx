import { cn } from './Button';

const Badge = ({ children, variant = 'primary', className }) => {
  const variants = {
    primary: 'bg-[var(--color-cards)] text-[var(--color-accent)] border border-[var(--color-accent)]/20',
    secondary: 'bg-white/10 text-white border border-white/10',
    success: 'bg-green-500/10 text-green-400 border border-green-500/20',
    danger: 'bg-red-500/10 text-red-400 border border-red-500/20',
    warning: 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20',
  };

  return (
    <span className={cn('px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full', variants[variant], className)}>
      {children}
    </span>
  );
};

export default Badge;
