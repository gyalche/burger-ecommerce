import React from 'react';

const OrderDetails = () => {
  return (
    <section className='orderDetails'>
      <main>
        <h1>Order Details</h1>
        <div>
          <h1>Shipping</h1>
          <p>
            <b>Address</b>
            {'Gokarna'}
          </p>
        </div>

        <div>
          <h1>Contact</h1>
          <p>
            <b>Name</b>
            {'Dawa don'}
          </p>
          <p>
            <b>Phone</b>
            {'543599324'}
          </p>
        </div>

        <div>
          <h1>Status</h1>
          <p>
            <b>Order Status</b>
            {'Processing'}
          </p>
          <p>
            <b>Placed At</b>
            {'543599324'}
          </p>
          <p>
            <b>Delivered At</b>
            {'543599324'}
          </p>
        </div>

        <div>
          <h1>Payment</h1>
          <p>
            <b>Payment method</b>
            {'Online'}
          </p>
          <p>
            <b>Payment reference</b>
            {'543599324'}
          </p>
          <p>
            <b>Payed At</b>
            {'543599324'}
          </p>
        </div>

        <div>
          <h1>Amount</h1>
          <p>
            <b>Items Total</b>
            {'$4324'}
          </p>
          <p>
            <b>Shipping charges</b>
            {'$23'}
          </p>
          <p>
            <b>Tax Charges</b>
            {'$4'}
          </p>
          <p>
            <b>Total</b>
            {'$4342'}
          </p>
        </div>

        <article>
          <h1>Ordered Items</h1>
          <div>
            <h4>Cheese burger</h4>
            <div>
              <span>{2}</span> x <span>{2}</span>
            </div>
          </div>

          <div>
            <h4>Cheese Veg</h4>
            <div>
              <span>{2}</span> x <span>{2}</span>
            </div>
          </div>

          <div>
            <h4>Fried With Bla</h4>
            <div>
              <span>{2}</span> x <span>{2}</span>
            </div>
          </div>

          <div>
            <h4 style={{ fontWeight: 800 }}>Sub Total</h4>
            <div style={{ fontWeight: 800 }}>${2324}</div>
          </div>
        </article>
      </main>
    </section>
  );
};

export default OrderDetails;
