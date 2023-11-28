import React from 'react';
import Header from './components/Header';
// import {Link} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Gantt, Task, EventOption, StylingOption, ViewMode, DisplayOption } from 'gantt-task-react';
import "gantt-task-react/dist/index.css";

import { faker } from '@faker-js/faker';
import FakeData from './components/fakedata';

const Tasks = () => {


// function fakeDates(start, end) {
//   return faker.date.between({from:'2023-'+start+'T00:00:00.000Z',to:'2023-'+end+'T00:00:00.000Z'});
// }


let t_ids = ['t1', 't2', 't3', 't4', 't5','t6','t7','t8','t9','t10'] 
let index = 0;
let day = 10;

let tasks: Task[] = Array.from(Array(8), (x) => {
  let date = faker.date.between({from:'2023-02-'+day+'T00:00:00.000Z',to:'2023-02-'+day+'T00:00:00.000Z'})
  day += Math.floor(Math.random()*5);
  index++;

  return {
    "start":date,
    "end":faker.date.soon({ days: 10, refDate: date }),
    "id": t_ids[index], // faker.database.mongodbObjectId(),
    "name": faker.company.buzzNoun(),
    "dependencies": [t_ids[Math.floor(Math.random()*6)]],
    "type": 'project',
    "progress": Math.floor(Math.random()*100),
    'isDisabled': true,
    displayOrder: index + 1,
    'styles': { progressColor: '#ffbb54', progressSelectedColor: '#ff9e0d' },
  }
});

const handleClick = (task: Task) => {
  console.log("On Click event Id:" + task.id);
};

const handleExpanderClick = (task: Task) => {
  // setTasks(tasks.map(t => (t.id === task.id ? task : t)));
  console.log("On expander click Id:" + task.id);
};




  return (
    <div> 
      <Header />
      
      <Container fluid="md">
        <Row>
          <Col>
            <h1>{faker.company.buzzNoun()}</h1>
          </Col>
          <Col>
            <Gantt 
              tasks={tasks} 
              onClick={handleClick}
              onDoubleClick={handleClick}
              onDelete={handleClick}
              onExpanderClick={handleExpanderClick}
              viewMode={ViewMode.Day}
              // viewDate={}
              // columnWidth={columnWidth}
            />
          </Col>
        </Row>


      </Container>
    </div>
  );
};

export default Tasks;
