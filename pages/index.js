import Head from 'next/head'
import ContainerLayout from '../layout/ContainerLayout/ContainerLayout'


export default function Home() {

  return (
    <>
       <ContainerLayout bgColor='black'>
       <Head>
        <title>Home</title>
      </Head>
        <h1>Home</h1>
       </ContainerLayout>
    </>
  )
}
