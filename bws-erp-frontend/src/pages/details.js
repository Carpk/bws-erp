// import './item.css';

import React from 'react';
import { useState, useRef } from 'react';
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
import EditMatsModal from './components/EditMatModal';

const Details = ({item}) => {
  const matsHeader = ["","Materials","Quantity","unit cost","Total", "ft/unit","ft/total",""]
  const taskHeader = ["Task","Quantity","Hours","Total", ""]
  const [items, setItems] = useState(Data.items);
  const [tasks, setTasks] = useState(Data.tasks);
  const [show, setShow] = useState(false);
  const  matsRef = useRef(null);
  const  taskRef = useRef(null);
  let rows = []
  let i = 0

  function getCost() {
    let cost = 0
    items.map((item) =>
      cost += item.quantity * item.cost
    )

    return cost
  }


  const MatsHeader = () =>
    React.createElement("tr", null,
      matsHeader.map((title, i) =>
        React.createElement("th", { key: title }, title),
      )
    )

  const TaskHeader = () =>
    React.createElement("tr", null,
      taskHeader.map((title, i) =>
        React.createElement("th", { key: title }, title),
      )
    )

  function addMats() {
    const name = matsRef.current.children[1].firstChild.value
    const quantity = matsRef.current.children[2].firstChild.value
    const cost = matsRef.current.children[3].firstChild.value

    setItems([...items,{name: name, quantity: quantity, cost: cost}])
  }

  function addTask() {
    const task = taskRef.current.children[0].firstChild.value
    const quantity = taskRef.current.children[1].firstChild.value
    const hours = taskRef.current.children[2].firstChild.value

    setTasks([...tasks,{name: task, quantity: quantity, hours: hours}])
  }


  const Item = item => 
    React.createElement("tr", null,
      React.createElement("td", { key: i, }, ""),
      React.createElement("td", { key: i }, item.name),
      React.createElement("td", { key: i }, item.quantity),
      React.createElement("td", { key: i }, "$" + item.cost),
      React.createElement("td", { key: i }, "$" + item.cost * item.quantity),
      React.createElement("td", { key: i }, item.footage),
      React.createElement("td", { key: i }, item.quantity * item.footage),
      React.createElement("td", { }, 
        <EditMatsModal props={item} />
      )
    )
  
  const ItemInput = () => 
    React.createElement("tr", { key: i, ref: matsRef},
      React.createElement("td", { key: i, }, ""),
      React.createElement("td", { key: i }, 
        React.createElement("input", { key: i } )),
      React.createElement("td", { key: i }, 
        React.createElement("input", { key: i } )),
      React.createElement("td", { key: i },
        React.createElement("input", { key: i } )),
      React.createElement("td", { key: i }, ""),
      React.createElement("td", { key: i }, ""),
      React.createElement("td", { key: i }, ""),
      React.createElement("td", { }, "")
    )


  const Task = ({id, name, quantity, hours}) => 
    React.createElement("tr", null,
      React.createElement("td", { key: i }, name),
      React.createElement("td", { key: i }, quantity),
      React.createElement("td", { key: i }, hours),
      React.createElement("td", { key: i }, quantity * hours),
      React.createElement("td", { key: i }, 
        <Link to={{
          pathname: "/accounting/estimate/" + id + "/" + id,
          state: id
        }} >⚙</Link>
      )
    )

  const TaskInput = () => 
    React.createElement("tr", { key: i, ref: taskRef},
      React.createElement("td", { key: i }, 
        React.createElement("input", { key: i } )),
      React.createElement("td", { key: i }, 
        React.createElement("input", { key: i } )),
      React.createElement("td", { key: i },
        React.createElement("input", { key: i } )),
      React.createElement("td", { key: i }, ""),
      React.createElement("td", { key: i }, "")
    )


  return (
    <Container fluid="md">
      <ToolBar />
      <Form>
        <Row>
          <Form.Group as={Col} className="mb-2" controlId="formItemName">
            <Form.Label>Item</Form.Label>
            <Form.Control defaultValue={"Left Pillar"} />
          </Form.Group>

          <Form.Group as={Col} className="mb-2" controlId="formQuantity">
            <Form.Label>Cost</Form.Label>
            <Form.Control defaultValue={getCost()} disabled />
          </Form.Group>

          {/* <Form.Group as={Col} className="mb-2" controlId="formGridJobName">
            <Form.Label>Cost</Form.Label>
            <Form.Control disabled />
          </Form.Group> */}
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
        <Row></Row>
        <Table striped bordered hover>
          <thead>
            <MatsHeader />
          </thead>
          <tbody id="tableRows">
            { items.map((item) => 
                <Item {...item} />
            )}
            <ItemInput />
          </tbody>
        </Table>
        <Button variant="light" onClick={addMats}>Add Material</Button>
        <Table striped bordered hover>
          <thead>
            <TaskHeader />
          </thead>
          <tbody id="tableRows">
            { tasks.map((row) => 
                <Task {...row} />
            )}
            <TaskInput />
          </tbody>
        </Table>
        <Button variant="light" onClick={addTask}>
          Add Task
        </Button>
      </Form>
      
      <Row className="float-end">
        <Button href="/accounting/estimate/:id" variant="primary" type="submit">
          Save
        </Button>
      </Row>
    </Container>
  )
}

export default Details;





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