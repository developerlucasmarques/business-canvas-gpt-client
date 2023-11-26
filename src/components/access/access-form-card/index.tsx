import { baseUrl } from '@/app/api/env'
import { InfoAuthCard } from '@/components/access/info-auth-card'
import { Back } from '@/components/buttons/back'
import { CancelLink } from '@/components/buttons/cancel'
import { Submit } from '@/components/buttons/submit'
import { AccessInput } from '@/components/form/access-input'
import { type InputProps } from '@/types/input'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { Form, useForm } from 'react-hook-form'
import { type z } from 'zod'
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

  return (
    <div className={`${styles.container}`}>
        <Back url='/'/>
        <div className={`${styles.accessContainer}`}>
          <InfoAuthCard
            title={title}
            info={info}
          />

          <Form
            className={`${styles.form}`}
            control={control}
            action={`${baseUrl}${formAction}`}
            method='post'
            encType='application/json'
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
