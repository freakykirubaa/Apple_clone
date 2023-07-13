

import { Container, Row, Col } from 'react-bootstrap';

export default function Footer() {
  return (
    <div className="bg-light py-3">
      <Container className="text-center">
        <Row className="justify-content-center align-items-center">
          <Col xs={12} sm={6} md={3}>
            <a href='#'>
          <h6>Shop and Learn</h6>
          </a>

            <p>Store</p>
            <p>Store</p>
            <p>Store</p>
            <p>Store</p>
            <p>Store</p>
          </Col>
          <Col xs={12} sm={6} md={3}>
          <h6>Shop and Learn</h6>
            <p>Store</p>
            <p>Store</p>
            <p>Store</p>
            <p>Store</p>
            <p>Store</p>
          </Col>
          <Col xs={12} sm={6} md={3}>
          <h6>Shop and Learn</h6>
            <p>Store</p>
            <p>Store</p>
            <p>Store</p>
            <p>Store</p>
            <p>Store</p>
          </Col>
          <Col xs={12} sm={6} md={3}>
          <h6>Shop and Learn</h6>
            <p>Store</p>
            <p>Store</p>
            <p>Store</p>
            <p>Store</p>
           <p>Store</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

