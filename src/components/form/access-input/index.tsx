import type { Control, FieldValues, RegisterOptions } from 'react-hook-form'
import type { HTMLInputTypeAttribute } from 'react'
import { Controller } from 'react-hook-form'
import styles from './access-input.module.css'

interface InputElementAttributes extends React.InputHTMLAttributes<HTMLInputElement> {}

interface InputProps extends InputElementAttributes {
  control: Control<FieldValues>
  label: string
  type?: HTMLInputTypeAttribute
  placeholder: string
  rules: Omit<RegisterOptions<FieldValues, any>, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>
}

export const AccessInput: React.FC<InputProps> = (props: InputProps) => {
  const { control, placeholder, rules, label, type } = props
  return (
    <Controller
      control={control}
      name={label}
      rules={rules}
      render={({ field: { name, onBlur, onChange, value }, fieldState }) => (
        <div className={styles.inputContainer}>
          <p className={styles.inputContainerInfo}>{label}</p>
          <input
            type={(type) ?? 'text'}
            value={value}
            name={name}
            onChange={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            />
            {(fieldState.error?.type === 'required') && <p className={styles.inputFails}>Campo obrigatório</p> }
        </div>
      )}
    />
  )
}
