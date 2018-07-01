import React from 'react';

import { Input } from 'reactstrap';
import Taskedit from './Taskedit';
import Taskbutton from './Taskbutton';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/fontawesome-free-solid'
import '../style/Addtask.css'

class Addtask extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isFocus: false
    }
  }

  toggleFocus() {
    this.setState({isFocus: !this.state.isFocus})
  }

  render () {
    return (
      <div className="addtask">
        <div className="addtask-top">
          <FontAwesomeIcon icon={faPlus} size="2x" color="grey" className="icon-plus" />
          <Input className="addtask-input" placeholder="Add Task" 
          onFocus={this.toggleFocus.bind(this)} />
        </div>
          {this.state.isFocus ? 
          <div style={{ padding: '16px 0px 0px 32px', backgroundColor: '#f2f2f2', borderTop: "1px solid grey"}}>
            <Taskedit />
            <Taskbutton/>
          </div>:''}
        
      </div>
    )
  }
}

export default Addtask