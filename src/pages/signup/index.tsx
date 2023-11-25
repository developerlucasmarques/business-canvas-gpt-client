import { InfoAuthCard } from '@/components/access/info-auth-card'
import { AccountButton } from '@/components/buttons/account'
import { Back } from '@/components/buttons/back'
import { CancelLink } from '@/components/buttons/cancel'
import { Submit } from '@/components/buttons/submit'
import { AccessInput } from '@/components/form/access-input'
import { Layout } from '@/components/layout'
import styles from '@/styles/signup.module.css'
import Link from 'next/link'
import { useForm } from 'react-hook-form'

const SignUp: React.FC = () => {
  const { handleSubmit, control } = useForm({
    mode: 'onBlur',
    defaultValues: {}
  })

  const handleFormSubmit = (data: any): any => {
    console.log(data)
  }

  return (
    <Layout
      headerButtonComponents={[<AccountButton url='/login' label='Entrar'/>]}
    >
      <div className={`${styles.container}`}>
        <Back url='/'/>
        <div className={`${styles.accessContainer}`}>
          <InfoAuthCard
            title='Cadastre-se'
            info='Insira seus dados para criar conta e começar.            '
          />

          <form className={`${styles.form}`} onSubmit={handleSubmit(handleFormSubmit)}>
            <AccessInput
              control={control}
              label='Nome Completo'
              placeholder='Digite seu nome...'
              rules={{ required: true, minLength: { value: 3, message: 'Digite seu nome completo' } }}
            />
            <AccessInput
              control={control}
              label='Email'
              placeholder='exemplo@email.com'
              rules={{ required: true, minLength: { value: 6, message: 'Email inválido' } }}
              type='email'
            />
            <AccessInput
              control={control}
              label='Senha'
              placeholder='Digite sua senha...'
              rules={{ required: true, minLength: { value: 8, message: 'Senha inválida' } }}
              type='password'
            />
            <AccessInput
              control={control}
              label='Confirmação de senha'
              placeholder='Confirme sua senha...'
              rules={{ required: true, minLength: { value: 8, message: 'Confirmação de senha inválida' } }}
              type='password'
            />
            <div className={`${styles.buttonsContainer}`}>
              <CancelLink width='48%' label='Cancelar'/> <Submit width='48%' label='Confirmar'/>
            </div>
          </form>
          <div className={`${styles.footer}`}>
            <p>Possui uma conta? <Link href='/login'>Entrar</Link></p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default SignUp
