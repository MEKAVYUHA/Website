import React, { forwardRef } from 'react';
import { cn } from './Button';

const Input = forwardRef(({ className, label, error, ...props }, ref) => {
  return (
    <div className="flex flex-col w-full gap-1.5">
      {label && (
        <label className="text-sm font-medium text-[var(--color-muted)]">
          {label}
        </label>
      )}
      <input
        ref={ref}
        className={cn(
          "w-full px-4 py-3 bg-[var(--color-cards)] border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)]/50 transition-colors duration-200",
          error && "border-red-500/50 focus:border-red-500 focus:ring-red-500/50",
          className
        )}
        {...props}
      />
      {error && <span className="text-xs text-red-400 mt-1">{error}</span>}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
