'use client'
import { AccessFormCard } from '@/app/(components)/form/access/access-form-card'
import { z } from 'zod'

const required_error = 'Campo obrigatório'

const SignUpFormSchema = z.object({
  name: z.string({ required_error }).min(3, 'Nome muito curto').max(50, 'Nome muito grande').regex(/^[a-zA-ZçÇ\s]+$/u, 'Nome não deve conter caracteres especiais ou números'),
  email: z.string({ required_error }).email('Informe um email válido'),
  password: z.string({ required_error }).min(8, 'Sua senha deve conter no mínimo 8 caracteres').max(128).regex(/^(?=.*[a-zA-Z])(?=.*\d).+$/, 'Sua senha deve conter letras e números'),
  passwordConfirmation: z.string({ required_error })
})

const SignUp: React.FC = () => {
  return (
      <AccessFormCard
        title='Cadastre-se'
        info='Insira seus dados para criar uma conta e começar.'
        infoFooter='Possui uma conta?'
        infoFooterButtonLabel='Entrar'
        infoFooterButtonUrl='/login'
        successButtonLabel='Confirmar'
        validationSchema={SignUpFormSchema}
        formAction={'/signup'}
        accessInputs={[{
          label: 'Nome Completo',
          placeholder: 'Seu nome...',
          name: 'name',
          validationSchema: SignUpFormSchema.pick({ name: true })
        }, {
          label: 'Email',
          placeholder: 'exemplo@gmail.com',
          name: 'email',
          validationSchema: SignUpFormSchema.pick({ email: true }),
          type: 'email'
        }, {
          label: 'Senha',
          placeholder: 'Sua senha...',
          type: 'password',
          name: 'password',
          validationSchema: SignUpFormSchema.pick({ password: true })
        }, {
          label: 'Confirmação de senha',
          placeholder: 'Confirme sua senha...',
          type: 'password',
          name: 'passwordConfirmation',
          validationSchema: SignUpFormSchema.pick({ passwordConfirmation: true })
        }]}
      />
  )
}

export default SignUp
