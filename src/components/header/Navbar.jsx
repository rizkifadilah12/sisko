import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Search, Cart2 } from "react-bootstrap-icons";
import Dropdown from "react-bootstrap/Dropdown";
import NavItem from "react-bootstrap/NavItem";
import NavLink from "react-bootstrap/NavLink";
import { getDataCategory } from "../../app/feature/productSlice";
import { useDispatch,useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
function Navbars() {
  const { category ,isLoading, isError, message } = useSelector((state) => state.product);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getDataCategory());
  }, [dispatch]);
  return ( 
    <Container className="bg-light fixed" >
      <Row className="fs-5 " xs={1} style={{fontFamily : "Montserrat"}}>
        <Col sm={2}>
          {" "}
          <img
            src="https://hijja.sistemtoko.com/templates/hijja/img/logo.jpg"
            style={{ width: "150px" }}
            alt=""
          />
        </Col>
        <Col sm={8} style={{fontFamily : "DearPrudence"}}>
          Hijja Indonesia <hr />
        </Col>
        <Col sm>
          <Search /> &nbsp;| &nbsp;
          <Cart2 /> <hr />
        </Col>
        <Col sm></Col>
        <Col sm={2}>&nbsp;</Col>
        <Col sm={1} ><Link style={{textDecoration: "none", color: "black"}} to={'/'}>Home</Link> </Col>
        <Col sm={1}>
          {" "}
          <Dropdown as={NavItem}>
            <Dropdown.Toggle as={NavLink} className="link-1">Brand</Dropdown.Toggle>
            <Dropdown.Menu>
              
            <Row xs={2} style={{width : "700px"}}>
            {category?.map((categori) => (
                <Col key={categori.product_category_id}> <Dropdown.Item >{categori.product_category_name} </Dropdown.Item></Col>
                ))}
            </Row>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col sm={2}>  <Dropdown as={NavItem}>
            <Dropdown.Toggle as={NavLink}>Infromation</Dropdown.Toggle>
            <Dropdown.Menu>
            <Row xs={1}>
                <Col> <Dropdown.Item>CARA PEMBELIAN</Dropdown.Item></Col>
                <Col> <Dropdown.Item>F.A.Q</Dropdown.Item></Col>
                <Col> <Dropdown.Item>KONFIRMASI PEMBAYARAN</Dropdown.Item></Col>
                <Col> <Dropdown.Item>TENTANG HIJJA</Dropdown.Item></Col>
                <Col> <Dropdown.Item>SYARAT & KETENTUAN</Dropdown.Item></Col>
                <Col> <Dropdown.Item>PENGEMBALIAN DAN PENUKARAN</Dropdown.Item></Col>
            </Row>
             
            </Dropdown.Menu>
          </Dropdown></Col>
        <Col sm={1}><Link style={{textDecoration: "none", color: "black"}} to={'/blog'}>Blog</Link></Col>
      </Row>
    </Container>
  
  );
}

export default Navbars;
