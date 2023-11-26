import { AccessFormCard } from '@/components/access/access-form-card'
import { SignUpButton } from '@/components/buttons/signup'
import { Layout } from '@/components/layout'

const Login: React.FC = () => {
  return (
    <Layout
      headerButtonComponents={[<SignUpButton/>]}
    >
      <AccessFormCard
       title='Bem Vindo(a) de volta!'
       info='Informe seu email e senha para entrar.'
       infoFooter='Não possui uma conta?'
       infoFooterButtonLabel='Cadastre-se'
       infoFooterButtonUrl='/signup'
       successButtonLabel='Entrar'
       formAction={'/login'}
       accessInputs={[{
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
       }]}
      />
    </Layout>
  )
}

export default Login
