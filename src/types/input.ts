import type { HTMLInputTypeAttribute } from 'react'
import type { Control, FieldValues, RegisterOptions } from 'react-hook-form'

interface InputElementAttributes extends React.InputHTMLAttributes<HTMLInputElement> {}

export interface InputProps extends InputElementAttributes {
  control: Control<FieldValues>
  label: string
  type?: HTMLInputTypeAttribute
  placeholder: string
  rules: Omit<RegisterOptions<FieldValues, any>, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>
}
