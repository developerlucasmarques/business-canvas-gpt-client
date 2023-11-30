'use client'
import { Submit } from '@/app/(components)/buttons/submit'
import { Input } from '@/app/(components)/form/input'
import { Select } from '@/app/(components)/form/select'
import { Textarea } from '@/app/(components)/form/textarea'
import { LoadingOverlay } from '@/app/(components)/loading-overlay'
import { useBusinessCanvasCtx } from '@/app/(contexts)/business-canvas-context'
import { useUserInfoCtx } from '@/app/(contexts)/global-context'
import styles from '@/styles/home.module.css'
import { type IAnswer } from '@/types/answer'
import { type CreateBusinessCanvas } from '@/types/api-requests/create-business-canvas'
import { type CreateBusinessCanvasReponse } from '@/types/api-responses/create-business-canvas-resposne'
import { type ErrorReponse } from '@/types/api-responses/error-response'
import { type Question } from '@/types/question'
import { apiBaseUrl } from '@/utils/env'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Form, useForm } from 'react-hook-form'

interface Props {
  questions: Question[]
}

export const QuestionsForm: React.FC<Props> = ({ questions }: Props) => {
  const { setAccessToken, setUserName } = useUserInfoCtx()
  const [submitDisabled, setSubmitDisabled] = useState(false)
  const [loading, setLoading] = useState(false)
  const [showInput, setShowInput] = useState(false)
  const { accessToken } = useUserInfoCtx()
  const { control } = useForm()
  const businessCanvasCtx = useBusinessCanvasCtx()
  const router = useRouter()

  const formatAnswers = (answers: IAnswer): CreateBusinessCanvas[] => (
    questions.map((question) => (
      question.alternatives
        ? { questionId: question.id, alternativeId: answers[question.id] }
        : { questionId: question.id, answer: answers[question.id] }
    )))

  const handleFormSubmit = async (answers: IAnswer): Promise<void> => {
    console.log(answers)
    const question = questions.find(q => q.content.includes('localização'))
    if (!showInput && answers.hasOwnProperty(question?.id as string)) {
      delete answers[question?.id as string]
    }
    setSubmitDisabled(true); setLoading(true)
    const formattedAnswers = formatAnswers(answers)
    const response = await fetch(`${apiBaseUrl}/business-canvas`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': accessToken
      },
      body: JSON.stringify(formattedAnswers)
    })
    const res: ErrorReponse | CreateBusinessCanvasReponse = await response.json()
    setSubmitDisabled(false); setLoading(false)
    if ('error' in res) return
    let canvas = res
    if (res.token && res.userName) {
      setAccessToken(res.token)
      setUserName(res.userName)
      const { token, userName, ...datas } = res
      canvas = datas
    }
    businessCanvasCtx?.setBusinessCanvas(canvas)
    router.push(`/business-canvas/${res.id}`)
  }

  const handleOnOptionChange = (data: string | undefined): void => {
    data && data === 'presencial' ? setShowInput(true) : setShowInput(false)
  }

  return (
  <Form
    onSubmit={async (e) => { await handleFormSubmit(e.data) }}
    control={control}
    className="flex h-full w-full max-w-xl flex-col items-center justify-center"
  >
    <h1 className={styles.title}>Crie seu Business Canvas</h1>
    {loading && <LoadingOverlay label='A criação de seu Business Canvas pode demorar um pouco' />}
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
              onOptionChange={handleOnOptionChange}
            />
          )
        } else if (question.type === 'text' && showInput) {
          return (
             <Input
              key={question.id}
              control={control}
              name={question.id}
              placeholder={question.content}
            />
          )
        } else if (question.type === 'text-area') {
          return (
          <Textarea
            key={question.id}
            control={control}
            name={question.id}
            placeholder={question.content}
          />
          )
        }
        return null
      })}
      <Submit disabled={submitDisabled} width='20rem' label='Criar'/>
    </div>
  </Form>
  )
}
