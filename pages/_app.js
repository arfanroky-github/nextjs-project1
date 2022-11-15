import HorizontalLayout from '../layout/HorizontalLayout/HorizontalLayout'
import '../styles/globals.css';
import { Hydrate, QueryClient, QueryClientProvider} from 'react-query'
import { useRef } from 'react';



function MyApp({ Component, pageProps }) {
  const queryClient = useRef(new QueryClient());
  
  return (
    <QueryClientProvider client={queryClient.current}>
      <Hydrate state={pageProps.dehydratedState} />
      <HorizontalLayout>
      <Component {...pageProps} />
    </HorizontalLayout>
    </QueryClientProvider>
  )  
}

export default MyApp
