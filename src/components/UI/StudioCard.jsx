import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const StudioCard = React.memo(({ children, className, variant = 'base', hoverLift = true, style = {}, ...props }) => {
  // Enforcing the CARD design system specs
  const baseStyles = "relative bg-[var(--color-card)] border border-[var(--color-border)] text-white wobbly-md transition-all duration-300";
  
  const variants = {
    base: hoverLift ? "hover:-translate-y-1 hover:shadow-hard-subtle hover:border-[var(--color-accent)]" : "",
    elevated: "bg-[var(--color-card-elevated)] shadow-hard-subtle",
    ghost: "bg-transparent border-dashed",
  };

  return (
    <div 
      className={cn(baseStyles, variants[variant], className)}
      style={style}
      {...props}
    >
      <div className="relative z-10 h-full w-full flex flex-col">
        {children}
      </div>
    </div>
  );
});

export default StudioCard;
