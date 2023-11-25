import { baseUrl } from '@/app/api/env'
import '@/app/globals.css'
import { AccountButton } from '@/components/buttons/account'
import { SignUpButton } from '@/components/buttons/signup'
import { Submit } from '@/components/buttons/submit'
import { Input } from '@/components/form/input'
import { Select } from '@/components/form/select'
import { Textarea } from '@/components/form/textarea'
import { Layout } from '@/components/layout'
import styles from '@/styles/home.module.css'
import type { Question } from '@/types/question'
import type { GetStaticProps, GetStaticPropsResult } from 'next'
import { useForm } from 'react-hook-form'

interface Props {
  questions: Question[]
}

const Home: React.FC<Props> = ({ questions }: Props) => {
  const { control, handleSubmit } = useForm({
    mode: 'onBlur',
    defaultValues: {}
  })

  const handleFormSubmit = (data: any): any => {
    console.log(data)
  }

  return (
  <Layout headerButtonComponents={[
    <AccountButton label='Entrar' url='/login'/>,
    <SignUpButton/>
  ]}>
    <div className={'flex flex-grow justify-center items-center p-6 md:p-24'}>
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
                  rules={{ minLength: { value: 10, message: 'message' }, required: true }}
                />
              )
            }
            return null
          })}
          <Submit width='20rem' label='Criar'/>
        </div>
      </form>
    </div>
  </Layout>
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
