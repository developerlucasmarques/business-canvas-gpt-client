'use client'
import { type SelectHTMLAttributes } from 'react'
import { Controller, type Control } from 'react-hook-form'
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
  onOptionChange: (optionSelected: string | undefined) => void
}

export const Select: React.FC<SelectProps> = ({ control, label, name, options, onOptionChange }: SelectProps) => {
  const handleClick = (id: string): void => {
    const option = options.find(o => o.id === id)
    onOptionChange(option?.description.toLowerCase())
  }
  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: 'Por favor, selecione uma opção' }}
      render={({ field: { name, onBlur, onChange, value }, fieldState }) => (
        <div className={styles.input}>
          <p className={styles.label}>{label}</p>
          <select
            className={'w-full rounded-lg bg-blue-200 px-5 py-4 text-blue-950 transition-all mb-5'}
            onChange={onChange}
            onBlur={onBlur}
            name={name}
            value={value}
            onClick={() => { handleClick(value) }}
          >
            <option value="">Selecione</option>
            {options.map(q => (
              <option key={q.id} value={q.id}>
                {q.description}
              </option>
            ))}
          </select>
          {fieldState.error && (<p className={styles.inputFails}>{fieldState.error?.message}</p>)}
        </div>
      )}
    />
  )
}
