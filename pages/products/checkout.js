import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Alert from 'react-bootstrap/Alert'

export const OrderMessage = ({message, color}) => {
    return(
        <>
          <div>
              <Alert variant={color}>
                  {message}
              </Alert>
          </div>
        </>
    );
}

export default function checkout() {
    const [message, setMessage] = useState('');
    const [color, setColor] = useState('');
    useEffect(() => {
        // Check to see if this is a redirect back from Checkout
        const query = new URLSearchParams(window.location.search);
        if (query.get("success")) {
            setMessage('Your order has been placed with success in our sytem, find the complete shipment and order information in your email');
            setColor('success');
        }
        if (query.get("canceled")) {
            setMessage("Order canceled, continue shopping." );
            setColor('warning');
        }
    
    }, []);
    return(
        <>
          <div>
            <OrderMessage message={message} color={color} />
          </div>
        </>
    )
}