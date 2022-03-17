import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'

const Home = () => {
  return (
    <div className="">
      <Head>
        <title>AirBnb Lite</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />
      <Banner />
      
      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-lg font-bold sm:text-4xl sm:font-semibold pb-5'>Explore Nearby</h2>

          {/* Data Fetch From Server */}

          
        </section>
      </main>
    </div>
  )
}

export default Home
