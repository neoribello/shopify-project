import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../context/shopContext'
import { Text, Div, Row, Col, Container } from "atomize";
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import Loading from '../components/Loading'
import TabSection from '../components/TabSection'
import Discount from '../components/Discount'

const HomePage = () => {
    const {fetchAllProducts, products} = useContext(ShopContext)
    useEffect(() => {
        fetchAllProducts()
        return () => {
            // cleanup
        };
    }, [fetchAllProducts])

    if (!products) return <Loading />
    return (
        <Div>
            <Hero />
            <TabSection />
            <Discount />
        </Div>
        
    )
}

export default HomePage