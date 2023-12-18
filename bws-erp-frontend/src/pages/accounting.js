import React from 'react';
import Header from './components/Header';
import {Link} from "react-router-dom";
// import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Data from './components/fakedata';

const Accounting = () => {
  return (
    <Container fluid="md">
      <Row>
        <Col>
          <h1>Accounting</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3>Projects</h3>
        </Col>
      </Row>
      <Row className='bottom-space'>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://placehold.co/600x400" />
            <Card.Body>
              <Card.Title>New Project</Card.Title>
              <Card.Text>
                Start a new project
              </Card.Text>
              <Button href="/accounting/estimate/new"  variant="primary">start new project</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md="8">
          <ListGroup>
            <ListGroup.Item><Link to={"./#"}>Cras justo odio</Link></ListGroup.Item>
            <ListGroup.Item><Link to={"./#"}>Dapibus ac facilisis in</Link></ListGroup.Item>
            <ListGroup.Item><Link to={"./#"}>Morbi leo risus</Link></ListGroup.Item>
            <ListGroup.Item><Link to={"./#"}>Porta ac consectetur ac</Link></ListGroup.Item>
            <ListGroup.Item><Link to={"./#"}>Vestibulum at eros</Link></ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Links</h2>
        </Col>
      </Row>
      <Row className='bottom-space'>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Users</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Card.Link href="/accounting/users">users</Card.Link>
              <Link to={`/accounting/users`}>users</Link>
            </Card.Body>
          </Card>
          
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Estimates</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">recent estimates</Card.Subtitle>
              <Card.Text>
                <ul>
                  { Data.projects.map((proj) => {      
                      if (!proj.production)   
                        return (
                          <li>
                            <Card.Link href={`/accounting/invoice/${proj.id}`}>{proj.job_name}</Card.Link>
                          </li>
                        ) 
                    })}
                </ul>
              </Card.Text>
              <Card.Link href="/accounting/invoice/new">New Invoice</Card.Link>
              <Card.Link href="/accounting/invoice/all">All invoices</Card.Link>
              {/* <Link to={`/accounting/invoice/new`}>invoices</Link> */} 
            </Card.Body>
          </Card>
        </Col>
        <Col>
        <Card>
            <Card.Body>
              <Card.Title>Projects</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">recent projects</Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Card.Link href="/accounting/projects">All projects</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>

  );
};

export default Accounting;