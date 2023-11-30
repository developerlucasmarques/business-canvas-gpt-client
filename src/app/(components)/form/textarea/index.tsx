import type { TextareaHTMLAttributes } from 'react'
import { Controller, type Control } from 'react-hook-form'
import styles from '../form.module.css'

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
      rules={{ required: 'Campo obrigatório', minLength: { value: 20, message: 'Insira uma descrição maior' } }}
      render={({ field: { name, onBlur, onChange, value }, fieldState }) => (
        <div className={styles.input}>
          <p className={styles.label}>{placeholder}</p>
          <textarea
            value={value}
            name={name}
            onBlur={onBlur}
            onChange={onChange}
            className="w-full rounded-lg bg-blue-200 px-5 py-4 text-gray-800 transition-all mb-5"
            placeholder={placeholder}
            rows={7}
          />
          {fieldState.error && (<p className={styles.inputFails}>{fieldState.error?.message}</p>)}
        </div>
      )}
    />
  )
}
