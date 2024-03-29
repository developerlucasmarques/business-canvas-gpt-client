import { apiBaseUrl } from '@/utils/env'
import { QuestionsForm } from './(components)/form/questions-form'

const Home: React.FC = async () => {
  const staticData = await fetch(`${apiBaseUrl}/question`, { cache: 'force-cache' })
  const questions = await staticData.json()

  return (
    <div className={'flex flex-grow justify-center items-center p-6 md:p-24'}>
      <QuestionsForm questions={questions}/>
    </div>
  )
}

export default Home
