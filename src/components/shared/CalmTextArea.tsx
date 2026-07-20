import TextField, { type TextFieldProps } from '@mui/material/TextField'

export function CalmTextArea(props: TextFieldProps) {
  return (
    <TextField
      multiline
      minRows={8}
      fullWidth
      {...props}
      slotProps={{
        ...props.slotProps,
        input: {
          sx: { fontSize: '1rem', lineHeight: 1.6 },
          ...props.slotProps?.input,
        },
      }}
    />
  )
}
