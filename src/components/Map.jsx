import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import React from 'react'

const Map = ({location}) => {
  const mapStyles = {
    height: "50vh",
    width: "100%"
  }

  const defaultCenter = {
    lat: 19.4267326, lng: -99.27383
  }

  return (
    <LoadScript googleMapsApiKey='AIzaSyC-GWRez2T-X19bkyNXVlf3QnNTdNJEi8Y'>
      <GoogleMap 
        mapContainerStyle={mapStyles}
        zoom={9}
        center={location}
      >
        <Marker position={location}/>
      </GoogleMap>
    </LoadScript>
  )
}

export default Map