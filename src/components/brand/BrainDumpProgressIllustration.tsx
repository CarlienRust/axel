import { Box } from '@mui/material'
import brainDumpImg from '../../assets/illustrations/brain_dump.png'

type BrainDumpProgressIllustrationProps = {
  /** 0 = mostly tangle, 1 = full line revealed */
  progress?: number
  active?: boolean
  width?: number | string
}

export function BrainDumpProgressIllustration({
  progress = 0,
  active = false,
  width = '100%',
}: BrainDumpProgressIllustrationProps) {
  const displayProgress = progress > 0 ? progress : active ? 0.12 : 0.08
  const reveal = Math.max(0.08, Math.min(1, displayProgress))

  return (
    <Box
      aria-hidden
      sx={{
        width,
        maxWidth: 360,
        mx: 'auto',
        opacity: active ? 1 : 0.8,
        transition: 'opacity 200ms ease',
      }}
    >
      <Box
        sx={{
          clipPath: `inset(0 ${(1 - reveal) * 100}% 0 0)`,
          transition: 'clip-path 400ms ease',
        }}
      >
        <Box
          component="img"
          src={brainDumpImg}
          alt=""
          sx={{
            width: '100%',
            height: 'auto',
            display: 'block',
          }}
        />
      </Box>
    </Box>
  )
}
