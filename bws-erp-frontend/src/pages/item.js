import './item.css';

import React from 'react';
import { useState } from 'react';
import Header from './components/Header';
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
import Data from './components/fakedata';
import ToolBar from './components/ToolBar';





const Item = () => {
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

  const buildRow = () =>
    React.createElement("tr", null,
      React.createElement("th", null, ""),
      React.createElement("th", null, ""),
      React.createElement("th", null, "")
    )
  function retRow() {
    return React.createElement("tr", null,
            React.createElement("th", null, ""),
            React.createElement("th", null, ""),
            React.createElement("th", null, "")
          )
  }

  function addRow() {
    // const innerdata  = () =>
    //     React.createElement("tr", null,
    //       React.createElement("th", null, ""),
    //       React.createElement("th", null, ""),
    //       React.createElement("th", null, "")
    //     )

    // var newRow = document.createElement('tr', null)
    // newRow.innerHTML = innerdata
    document.getElementById("tableRows").appendChild(retRow)
    rows.push(retRow)
  }


  function CreateRow({name, quantity, cost}) {
    return (
      <tr>
        <td></td>
        <td contenteditable="true">{name}</td>
        <td className='shortInput'><BuildSelect /></td>
        <td contenteditable="true">{quantity}</td>
        <td contenteditable="true">${cost}</td>
        <td>${cost * quantity}</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    )
  }
  return (
    <div>
      <Header />
      <Container fluid="md">
        <Row>
          <ToolBar />
        </Row>
        <Form>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th></th>
                <th>Materials</th>
                <th></th>
                <th>Quantity</th>
                <th>Unit Cost</th>
                <th>Total</th>
                <th>ft</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody id="tableRows">
              <tr>
                <td></td>
                <td contenteditable="true">3/4 plywood</td>
                <td className='shortInput'>
                  <BuildSelect/>
                </td>
                <td>16</td>
                <td>$65.65</td>
                <td>$1050.40</td>
                <td>512</td>
                <td></td>
                <td></td>
                
              </tr>
              { items.map( (row) => 
                // <CreateRow {...row} />
                <tr>
                  <td></td>
                  <td contenteditable="true">{row.name}</td>
                  <td className='shortInput'><BuildSelect /></td>
                  <td contenteditable="true">{row.quantity}</td>
                  <td contenteditable="true">${row.cost}</td>
                  <td>${row.cost * row.quantity}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              )}
            </tbody>
          </Table>
          <Button variant="light" onClick={addRow}>New item</Button>

        </Form>
        <Row className="float-end">
          <Button variant="primary" type="submit">
            Save
          </Button>
        </Row>
      </Container>
      
    </div>
  )
}

export default Item;





// "<td></td><td contenteditable='true'></td><td>"+               
// "<Form.Select><option value='1'>Linear ft</option>"+
// '<option value="2">Sq ft</option><option value="32">4x8</option>'+
// "</Form.Select></td><td></td><td></td><td></td><td></td><td></td>"