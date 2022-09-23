import React from 'react';
import { motion } from 'framer-motion';
import myprofile from '../../assets/myprofile.png';
const Founder = () => {
  const options = {
    initial: {
      x: '-100%',
      opacity: 0,
    },
    whileInView: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <section className='founder'>
      <motion.div {...options}>
        <img src={myprofile} alt='founder' height={200} width={200} />
        <h3>Dawa Sherpa</h3>
        <p>
          Hey, this is a place where you can get a burger with one click!
          <br />
          Aim, is to simplify your hungry
        </p>
      </motion.div>
    </section>
  );
};

export default Founder;
