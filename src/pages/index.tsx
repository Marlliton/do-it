import type { NextPage } from 'next'
import Head from 'next/head';
import { Main } from '../components/template/Main';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <meta name="description" content="Seu app de tarefas favorito." />
        <title>Do It!</title>
      </Head>
      <Main>
        <div className=''>Div 01</div>
        <div className='bg-black-task-area rounded-sm'>
          Div 02
        </div>
      </Main>
    </div>
  )
}

export default Home
