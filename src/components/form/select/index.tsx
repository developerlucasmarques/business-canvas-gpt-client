import { type SelectHTMLAttributes } from 'react'
import { type Control, Controller } from 'react-hook-form'

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
        <div className="w-full">
          <p className="mb-2 text-blue-950">{label}</p>
          <select
            className="w-full rounded-lg bg-blue-200 px-5 py-4 text-blue-950 transition-all"
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
