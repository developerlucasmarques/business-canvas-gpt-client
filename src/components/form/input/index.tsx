import { InputHTMLAttributes } from 'react'
import { Control, Controller } from 'react-hook-form'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  control: Control
  name: string
  placeholder: string
}

export function Input({ control, name, placeholder }: InputProps) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { name, onBlur, onChange, value } }) => (
        <div className="w-full">
          <p className="mb-2 text-blue-950">{placeholder}</p>
          <input
            type="text"
            value={value}
            name={name}
            onChange={onChange}
            onBlur={onBlur}
            className="w-full rounded-lg bg-blue-200 px-5 py-4 text-gray-800 transition-all"
            placeholder={placeholder}
          />
        </div>
      )}
    />
  )
}
