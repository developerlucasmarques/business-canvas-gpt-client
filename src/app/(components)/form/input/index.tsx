import type { Control, FieldValues } from 'react-hook-form'
import { Controller } from 'react-hook-form'
import styles from '../form.module.css'

interface InputElementAttributes extends React.InputHTMLAttributes<HTMLInputElement> {}

interface InputProps extends InputElementAttributes {
  control: Control<FieldValues>
  name: string
  placeholder: string
}

export const Input: React.FC<InputProps> = (props: InputProps) => {
  const { control, placeholder } = props
  return (
    <Controller
      control={control}
      name={props.name}
      rules={{ required: 'Campo obrigatório', minLength: { value: 5, message: 'Insira uma resposta válida' } }}
      render={({ field: { name, onBlur, onChange, value }, fieldState }) => (
        <div className={`${styles.input}`}>
          <label className={styles.label}>{placeholder}</label>
          <input
            type="text"
            value={value}
            name={name}
            onChange={onChange}
            onBlur={onBlur}
            className={'w-full rounded-lg bg-blue-200 px-5 py-4 text-gray-800 transition-all mb-5'}
            placeholder={placeholder}
            />
            {fieldState.error && (<p className={styles.inputFails}>{fieldState.error.message}</p>)}
        </div>
      )}
    />
  )
}
