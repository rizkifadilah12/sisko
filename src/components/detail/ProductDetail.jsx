import React, { useEffect, useState } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const [products, setProducts] = useState("");
  const { id } = useParams();
  useEffect(() => {
    const getDataProductById = async () => {
      try {
        const response = await axios.get(
          `https://sistemtoko.com/public/demo/single/${id}`
        );
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getDataProductById();
  }, [id]);
 
  return (
    <div>
      <div
        className="mt-3"
        style={{
          backgroundColor: "#f1f1f1",
          width: "87%",
          position: "absolute",
          left: "90px",
          height: "40px",
        }}
      >
        <Link
          to="/"
          className="fs-6 mt-2 d-flex text-dark"
          style={{
            position: "absolute",
            left: "10px",
            fontFamily: "Roboto",
            textDecoration: "none",
          }}
        >
          {" "}
          Home <p>/ Product</p>/&nbsp;{products.product_name}
        </Link>
      </div>
      <div className="">&nbsp;</div>
      <div style={{ marginTop: "60px" }}>
        <Container>
           
          <Row>
          <Col xs={1}>
            </Col>
            <Col>
              <img
                src={`https://sistemtoko.com/img/user/demo/product/${products.product_img}`}
                alt="ga keambil"
                style={{
                    height :"450px"
                }}
              />
            </Col>
            <Col>
            <h3 className="product-name">{products.product_name}</h3>
            <span className="product-price">Rp.{products.product_price}</span><br />
            <span className="product-stok">stok : {products.product_qty_stock}</span>
            <hr />
            <h5 className="product-desciption">{products.product_description ?products.product_description : "NO DESCRIPTION" }</h5>
            <hr />
            <label htmlFor="" className="product-variant">Varian Options</label><br />
            <Link className="button-variant">{products.varian_keyword_value}</Link>
            <hr />
            <Link className="button">ADD TO CARD</Link>
            </Col>
            <Col xs={1}>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default ProductDetail;
