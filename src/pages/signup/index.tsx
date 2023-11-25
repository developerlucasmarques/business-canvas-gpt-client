import { InfoAuthCard } from '@/components/access/info-auth-card'
import { AccountButton } from '@/components/buttons/account'
import { Back } from '@/components/buttons/back'
import { CancelLink } from '@/components/buttons/cancel'
import { Submit } from '@/components/buttons/submit'
import { Layout } from '@/components/layout'
import styles from '@/styles/signup.module.css'
import Link from 'next/link'
import { useForm } from 'react-hook-form'

const SignUp: React.FC = () => {
  const { handleSubmit } = useForm({
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
            <div className={`${styles.inputContainer}`}>
              <p>Nome Completo</p>
              <input/>
            </div>
            <div className={`${styles.inputContainer}`}>
              <p>Email</p>
              <input/>
            </div>
            <div className={`${styles.inputContainer}`}>
              <p>Senha</p>
              <input/>
            </div>
            <div className={`${styles.inputContainer}`}>
              <p>Confirme sua senha</p>
              <input/>
            </div>
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
