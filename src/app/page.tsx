'use client'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import { Input } from '@/components/form/input'
import { Select } from '@/components/form/select'

interface Questions {
  id: string
  content: string
  alternatives?: {
    id: string
    description: string
    questionId: string
  }[]
}

export default function Home() {
  const { control } = useForm()
  const [questions, setQuestions] = useState<Questions[]>([])

  async function submitCanva() {
    console.log('a')
  }

  async function getQuestions() {
    const response = await fetch(`/api`, {
      method: 'GET',
      headers: new Headers({
        'ngrok-skip-browser-warning': '69420',
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    const json = await response.json()
    setQuestions(json)
  }

  useEffect(() => {
    getQuestions()
  }, [])

  return (
    <main className="flex h-auto flex-1 flex-col items-center justify-center bg-white p-6 md:p-24">
      <form
        onSubmit={submitCanva}
        className="flex h-full w-full max-w-xl flex-col items-center justify-center"
      >
        <h1 className="my-4 text-4xl font-medium text-blue-950">
          Faça um Business Canva
        </h1>
        <div className="flex w-full flex-col items-center gap-4">
          {questions.map(q => {
            if (q?.alternatives) {
              return (
                <Select
                  control={control}
                  label={q.content}
                  name={q.id}
                  key={q.id}
                  options={q.alternatives}
                />
              )
            } else {
              return (
                <Input
                  key={q.id}
                  control={control}
                  name={q.id}
                  placeholder={q.content}
                />
              )
            }
          })}
          {!questions.length && (
            <img
              src="/loading.svg"
              alt="Carregando conteúdo"
              className="animate-spin"
            />
          )}
          {questions.length && (
            <button className="mt-2 max-w-xs rounded-md border-none bg-blue-500 px-8 py-3 font-bold uppercase text-white transition-all hover:bg-blue-950">
              Enviar
            </button>
          )}
        </div>
      </form>
    </main>
  )
}
