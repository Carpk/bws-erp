import React from 'react';
import Header from './components/Header';
// import ReactDOM from 'react-dom';
import {Link} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';

import { faker } from '@faker-js/faker';



const projects = Array.from(Array(8), (x) => {
  const date = faker.date.between({ from: '2023-03-15T00:00:00.000Z', to: '2023-04-07T00:00:00.000Z' })
  const status = ["good","good","good","postponed","delayed","delayed","canceled"]
  
  return {
    "id": faker.database.mongodbObjectId(),
    "name": faker.company.buzzNoun(),
    "company": faker.company.name(),
    "manager": faker.person.firstName(),
    "link": faker.internet.url(),
    "date": date.toDateString(),
    "status": status[ Math.floor(Math.random()*7)]
  }
});






const Projects = () => {
  

  return (
    <div>
      <Header />
      
      <Container fluid="md">
        <Row>
          <Col>
            <h1>Project</h1>
    
          </Col>
        </Row>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Project</th>
              <th>Organization</th>
              <th>Manager</th>
              <th>Due Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            { projects.map((proj) => {        
              return (
                <tr>
                  <td>
                    <Link to={`/project/${proj.id}`}>
                      {proj.name}
                    </Link>
                  </td>
                  <td>{proj.company}</td>
                  <td>{proj.manager}</td>
                  <td>{proj.date}</td>
                  <td>{proj.status}</td>
                </tr>
              ) 
            })}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default Projects;