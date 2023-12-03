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
  const data = [
    ["Jobs", "You", "Shop Avg"],
    ["Shop", 4, 8],
    ["Trolls", 24, 26],
    ["Harley", 12, 6],
  ];




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
      <Row className='bottom-space'>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Projects</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
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
              <Card.Title>Your Orders</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
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
                      if (item.status != "Estimate")   
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
              {/* <Link to={`/accounting/invoice/new`}>invoices</Link> */}
            </Card.Body>
          </Card>
        </Col>
        <Col>
        <Card>
            <Card.Body>
              <Card.Title>Accounting/Project</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
              <Card.Text>
                <ListGroup>
                  { Data.projects.map((proj) => {        
                    return (
                      <a href={`/accounting/invoice/${proj.id}`}>
                        <ListGroup.Item>{proj.job_name}</ListGroup.Item>
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