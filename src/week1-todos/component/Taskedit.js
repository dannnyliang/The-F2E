import React from 'react';

import { Form, FormGroup, Input } from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/fontawesome-free-solid';
import { faCalendarAlt, faFile, faComment } from '@fortawesome/fontawesome-free-regular';

import '../style/Taskedit.css';

const TaskEdit = () => (
  <div className="task-edit">
    <Form>
      <FormGroup>
        <div className="form-group-label">
          <FontAwesomeIcon icon={faCalendarAlt} size="lg" />
          <p>Deadline</p>
        </div>
        <div className="calendar-input">
          <Input type="text" placeholder="yyyy/mm/dd" />
          <Input type="text" placeholder="hh:mm" />
        </div>
      </FormGroup>

      <FormGroup>
        <div className="form-group-label">
          <FontAwesomeIcon icon={faFile} size="lg" />
          <p>File</p>
        </div>
        {/* <Input type="file" /> */}
        <FontAwesomeIcon icon={faPlusSquare} size="2x" color="grey" />
        
      </FormGroup>

      <FormGroup>
        <div className="form-group-label">
          <FontAwesomeIcon icon={faComment} size="lg" />
          <p>Comment</p>
        </div>
        <Input type="textarea" placeholder="Type your memo here" />
      </FormGroup>

    </Form>

    {/* <Taskbutton /> */}
  </div>
);

export default TaskEdit;
