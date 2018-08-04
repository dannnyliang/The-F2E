import React from 'react';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faSquare, faCheckSquare } from '@fortawesome/fontawesome-free-solid';
import { faStar, faEdit } from '@fortawesome/fontawesome-free-regular';

import Taskinfo from './Taskinfo';
import Taskbutton from './Taskbutton';
import Taskedit from './Taskedit';
import '../style/Task.css';

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false,
      isStar: false,
      isDone: false,
      title: 'HAhaha',
      deadline: '',
      file: '',
      comment: '',
    };

    this.toggleEdit = this.toggleEdit.bind(this);
    this.toggleStar = this.toggleStar.bind(this);
    this.toggleDone = this.toggleDone.bind(this);
  }

  toggleEdit() {
    this.setState({ isEdit: !this.state.isEdit });
  }
  toggleStar() {
    this.setState({ isStar: !this.state.isStar });
  }
  toggleDone() {
    this.setState({ isDone: !this.state.isDone });
  }

  render() {
    const taskbottom = this.state.isEdit ? (
      <div>
        <Taskedit />
        <Taskbutton />
      </div>
    ) : (
      <Taskinfo 
        deadline={this.state.deadline} 
        file={this.state.file} 
        comment={this.state.comment} 
      />
    );

    return (
      <div 
        className="task-block"
        style={this.state.isStar ? { backgroundColor: '#FFF2DC' } : { backgroundColor: '#f2f2f2' }}
      >
        <div className="task-top">
          <FontAwesomeIcon 
            size="2x" 
            className="task-checkbox"
            icon={this.state.isDone ? faCheckSquare : faSquare}
            color={this.state.isDone ? '#4A90E2' : '#fff'}
            onClick={this.toggleDone} 
          />

          {this.state.isDone ?
            <del>{this.state.title}</del> : <p>{this.state.title}</p>}

          <FontAwesomeIcon 
            icon={faStar} 
            size="lg" 
            className="task-star"
            color={this.state.isStar ? '#F5A623' : 'black'} 
            onClick={this.toggleStar} 
          />
          <FontAwesomeIcon 
            icon={faEdit} 
            size="lg" 
            className="task-pencil"
            color={this.state.isEdit ? '#4A90E2' : 'black'} 
            onClick={this.toggleEdit} 
          />
        </div>
        {taskbottom}
      </div>
    );
  }
}

export default Task;
