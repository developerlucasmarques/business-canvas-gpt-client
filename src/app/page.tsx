import { baseUrl } from '@/app/api/env'
import { QuestionsForm } from './(components)/questions-form'

const Home: React.FC = async () => {
  const staticData = await fetch(`${baseUrl}/question`, { cache: 'force-cache' })
  const questions = await staticData.json()

  return (
    <div className={'flex flex-grow justify-center items-center p-6 md:p-24'}>
      <QuestionsForm questions={questions}/>
    </div>
  )
}

export default Home
