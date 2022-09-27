import React from 'react';
import { motion } from 'framer-motion';
import myprofile from '../../assets/myprofile.png';
import { Link } from 'react-router-dom';
import { MdDashboard } from 'react-icons/md';
const Profile = () => {
  const options = {
    initial: { y: '-100%', opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  return (
    <section className='profile'>
      <main>
        <motion.img src={myprofile} alt='user' {...options} />
        <motion.h5 {...options} transition={{ delay: 0.3 }}>
          Dawa Sherpa
        </motion.h5>

        <motion.div {...options} transition={{ delay: 0.5 }}>
          <Link
            to='/admin/dashboard'
            className='dash'
            style={{ borderRadius: 0, backgroundColor: 'rgb(40,40,40' }}>
            Dashboard
            <MdDashboard />
          </Link>
        </motion.div>

        <motion.div
          initial={{ x: '-100vw', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}>
          <Link to='/myorders'>Orders</Link>
        </motion.div>

        <motion.button
          initial={{ x: '-100vw', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}>
          Logout
        </motion.button>
      </main>
    </section>
  );
};

export default Profile;
