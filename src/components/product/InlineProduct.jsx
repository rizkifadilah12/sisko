import React from 'react'
import { Link } from 'react-router-dom'
const InlineProduct = () => {
  return (
    <div className='mt-1' style={{ backgroundColor: "#f1f1f1", width: "87%", position :"absolute", left: "90px",height: "40px" }}>
        <Link to='/' className='fs-6 mt-3 d-flex text-dark' style={{position: "absolute", left: "10px", fontFamily :"Roboto", textDecoration: "none"}}>Home <p>/ Category</p></Link>
  </div>
  )
}

export default InlineProduct