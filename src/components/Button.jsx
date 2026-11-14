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
  const isPrimary = variant === 'primary';

  const baseStyles =
    'group relative inline-flex items-center justify-center gap-2.5 h-[52px] px-[28px] rounded-full font-semibold text-base transition-all duration-200 cursor-pointer select-none whitespace-nowrap active:scale-[0.98] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--yellow)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)] disabled:opacity-50 disabled:pointer-events-none disabled:transform-none';

  const variantStyles = isPrimary
    ? 'bg-[var(--blue)] hover:bg-[#3D78FF] text-white shadow-sm'
    : 'bg-transparent border-[1.5px] border-white/70 hover:border-white hover:bg-white/5 text-white';

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
