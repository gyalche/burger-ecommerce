import React from 'react';
import { Link } from 'react-router-dom';

const PaymentSuccess = () => {
  return (
    <section className='paymentSuccess'>
      <main>
        <h1>Order confirmed</h1>
        <p>Order placed successfully, You can check order status below</p>
        <Link to='/myorder'>Check Status</Link>
      </main>
    </section>
  );
};

export default PaymentSuccess;
