import { useRouter } from 'next/router'
import React from 'react'
import ContainerLayout from '../../layout/ContainerLayout/ContainerLayout'
import {useQuery} from 'react-query';




const Details = () => {
    const router = useRouter()
    const { id } = router.query
    console.log(id);

    const getDetails = async () => await (await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)).json();

    const {data, isLoading, isFetching} = useQuery(['users'], getDetails);

    if(isLoading) return <div>Loading...</div>
    if(isFetching) return
    console.log(data);

  return (
    <ContainerLayout bgColor={'gray'}>
        <div style={{
            width: '300px',
            boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.5)',
            padding: '1rem'
        }}>
            <h2>{data?.name}</h2>
            <p>{data?.phone}</p>
            <p>{data?.email}</p>
            <p>{data?.website}</p>

        </div>
    </ContainerLayout>
  )
}

export default Details