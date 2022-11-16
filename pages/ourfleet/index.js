import Head from "next/head"
import ContainerLayout from "../../layout/ContainerLayout/ContainerLayout"
import {useQuery} from 'react-query';
import Link from "next/link";


const getData = async () => await (await fetch('https://jsonplaceholder.typicode.com/users')).json();

const OurFleet = () => {

  const {data, isLoading, isFetching} = useQuery(['users'], getData);

  if(isLoading) return <div>Loading...</div>
  console.log(data);

  return (
   <ContainerLayout bgColor={'purple'}>
    <Head>
        <title>OurFleet</title>
      </Head>
    <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)'
       }}>
       {
          data?.slice(0, 6).map(user => <div
          style={{
            border: '1px solid white',
            margin: '10px',
            padding: '10px',
          }}
           key={user.id}>
            <h2><span>{user.id} </span> {user.name}</h2>
            <p>{user.phone}</p>
            <Link href={`/ourfleet/${user.id}`}>
            <button style={{borderRadius: '50px', padding: '.5rem 2rem'}}>Details</button>
            </Link>
          </div>)
        }
       </div>
   </ContainerLayout>
  )
}

export default OurFleet