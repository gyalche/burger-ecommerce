import React from 'react';
import { motion } from 'framer-motion';
import MenuCard from './MenuCard';
const Menu = () => {
  return (
    <section id='menu'>
      <h1>MENU</h1>
      <div>
        <MenuCard itemNum={1} burgerSrc={} price={200} title="burgerchicken" />
      </div>
    </section>
  );
};

export default Menu;
