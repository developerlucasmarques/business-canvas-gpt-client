import type { TextareaHTMLAttributes } from 'react'
import { Controller, type Control } from 'react-hook-form'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  control: Control
  name: string
  placeholder: string
}

export const Textarea: React.FC<TextareaProps> = ({ control, name, placeholder }: TextareaProps) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { name, onBlur, onChange, value } }) => (
        <div className="w-full">
          <p className="mb-2 text-blue-950">{placeholder}</p>
          <textarea
            value={value}
            name={name}
            onBlur={onBlur}
            onChange={onChange}
            className="w-full rounded-lg bg-blue-200 px-5 py-4 text-gray-800 transition-all"
            placeholder={placeholder}
            rows={7}
          />
        </div>
      )}
    />
  )
}
