import React, { useContext, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AppContext from '../context/AppContext'
import '../styles/components/Information.css'

const Information = () => {
  const { state, addToBuyer } = useContext(AppContext)
  const form = useRef(null)
  const navigate = useNavigate();

  const { cart } = state;

  const handleSubmit = () => {
    const formdata = new FormData(form.current);
    const buyer = {
      'name': formdata.get('name'),
      'email': formdata.get('email'),
      'address': formdata.get('address'),
      'apto': formdata.get('apto'),
      'city': formdata.get('city'),
      'country': formdata.get('country'),
      'state': formdata.get('state'),
      'cp': formdata.get('cp'),
      'phone': formdata.get('phone'),
    }
    addToBuyer(buyer);
    navigate('/checkout/payment')
  }

  return (
    <div className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Información de contacto:</h2>
        </div>
        <div className="Information-form">
          <form ref={form}>
            <input type="text" placeholder='Nombre completo' name='name'/>
            <input type="text" placeholder='Correo Electronico' name='email'/>
            <input type="text" placeholder='Dirección' name='address'/>
            <input type="text" placeholder='apto' name='apto'/>
            <input type="text" placeholder='Ciudad' name='city'/>
            <input type="text" placeholder='País' name='country'/>
            <input type="text" placeholder='Estado' name='state'/>
            <input type="text" placeholder='Código postal' name='cp'/>
            <input type="text" placeholder='Telefono' name='phone'/>
          </form>
        </div>
        <div className="Information-buttons">
          <div className="Information-back">
            <Link to="/checkout">
              Regresar
            </Link>
          </div>
          <div className="Information-next">
            <button type='button' onClick={() => handleSubmit()}>Pagar</button>
          </div>
        </div>
      </div>
      <div className="Information-sidebar">
        <h3>Pedido:</h3>
        {cart.map(item => (
          <div className="Information-item" key={item.title}>
            <div className="Information-element">
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Information