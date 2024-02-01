import React from 'react'
import BlogComponent from '../../components/blog/BlogComponent'
import Navbars from "../../components/header/Navbar";
import Footer from '../../components/footer/Footer'

const Blog = () => {
  return (
    <div>
        <Navbars />
        <BlogComponent/>
        <Footer/>
    </div>
  )
}

export default Blog