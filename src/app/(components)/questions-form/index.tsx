'use client'
import { Submit } from '@/app/(components)/buttons/submit'
import { Input } from '@/app/(components)/form/input'
import { Select } from '@/app/(components)/form/select'
import { Textarea } from '@/app/(components)/form/textarea'
import { useUserInfoCtx } from '@/app/(contexts)/global-context'
import { baseUrl } from '@/app/api/env'
import styles from '@/styles/home.module.css'
import { type IAnswer } from '@/types/answer'
import { type CreateBusinessCanvas } from '@/types/api-requests/create-business-canvas'
import { type CreateBusinessCanvasReponse } from '@/types/api-responses/create-business-canvas-resposne'
import { type ErrorReponse } from '@/types/api-responses/error-response'
import { type HttpResponse } from '@/types/api-responses/http-response'
import { type Question } from '@/types/question'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'

interface Props {
  questions: Question[]
}

export const QuestionsForm: React.FC<Props> = ({ questions }: Props) => {
  const { control, handleSubmit } = useForm()
  const { accessToken } = useUserInfoCtx()
  const router = useRouter()

  const formatAnswers = (answers: IAnswer): CreateBusinessCanvas[] => {
    return questions.map((question) => {
      if (question.alternatives) {
        return {
          questionId: question.id,
          alternativeId: answers[question.id]
        }
      } else {
        return {
          questionId: question.id,
          answer: answers[question.id]
        }
      }
    })
  }

  const handleFormSubmit = async (answers: IAnswer): Promise<void> => {
    const formattedAnswers = formatAnswers(answers)
    const response = await fetch(`${baseUrl}/business-canvas`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': accessToken
      },
      body: JSON.stringify(formattedAnswers)
    })
    const res: HttpResponse<ErrorReponse> | HttpResponse<CreateBusinessCanvasReponse> = await response.json()
    if ('error' in res) {
      console.log('FAILS', res)
    } else {
      console.log('Success', res)
      router.push('/business-canvas')
    }
  }

  return (
  <form
    onSubmit={handleSubmit(handleFormSubmit)}
    className="flex h-full w-full max-w-xl flex-col items-center justify-center"
  >
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
