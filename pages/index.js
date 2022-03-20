import Head from 'next/head'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Header from '../components/Header'
import LargeCard from '../components/LargeCard'
import  MediumCard  from '../components/MediumCard'
import SmallCard from '../components/smallCard'

const Home = ({exploreData, cardsData}) => {
  return (
    <div className="">
      <Head>
        <title>AirBnb Lite</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />
      <Banner />
      {/* Explore Nearby Section */}
      <main className='max-w-7xl mx-auto px-8 sm:px-16 '>
        <section className='pt-6'>
          <h2 className='text-lg font-bold sm:text-4xl sm:font-semibold pb-5'>Explore Nearby</h2>
          {/* Pull Data From Server */} 
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {
            exploreData?.map(item => (
              <SmallCard key={item.img} img={item.img} location={item.location} distance={ item.distance}/>
            ))
            }
          </div>
        </section>
          
        {/* Live AnyWehre Section */}
        <section>
          <h2 className='text-lg font-bold sm:text-4xl sm:font-semibold py-8'>Live Aynwehre</h2>
          <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3'>
            {
            cardsData?.map(card => (
              <MediumCard key={ card.img} img={card.img} title={card.title}  />
            ))
          }
          </div>
        </section>

        {/* Large Card Components */}

        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoor"
          description="Wish List By AirBnb"
          buttonText = "Get Inspired"
        />
      </main>

      <Footer/>
    </div>
  )
}

export default Home

// Api Fetching
export async function getStaticProps() {
  const exploreData = await fetch('https://links.papareact.com/pyp')
    .then(res => res.json())
  
  const cardsData = await fetch('https://links.papareact.com/zp1')
    .then(res => res.json())
  
  return {
    props: {
      exploreData,
      cardsData
    }
  }
}
