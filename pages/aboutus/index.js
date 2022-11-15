import Head from 'next/head'
import React from 'react'
import ContainerLayout from '../../layout/ContainerLayout/ContainerLayout'

const AboutUs = () => {
  return (
   <ContainerLayout bgColor={'gray'}>
    <Head>
        <title>AboutUs</title>
      </Head>
    <h1>AboutUs</h1>
   </ContainerLayout>
  )
}

export default AboutUs