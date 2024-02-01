import React from 'react'
import './footer.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Instagram,Twitter,Facebook, Phone } from 'react-bootstrap-icons';
import {Link} from "react-router-dom"
import Col from 'react-bootstrap/Col';
const Footer = () => {
  return (
    <div className='mt-2' style={{backgroundColor: "#0b0b0b"}}>
    <Container>
    <Row>
        <Col>&nbsp;</Col>
    </Row>
    <Row>
        <Col>&nbsp;</Col>
    </Row>
      <Row className='text-center mt-2'>
        <Col>
       <span className='text-title'>Talk to Us Now !</span>
        <h3 className='widget-title mt-1'>CONTACT US</h3>
     <p className='text-address'>Jl. Palagan km 10 Rejodani, Ngaglik Sleman Yogyakarta</p>
        <p className='text-light'><Phone/> 0877-3821-0660</p>
        </Col>
        <Col>
        <p className='text-title'><em>Talk to Us Now !</em> </p>
        <h3 className='widget-title'>OUR SERVICES</h3>
       <Link to='/' className='text-decoration-none text-qna'>CARA PEMBELIAN</Link><br />
       <Link to='/' className='text-decoration-none text-qna'>F.A.Q</Link><br />
       <Link to='/' className='text-decoration-none text-qna'>KONFIRMASI PEMBAYARAN</Link><br />
       <Link to='/' className='text-decoration-none text-qna'>TENTANG HIJJA</Link><br />
       <Link to='/' className='text-decoration-none text-qna'>SYARAT & KETENTUAN</Link><br />
       <Link to='/' className='text-decoration-none text-qna'>PENGEMBALIAN DAN PENUKARAN</Link>
        </Col>
        <Col>
        <p className='text-title'><em>Talk to Us Now !</em> </p>
        <h3 className='widget-title'>FOLLOW US</h3>
        <Link to='/' className='text-decoration-none text-light' style={{fontSize: "2rem"}}><Instagram/>  </Link>
        <Link to='/' className='text-decoration-none text-light' style={{fontSize: "2rem"}}><Twitter/> </Link>
        <Link to='/' className='text-decoration-none text-light'style={{fontSize: "2rem"}}><Facebook/> </Link>
        </Col>
      </Row>
      <Row className='text-center mt-4'>
        <Col className='text-footer'><span>supported by <Link to='https://rizkifadilah.netlify.app/' className='link'>M Rizki Padilah</Link>Allright reserved</span></Col>
      </Row>
    </Container>
    </div>
  )
}

export default Footer