import { format } from 'date-fns'
import { useRouter } from 'next/router'
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import InfoCard from '../components/InfoCard'
import MapBox from '../components/MapBox'


const Search = ({ searchResults }) => {
  // get search query
  const router = useRouter()

  // console.log(router.query)

  const { location, startDate, endDate, noOfGuests } = router.query

  // date formates
  const formattedStartDate = format(new Date(startDate), 'dd MMMM yy');
  const formattedEndDate = format(new Date(endDate), 'dd MMMM yy');
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (

    <div className=''>
      <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`}/> 
            
          <main className='flex'>
            <section className='flex-grow pt-14 px-6'>
              <p className='text-xs'>300+ stays - {range} - for {noOfGuests} guest</p>
          <h1 className='text-3xl font-semibold mt-2 mb-6'>Stay in { location}</h1>
          
              <div className='grid grid-cols-2 mb-5 space-x-2 px-2 md:inline-flex text-gray-800 whitespace-nowrap '>
                <p className='button mb-1'>Cancelation Flexiblity</p>
                <p className='button mb-1'>Type Of place</p>
                <p className='button'>Price</p>
                <p className='button'>Rooms And Beds</p>
          </div>
          
          {/* Show Search Results */}
 
          <div className='flex flex-col'>
              {
              searchResults.map(item => (
                  
                  <>
                  <InfoCard
                    key={item.img} //its not a good practice
                    img={item.img}
                    title={item.title}
                    location={item.location}
                    description={item.description}
                    star={item.star}
                    price={item.price}
                    total={item.total}
                  
                  />
                  </>
                  ))
              }   
          </div>
          
        </section>

        <section className='hidden lg:inline-flex lg:min-w-[600px]'>
          <MapBox searchResults={ searchResults}/>
        </section>
          </main>

        <Footer/>
    </div>
  )
}

export default Search

// Fetching api
export async function getServerSideProps() {
     const searchResults = await fetch('https://links.papareact.com/isz')
    .then(res => res.json())
    
    return {
        props: {
            searchResults,
        }
    }
}