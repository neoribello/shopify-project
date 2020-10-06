import React, { useContext, useEffect } from 'react'
import { Text, Div, Row, Col, Container } from "atomize";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { Link } from 'react-router-dom'
import { ShopContext } from '../context/shopContext'
import Loading from '../components/Loading'

const TabSection = () => { 
    const {products} = useContext(ShopContext)

    useEffect(() => {
        return () => {
            // cleanup
        };
    }, )

    if (!products) return <Loading />
    return (
    <Div className="tabs-container">
            <Container>
                <Div className="tabs-container__info">
                    <h1>Resurgence in Retail</h1>
                    <p>This shop is a one-of-a-kind membership that grants access to 1000+ quality goods from the same manufacturers as top brands, at cost.</p>
                </Div>
                <Tabs>
                <TabList>
                    <Tab>Boots</Tab>
                    <Tab>Shirts</Tab>
                    <Tab>Crew</Tab>
                </TabList>
            
                <TabPanel>
                    <h2>Featured Boots</h2>
                        <Row>
                            {products.slice(0,4).map(product => (
                                <Col key={product.id}
                                    size={3}
                                >
                                    <Link to={`/product/${product.id}`}>
                                        <Div>
                                            <Div 
                                                h="20rem"
                                                bgImg={product.images[2].src}
                                                bgSize="cover"
                                                bgPos="center center"
                                                shadow="3"
                                                hoverShadow="4"
                                                transition="0.3s"
                                                m={{ b: "1.5rem" }}
                                            />
                                            <Text className="product-title" tag="h1" textWeight="800" textSize="subheader" textColor="black800">{product.title}</Text>
                                            <Text className="product-price" tag="h2" textWeight="800" textSize="body" textColor="black500">${product.variants[0].price}</Text>
                                        </Div>
                                    </Link>
                                </Col>
                            ))}
                        </Row>
                </TabPanel>
                <TabPanel>
                    <h2>Featured Shirts</h2> 
                    <Row>
                            {products.slice(4,8).map(product => (
                                <Col key={product.id} size="3" >
                                    <Link to={`/product/${product.id}`}>
                                        <Div>
                                            <Div 
                                                h="20rem"
                                                bgImg={product.images[0].src}
                                                bgSize="cover"
                                                bgPos="center center"
                                                shadow="3"
                                                hoverShadow="4"
                                                transition="0.3s"
                                                m={{ b: "1.5rem" }}
                                            />
                                            <Text className="product-title" tag="h1" textWeight="800" textSize="subheader" textColor="black800">{product.title}</Text>
                                            <Text className="product-price" tag="h2" textWeight="800" textSize="body" textColor="black500">${product.variants[0].price}</Text>
                                        </Div>
                                    </Link>
                                </Col>
                            ))}
                        </Row>
                </TabPanel>
                <TabPanel>
                    <h2>Featured Crew</h2>
                    <Row>
                            {products.slice(13,17).map(product => (
                                <Col key={product.id} size="3">
                                    <Link to={`/product/${product.id}`}>
                                        <Div>
                                            <Div 
                                                h="20rem"
                                                bgImg={product.images[1].src}
                                                bgSize="cover"
                                                bgPos="center center"
                                                shadow="3"
                                                hoverShadow="4"
                                                transition="0.3s"
                                                m={{ b: "1.5rem" }}
                                            />
                                            <Text tag="h1" textWeight="300" textSize="subheader" textDecor="none" textColor="black500">{product.title}</Text>
                                            <Text tag="h2" textWeight="300" textSize="body" textDecor="none" textColor="gray500">${product.variants[0].price}</Text>
                                        </Div>
                                    </Link>
                                </Col>
                            ))}
                        </Row>
                </TabPanel>
                </Tabs>
            </Container>
        </Div>
    )
}
export default TabSection
