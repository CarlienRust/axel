import type { ReactNode } from 'react'
import type { BackgroundVariant } from '../../theme/backgroundPreference'

type BackgroundSplashProps = {
  variant: BackgroundVariant
  /** Unique prefix for SVG gradient ids when multiple instances render */
  idPrefix?: string
}

function pid(prefix: string, name: string) {
  return `${prefix}-${name}`
}

function AbstractLandscape({ prefix }: { prefix: string }) {
  return (
    <>
      <defs>
        <linearGradient id={pid(prefix, 'sky')} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#EEF2EF" />
          <stop offset="100%" stopColor="#F6F3EE" />
        </linearGradient>
        <linearGradient id={pid(prefix, 'sun')} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E8DFCF" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#C9A86A" stopOpacity="0.4" />
        </linearGradient>
        <linearGradient id={pid(prefix, 'far')} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#9BB0A4" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#C5D4CB" stopOpacity="0.15" />
        </linearGradient>
        <linearGradient id={pid(prefix, 'mid')} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6F8A7A" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#9BB0A4" stopOpacity="0.2" />
        </linearGradient>
        <linearGradient id={pid(prefix, 'near')} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4F6F62" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#7A9688" stopOpacity="0.25" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${pid(prefix, 'sky')})`} />
      <circle cx="78%" cy="22%" r="8%" fill={`url(#${pid(prefix, 'sun')})`} />
      <path d="M0 72% L18% 52% L32% 58% L48% 44% L62% 50% L78% 38% L100% 46% L100% 100% L0 100% Z" fill={`url(#${pid(prefix, 'far')})`} />
      <path d="M0 82% L14% 64% L28% 70% L44% 56% L58% 62% L72% 50% L100% 58% L100% 100% L0 100% Z" fill={`url(#${pid(prefix, 'mid')})`} />
      <path d="M0 92% L12% 78% L26% 82% L40% 72% L54% 76% L68% 68% L100% 74% L100% 100% L0 100% Z" fill={`url(#${pid(prefix, 'near')})`} />
    </>
  )
}

function PaperCut({ prefix }: { prefix: string }) {
  return (
    <>
      <defs>
        <linearGradient id={pid(prefix, 'l1')} x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#3C554B" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#4F6F62" stopOpacity="0.25" />
        </linearGradient>
        <linearGradient id={pid(prefix, 'l2')} x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#6F8A7A" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#8FA89A" stopOpacity="0.2" />
        </linearGradient>
        <linearGradient id={pid(prefix, 'l3')} x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#B8C9BF" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#E7E3DC" stopOpacity="0.15" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="#F6F3EE" />
      <circle cx="82%" cy="18%" r="7%" fill="#C9A86A" fillOpacity="0.45" />
      <path d="M0 100% L0 78% Q25% 68% 50% 74% T100% 66% L100% 100% Z" fill={`url(#${pid(prefix, 'l1')})`} />
      <path d="M0 100% L0 84% Q30% 74% 55% 80% T100% 72% L100% 100% Z" fill={`url(#${pid(prefix, 'l2')})`} />
      <path d="M0 100% L0 90% Q35% 82% 60% 86% T100% 80% L100% 100% Z" fill={`url(#${pid(prefix, 'l3')})`} />
    </>
  )
}

function Topographic(_props: { prefix: string }) {
  const lines = [12, 20, 28, 36, 44, 52, 60, 68, 76, 84]
  return (
    <>
      <rect width="100%" height="100%" fill="#F6F3EE" />
      {lines.map((y, i) => (
        <ellipse
          key={i}
          cx="50%"
          cy={`${y}%`}
          rx={`${38 + i * 2}%`}
          ry={`${4 + (i % 3)}%`}
          fill="none"
          stroke="#C9A86A"
          strokeOpacity={0.12 + (i % 4) * 0.04}
          strokeWidth="1"
        />
      ))}
    </>
  )
}

function NoiseClarity({ prefix }: { prefix: string }) {
  return (
    <>
      <defs>
        <linearGradient id={pid(prefix, 'fade')} x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#3C554B" stopOpacity="0.35" />
          <stop offset="55%" stopColor="#8FA89A" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#F6F3EE" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="#F6F3EE" />
      <rect width="100%" height="100%" fill={`url(#${pid(prefix, 'fade')})`} />
      {[...Array(14)].map((_, i) => (
        <path
          key={i}
          d={`M0 ${88 - i * 2}% Q${20 + i * 3}% ${82 - i * 4}% ${40 + i * 4}% ${86 - i * 2}% T100% ${78 - i * 3}%`}
          fill="none"
          stroke="#C9A86A"
          strokeOpacity={0.08 + i * 0.015}
          strokeWidth="1.2"
        />
      ))}
    </>
  )
}

function SoundWave(_props: { prefix: string }) {
  const points = Array.from({ length: 80 }, (_, i) => {
    const x = (i / 79) * 100
    const t = i / 79
    const amp = 8 * (1 - t) * (1 - t)
    const y = 50 + Math.sin(i * 0.8) * amp
    return `${x},${y}`
  }).join(' ')
  return (
    <>
      <rect width="100%" height="100%" fill="#F6F3EE" />
      <polyline
        points={points}
        fill="none"
        stroke="#4F6F62"
        strokeOpacity="0.2"
        strokeWidth="2"
        vectorEffect="non-scaling-stroke"
      />
      <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#4F6F62" strokeOpacity="0.08" strokeWidth="1" />
    </>
  )
}

const renderers: Record<BackgroundVariant, (p: { prefix: string }) => ReactNode> = {
  'abstract-landscape': AbstractLandscape,
  'paper-cut': PaperCut,
  topographic: Topographic,
  'noise-clarity': NoiseClarity,
  'sound-wave': SoundWave,
}

export function BackgroundSplash({ variant, idPrefix = 'bg' }: BackgroundSplashProps) {
  const Renderer = renderers[variant]
  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
      style={{ display: 'block', width: '100%', height: '100%' }}
    >
      <Renderer prefix={idPrefix} />
    </svg>
  )
}
