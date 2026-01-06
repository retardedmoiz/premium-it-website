export function Logo({ className = "" }) {
  return (
    <svg viewBox="0 0 120 120" className={`w-full h-full ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Outer circle ring */}
      <circle cx="60" cy="60" r="55" stroke="currentColor" strokeWidth="2" opacity="0.3" />

      {/* Main geometric shape - Modern G */}
      <path
        d="M 85 35 Q 95 45 95 60 Q 95 80 75 85 L 75 65 L 60 65 Q 50 65 50 55 Q 50 45 60 45 L 85 45"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Inner accent line */}
      <path
        d="M 35 60 Q 35 40 55 35 Q 65 33 75 35"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.6"
        fill="none"
      />

      {/* Bottom accent */}
      <path
        d="M 40 85 Q 50 90 65 88"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.6"
        fill="none"
      />

      {/* Animated pulse effect */}
      <circle
        cx="60"
        cy="60"
        r="55"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
        opacity="0.2"
        className="animate-pulse"
      />
    </svg>
  )
}
