import React from 'react';
// import ReactDOM from 'react-dom';
// import {Link} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Chart } from "react-google-charts";
import ListGroup from 'react-bootstrap/ListGroup';


// import { faker } from '@faker-js/faker';
import Data from './components/fakedata';
import './home.css'

const Home = () => {
  const orderHeader = ["Item","Date","Status"]
  const data = [
    ["Projects", "You", "Shop Avg"],
    ["Shop", 4, 8],
    ["Trolls", 24, 26],
    ["Harley", 12, 6],
  ];
  let i = 0


  const alertClicked = () => {
    alert('You clicked the third ListGroupItem');
  };

  const OrderHeader = () =>
    React.createElement("thead", null, 
      React.createElement("tr", null, 
        orderHeader.map((title, i) =>
          React.createElement("th", { key: i }, title),
        )
      )
    )

  const CalledOuts = () =>
  React.createElement("Table", null, 
    React.createElement("thead", null, 
      React.createElement("th", null, "Today"),
      React.createElement("th", null, "Tomorrow"),
      React.createElement("th", null, "Day After")
    ),
    React.createElement("tr", null, 
      React.createElement("td", null, "Henry"),
      React.createElement("td", null, "Bill, Alice, Jeff"),
      React.createElement("td", null, "Frank, Marc")
    )
  )

  const Order = ({id, name, date, status}) =>
    React.createElement("tr", { key: i }, 
      React.createElement("td", { key: id }, name),
      React.createElement("td", { key: id }, date.request),
      React.createElement("td", { key: id }, status)
    )

  return (
    <Container fluid="md">
      <Row className='bottom-space'>
        <Col>
          <Card className='bottom-marg'>
            <Card.Body>
              <Card.Title><p>At a glance</p></Card.Title>
              <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
              <Card.Text>
                <p>Currently, you are scheduled to work on:
                <br></br>Painting - The Sound of Air</p>
                <p>Messages:
                <ul>
                  <li>HR needs your dental records</li>
                </ul>
                </p>

              </Card.Text>
              {/* <Card.Link href="/accounting/users">users</Card.Link> */}
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Called Out</Card.Title>
              <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
              <Card.Text>
                <Row>
                  <Col>
                    <Card>
                      <Card.Body>
                        <b>Today</b>
                        <ul>
                          <li>Jim</li>
                        </ul>
                      </Card.Body>
                    </Card>
                    </Col>
                  <Col>
                    <Card>
                      <Card.Body>
                        <b>Tomorrow</b>
                        <ul>
                          <li>Jim</li>
                          <li>George</li>
                        </ul>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    <Card>
                      <Card.Body>
                        <b>Day After</b>
                        <ul>
                          <li>Kyle</li>
                        </ul>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className='pad-graph'>
            <Card.Body>
              <Chart
                chartType="Bar"
                data={data}
                width="100%"
                height="325px"
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <h2>Basics</h2>
        <Col>
          <Card>
            <Card.Img variant="top" src="https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2019/03/12131106/doctor-appt-1024x512.png" />
            <Card.Body>
              <Card.Title>Call Out</Card.Title>
              <Card.Text>
                Let us know when you will be out.
              </Card.Text>
              <Button href="/callout"  variant="primary">Call Out Form</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Orders</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Your orders from last 15 days</Card.Subtitle>
              <Card.Text>
                <Table striped bordered hover size="sm">
                  <OrderHeader />
                  <tbody>
                    { Data.items.map((item) =>
                      (item.status !== "Estimate") ? <Order {...item} /> : null
                    )}
                  </tbody>
                </Table>
              </Card.Text>
              <Card.Link href="/orders">All orders</Card.Link>
              <Button href="/callout" className='float-end' variant="primary">Request Item</Button>
              {/* <Link to={`/accounting/estimate/new`}>invoices</Link> */}
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Projects</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Current overviews</Card.Subtitle>
              <Card.Text>
                    Trolls
                    <ProgressBar now={60} label={`progress ${60}%`} />
                    Harley
                    <ProgressBar now={18} label={`progress ${18}%`}/>
              </Card.Text>
              <Card.Link href="/projects">All projects</Card.Link>
              {/* <Link to={`/accounting/users`}>users</Link> */}
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <h2>Management</h2>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Projects</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Manage project timelines</Card.Subtitle>
              <Card.Text>
                <Card.Link href="/management/projects">Moonlighting</Card.Link>
                <br></br>chopping wood 
              </Card.Text>
              <Card.Text>
                <Card.Link href="/management/projects">Skynet</Card.Link>
                <br></br>digging holes
              </Card.Text>
              <Card.Link href="/management/projects">All projects</Card.Link>
              {/* <Link to={`/accounting/users`}>users</Link> */}
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Employees</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Manage Employees</Card.Subtitle>
              <Card.Text>
                <Table striped bordered hover size="sm">
                  Assign employees to projects
                  <ListGroup >
                    <ListGroup.Item action onClick={alertClicked}>
                      Bill G. <span className='float-end'>Taco Gun</span>
                    </ListGroup.Item>
                    <ListGroup.Item action onClick={alertClicked}>
                      Suzanne R. <span className='float-end'>unassigned</span>
                    </ListGroup.Item>
                  </ListGroup>
                </Table>
              </Card.Text>
              <Card.Link href="#">All Employees</Card.Link>
              {/* <Link to={`/accounting/estimate/new`}>invoices</Link> */}
            </Card.Body>
          </Card>
        </Col>
        <Col>
        <Card>
            <Card.Body>
              <Card.Title>IT Request</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">current bids and esimates</Card.Subtitle>
              <Card.Text>

              </Card.Text>
              <Card.Link href="#">IT help</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className='bottom-space'>
        <h2>Accounting</h2>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>TBA</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Currently under consideration</Card.Subtitle>
              <Card.Text>
                
              </Card.Text>
              <Card.Link href="/projects"></Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Orders</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Order Management</Card.Subtitle>
              <Card.Text>
                <Table striped bordered hover size="sm">
                  <thead>
                    <tr>
                      <th>Item</th>
                      <th>Date</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    { Data.items.map((item) => {      
                      if (item.status === "Requested")   
                        return (
                          <tr>
                            <td>{item.name}</td>
                            <td>{item.date.request}</td>
                            <td>{item.status}</td>
                          </tr>
                        ) 
                    })}
                  </tbody>
                </Table>
              </Card.Text>
              <Card.Link href="/orders">Go to orders</Card.Link>
              {/* <Link to={`/accounting/estimate/new`}>invoices</Link> */}
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Estimates</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">current bids and esimates</Card.Subtitle>
              <Card.Text>
                <ListGroup>
                  { Data.projects.map((proj) => {        
                    return (
                      <a href={`/accounting/estimate/${proj.id}`}>
                        <ListGroup.Item>{proj.name}</ListGroup.Item>
                      </a>
                    ) 
                  })}
                </ListGroup>
              </Card.Text>
              <Card.Link href="/accounting">Go to accounting</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;


// LISTING THE CALLEDOUT EMPLOYEES:
                {/* <Row>
                  <Col>
                    <b>Today</b>
                    <ul>
                      <li>Jim</li>
                    </ul>
                  </Col>
                  <Col>
                  <b>Tomorrow</b>
                    <ul>
                      <li>Jim</li>
                      <li>George</li>
                    </ul>
                  </Col>
                  <Col>
                  <b>Day After</b>
                    <ul>
                      <li>Kyle</li>
                    </ul>
                  </Col>
                </Row> */}