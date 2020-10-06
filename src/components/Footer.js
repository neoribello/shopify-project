import React, { Component } from 'react';
import { Container, Anchor, Icon, Div, Input } from 'atomize'

const Footer = () => {
    return (
        <Div>
            <Container>
                <Div className="footer-container">
                    <Div className="footer-container__col">
                        <ul className="footer-container__list">
                            <h4 className="footer-container__subtitle">Socials</h4>
                            <li>
                                <Icon name="Instagram" size="14px" color="black" /> Instagram
                            </li>
                            <li>
                                <Icon name="Twitter" size="14px" color="black" /> Twitter
                            </li>
                            <li>
                                <Icon name="Facebook" size="14px" color="black" /> Facebook
                            </li>
                        </ul>
                    </Div>
                    <Div className="footer-container__col">
                        <ul className="footer-container__list">
                            <h4 className="footer-container__subtitle">Company</h4>
                            <li>
                                About Us
                            </li>
                            <li>
                                Careers
                            </li>
                            <li>
                                Blog
                            </li>
                        </ul>
                    </Div>
                    <Div className="footer-container__col">
                        <ul className="footer-container__list">
                            <h4 className="footer-container__subtitle">Support</h4>
                            <li>
                                Contact Us
                            </li>
                            <li>
                                Help Center
                            </li>
                            <li>
                                Request a Product
                            </li>
                        </ul>
                    </Div>
                    <Div className="footer-container__col">
                        <ul className="footer-container__list">
                            <h4 className="footer-container__subtitle">Business</h4>
                            <li>
                                Become a Supplier
                            </li>
                            <li>
                                Affliates
                            </li>
                            <li>
                                Partnerships
                            </li>
                        </ul>
                    </Div>

                    <Div className="footer-container__col">
                        <ul className="footer-container__list">
                            <h4 className="footer-container__subtitle">Subscribe</h4>
                            <p>Updates you'll want to know about-new products, stories, and events. No logos, no spam. unsubscribe anytime.</p>
                            <Input placeholder="Basic Input" />
                        </ul>
                    </Div>

                </Div>
            </Container>
        </Div>
    )
}

export default Footer;