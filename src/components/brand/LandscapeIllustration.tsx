/** Soft watercolor-style landscape — matches docs/axel_ui_mockup.png */
export function LandscapeIllustration({ height = 220 }: { height?: number }) {
  return (
    <svg
      viewBox="0 0 400 220"
      width="100%"
      height={height}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
      style={{ display: 'block' }}
    >
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E8EDE9" />
          <stop offset="100%" stopColor="#F6F3EE" />
        </linearGradient>
        <linearGradient id="sun" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E8DFCF" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#C9A86A" stopOpacity="0.35" />
        </linearGradient>
        <linearGradient id="mountainFar" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#8FA89A" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#B8C9BF" stopOpacity="0.25" />
        </linearGradient>
        <linearGradient id="mountainMid" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6F8A7A" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#9BB0A4" stopOpacity="0.3" />
        </linearGradient>
        <linearGradient id="mountainNear" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4F6F62" stopOpacity="0.65" />
          <stop offset="100%" stopColor="#7A9688" stopOpacity="0.4" />
        </linearGradient>
      </defs>
      <rect width="400" height="220" fill="url(#sky)" />
      <circle cx="200" cy="95" r="52" fill="url(#sun)" />
      <path d="M0 180 L120 110 L200 145 L280 95 L400 130 L400 220 L0 220 Z" fill="url(#mountainFar)" />
      <path d="M0 200 L80 140 L170 165 L260 115 L400 155 L400 220 L0 220 Z" fill="url(#mountainMid)" />
      <path d="M0 220 L60 165 L140 185 L230 150 L320 175 L400 190 L400 220 Z" fill="url(#mountainNear)" />
    </svg>
  )
}

export function LandscapeThumb() {
  return <LandscapeIllustration height={56} />
}
