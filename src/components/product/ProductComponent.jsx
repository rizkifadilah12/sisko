import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { getDataProduct } from "../../app/feature/productSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import ProductLoad from "./ProductLoad";
import './product.css'
const ProductComponent = () => {
  const { product, isLoading, isError, message } = useSelector(
    (state) => state.product
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDataProduct());
  }, [dispatch]);
  return (
    <div className="">
      {isLoading ? (
        <ProductLoad />
      ) : (
        <Container className="mt-5">
          <Row className="justify-content-md-center">
            {product?.map((prod) => (
              <Col key={prod.id} md="auto text-center">
                {" "}
                <Card
                  style={{ width: "18rem", height: "500px" }}
                  className="card-product"
                >
                  <Link to={`/detail/${prod.id}`}>
                    <Card.Img variant="top" src={prod.photo} />
                  </Link>
                  <Card.Body>
                    <Card.Title className="title-product">
                      {prod.name}
                    </Card.Title>
                    <Card.Text className="price-product">
                      Rp. {prod.price}
                    </Card.Text>
                    <Card.Text>
                      {prod.plain_varian.map((variant) => (
                        <DropdownButton
                          id="dropdown-button-dark-example2"
                          variant="light"
                          size="sm"
                          key={variant.id}
                          title={variant.value}
                          className="mt-2"
                          data-bs-theme="light"
                        >
                          <Dropdown.Item
                            href="#/action-1"
                            className="variant-product"
                            active
                          >
                            {variant.value}
                            {`(${prod.stock})`}
                          </Dropdown.Item>
                        </DropdownButton>
                      ))}
                    </Card.Text>
                    <Link className="button">ADD TO CARD</Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <Row className="justify-content-md-center mt-2">
            <Col md="auto text-center">
              <Button variant="warning" className="rounded-pill">
                Load More
              </Button>
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
};

export default ProductComponent;
