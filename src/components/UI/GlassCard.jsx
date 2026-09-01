import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const GlassCard = ({ children, className, ...props }) => {
  return (
    <div 
      className={cn(
        "glass-effect rounded-2xl p-8 transition-all duration-300 hover:scale-[1.02] hover:border-white/20",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default GlassCard;
