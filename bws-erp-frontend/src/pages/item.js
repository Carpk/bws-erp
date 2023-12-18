// import './item.css';

import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom';
import {Link} from "react-router-dom";
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

import Data from './components/fakedata';
import ToolBar from './components/ToolBar';


const Item = ({item}) => {
  const matsHeader = ["","Materials","Quantity","unit cost","Total", "ft/unit","ft/total"," "]
  const taskHeader = ["Task","Quantity","Hours","Total"]
  const [items, setItems] = useState(Data.items);
  const [tasks, setTasks] = useState(Data.tasks);
  let rows = []
  let i = 0
  // let { state } = useLocation();
  // console.log(item);

  const MatsHeader = () =>
    React.createElement("tr", null,
      matsHeader.map((title, i) =>
        React.createElement("th", { key: i }, title),
      )
    )

  const TaskHeader = () =>
    React.createElement("tr", null,
      taskHeader.map((title, i) =>
        React.createElement("th", { key: i }, title),
      )
    )

  function addMats() {
     setItems([...items,{name: "taco", quantity: 3, cost: 2.75}])
  }

  function addTask() {
    setTasks([...tasks,{name: "taco", quantity: 3, hours: 2.75}])
 }



  const Item = ({name, quantity, footage, cost}) => 
    React.createElement("tr", null,
      React.createElement("td", { key: i, }, ""),
      React.createElement("td", { key: i, contentEditable: true }, name),
      React.createElement("td", { key: i, contentEditable: true }, quantity),
      React.createElement("td", { key: i, contentEditable: true }, "$" + cost),
      React.createElement("td", { key: i }, "$" + cost * quantity),
      React.createElement("td", { key: i, contentEditable: true }, footage),
      React.createElement("td", { key: i }, quantity * footage),
      React.createElement("td", { }, "")
    )
  
  const ItemInput = () => 
    React.createElement("tr", null,
      React.createElement("td", { key: i, }, ""),
      React.createElement("td", { key: i, contentEditable: true }, 
      React.createElement("input", { key: i, } )),
      React.createElement("td", { key: i, contentEditable: true }, ""),
      React.createElement("td", { key: i, contentEditable: true }, ""),
      React.createElement("td", { key: i }, ""),
      React.createElement("td", { key: i, contentEditable: true }, ""),
      React.createElement("td", { key: i }, ""),
      React.createElement("td", { }, "")
    )


  const Task = ({name, quantity, hours}) => 
    React.createElement("tr", null,
      React.createElement("td", { key: i, contentEditable: true }, name),
      React.createElement("td", { key: i, contentEditable: true }, quantity),
      React.createElement("td", { key: i, contentEditable: true }, hours),
      React.createElement("td", { key: i }, quantity * hours)
    )
  

  return (
    <Container fluid="md">
      <ToolBar />
      <Form>
        <Row>
          <Form.Group as={Col} className="mb-2" controlId="formItemName">
            <Form.Label>Item</Form.Label>
            <Form.Control defaultValue={"unit name"} />
          </Form.Group>

          <Form.Group as={Col} className="mb-2" controlId="formQuantity">
            <Form.Label>Cost</Form.Label>
            <Form.Control disabled />
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
            <MatsHeader />
          </thead>
          <tbody id="tableRows">
            { items.map((row) => 
                <Item {...row} />
            )}
            <tr>
              <td></td>
              <td>
                <input type="text" />
              </td>
              <td>
                <input type="text" />
              </td>
              <td>
                <input type="text" />
              </td>
              <td></td><td></td><td></td><td></td>
            </tr>
          </tbody>
        </Table>
        <Button variant="light" onClick={addMats}>Add row</Button>
        <Table striped bordered hover>
          <thead>
            <TaskHeader />
          </thead>
          <tbody id="tableRows">
            { tasks.map((row) => 
                <Task {...row} />
            )}
            <tr>
              <td>
                <input type="text" />
              </td>
              <td>
                <input type="text" />
              </td>
              <td>
                <input type="text" />
              </td>
              <td></td>
            </tr>
          </tbody>
        </Table>
        <Button variant="light" onClick={addTask}>Add row</Button>
      </Form>
      <Row className="float-end">
        <Button variant="primary" type="submit">
          Save
        </Button>
      </Row>
    </Container>
  )
}

export default Item;



  // function CreateRow({name, quantity, footage, cost}) {
  //   console.log(item);
  //   return (
  //     <tr>
  //       <td></td>
  //       <td contentEditable="true">{name}</td>
  //       <td contentEditable="true">{quantity}</td>
  //       <td contentEditable="true">${cost}</td>
  //       <td>${cost * quantity}</td>
  //       <td contentEditable="true">{footage}</td>
  //       <td>{footage * quantity}</td>
  //       <td></td>
  //     </tr>
  //   )
  // }





// function BuildSelect() {
//   return (
//     <Form.Select  >
//       <option value="0">none</option>
//       <option value="1">Linear ft</option>
//       <option value="2">1x1 Sq ft</option>
//       <option value="32">4x8 sheet</option>
//       <option value="128">4x4x8 block</option>
//     </Form.Select>
//   )
// }



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