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

import Data from './components/fakedata';

const Estimate = () => {
  const details = Data.details
  const headerCols = ["Item","Materials","Hours","Paint","pHours", "Mgmt","Install", "Labor",""]
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
    React.createElement("thead", null,
      React.createElement("tr", null,
        headerCols.map((title, i) =>
          React.createElement("th", { key: i }, title),
        )
      )
    )

  const Detail = ({id, name}) => 
    React.createElement("tr", null,
      React.createElement("td", { key: id }, name),
      React.createElement("td", { key: id }, 0.00),
      React.createElement("td", { key: id }, 0.00),
      React.createElement("td", { key: id }, 0.00),
      React.createElement("td", { key: id }, 0.00),
      React.createElement("td", { key: id }, 0.00),
      React.createElement("td", { key: id }, 0.00),
      React.createElement("td", { key: id }, 0.00),
      React.createElement("td", { key: id },
        <Link to={{
          pathname: "/accounting/estimate/" + id + "/" + id,
          state: id
        }} >
        ⚙
        </Link>
        // <a href="#" onClick={() => editItem(detail.id)}>⚙</a>
      )
    )

  return (
    <Container fluid="md">
      <Row>
        <ToolBar />
      </Row>
      <Form>
        <Row>
          <Form.Group as={Col} controlId="formJobName">
            <Form.Label>Job Name</Form.Label>
            <Form.Control placeholder="" />
          </Form.Group>

          <Form.Group as={Col} controlId="formBidNumber">
            <Form.Label>Bid Number</Form.Label>
            <Form.Control type="plaintext" placeholder="" />
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
          <HeaderRow />
          <tbody>
            <tr>
              { items.map((detail)=>
                <Detail {...detail} />
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