import React, { useRef } from "react";
import { Fade } from 'react-slideshow-image';
import { Container, Anchor, Icon, Div } from 'atomize'
import 'react-slideshow-image/dist/styles.css'

import image1 from '../images/slide-1.jpg'
import image2 from '../images/slide-2.jpg'
import image3 from '../images/slide-3.jpg'
import image4 from '../images/slide-4.jpg'
import image5 from '../images/slide-5.jpg'

const fadeImages = [
  image1,
  image2,
  image3,
  image4,
  image5,
];


const Hero = () => {

  const slideRef = useRef();

  const properties = {
    autoplay: true,
    arrows: false,
    transitionDuration: 300,
  };

  return (
    <div className="slide-container">
      <Fade ref={slideRef} {...properties}>
        <div className="each-slide">
          <div className="each-slide-image" style={{'backgroundImage': `url(${fadeImages[0]})`}}>
            <Container className="each-slide__content">
              <h1>Shopping Deals</h1>
            </Container>
          </div>
        </div>
        <div className="each-slide">
          <div className="each-slide-image" style={{'backgroundImage': `url(${fadeImages[1]})`}}>
            <Container className="each-slide__content">
              <h1>Assorted deals</h1>
            </Container>
          </div>
        </div>
        <div className="each-slide">
          <div className="each-slide-image" style={{'backgroundImage': `url(${fadeImages[2]})`}}>
            <Container className="each-slide__content">
              <h1>Great deals</h1>
            </Container>
          </div>
        </div>
        <div className="each-slide">
          <div className="each-slide-image" style={{'backgroundImage': `url(${fadeImages[3]})`}}>
            <Container className="each-slide__content">
              <h1>Amazing deals</h1>
            </Container>
          </div>
        </div>
        <div className="each-slide">
          <div className="each-slide-image" style={{'backgroundImage': `url(${fadeImages[4]})`}}>
            <Container className="each-slide__content">
              <h1>Sensational deals</h1>
            </Container>
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default Hero