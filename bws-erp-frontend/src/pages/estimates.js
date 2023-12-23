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
// import ToolBar from './components/ToolBar';
import Data from './components/fakedata';







const Estimates = () => {
  const [estimates, setEstimates] = useState(Data.projects)
  const tbleTitles = ["Project","Client","Cost","", "Hours"]
  let i = 0

  const Estimate = ({name, client_id, details, hours}) => 
    React.createElement("tr", { key: i }, 
      React.createElement("td", { key: i }, name),
      React.createElement("td", { key: i }, getClient(client_id)),
      React.createElement("td", { key: i }, getCosts(details)),
      React.createElement("td", { key: i }, ),
      React.createElement("td", { key: i }, hours)
    )

  const TableHeader = () =>
    React.createElement("thead", null,
      React.createElement("tr", null,
        tbleTitles.map((title, i) =>
          React.createElement("th", { key: i }, title),
        )
      )
    )


  const getClient = (id) => {
    let name = ""
    Data.clients.map((client) => {
      if (id == client.id) {
        console.log(client.name)
        name = client.name
      }
    })
    return name
  }

  const getCosts = (details) => {
    let costs = 0
    Data.items.map((item) => {
      if (details.includes(item.id)) {
        costs += item.cost
      }
    })
    return costs
  }
  

  return (
    <Container fluid="md">
      <Form inline>
        <Row>
          <Col xs="11">
            <Form.Control
              type="text"
              placeholder="Search history..."
              className="md-4"
            />
          </Col>
          <Col xs="1">
            <Button type="submit">Submit</Button>
          </Col>
        </Row>
      </Form>

      <Row>
        <Table striped bordered hover>
          <TableHeader />
          <tbody>
              { estimates.map((data)=>
                <Estimate {...data} />
              )}
          </tbody>
        </Table>
      </Row>
    </Container>
  );
};

export default Estimates;

