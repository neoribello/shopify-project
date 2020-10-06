import React, {useContext, useState} from 'react'
import { Container, Anchor, Icon, Div } from 'atomize'
import { Link } from 'react-router-dom'
import { ShopContext } from '../context/shopContext'

function Navbar() {
    const [navbar,setNavbar] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 70) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }
    const { openCart } = useContext(ShopContext)

    window.addEventListener('scroll', changeBackground)

        return (
        <>  
            <Div className={navbar ? 'navbar active' : 'navbar'} >
                <Container d="flex" flexDir="row"  justify="space-around" className="navbar-container">
                    <Div className="navbar-links">
                        <Div d="flex" flexDir="row" align="center">
                            <a> 
                                <p className="navbar-links-p">Men</p>
                            </a>

                            <a>
                                <p className="navbar-links-p">Women</p>
                            </a>

                            <a>
                                <p className="navbar-links-p">Careers</p>
                            </a>

                            <a>
                                <p className="navbar-links-p">About</p>
                            </a>
                        </Div>
                    </Div>
                <Link to="/" className="home-logo"><Icon name="Store" size="30px" color="black" /></Link>
                <Anchor className="cart-logo" onClick={() => openCart()}><Icon name="Bag" size="20px" color="black" /></Anchor>
                </Container>
            </Div>
        </>
    )
}

export default Navbar;