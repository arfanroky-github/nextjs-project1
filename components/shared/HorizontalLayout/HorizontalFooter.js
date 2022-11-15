import Image from "next/image"
import styles from '../../../styles/Home.module.css';

const HorizontalFooter = () => {
  return (
    <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          copyright &copy; <strong style={{marginLeft: '5px'}}>by united chauffeur</strong>
        </a>
      </footer>
  )
}

export default HorizontalFooter