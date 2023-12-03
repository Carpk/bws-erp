// import './item.css';

import React from 'react';
import { useState } from 'react';
import Header from './Header';
import ReactDOM from 'react-dom';
// import {Link} from "react-router-dom";
import { useParams } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
// import FormSelect from 'react-bootstrap/FormSelect'

import Modal from 'react-bootstrap/Modal';

import { faker, tr } from '@faker-js/faker';
import Data from './fakedata';
import ToolBar from './ToolBar';





const ItemTable = (layout) => {
  let items = Data.items
  let rows = []

  function BuildSelect() {
    return (
      <Form.Select  >
        <option value="0">none</option>
        <option value="1">Linear ft</option>
        <option value="2">1x1 Sq ft</option>
        <option value="32">4x8 sheet</option>
        <option value="128">4x4x8 block</option>
      </Form.Select>
    )
  }


  function addRow() {
    const innerRow  = "<td></td><td contenteditable='true'></td><td>"+               
                  "</td><td></td><td></td><td></td><td></td>"

    var newRow = document.createElement('tr', null)
    newRow.innerHTML = innerRow
    document.getElementById("tableRows").appendChild(newRow)
    // rows.push(innerRow)
  }


  function CreateRow({name, quantity, footage, cost}) {
    return (
      <tr>
        <td></td>
        <td contenteditable="true">{name}</td>
        <td contenteditable="true">{quantity}</td>
        <td contenteditable="true">${cost}</td>
        <td>${cost * quantity}</td>
        <td contenteditable="true">{footage}</td>
        <td>{footage * quantity}</td>
        <td></td>
      </tr>
    )
  }


  return (
    <div>
      <Container fluid="md">
        <Form>
          <Row>
            <Form.Group as={Col} className="mb-2" controlId="formItemName">
              <Form.Label>Item</Form.Label>
              <Form.Control defaultValue={"unit name"} />
            </Form.Group>

            <Form.Group as={Col} className="mb-2" controlId="formQuantity">
              <Form.Label>Quantity</Form.Label>
              <Form.Control defaultValue={1} />
            </Form.Group>

            <Form.Group as={Col} className="mb-2" controlId="formGridJobName">
              <Form.Label>Cost</Form.Label>
              <Form.Control disabled />
            </Form.Group>
          </Row>
          <Row>
          <Form.Group as={Col} className="mb-4" controlId="formQuantity">
              <Form.Label>Quantity</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} className="mb-4" controlId="formGridJobName">
              <Form.Label>per unit</Form.Label>
              <Form.Control disabled />
            </Form.Group>

            <Form.Group as={Col} className="mb-4" controlId="formItemName">
              <Form.Label>Width</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} className="mb-4" controlId="formQuantity">
              <Form.Label>Height</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} className="mb-4" controlId="formGridJobName">
              <Form.Label>Sqft</Form.Label>
              <Form.Control disabled />
            </Form.Group>

            <Form.Group as={Col} className="mb-4" controlId="none">
              {/* <Form.Label>Sqft</Form.Label>
              <Form.Control defaultValue={"test"} /> */}
            </Form.Group>
          </Row>

          <Table striped bordered hover>
            <thead>
              <tr>
                <th></th>
                <th>Materials</th>
                <th>Quantity</th>
                <th>Unit Cost</th>
                <th>Total</th>
                <th>ft</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody id="tableRows">
              { items.map( (row) => 
                <CreateRow {...row} />
              )}
            </tbody>
          </Table>
          <Button variant="light" onClick={addRow}>Add row</Button>

        </Form>

      </Container>
      
    </div>
  )
}

export default ItemTable;









// "<td></td><td contenteditable='true'></td><td>"+               
// "<Form.Select><option value='1'>Linear ft</option>"+
// '<option value="2">Sq ft</option><option value="32">4x8</option>'+
// "</Form.Select></td><td></td><td></td><td></td><td></td><td></td>"




  // const buildRow = () =>
  //   React.createElement("tr", null,
  //     React.createElement("th", null, ""),
  //     React.createElement("th", null, ""),
  //     React.createElement("th", null, "")
  //   )

  // function retRow() {
  //   return React.createElement("tr", null,
  //           React.createElement("th", null, ""),
  //           React.createElement("th", null, ""),
  //           React.createElement("th", null, "")
  //         )
  // }