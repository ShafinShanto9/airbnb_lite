import getCenter from 'geolib/es/getCenter';
import 'mapbox-gl/dist/mapbox-gl.css';
import React, { useState } from 'react';
import Map, { Marker, Popup } from 'react-map-gl';



function MapBox({ searchResults }) {

  const [selectedLocation, setSelectedLocation] = useState({})

  // Transfrom Search Result to latitude and longitude
  const coardinates = searchResults.map(result => ({
    longitude: result.long,
    latitude: result.lat
  }))

  // latitude and longitude center of location
  const center = getCenter(coardinates)

  // Configueration map state
  const [viewState, setViewState] = useState({
    height: "100%",
    width:"100%",
    longitude: (center.longitude),
    latitude: (center.latitude - .15),
    zoom: 11
  })

  return (
    <Map
      mapStyle="mapbox://styles/shanto009/cl136kvbg000814rkqv058nyj"
      mapboxAccessToken={process.env.mapbox_key} 
      {...viewState}
      onMove={evt => setViewState(evt.viewState)}
    >
      {
        searchResults.map((result) => (
          <div key={result.long}>
            {console.log(result)}
          <Marker
              longitude={result.long} latitude={result.lat} offsetLeft={-20} offsetTop={-10}
          >
              <p role={'img'} onClick={() => setSelectedLocation(result)} className='text-2xl cursor-pointer animate-bounce'
              aria-label='push-pin'
              >📌</p>
            </Marker>
            
            {/* Showing Popup When Clicking Marker */}
            {
              selectedLocation.long === result.long ? (
                <Popup
                onBlur={() => setSelectedLocation({})}
                closeOnClick={true}
                latitude= {result.lat}
                longitude= {result.long}
                >
                    {result.title}
                  </Popup>
              ):false
            }
        </div>
        ))
      }
      </Map>
  )
}

export default MapBox