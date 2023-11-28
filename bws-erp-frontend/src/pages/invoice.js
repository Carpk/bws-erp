import React from 'react';
import Header from './components/Header';
// import ReactDOM from 'react-dom';
import {Link} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import { faker } from '@faker-js/faker';


const Invoice = () => {

  return (
    <div>
      <Header />
      <Container fluid="md">
        <Row>
          Toolbar
        </Row>
        <Form>
          <Row>
            <Form.Group as={Col} controlId="formGridJobName">
              <Form.Label>Job Name</Form.Label>
              <Form.Control placeholder="Enter Job Name" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Bid Number</Form.Label>
              <Form.Control type="plaintext" placeholder="1234567" />
            </Form.Group>

            <Form.Group as={Col} className="mb-3" controlId="formGridJobNumber">
              <Form.Label>Job Number</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} className="mb-3" controlId="formGridPO">
              <Form.Label>PO#</Form.Label>
              <Form.Control />
            </Form.Group>
          </Row>

          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Item</th>
                <th>Total</th>
                <th>⚙</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </Table>

          <div class="float-end">
          <Button variant="primary"  type="submit">
            Save
          </Button>
          </div>

        </Form>
      </Container>
    </div>
  );
};

export default Invoice;

          // {/* <Form.Group className="mb-3" controlId="formGridAddress2">
          //   <Form.Label>Address 2</Form.Label>
          //   <Form.Control placeholder="Apartment, studio, or floor" />
          // </Form.Group> */}

          // {/* <Row className="mb-3">
          //   <Form.Group as={Col} controlId="formGridCity">
          //     <Form.Label>City</Form.Label>
          //     <Form.Control />
          //   </Form.Group>

          //   <Form.Group as={Col} controlId="formGridState">
          //     <Form.Label>State</Form.Label>
          //     <Form.Select defaultValue="Choose...">
          //       <option>Choose...</option>
          //       <option>...</option>
          //     </Form.Select>
          //   </Form.Group>

          //   <Form.Group as={Col} controlId="formGridZip">
          //     <Form.Label>Zip</Form.Label>
          //     <Form.Control />
          //   </Form.Group>
          // </Row> */}