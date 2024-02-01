import React from 'react'
import ProductDetail from '../../components/detail/ProductDetail'
import Navbars from "../../components/header/Navbar";
import Footer from '../../components/footer/Footer'

const Detail = () => {
  return (
    <div>
        <Navbars/>
        <ProductDetail/>
        <Footer/>
    </div>
  )
}

export default Detail