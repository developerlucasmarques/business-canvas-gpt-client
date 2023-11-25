import { InfoAuthCard } from '@/components/access/info-auth-card'
import { Back } from '@/components/buttons/back'
import { CancelLink } from '@/components/buttons/cancel'
import { Submit } from '@/components/buttons/submit'
import { AccessInput } from '@/components/form/access-input'
import { type InputProps } from '@/types/input'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
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
}

export const AccessFormCard: React.FC<Props> = (props: Props) => {
  const { accessInputs, successButtonLabel, info, infoFooter, infoFooterButtonLabel, title, infoFooterButtonUrl } = props
  const { handleSubmit, control } = useForm({
    mode: 'onBlur',
    defaultValues: {}
  })

  const handleFormSubmit = (data: any): any => {
    console.log(data)
  }

  return (
    <div className={`${styles.container}`}>
        <Back url='/'/>
        <div className={`${styles.accessContainer}`}>
          <InfoAuthCard
            title={title}
            info={info}
          />

          <form className={`${styles.form}`} onSubmit={handleSubmit(handleFormSubmit)}>
            {accessInputs.map((input, index) => (
              <AccessInput
                key={index}
                control={control}
                label={input.label}
                placeholder={input.placeholder}
                rules={input.rules}
                type={input.type}
              />
            ))}
            <div className={`${styles.buttonsContainer}`}>
              <CancelLink width='48%' label='Cancelar'/> <Submit width='48%' label={successButtonLabel}/>
            </div>
          </form>
          <div className={`${styles.footer}`}>
            <p>{infoFooter}<Link href={infoFooterButtonUrl}>{infoFooterButtonLabel}</Link></p>
          </div>
        </div>
      </div>
  )
}
