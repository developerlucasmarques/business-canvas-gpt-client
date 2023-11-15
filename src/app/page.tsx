'use client'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import { Input } from '@/components/form/input'

export default function Home() {
  const { control } = useForm()
  const [questions, setQuestions] = useState([])

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
    <main className="flex h-auto flex-1 flex-col items-center justify-center bg-white p-24">
      <form
        onSubmit={submitCanva}
        className="flex h-full w-full max-w-xl flex-col items-center justify-center"
      >
        <h1 className="my-4 text-4xl font-medium text-blue-950">
          Faça um Business Canva
        </h1>
        <div className="flex w-full flex-col items-center gap-4">
          <Input
            control={control}
            name="business-type"
            placeholder="Qual o tipo do seu negócio?

"
          />
          <div className="w-full">
            <p className="mb-2 text-blue-950">
              Qual a localização (Cidade, estado ou país)?
            </p>
            <input
              type="text"
              className="w-full rounded-lg bg-blue-200 px-5 py-4 text-blue-950 transition-all"
              placeholder="Brasil"
            />
          </div>
          <div className="w-full">
            <p className="mb-2 text-blue-950">Descreva seu negócio:</p>
            <textarea
              className="w-full rounded-lg bg-blue-200 px-5 py-4 text-blue-950 transition-all"
              placeholder="Empresa XYZ"
            />
          </div>
          <button className="mt-2 max-w-xs rounded-md border-none bg-blue-500 px-8 py-3 font-bold uppercase text-white transition-all hover:bg-blue-950">
            Enviar
          </button>
        </div>
      </form>
    </main>
  )
}
