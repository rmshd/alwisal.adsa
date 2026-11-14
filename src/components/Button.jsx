import React from 'react';

export default function Button({
  children,
  variant = 'red',
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
    'group relative inline-flex items-center justify-center gap-2 h-[50px] px-7 rounded-[14px] font-sans font-bold text-sm sm:text-base transition-all duration-200 cursor-pointer select-none whitespace-nowrap active:scale-[0.98] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#08090C] disabled:opacity-50 disabled:pointer-events-none disabled:transform-none shadow-md';

  let variantStyles = '';
  if (variant === 'red' || variant === 'primary') {
    variantStyles =
      'bg-[#E62E2D] hover:bg-[#D42221] text-white shadow-[0_8px_20px_rgba(230,46,45,0.35)]';
  } else if (variant === 'green' || variant === 'emerald') {
    variantStyles =
      'bg-[#138A4A] hover:bg-[#0F753E] text-white shadow-[0_8px_20px_rgba(19,138,74,0.35)]';
  } else if (variant === 'gold') {
    variantStyles =
      'bg-[#FFBA08] hover:bg-[#E5A707] text-[#0D0E12] font-extrabold shadow-[0_8px_20px_rgba(255,186,8,0.35)]';
  } else {
    // secondary / glass
    variantStyles =
      'bg-white/[0.08] hover:bg-white/[0.14] border border-white/20 hover:border-white/40 text-white backdrop-blur-md';
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
        strokeWidth="2.2"
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
        rel={target === '_blank' ? 'noopener noreferrer' : rel}
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
