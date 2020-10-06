import React, { useRef, useContext, useEffect } from 'react'
import { Text, Div, Row, Col, Container } from "atomize";
import { Fade } from 'react-slideshow-image';
import { Link } from 'react-router-dom'
import Loading from '../components/Loading'

import image1 from '../images/slide-1.jpg'
import image2 from '../images/slide-2.jpg'
import image3 from '../images/slide-3.jpg'
import image4 from '../images/slide-4.jpg'

const fadeImages = [
    image1,
    image2,
    image3,
    image4,
];


const Discount = () => {
    const slideRef = useRef();

    const properties = {
        autoplay: true,
        arrows: false,
        duration: 2000,
        transitionDuration: 300,
    };
    
    return (
    <Div className="discount-section">
        <Container>
            <Div className="discount-section__container" flexDir="row" justify="space-between">
                <Div className="discount-section__slides">
                    <Fade ref={slideRef} {...properties}>
                        <div className="each-slide">
                            <div className="each-slide-image" style={{ 'backgroundImage': `url(${fadeImages[0]})` }}>

                            </div>
                        </div>
                        <div className="each-slide">
                            <div className="each-slide-image" style={{ 'backgroundImage': `url(${fadeImages[1]})` }}>

                            </div>
                        </div>
                        <div className="each-slide">
                            <div className="each-slide-image" style={{ 'backgroundImage': `url(${fadeImages[2]})` }}>

                            </div>
                        </div>
                        <div className="each-slide">
                            <div className="each-slide-image" style={{ 'backgroundImage': `url(${fadeImages[3]})` }}>

                            </div>
                        </div>
                    </Fade>
                </Div>

                <Div className="discount-section__tabs" flexDir="column" align="center" justify="center">
                    <Div>
                        <h1>Do the Math.</h1>
                    </Div>
                    <li className="discount-section__cards">
                        93% of new members
                    </li>
                    <li className="discount-section__cards">
                        64% lower prices
                    </li>
                    <li className="discount-section__cards">
                        97% of all members
                    </li>
                </Div>
            </Div>
        </Container>
    </Div>
    )
}
export default Discount
