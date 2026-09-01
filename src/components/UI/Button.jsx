import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const Button = React.memo(({ children, variant = 'primary', className, onClick, type = 'button', href, target, ...props }) => {
  
  const baseStyles = "relative inline-flex items-center justify-center px-8 py-3 min-h-[44px] font-kalam text-base sm:text-lg font-bold tracking-wider uppercase transition-all duration-200 w-full sm:w-auto wobbly";
  
  const variants = {
    primary: "bg-[var(--color-accent)] text-black border-[3px] border-black shadow-normal hover:bg-[var(--color-accent-bright)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-hover active:translate-x-[4px] active:translate-y-[4px] active:shadow-none",
    secondary: "bg-transparent text-white border-2 border-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-[var(--color-primary)] hover:translate-x-[2px] hover:translate-y-[2px] shadow-normal hover:shadow-hover active:translate-x-[4px] active:translate-y-[4px] active:shadow-none",
    ghost: "bg-transparent text-white border-2 border-transparent hover:text-white underline decoration-transparent hover:decoration-[var(--color-accent)] underline-offset-4 decoration-[3px] shadow-none wobbly-none rounded-none px-6",
  };

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        className={cn(baseStyles, variants[variant], className)}
        onClick={onClick}
        {...props}
      >
        <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
      </a>
    );
  }

  return (
    <button
      type={type}
      className={cn(baseStyles, variants[variant], className)}
      onClick={onClick}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
    </button>
  );
});

export default Button;
