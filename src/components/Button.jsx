import React from 'react';

export default function Button({
  children,
  variant = 'primary', // 'primary' (orange), 'yellow', 'secondary' (glass/outline), 'white'
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
  // 999px only on buttons (as required: "Radius 0 on tiles (crisp), 999px only on buttons")
  const baseStyles =
    'group inline-flex items-center justify-center gap-2 rounded-full font-["Poppins"] font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-200 cursor-pointer select-none whitespace-nowrap active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--yellow)] disabled:opacity-50 disabled:pointer-events-none';

  let variantStyles = '';
  if (variant === 'primary' || variant === 'orange' || variant === 'red') {
    variantStyles = 'bg-[var(--orange)] text-[var(--ink)] hover:brightness-110';
  } else if (variant === 'yellow' || variant === 'gold') {
    variantStyles = 'bg-[var(--yellow)] text-[var(--ink)] hover:brightness-105';
  } else if (variant === 'white') {
    variantStyles = 'bg-white text-[var(--ink)] hover:bg-[var(--cream)]';
  } else {
    // secondary / outline / glass
    variantStyles = 'bg-white/[0.06] hover:bg-white/[0.12] border border-white/20 text-white';
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
