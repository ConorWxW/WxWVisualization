import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div id="container" style={{ width: "400px", height: "400px" }}>
          <script src="/graphy.js"></script>
        </div>
        
      </main>

      <Footer />
    </div>
  )
}
