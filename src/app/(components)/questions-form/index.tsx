'use client'
import { Submit } from '@/app/(components)/buttons/submit'
import { Input } from '@/app/(components)/form/input'
import { Select } from '@/app/(components)/form/select'
import { Textarea } from '@/app/(components)/form/textarea'
import '@/app/globals.css'
import styles from '@/styles/home.module.css'
import { type Question } from '@/types/question'
import { useForm } from 'react-hook-form'

interface Props {
  questions: Question[]
}

export const QuestionsForm: React.FC<Props> = ({ questions }: Props) => {
  const { control, handleSubmit } = useForm()
  const handleFormSubmit = (data: any): any => {
    console.log(data)
  }

  return (
  <form onSubmit={handleSubmit(handleFormSubmit)} className="flex h-full w-full max-w-xl flex-col items-center justify-center" >
    <h1 className={styles.title}>Crie seu Business Canvas</h1>
    <div className="flex w-full flex-col items-center gap-4">
      {questions.map(question => {
        if (question?.alternatives) {
          return (
            <Select
              key={question.id}
              control={control}
              label={question.content}
              name={question.id}
              options={question.alternatives}
            />
          )
        } else {
          const Component = question.type === 'text' ? Input : Textarea
          return (
            <Component
              key={question.id}
              control={control}
              name={question.id}
              placeholder={question.content}
              rules={{ minLength: { value: 10, message: 'message' }, required: true }}
            />
          )
        }
      })}
      <Submit width='20rem' label='Criar'/>
    </div>
  </form>
  )
}
