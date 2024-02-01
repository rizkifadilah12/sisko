import React from 'react'
import Navbars from '../../components/header/navbar'
import Banner from '../../components/banner/Banner'
import HeaderContent from '../../components/header/HeaderContent'
import ProductComponent from '../../components/product/ProductComponent'
import InlineProduct from '../../components/product/InlineProduct'
import Footer from '../../components/footer/Footer'


const Home = () => {
  return (
    <div>
        <Navbars/>
        <Banner/>
        <HeaderContent/>
        <InlineProduct/>
        <ProductComponent/>
        <Footer/>
    </div>
  )
}

export default Home