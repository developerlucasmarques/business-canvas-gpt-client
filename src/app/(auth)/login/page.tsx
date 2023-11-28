'use client'
import { AccessFormCard } from '@/app/(components)/access/access-form-card'
import { z } from 'zod'

const required_error = 'Campo obrigatório'

const LoginFormSchema = z.object({
  email: z.string({ required_error }).email('Informe um email válido'),
  password: z.string({ required_error })
})

const Login: React.FC = () => {
  return (
      <AccessFormCard
       title='Bem Vindo(a) de volta!'
       info='Informe seu email e senha para entrar.'
       infoFooter='Não possui uma conta?'
       infoFooterButtonLabel='Cadastre-se'
       infoFooterButtonUrl='/signup'
       successButtonLabel='Entrar'
       validationSchema={LoginFormSchema}
       formAction={'/login'}
       accessInputs={[{
         label: 'Email',
         placeholder: 'exemplo@gmail.com',
         name: 'email',
         validationSchema: LoginFormSchema.pick({ email: true }),
         type: 'email'
       }, {
         label: 'Senha',
         placeholder: 'Sua senha...',
         type: 'password',
         name: 'password',
         validationSchema: LoginFormSchema.pick({ password: true })
       }]}
      />
  )
}

export default Login
