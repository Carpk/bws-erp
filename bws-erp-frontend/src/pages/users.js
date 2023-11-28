import React from 'react';
import Header from './components/Header';
// import ReactDOM from 'react-dom';
import {Link} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';

import { faker } from '@faker-js/faker';



const Users = () => {

  return (
    <div>
      <Header />
      <Container fluid="md">
        <Row>
          <Col>
            <h1>Users</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>words</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Users;