import React from 'react';

export default function Button({
  children,
  variant = 'primary', // 'primary' (vivid orange), 'yellow', 'dark', 'secondary' (clean outline)
  href,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
  showArrow = false,
  target,
  rel,
  ...props
}) {
  const baseStyles =
    'group inline-flex items-center justify-center gap-2 rounded-full font-["Poppins"] font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-200 cursor-pointer select-none whitespace-nowrap active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--yellow)] disabled:opacity-50 disabled:pointer-events-none shadow-sm hover:shadow-md';

  let variantStyles = '';
  if (variant === 'primary' || variant === 'orange') {
    variantStyles = 'bg-[var(--orange)] text-white hover:bg-[#e04810]';
  } else if (variant === 'yellow' || variant === 'gold') {
    variantStyles = 'bg-[var(--yellow)] text-slate-900 hover:brightness-105';
  } else if (variant === 'dark' || variant === 'ink') {
    variantStyles = 'bg-[var(--ink)] text-white hover:bg-slate-800';
  } else if (variant === 'white') {
    variantStyles = 'bg-white text-[var(--ink)] hover:bg-[var(--canvas-subtle)] border border-slate-200';
  } else {
    // secondary / outline
    variantStyles = 'bg-transparent hover:bg-slate-900/5 border-2 border-[var(--ink)] text-[var(--ink)]';
  }

  const combinedClasses = `${baseStyles} ${variantStyles} ${className}`.trim();

  const arrowIcon = showArrow && (
    <svg
      className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 shrink-0"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M3 8H13M13 8L8.5 3.5M13 8L8.5 12.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
      />
    </svg>
  );

  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        className={combinedClasses}
        target={target}
        rel={target === '_blank' ? (rel || 'noopener noreferrer') : rel}
        {...props}
      >
        <span>{children}</span>
        {arrowIcon}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
      {...props}
    >
      <span>{children}</span>
      {arrowIcon}
    </button>
  );
}
