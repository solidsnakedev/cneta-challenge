import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import Mint from '../components/Mint'
import WalletConnect from '../components/WalletConnect'
import { useStoreState } from '../utils/store'

const Home: NextPage = () => {

  const walletStore = useStoreState((state: any) => state.wallet)
  useEffect(() => {
    //const lucid = initLucid(walletStore.name)
    if (walletStore.address != "") {
      // getAssets(walletStore.address)
      //   .then((res: any) => { setNftList(res.addressInfo.nfts) })
    }
  }, [])


  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost normal-case text-xl">Raffle</Link>
        </div>
        <div className="flex-none">
          <WalletConnect />
        </div>
      </div>
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <Mint />
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  )
}

export default Home