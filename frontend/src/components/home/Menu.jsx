import React from 'react';
import { motion } from 'framer-motion';
import MenuCard from './MenuCard';
import burger1 from '../../assets/burger1.png';
const Menu = () => {
  const addToCartHandler = (itemNum) => {};
  return (
    <section id='menu'>
      <h1>MENU</h1>
      <div>
        <MenuCard
          itemNum={1}
          burgerSrc={burger1}
          price={200}
          title='burgerchicken'
          handler={addToCartHandler}
          delay={0.1}
        />
      </div>
    </section>
  );
};

export default Menu;
