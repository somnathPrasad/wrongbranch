import Head from 'next/head'
import Link from 'next/link'
import Card from '../components/card'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Wrong Branch</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <header className="flex justify-between px-10 pt-5">
          <h1 className="text-4xl font-bold">Wrong Branch</h1>
          <div className="flex items-center font-semibold">
            <Link href="/"><a className="px-5 py-2 rounded-xl hover:bg-green-100">C++</a></Link>
            <Link href="/"><a className="px-5 py-2 rounded-xl hover:bg-green-100">Java</a></Link>
            <Link href="/"><a className="px-5 py-2 rounded-xl hover:bg-green-100">Python</a></Link>
            <Link href="/"><a className="px-5 py-2 rounded-xl hover:bg-green-100">C</a></Link>
          </div>
        </header>

        <section className="grid lg:grid-cols-3 sm:grid-cols-1 justify-center items-center content-center place-items-center pt-7">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </section>
      </main>

      <footer className="">
        
      </footer>
    </div>
  )
}
