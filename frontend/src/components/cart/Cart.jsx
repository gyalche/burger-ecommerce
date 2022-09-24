import React from 'react';
import { motion } from 'framer-motion';
import burger from '../../assets/burger2.png';
import { Link } from 'react-router-dom';

const CartItem = ({ value, title, img, increment, decrement }) => (
  <div className='cartItem'>
    <div>
      <h4>{title}</h4>
      <img src={img} alt='burger' />
    </div>
    <div>
      <button onClick={decrement}>-</button>
      <input type='number' readOnly value={value} />
      <button onClick={increment}>+</button>
    </div>
  </div>
);

const Cart = () => {
  const increment = (item) => {};
  const decrement = (item) => {};
  return (
    <section className='cart'>
      <main>
        <CartItem
          title='burger'
          img={burger}
          value={2}
          increment={() => increment(1)}
          decrement={() => decrement(1)}
        />
        <article>
          <div>
            <h4>Sub Total</h4>
            <p>${324}</p>
          </div>
          <div>
            <h4>Tax</h4>
            <p>${3}</p>
          </div>

          <div>
            <h4>Shipping charges</h4>
            <p>${12}</p>
          </div>

          <div>
            <h4>Total</h4>
            <p>${400}</p>
          </div>

          <Link to='/shipping'>Checkout</Link>
        </article>
      </main>
    </section>
  );
};

export default Cart;
