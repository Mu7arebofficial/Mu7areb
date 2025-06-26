import React, { useState } from 'react'
import axios from 'axios'

const PaymobPayment = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [orderId, setOrderId] = useState(null)
  const [paymentKey, setPaymentKey] = useState(null)

  const createOrder = async () => {
    setLoading(true)
    setError(null)

    try {
      const response = await axios.post('http://localhost:3000/api/paymob/create-order')
      setOrderId(response.data.orderId)
    } catch (error) {
      setError('Failed to create order')
    } finally {
      setLoading(false)
    }
  }

  const generatePaymentKey = async () => {
    setLoading(true)
    setError(null)

    try {
      const response = await axios.post('http://localhost:3000/api/paymob/generate-payment-key', { orderId })
      setPaymentKey(response.data.paymentKey)
    } catch (error) {
      setError('Failed to generate payment key')
    } finally {
      setLoading(false)
    }
  }

  const handlePayment = () => {
    // Handle redirection to payment gateway with paymentKey
    console.log('Redirecting to payment gateway with paymentKey:', paymentKey)
  }

  return (
    <div>
      <h1>Paymob Payment</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {loading ? (
        <p>Loading...</p>
      ) : orderId ? (
        <>
          <p>Order created successfully with ID: {orderId}</p>
          <button onClick={generatePaymentKey}>Generate Payment Key</button>
        </>
      ) : (
        <button onClick={createOrder}>Create Order</button>
      )}
      {paymentKey && <button onClick={handlePayment}>Proceed to Payment</button>}
    </div>
  )
}

export default PaymobPayment
