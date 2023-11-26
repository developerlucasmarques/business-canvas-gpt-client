import { type InputProps } from '@/types/input'
import { useState } from 'react'
import { Controller } from 'react-hook-form'
import { ZodError } from 'zod'
import styles from './access-input.module.css'

export const AccessInput: React.FC<InputProps> = (props: InputProps) => {
  const { control, placeholder, validationSchema, label, type } = props
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const handleValidation = (value: any): void => {
    try {
      validationSchema.parse({ [props.name]: value })
      setErrorMessage(null)
    } catch (error) {
      if (error instanceof ZodError) {
        setErrorMessage(error.errors[0].message)
      }
    }
  }

  return (
    <Controller
      control={control}
      name={props.name}
      defaultValue={''}
      render={({ field: { name, onBlur, onChange, value } }) => (
        <div className={styles.inputContainer}>
          <p className={styles.inputContainerInfo}>{label}</p>
          <input
            type={type ?? 'text'}
            value={value}
            name={name}
            onChange={(event) => { onChange(event); handleValidation(event.target.value) }}
            onBlur={() => { onBlur(); handleValidation(value) }}
            placeholder={placeholder}
          />
          {errorMessage && <p className={styles.inputFails}>{errorMessage}</p>}
        </div>
      )}
    />
  )
}
