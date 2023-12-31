import React from 'react';
// import ReactDOM from 'react-dom';
// import {Link} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




const Callout = () => {


  
  return (
    <Container fluid="md">
      <Row className="justify-content-md-center">
        <h2>Callout</h2>
        <Col md="auto">
          <Form>
            <Form.Group controlId="formGridEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control placeholder="Admin" disabled />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Call out date:</Form.Label>
              <Form.Control  type="date"/>
            </Form.Group>

            <Form.Group className="mb-3" id="formGridCheckbox">
              <Form.Label>Want to tell us something?</Form.Label>
              <Form.Control as="textarea" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Callout;