import { AccessFormCard } from '@/components/access/access-form-card'
import { AccountButton } from '@/components/buttons/account'
import { Layout } from '@/components/layout'

const SignUp: React.FC = () => {
  return (
    <Layout
      headerButtonComponents={[<AccountButton url='/login' label='Entrar'/>]}
    >
      <AccessFormCard
       title='Cadastre-se'
       info='Insira seus dados para criar uma conta e começar.'
       infoFooter='Possui uma conta?'
       infoFooterButtonLabel='Entrar'
       infoFooterButtonUrl='/login'
       successButtonLabel='Confirmar'
       accessInputs={[{
         label: 'Nome Completo',
         placeholder: 'Seu nome...',
         name: 'name',
         rules: { required: true, minLength: { value: 3, message: 'Digite seu nome completo' } }
       }, {
         label: 'Email',
         placeholder: 'exemplo@gmail.com',
         name: 'email',
         rules: { required: true, minLength: { value: 6, message: 'Email inválido' } },
         type: 'email'
       }, {
         label: 'Senha',
         placeholder: 'Sua senha...',
         type: 'password',
         name: 'password',
         rules: { required: true, minLength: { value: 8, message: 'Senha inválida' } }
       }, {
         label: 'Confirmação de senha',
         placeholder: 'Confirme sua senha...',
         type: 'password',
         name: 'passwordConfirmation',
         rules: { required: true, minLength: { value: 8, message: 'Confirmação de senha inválida' } }
       }]}
      />
    </Layout>
  )
}

export default SignUp
