import { type Control, Controller, type FieldValues } from 'react-hook-form'
import styles from '../form.module.css'

interface InputElementAttributes extends React.InputHTMLAttributes<HTMLInputElement> {}

interface InputProps extends InputElementAttributes {
  control: Control<FieldValues>
  name: string
  placeholder: string
}

export const Input: React.FC<InputProps> = ({ control, name, placeholder }: InputProps) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { name, onBlur, onChange, value } }): any => (
        <div className={styles.input}>
          <p className={styles.label}>{placeholder}</p>
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
