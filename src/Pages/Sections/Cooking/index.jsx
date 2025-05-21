import React from 'react';
import './style.css';
import CookingComponent from '../../../Components/Cooking';
import AboutImage from '../../../Components/AboutUs/AboutImage';
import ImageSrc from '../../../assets/goes-img.png';
import Container from '../../../Components/Container/Container1';

const Cooking = () => {
  return (
    <div className="cooking">
      <Container>
        <div className="parent-div">
          <CookingComponent />
          <AboutImage imageSrc={ImageSrc} imageAlt="cooking" />
        </div>
      </Container>
    </div>
  );
};

export default Cooking;
