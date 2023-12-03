import React from 'react';
import { useState } from 'react';
// import Header from './components/Header';
import ReactDOM from 'react-dom';
// import {Link} from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';


import Data from './components/fakedata';
import ToolBar from './components/ToolBar';
import ProjTable from './components/ProjTable';
import ItemTable from './components/ItemTable';

// const { id } = useParams()







// const data = Data.projects[0]
// const details = Data.details.filter((detail) => 
//   data.details.includes(detail.id))




  
const Project = () => {
  const [view, setView] = useState("proj")
  let rowid = 0
  const data = Data.projects[0]
  let navigate = useNavigate(); 
  const details = Data.details.filter((detail) => 
    data.details.includes(detail.id))


  const HeaderRow = () =>
  React.createElement("tr", null,
    React.createElement("th", { key: "item" }, "Item"),
    React.createElement("th", { key: "mats" }, "Materials"),
    React.createElement("th", { key: "mhrs" }, "Hours"),
    React.createElement("th", { key: "paint" },"Paint"),
    React.createElement("th", { key: "phrs" }, "Hours"),
    React.createElement("th", { key: "mgmt" }, "Mgmt"),
    React.createElement("th", { key: "nstll" },"Install"),
    React.createElement("th", { key: "labr" }, "Labor"),
    React.createElement("th", { key: "ctrl" }, "")
  )


const DetailRows = ( detail ) =>
  React.createElement("tr", null,
    React.createElement("td", { key: ++rowid }, detail.name),
    React.createElement("td", { key: ++rowid }, 0.00),
    React.createElement("td", { key: ++rowid }, 0.00),
    React.createElement("td", { key: ++rowid }, 0.00),
    React.createElement("td", { key: ++rowid }, 0.00),
    React.createElement("td", { key: ++rowid }, 0.00),
    React.createElement("td", { key: ++rowid }, 0.00),
    React.createElement("td", { key: ++rowid }, 0.00),
    React.createElement("td", { key: ++rowid }, 
      <a href="#" onClick={() => editItem(detail.id)}>⚙</a>
    )
  )


  const ProjDiv = () =>
    <Container fluid="md">
      
      <Form>
        <Row>
          <Form.Group as={Col} className="mb-3" controlId="formGridJobName">
            <Form.Label>Job Name</Form.Label>
            <Form.Control defaultValue={data.job_name} />
          </Form.Group>
          <Form.Group as={Col} className="mb-3" controlId="formGridPassword">
            <Form.Label>Bid Number</Form.Label>
            <Form.Control defaultValue={data.bid_number} />
          </Form.Group>
          <Form.Group as={Col} className="mb-3" controlId="formGridJobNumber">
            <Form.Label>Job Number</Form.Label>
            <Form.Control defaultValue={data.job_number} />
          </Form.Group>
          <Form.Group as={Col} className="mb-3" controlId="formGridPO">
            <Form.Label>PO#</Form.Label>
            <Form.Control defaultValue={data.purchase_order}/>
          </Form.Group>
        </Row>

        <Table striped bordered hover>
          <thead>
            <HeaderRow />
          </thead>
          <tbody id="tableRows">
            {details.map((detail, i) =>
              <DetailRows {...detail}/>
            )}
            <tr>
              <td>Total</td>
              <td>0.00</td>
              <td>0.00</td>
              <td>0.00</td>
              <td>0.00</td>
              <td>0.00</td>
              <td>0.00</td>
              <td>0.00</td>
              <td></td>
            </tr>
          </tbody>
        </Table>
      </Form>
    </Container>


  function toggleView() {
    navigate('/accounting/invoice/:id/item')

    // const layout = (view == "proj") ? "item" : "proj"
    // setView(layout)
  }

  function editItem(id) {

  }

  return (
    <Container fluid="md">
      <ToolBar />
      <Row>
        <ProjDiv /> 
      </Row>
      <Row>
        <Col>
          <Button variant="light" onClick={() => toggleView()}>
            New item
          </Button>
        </Col>
      </Row>
      <Row className="float-end">
        <Button variant="primary" onClick={() => toggleView()} type="submit">
          Save
        </Button>
      </Row>
      
    </Container>
  );
};

export default Project;







{/* <Row className="float-end">
  <Button variant="primary" type="submit">
    Save
  </Button>
</Row> */}



{/* <Form>
<Row>
  <Form.Group as={Col} className="mb-3" controlId="formGridJobName">
    <Form.Label>Job Name</Form.Label>
    <Form.Control defaultValue={data.job_name} />
  </Form.Group>

  <Form.Group as={Col} className="mb-3" controlId="formGridPassword">
    <Form.Label>Bid Number</Form.Label>
    <Form.Control defaultValue={data.bid_number} />
  </Form.Group>

  <Form.Group as={Col} className="mb-3" controlId="formGridJobNumber">
    <Form.Label>Job Number</Form.Label>
    <Form.Control defaultValue={data.job_number} />
  </Form.Group>

  <Form.Group as={Col} className="mb-3" controlId="formGridPO">
    <Form.Label>PO#</Form.Label>
    <Form.Control defaultValue={data.purchase_order}/>
  </Form.Group>
</Row>

<Table striped bordered hover>
  <thead>
    <HeaderRow />
  </thead>
  <tbody id="tableRows">
    <DetailRows details={details}/>
    <tr>
      <td>Total</td>
      <td>0.00</td>
      <td>0.00</td>
      <td>0.00</td>
      <td>0.00</td>
      <td>0.00</td>
      <td>0.00</td>
      <td>0.00</td>
      <td></td>
    </tr>
  </tbody>
</Table>
<Button href="/accounting/invoice/:id/item/new" variant="light">New item</Button>

</Form> */}





{/* <Modal size="xl" show={show} onHide={handleClose}>
<Modal.Header closeButton>
  <Modal.Title>Modal heading</Modal.Title>
</Modal.Header>
<Modal.Body>
  Welcome to the modal!
</Modal.Body>
<Modal.Footer>
  <Button variant="secondary" onClick={handleClose}>
    Close
  </Button>
  <Button variant="primary" onClick={handleClose}>
    Save Changes
  </Button>
</Modal.Footer>
</Modal> */}





// const projects = Array.from(Array(8), (x) => {
//   const date = faker.date.between({ from: '2023-03-15T00:00:00.000Z', to: '2023-04-07T00:00:00.000Z' })
//   const status = ["good","good","good","postponed","delayed","delayed","canceled"]
  
//   return {
//     "id": faker.database.mongodbObjectId(),
//     "name": faker.company.buzzNoun(),
//     "company": faker.company.name(),
//     "manager": faker.person.firstName(),
//     "link": faker.internet.url(),
//     "date": date.toDateString(),
//     "status": status[ Math.floor(Math.random()*7)]
//   }
// });
