import React from 'react';

/**
 * BlockNumeral: Stencil-style numerals built from geometric rectangles (orange #F28A2E)
 * with thin teal (#1F7F92) line-pattern fills inside cutouts and gaps.
 * Supports numbers 01 to 07, plus stat numbers like 30, 200+.
 */
export default function BlockNumeral({
  n = '01',
  className = '',
  color = '#F28A2E',
  tealLine = '#1F7F92',
  navyBg = '#0B1520',
}) {
  const patternId = `teal-lines-${String(n).replace(/[^a-zA-Z0-9]/g, '')}`;

  return (
    <div className={`inline-block select-none ${className}`}>
      <svg
        viewBox="0 0 120 120"
        className="w-full h-full max-h-[140px] aspect-square"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label={`Numeral ${n}`}
      >
        <defs>
          {/* Thin Teal Line Pattern (45 degree texture) */}
          <pattern
            id={patternId}
            width="8"
            height="8"
            patternTransform="rotate(45 0 0)"
            patternUnits="userSpaceOnUse"
          >
            <line x1="0" y1="0" x2="0" y2="8" stroke={tealLine} strokeWidth="1.5" />
          </pattern>
        </defs>

        {/* Navy base fill for cutouts */}
        <rect width="120" height="120" fill={navyBg} />
        {/* Teal line texture throughout background / gaps */}
        <rect width="120" height="120" fill={`url(#${patternId})`} opacity="0.45" />

        {/* Render stencil geometric blocks according to n */}
        <g fill={color}>
          {renderNumeralPaths(String(n))}
        </g>
      </svg>
    </div>
  );
}

function renderNumeralPaths(numStr) {
  const s = numStr.padStart(2, '0');

  // Stencil renderer for 2 digits: digit 1 at x=8, digit 2 at x=64
  return (
    <>
      <g transform="translate(8, 12)">{renderSingleDigit(s[0])}</g>
      <g transform="translate(64, 12)">{renderSingleDigit(s[1])}</g>
      {numStr.includes('+') && (
        <path d="M106 38H114V46H106V54H98V46H90V38H98V30H106V38Z" fill="#F28A2E" />
      )}
    </>
  );
}

function renderSingleDigit(char) {
  // Digit bounding box ~48w x 96h
  switch (char) {
    case '0':
      return (
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0H48V96H0V0ZM14 16H34V80H14V16Z"
        />
      );
    case '1':
      return <polygon points="12,18 28,6 28,96 12,96" />;
    case '2':
      return (
        <path d="M0 0H48V42H16V76H48V96H0V54H32V20H0V0Z" />
      );
    case '3':
      return (
        <path d="M0 0H48V96H0V76H32V56H12V40H32V20H0V0Z" />
      );
    case '4':
      return (
        <path d="M0 0H16V42H32V0H48V96H32V60H0V0Z" />
      );
    case '5':
      return (
        <path d="M0 0H48V20H16V42H48V96H0V76H32V60H0V0Z" />
      );
    case '6':
      return (
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0H48V20H16V96H0V0ZM0 46H48V96H0V46ZM16 62H32V80H16V62Z"
        />
      );
    case '7':
      return (
        <polygon points="0,0 48,0 48,22 24,96 8,96 28,22 0,22" />
      );
    default:
      return <rect x="0" y="0" width="48" height="96" />;
  }
}
