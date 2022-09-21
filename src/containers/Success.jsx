import React, { useContext } from 'react'
import { BrowserRouter } from 'react-router-dom';
import Map from '../components/Map';
import AppContext from '../context/AppContext'
import useGoogleAddress from '../hooks/UseGoogleAddress';
import '../styles/components/Success.css'

const Success = () => {
  const { state } = useContext(AppContext);
  const { buyer } = state;

  const location = useGoogleAddress(buyer[0]?.address)

  return (
    <div className="Success">
      <div className="Success-content">
        <h2>{buyer[0]?.name} Gracias por tu compra</h2>
        <span>Tu pedido llegara en 3 días a tu direccion:</span>
        <div className="Success-map">
          <Map location={location}/>
        </div>
      </div>
    </div>
  )
}

export default Success