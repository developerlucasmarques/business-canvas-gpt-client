import styles from './my-business-canvas.module.css'
import Link from 'next/link'

interface Props {
  url: string
}

export const MyBusinessCanvasButton: React.FC<Props> = ({ url }: Props) => {
  return (
  <div className={`${styles.businessCanvas} flex justify-center`}>
    <Link href={url} className={'flex justify-center items-center'}>
      <p className='ml-1'>Meus Business Canvas</p>
    </Link>
  </div>
  )
}
