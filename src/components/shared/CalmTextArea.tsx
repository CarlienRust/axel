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
          sx: {
            fontSize: '16px',
            lineHeight: 1.6,
            '&::placeholder': {
              opacity: 1,
              whiteSpace: 'normal',
            },
          },
          ...props.slotProps?.input,
        },
      }}
      sx={{
        '& .MuiInputBase-root': {
          alignItems: 'flex-start',
        },
        '& .MuiInputBase-inputMultiline': {
          overflow: 'auto !important',
          textOverflow: 'clip',
          whiteSpace: 'pre-wrap',
          wordBreak: 'break-word',
        },
        ...props.sx,
      }}
    />
  )
}
