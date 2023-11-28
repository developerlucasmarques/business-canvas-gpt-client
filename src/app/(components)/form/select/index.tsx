'use client'
import { type SelectHTMLAttributes } from 'react'
import { type Control, Controller } from 'react-hook-form'
import styles from '../form.module.css'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  control: Control
  options: Array<{
    id: string
    description: string
    questionId: string
  }>
  name: string
  label: string
}

export const Select: React.FC<SelectProps> = ({ control, label, name, options }: SelectProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { name, onBlur, onChange, value } }) => (
        <div className={styles.input}>
          <p className={styles.label}>{label}</p>
          <select
            className={'w-full rounded-lg bg-blue-200 px-5 py-4 text-blue-950 transition-all mb-5'}
            onChange={onChange}
            onBlur={onBlur}
            name={name}
            value={value}
          >
            <option value="">Selecione</option>
            {options.map(q => (
              <option key={q.id} value={q.id}>
                {q.description}
              </option>
            ))}
          </select>
        </div>
      )}
    />
  )
}
