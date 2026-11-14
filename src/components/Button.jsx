import React from 'react';

export default function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
  showArrow = true,
  target,
  rel,
  ...props
}) {
  const baseStyles =
    'group relative inline-flex items-center justify-center gap-2.5 h-[50px] px-[26px] rounded-full font-heading font-bold text-base transition-all duration-300 cursor-pointer select-none whitespace-nowrap active:scale-[0.98] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--yellow)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)] disabled:opacity-50 disabled:pointer-events-none disabled:transform-none';

  let variantStyles = '';
  if (variant === 'primary' || variant === 'gold') {
    variantStyles =
      'bg-gradient-to-r from-[#FFC93C] via-[#FFE27D] to-[#F59E0B] text-[#0B0D12] font-extrabold shadow-[0_0_24px_rgba(255,201,60,0.25)] hover:shadow-[0_0_36px_rgba(255,201,60,0.45)] border border-[#FFE27D]/40';
  } else if (variant === 'blue') {
    variantStyles =
      'bg-gradient-to-r from-[#3B82F6] to-[#2563EB] text-white shadow-[0_0_24px_rgba(59,130,246,0.3)] hover:shadow-[0_0_36px_rgba(59,130,246,0.5)] border border-blue-400/30';
  } else {
    // secondary / glass
    variantStyles =
      'bg-white/[0.04] hover:bg-white/[0.09] border border-white/15 hover:border-white/30 text-white backdrop-blur-md shadow-sm';
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
