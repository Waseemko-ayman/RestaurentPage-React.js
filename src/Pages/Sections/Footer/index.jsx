import React from 'react'
import "./style.css";
import LOGO from "../../../assest/logo.svg";
import INESTAGRAM from "../../../assest/instagram.svg";
import TWITTER from "../../../assest/twitter.svg";
import YOUTUBE from "../../../assest/youtube.svg";
import EMAIL_ICON from "../../../assest/mail.svg";
import ADDRESS_ICON from "../../../assest/icon-location.svg";
import TELEPHON_ICON from "../../../assest/phone.svg";
import Container from '../../../Components/Container/Container1';

const Footer = () => {
  return (
    <footer>
      <Container flex>
        <div className="box">
          <div className="title">
            <img src={LOGO} alt="logo" />
            <h2>Golden View Dine</h2>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin </p>
          <div className="links">
            <img src={INESTAGRAM} alt="instagram-img" />
            <img src={TWITTER} alt="twitter-img" />
            <img src={YOUTUBE} alt="youtube-img" />
          </div>
        </div>

        <div className="box">
          <h2>Other Links</h2>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms & conditions</li>
            <li>Blogs</li>
            <li>Our Team</li>
            <li>Our kitchen</li>
          </ul>
        </div>

        <div className="box">
          <h2>Contact Us</h2>
          <div className="contacts">
            <div className='sub-box'>
              <img src={EMAIL_ICON} alt="email-icon" />
              <p>Gogreendineservice@gmail.com</p>
            </div>

            <div className='sub-box'>
              <img src={ADDRESS_ICON} alt="email-icon" />
              <div className='address'>
                <span>AZ complex bylane3 Mandari</span>
                <span>Rd Mumbai 1100867</span>
              </div>
            </div>

            <div className='sub-box'>
              <img src={TELEPHON_ICON} alt="email-icon" />
              <p>+1800 287 256</p>
            </div>

          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer