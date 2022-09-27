import React from 'react';
import { RiFindReplaceLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import myProfile from '../../assets/myprofile.png';
const About = () => {
  return (
    <section className='about'>
      <main>
        <h1>About Us</h1>
        <article>
          <h4>Sherpa Burger</h4>
          <p>We provide the best burger in boudha kathmandu</p>
          <p>
            Explore the various types of food and burgers. Click below to see
            the menu
          </p>
          <Link to='/'>
            <RiFindReplaceLine />
          </Link>
        </article>

        <div>
          <h2>Founder</h2>
          <article>
            <div>
              <img src={myProfile} alt='Founder' />
              <h3>Dawa Sherpa</h3>
            </div>
            <p>
              Hello, I am dawa sherpa, The founder of Sherpa Burger, Affliate to
              God TASTE...
            </p>
          </article>
        </div>
      </main>
    </section>
  );
};

export default About;
