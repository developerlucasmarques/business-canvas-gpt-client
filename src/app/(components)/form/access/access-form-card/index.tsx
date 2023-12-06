'use client'
import { InfoAuthCard } from '@/app/(components)/access/info-auth-card'
import { Back } from '@/app/(components)/buttons/back'
import { CancelLink } from '@/app/(components)/buttons/cancel'
import { Submit } from '@/app/(components)/buttons/submit'
import { AccessInput } from '@/app/(components)/form/access/access-input'
import { useUserInfoCtx } from '@/app/(contexts)/global-context'
import { accessService } from '@/app/(services)/access/access-service'
import { type AuthData } from '@/types/auth'
import { type InputProps } from '@/types/input'
import { UnauthorizedAlert } from '@/utils/modal-alert/unauthorized-alert'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Form, useForm } from 'react-hook-form'
import { type z } from 'zod'
import formStyles from '../../form.module.css'
import styles from './access-form-card.module.css'

type AccessInputType = Omit<InputProps, 'control'>

interface Props {
  accessInputs: AccessInputType[]
  title: string
  info: string
  successButtonLabel: string
  infoFooter: string
  infoFooterButtonLabel: string
  infoFooterButtonUrl: string
  validationSchema: z.ZodObject<any>
  formAction: string
}

export const AccessFormCard: React.FC<Props> = (props: Props) => {
  const { accessInputs, successButtonLabel, info, infoFooter, infoFooterButtonLabel, title, infoFooterButtonUrl, formAction, validationSchema } = props
  const { control } = useForm({ resolver: zodResolver(validationSchema) })
  const { setUserName, setAccessToken } = useUserInfoCtx()
  const [validPasswordConfirmation, setValidPasswordConfirmation] = useState(true)
  const [emailInUseError, setEmailInUseError] = useState(false)
  const router = useRouter()

  const handleSubmit = async (data: AuthData): Promise<void> => {
    setEmailInUseError(false); setValidPasswordConfirmation(true)
    if (data.passwordConfirmation && data.password !== data.passwordConfirmation) {
      setValidPasswordConfirmation(false); return
    }
    const res = await accessService(data, formAction)
    if (res.isLeft()) {
      if (res.value.statusCode >= 401 && res.value.statusCode < 500) {
        await UnauthorizedAlert()
        return
      }
      if (res.value.name === 'EmailInUseError') {
        setEmailInUseError(true)
      }
      return
    }
    setUserName(res.value.userName); setAccessToken(res.value.token)
    router.push('/')
  }

  return (
    <div className={`${styles.container}`}>
        <Back/>
        <div className={`${styles.accessContainer}`}>
          <InfoAuthCard
            title={title}
            info={info}
          />
          <Form
            className={`${styles.form}`}
            control={control}
            onSubmit={async (e) => { await handleSubmit(e.data as AuthData) }}
          >
            {accessInputs.map((input, index) => (
              <AccessInput
                key={index}
                validationSchema={input.validationSchema}
                control={control}
                label={input.label}
                placeholder={input.placeholder}
                type={input.type}
                name={input.name}
              />
            ))}
            {!validPasswordConfirmation && <p className={formStyles.inputFails}>Senha não coincide com a confirmação</p>}
            {emailInUseError && <p className={formStyles.inputFails}>Email já está em uso</p>}
            <div className={`${styles.buttonsContainer}`}>
              <CancelLink width='48%' label='Cancelar'/> <Submit width='48%' label={successButtonLabel}/>
            </div>
          </Form>
          <div className={`${styles.footer}`}>
            <p>{infoFooter} <Link href={infoFooterButtonUrl}>{infoFooterButtonLabel}</Link></p>
          </div>
        </div>
      </div>
  )
}
