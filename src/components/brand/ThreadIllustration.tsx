import { Box } from '@mui/material'
import { brand } from '../../theme/brand'

/** How far the thread has resolved — 0 is full tangle, 1 is almost straight */
export type ThreadResolveLevel = 'full' | 'mid' | 'near' | 'almost' | 'clear'

const RESOLVE_X: Record<ThreadResolveLevel, number> = {
  full: 72,
  mid: 108,
  near: 148,
  almost: 188,
  clear: 220,
}

const RESOLVE_MIN = 72
const RESOLVE_MAX = 220
const LINE_END = 372

function resolveXFromProgress(progress?: number, resolve?: ThreadResolveLevel): number {
  if (progress !== undefined) {
    const clamped = Math.max(0, Math.min(1, progress))
    return RESOLVE_MIN + clamped * (RESOLVE_MAX - RESOLVE_MIN)
  }
  return RESOLVE_X[resolve ?? 'mid']
}

type ThreadTone = 'light' | 'dark'

type ThreadIllustrationProps = {
  height?: number | string
  resolve?: ThreadResolveLevel
  resolveProgress?: number
  showDot?: boolean
  animated?: boolean
  tone?: ThreadTone
  idPrefix?: string
}

function ThreadSvg({
  resolve = 'mid',
  resolveProgress,
  showDot = true,
  animated = false,
  tone = 'light',
  idPrefix = 'thread',
}: Omit<ThreadIllustrationProps, 'height'>) {
  const resolveX = resolveXFromProgress(resolveProgress, resolve)
  const dotId = `${idPrefix}-dot`
  const dotX = animated ? resolveX + (LINE_END - resolveX) * 0.65 : LINE_END

  const tangleStroke = tone === 'dark' ? 'rgba(255,255,255,0.35)' : brand.textMuted
  const tangleOpacity = tone === 'dark' ? 1 : 0.55
  const resolvedStroke = tone === 'dark' ? brand.success : brand.primary

  return (
    <svg
      viewBox="0 0 400 80"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden
      style={{ display: 'block' }}
    >
      <g strokeLinecap="round" strokeLinejoin="round" fill="none">
        <path
          d="M8 42 C18 18, 28 58, 38 34 S58 52, 68 28 S82 46, 92 36"
          stroke={tangleStroke}
          strokeOpacity={tangleOpacity}
          strokeWidth={1.4}
        />
        <path
          d="M12 48 C24 62, 36 24, 48 40 S64 54, 76 32"
          stroke={tangleStroke}
          strokeOpacity={tone === 'dark' ? 0.75 : 0.45}
          strokeWidth={1.2}
        />
        <path
          d={`M92 36 C110 38, ${resolveX - 24} 40, ${resolveX} 40`}
          stroke={tangleStroke}
          strokeOpacity={tone === 'dark' ? 0.55 : 0.35}
          strokeWidth={1.2}
          style={{ transition: 'd 400ms ease' }}
        />
        <line
          x1={resolveX}
          y1={40}
          x2={LINE_END}
          y2={40}
          stroke={resolvedStroke}
          strokeWidth={2}
          style={{ transition: 'x1 400ms ease' }}
        />
      </g>
      {showDot && (
        <circle
          id={dotId}
          cx={dotX}
          cy={40}
          r={5}
          fill={brand.accent}
          style={{
            transition: 'cx 400ms ease',
            ...(animated
              ? { animation: 'axelThreadDot 1.8s ease-in-out infinite' }
              : undefined),
          }}
        />
      )}
      {animated && (
        <style>{`
          @keyframes axelThreadDot {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.75; }
          }
          @media (prefers-reduced-motion: reduce) {
            #${dotId} { animation: none !important; }
          }
        `}</style>
      )}
    </svg>
  )
}

export function ThreadIllustration({
  height = 80,
  resolve = 'mid',
  resolveProgress,
  showDot = true,
  animated = false,
  tone = 'light',
  idPrefix,
}: ThreadIllustrationProps) {
  return (
    <Box sx={{ width: '100%', height, overflow: 'hidden' }}>
      <ThreadSvg
        resolve={resolve}
        resolveProgress={resolveProgress}
        showDot={showDot}
        animated={animated}
        tone={tone}
        idPrefix={idPrefix}
      />
    </Box>
  )
}

export function ThreadThumb({ resolve = 'near' as ThreadResolveLevel }) {
  return <ThreadIllustration height={56} resolve={resolve} showDot />
}

/** Full-bleed backdrop variant for AppBackground */
export function ThreadBackdrop({
  resolve = 'mid',
  idPrefix = 'bg',
}: {
  resolve?: ThreadResolveLevel
  idPrefix?: string
}) {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: 2,
        opacity: 0.9,
      }}
    >
      <Box sx={{ width: '100%', maxWidth: 720, height: { xs: 72, sm: 96 } }}>
        <ThreadSvg resolve={resolve} showDot idPrefix={idPrefix} />
      </Box>
    </Box>
  )
}
