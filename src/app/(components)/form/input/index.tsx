import type { Control, FieldValues, RegisterOptions } from 'react-hook-form'
import { Controller } from 'react-hook-form'
import styles from '../form.module.css'

interface InputElementAttributes extends React.InputHTMLAttributes<HTMLInputElement> {}

interface InputProps extends InputElementAttributes {
  control: Control<FieldValues>
  name: string
  placeholder: string
  rules: Omit<RegisterOptions<FieldValues, any>, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>
}

export const Input: React.FC<InputProps> = (props: InputProps) => {
  const { control, placeholder, rules } = props
  return (
    <Controller
      control={control}
      name={props.name}
      rules={rules}
      render={({ field: { name, onBlur, onChange, value }, fieldState }) => (
        <div className={styles.input}>
          <p className={styles.label}>{placeholder}</p>
          <input
            type="text"
            value={value}
            name={name}
            onChange={onChange}
            onBlur={onBlur}
            className={'w-full rounded-lg bg-blue-200 px-5 py-4 text-gray-800 transition-all mb-5'}
            placeholder={placeholder}
            />
            {(fieldState.error?.type === 'required') && <p>Campo obrigatório</p> }
        </div>
      )}
    />
  )
}
