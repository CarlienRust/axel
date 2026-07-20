import Button, { type ButtonProps } from '@mui/material/Button'

export function CalmButton(props: ButtonProps) {
  return (
    <Button
      size="large"
      {...props}
      sx={{ borderRadius: '999px', ...props.sx }}
    />
  )
}
