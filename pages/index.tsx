import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>Immatechy's Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className='text-red-400'>ball</h1>
     
    </div>
  )
}
