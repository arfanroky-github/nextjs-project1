import HorizontalLayout from '../layout/HorizontalLayout/HorizontalLayout'
import '../styles/globals.css';
import { Hydrate, QueryClient, QueryClientProvider} from 'react-query'
import { useRef } from 'react';



function MyApp({ Component, pageProps }) {

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      {/* <Hydrate state={pageProps.dehydratedState} /> */}
      <HorizontalLayout>
      <Component {...pageProps} />
    </HorizontalLayout>
    </QueryClientProvider>
  )  
}

export default MyApp
