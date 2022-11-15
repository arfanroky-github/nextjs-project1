import HorizontalLayout from '../layout/HorizontalLayout/HorizontalLayout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <HorizontalLayout>
      <Component {...pageProps} />
    </HorizontalLayout>
  )  
}

export default MyApp
