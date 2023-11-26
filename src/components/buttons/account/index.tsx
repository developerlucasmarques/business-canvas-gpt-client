import '@/app/globals.css'
import styles from './account-button.module.css'
import Link from 'next/link'

interface Props {
  label: string
  url: string
}

export const AccountButton: React.FC<Props> = ({ url, label }: Props) => {
  return (
  <div className={`${styles.accountButton} flex justify-center`}>
    <Link href={url} className={'flex justify-center items-center'}>
      <svg className='mr-1' width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 13.5C14.7614 13.5 17 11.2614 17 8.5C17 5.73858 14.7614 3.5 12 3.5C9.23858 3.5 7 5.73858 7 8.5C7 11.2614 9.23858 13.5 12 13.5Z" stroke="#141774" strokeWidth="2" strokeLinecap ="round" strokeLinejoin="round"/>
        <path d="M20 21.5C20 19.3783 19.1571 17.3434 17.6569 15.8431C16.1566 14.3429 14.1217 13.5 12 13.5C9.87827 13.5 7.84344 14.3429 6.34315 15.8431C4.84285 17.3434 4 19.3783 4 21.5" stroke="#141774" strokeWidth="2" strokeLinecap ="round" strokeLinejoin="round"/>
      </svg>
      <p className='ml-1'>{label}</p>
    </Link>
  </div>
  )
}
