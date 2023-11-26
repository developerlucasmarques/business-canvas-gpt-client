import type { HTMLInputTypeAttribute } from 'react'
import type { Control, FieldValues } from 'react-hook-form'
import { type z } from 'zod'

interface InputElementAttributes extends React.InputHTMLAttributes<HTMLInputElement> {}

export interface InputProps extends InputElementAttributes {
  control: Control<FieldValues>
  label: string
  name: string
  type?: HTMLInputTypeAttribute
  placeholder: string
  validationSchema: z.ZodType<any, any, any>
}
