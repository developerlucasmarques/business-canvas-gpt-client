'use client'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import { Input } from '@/components/form/input'
import { Select } from '@/components/form/select'
import { Textarea } from '@/components/form/textarea'

interface Alternatives {
  id: string
  description: string
  questionId: string
}

interface Questions {
  id: string
  content: string
  alternatives?: Alternatives[]
  typeText?: 'text-area' | 'text'
}

export interface BusinessCanvasAnswer {
  questionId: string
  alternativeId?: string
  answer?: string
}

export default function Home() {
  const { control, handleSubmit } = useForm()
  const [questions, setQuestions] = useState<Questions[]>([])
  const [submittedData, setSubmittedData] = useState<BusinessCanvasAnswer[]>([])

  async function submitCanva() {
    const userResponses: BusinessCanvasAnswer[] = []

    setSubmittedData(userResponses)
    console.log(userResponses)
  }

  async function getQuestions() {
    const response = await fetch(`api`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })

    const json: Questions[] = await response.json()
    json[1].typeText = 'text'
    json[2].typeText = 'text-area'
    setQuestions(json)
  }

  useEffect(() => {
    getQuestions()
  }, [])

  return (
    <main className="flex h-auto flex-1 flex-col items-center justify-center bg-white p-6 md:p-24">
      <form
        onSubmit={handleSubmit(submitCanva)}
        className="flex h-full w-full max-w-xl flex-col items-center justify-center"
      >
        <h1 className="my-4 text-4xl font-medium text-blue-950">
          Create a Business Canvas
        </h1>
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
            } else if (
              question?.typeText === 'text' ||
              question?.typeText === 'text-area'
            ) {
              const Component = question.typeText === 'text' ? Input : Textarea
              return (
                <Component
                  key={question.id}
                  control={control}
                  name={question.id}
                  placeholder={question.content}
                  className="w-full rounded-lg bg-blue-200 px-5 py-4 text-blue-950 transition-all"
                />
              )
            }
            return null
          })}
          {!questions.length && (
            <img
              src="/loading.svg"
              alt="Loading content"
              className="animate-spin"
            />
          )}
          {questions.length && (
            <button className="mt-2 max-w-xs rounded-md border-none bg-blue-500 px-8 py-3 font-bold uppercase text-white transition-all hover:bg-blue-950">
              Submit
            </button>
          )}
        </div>
      </form>
    </main>
  )
}
