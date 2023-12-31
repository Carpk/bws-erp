import React from 'react';
import { useState, useRef } from 'react';
// import {Link} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Gantt, Task, EventOption, StylingOption, ViewMode, DisplayOption } from 'gantt-task-react';
import "gantt-task-react/dist/index.css";

// import { faker } from '@faker-js/faker';
import Data from './components/fakedata';




// let taskData = Data.tasks
let proj = Data.projects[0]


const Tasks = () => {
  let t_ids = ['t1', 't2', 't3', 't4', 't5','t6','t7','t8','t9','t10'] 
  const [taskData, setTasks] = useState(Data.tasks);
  // const  matsRef = useRef(null);
  let index = 0;
  let day = 10;

  let tasks: Task[] = taskData.map((task) => {
    // let date = faker.date.between({from:'2023-02-'+day+'T00:00:00.000Z',to:'2023-02-'+day+'T00:00:00.000Z'})
    day += Math.floor(Math.random()*5);
    index++;

    return {
      "start": new Date(task.dates.start+'T10:00:00.000Z'),
      "end":   new Date(task.dates.end+'T18:00:00.000Z'),
      "id": t_ids[index],
      "name": task.name,
      "dependencies": [t_ids[Math.floor(Math.random()*6)]],
      "type": 'project',
      "progress": Math.floor(Math.random()*100),
      'isDisabled': true,
      'displayOrder': index + 1,
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

  function updateTask(i) {
    console.log("task has changed on :", i )
    // taskData[i]
  }



  return (
    <Container fluid="md">
      <Row>
        <Col>
          <h1>{proj.name}</h1>
        </Col>
      </Row>
      <Row>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Task</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Depends On</th>
            </tr>
          </thead>
          <tbody>
            { taskData.map((t, i) =>
                React.createElement("tr", { key: "r"+i },
                  React.createElement("td", { key: "i"+i }, i),
                  React.createElement("td", { key: "n"+i }, t.name),
                  React.createElement("td", null, 
                    React.createElement("input", 
                      {key:"s"+i, type:"date", onChange:e => updateTask(i), defaultValue:t.dates.start})
                  ),
                  React.createElement("td", null, 
                    React.createElement("input", 
                      {key:"e"+i, type:"date", onChange:e => updateTask(i), defaultValue:t.dates.end})
                  ),
                  React.createElement("td", null, 
                    React.createElement("input", 
                      {key:"d"+i, type:"text", onChange:e => updateTask(i), defaultValue:"2,3" })
                  )
                )
              )
            }
          </tbody>
        </Table>
      </Row>
      <Row>
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
  );
};

export default Tasks;






// function fakeDates(start, end) {
//   return faker.date.between({from:'2023-'+start+'T00:00:00.000Z',to:'2023-'+end+'T00:00:00.000Z'});
// }