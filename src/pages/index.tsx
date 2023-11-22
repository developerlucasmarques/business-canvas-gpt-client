import '@/app/globals.css'
import { baseUrl } from '@/app/api/env'
import { Input } from '@/components/form/input'
import { Select } from '@/components/form/select'
import { Textarea } from '@/components/form/textarea'
import type { Question } from '@/types/question'
import type { GetStaticProps, GetStaticPropsResult } from 'next'
import { useForm } from 'react-hook-form'
import styles from '@/styles/home.module.css'
import { Header } from '@/components/header'

interface Props {
  questions: Question[]
}

const Home: React.FC<Props> = ({ questions }: Props) => {
  const { control } = useForm()

  return (
    <>
    <Header accountButtonLabel='Entrar'/>
    <main className="flex h-auto flex-1 flex-col items-center justify-center p-6 md:p-24">
      <form className="flex h-full w-full max-w-xl flex-col items-center justify-center" >
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
    </>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async (): Promise<GetStaticPropsResult<Props>> => {
  const response = await fetch(`${baseUrl}/question`)
  const questions: Question[] = await response.json()
  questions[1].typeText = 'text'
  questions[2].typeText = 'text-area'
  return { props: { questions } }
}
