import React from 'react';
import { useState } from 'react';
import Header from './components/Header';
// import ReactDOM from 'react-dom';
import {Link} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import axios from './components/axios'
import ToolBar from './components/ToolBar';



const Estimate = () => {
  const headerCols = ["Item","Materials","Hours","Paint","pHours", "Mgmt","Install", "Labor"]
  const [items, setItems] = useState([])

  // useEffect(() => {
  //   async function fetchData() {
  //       const res = await axios.get("/accounting")
  //       setItems(res.data)
  //       return res
  //   }
  //   fetchData()
  // }, [])

  const HeaderRow = () =>
    React.createElement("tr", null,
      headerCols.map((title, i) =>
        React.createElement("th", { key: i }, title),
      )
    )

  const Item = () => {

  }

  return (
    <Container fluid="md">
      <Row>
      <ToolBar />
      </Row>
      <Form>
        <Row>
          <Form.Group as={Col} controlId="formJobName">
            <Form.Label>Job Name</Form.Label>
            <Form.Control placeholder="Enter Job Name" />
          </Form.Group>

          <Form.Group as={Col} controlId="formBidNumber">
            <Form.Label>Bid Number</Form.Label>
            <Form.Control type="plaintext" placeholder="1234567" />
          </Form.Group>

          <Form.Group as={Col} className="mb-3" controlId="formJobNumber">
            <Form.Label>Job Number</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} className="mb-3" controlId="formPO">
            <Form.Label>PO#</Form.Label>
            <Form.Control />
          </Form.Group>
        </Row>

        <Table striped bordered hover>
          <thead>
            <HeaderRow />
          </thead>
          <tbody>
            <tr>
              {items.map(()=>
                <Item />
              )}
            </tr>
          </tbody>
        </Table>
        <Row>
          <Col>
            <Button variant="light" href="/accounting/estimate/:id/item">
              New item
            </Button>
          </Col>
        </Row>

        <Row>
          <Col md={{ span: 1, offset: 10 }}>
            <Button variant="success" type="submit">
              Publish
            </Button>
          </Col>
          <Col>
            <Button variant="primary" type="submit">
              Save
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>

  );
};

export default Estimate;

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