import React from 'react';
import { AiFillInstagram, AiFillYoutube, AiFillGithub } from 'react-icons/ai';
const Footer = () => {
  return (
    <footer>
      <div>
        <h2>Sherpa Burger Wala</h2>
        <p>We give you the best test possible.</p>
        <br />
        <i>We give attention to genuine feedback</i>
        <strong>All right received @shepaburger</strong>
      </div>

      <aside>
        <h4>Follow us</h4>

        <a href='https://instagram.com'>
          <AiFillInstagram />
        </a>
        <a href='https://youtube.com'>
          <AiFillYoutube />
        </a>
        <a href='https://github.com'>
          <AiFillGithub />
        </a>
      </aside>
    </footer>
  );
};

export default Footer;
