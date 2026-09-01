import React, { forwardRef } from 'react';
import { cn } from './Button';
import { ChevronDown } from 'lucide-react';

const Select = forwardRef(({ className, label, error, options = [], children, ...props }, ref) => {
  return (
    <div className="flex flex-col w-full gap-1.5">
      {label && (
        <label className="text-sm font-medium text-[var(--color-muted)]">
          {label}
        </label>
      )}
      <div className="relative">
        <select
          ref={ref}
          className={cn(
            "w-full px-4 py-3 bg-[var(--color-cards)] border border-white/10 rounded-lg text-white appearance-none focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)]/50 transition-colors duration-200",
            error && "border-red-500/50 focus:border-red-500 focus:ring-red-500/50",
            className
          )}
          {...props}
        >
          {children || options.map((opt) => (
            <option key={opt.value} value={opt.value} className="bg-[#1a1a1a] text-white py-2">
              {opt.label}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--color-muted)] pointer-events-none" />
      </div>
      {error && <span className="text-xs text-red-400 mt-1">{error}</span>}
    </div>
  );
});

Select.displayName = 'Select';

export default Select;
