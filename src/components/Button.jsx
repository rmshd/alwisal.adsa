import React from 'react';

export default function Button({
  children,
  variant = 'primary', // 'primary' (slate-900), 'accent' (amber), 'secondary' (clean border), 'white'
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
    'group inline-flex items-center justify-center gap-2 rounded-full font-["Poppins"] font-semibold text-xs sm:text-sm tracking-wide transition-all duration-200 cursor-pointer select-none whitespace-nowrap active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';

  let variantStyles = '';
  if (variant === 'primary' || variant === 'dark') {
    variantStyles = 'bg-slate-900 text-white hover:bg-slate-800 shadow-sm hover:shadow';
  } else if (variant === 'accent' || variant === 'orange' || variant === 'amber') {
    variantStyles = 'bg-amber-600 text-white hover:bg-amber-700 shadow-sm hover:shadow';
  } else if (variant === 'white') {
    variantStyles = 'bg-white text-slate-900 hover:bg-slate-50 border border-slate-200 shadow-sm';
  } else {
    // secondary / outline
    variantStyles = 'bg-transparent hover:bg-slate-100/80 border border-slate-300 text-slate-800';
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
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
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
