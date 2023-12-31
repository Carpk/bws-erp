import React from 'react';
import Header from './components/Header';
// import ReactDOM from 'react-dom';
import {Link} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';

import { faker } from '@faker-js/faker';

import Data from './components/fakedata';




const Projects = () => {
  let projHeader = ["Project", "Lead", "Manager", "Final Date", "Status"]
  let proj = Data.projects.filter(p => p.status !== "estimate") 
  
  let i = 0

  const ProjHeader = () =>
    React.createElement("thead", null,
      React.createElement("tr", null,
        projHeader.map((head) =>
          React.createElement("th", null, head)
        )
      )
    )

  
  const Project = ({id, name, lead, manager, date, status}) => 
    React.createElement("tr", null, 
      React.createElement("td", { key: i },
        <Link to={`/project/${id}`}>{name}</Link>
      ),
      React.createElement("td", { key: i }, lead),
      React.createElement("td", { key: i }, manager),
      React.createElement("td", { key: i }, date),
      React.createElement("td", { key: i }, status)
    )

  return (
    <Container fluid="md">
      <Row>
        <Col>
          <h1>Projects</h1>
        </Col>
      </Row>
      <Table striped bordered hover>
        <ProjHeader />
        <tbody>
          { proj.map((proj) => 
            <Project {...proj}/>
          )}
        </tbody>
      </Table>
    </Container>
  );
};

export default Projects;


            // return (
            //   <tr>
            //     <td>
            //       <Link to={`/project/${proj.id}`}>
            //         {proj.name}
            //       </Link>
            //     </td>
            //     <td>{proj.company}</td>
            //     <td>{proj.manager}</td>
            //     <td>{proj.date}</td>
            //     <td>{proj.status}</td>
            //   </tr>
            // ) 


// ORIGINAL FAKE DATA:
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