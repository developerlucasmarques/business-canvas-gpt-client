import { type InputProps } from '@/types/input'
import { Controller } from 'react-hook-form'
import styles from './access-input.module.css'

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
