import React from 'react';
import Header from './components/Header';
// import ReactDOM from 'react-dom';
import {Link} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Chart } from "react-google-charts";
import ListGroup from 'react-bootstrap/ListGroup';

import { faker } from '@faker-js/faker';
import Data from './components/fakedata';

const Home = () => {
  const orderHeader = ["Item","Date","Status"]
  const data = [
    ["Jobs", "You", "Shop Avg"],
    ["Shop", 4, 8],
    ["Trolls", 24, 26],
    ["Harley", 12, 6],
  ];
  let i = 0


  const OrderHeader = () =>
    React.createElement("thead", null, 
      React.createElement("tr", null, 
        orderHeader.map((title, i) =>
          React.createElement("th", { key: i }, title),
        )
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
          <Card>
            <Card.Body>
              <Card.Title>At a glance</Card.Title>
              <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
              <Card.Text>
                <h4>Trolls</h4>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Card.Link href="/accounting/users">users</Card.Link>
            </Card.Body>
          </Card>
          <ul>
            <li>
              <Card.Link href="/accounting/invoice/:id">Taco Jims</Card.Link>
            </li>
            <li>
              <Card.Link href="/accounting/invoice/:id">Jim Dean</Card.Link>
            </li>
            <li>
              <Card.Link href="/accounting/invoice/:id">Harley Davison</Card.Link>
            </li>
          </ul>
        </Col>
        <Col>
          <Card>
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
                Let us know whne you will be out.
              </Card.Text>
              <Button href="#"  variant="primary">Call Out Form</Button>
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
                      (item.status != "Estimate") ? <Order {...item} /> : null
                    )}
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
              <Card.Title>Projects</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Current completion rates</Card.Subtitle>
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
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Employees</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Manage Employees</Card.Subtitle>
              <Card.Text>
                <Table striped bordered hover size="sm">
                  Assign employees to projects
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
              <Card.Title>Projects</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Current completion</Card.Subtitle>
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
                      if (item.status == "Requested")   
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