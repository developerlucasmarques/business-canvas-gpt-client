import styles from './footer.module.css'

export const Footer: React.FC = () => {
  return (
    <footer className={`${styles.footer}`}>
      <div className={`${styles.content} flex justify-between items-center`}>
        <p>BCM © {new Date().getFullYear()}</p>
        <a href="https://slideworks.cc" target="_blank" rel="noreferrer">
          Slideworks
        </a>
      </div>
    </footer>
  )
}
