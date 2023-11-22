import { Select } from '@/components/form/select'
import { Header } from '@/components/header'
import { useForm } from 'react-hook-form'

const Test: React.FC = () => {
  const { control } = useForm()
  return (
  <div>
    <Header accountButtonLabel='Entrar'/>
    <Select
      control={control}
      label='JUBILÉIA'
      name='NAY'
      options={[
        { id: 'id', description: '1', questionId: '2' },
        { id: 'id2', description: '2', questionId: '2' }
      ]}
    />
  </div>)
}

export default Test
