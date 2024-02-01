import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useDispatch, useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
import { getDataBlog } from "../../app/feature/blogSlice";
import { Link } from "react-router-dom";
const BlogComponent = () => {
  const { blog, isLoading, isError, message } = useSelector(
    (state) => state.blog
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDataBlog());
  }, [dispatch]);
  console.log(blog);
  return (
    <Container className="mt-3">
      <Row className="justify-content-md-center">
        {blog.map((blogs) => (
        <Col xs={6} key={blogs.id} md="auto">
          <Card style={{ width: "18rem" }}>
            <Link to={`/article/${blogs.slug}`}>
            <Card.Img variant="top" src={`http://demo.sistemtoko.com/img/user/demo/blog/${blogs.img}`} />
            </Link>
          </Card>
          <p className="text-center">{blogs.title}</p>
        </Col>
        ))}
      </Row>
      <Row>
        <Col>&nbsp;</Col>
      </Row>
      <Row>
        <Col>&nbsp;</Col>
      </Row>
      <Row>
        <Col>&nbsp;</Col>
      </Row>
      <Row>
        <Col>&nbsp;</Col>
      </Row>
    </Container>
  );
};

export default BlogComponent;
