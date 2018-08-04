import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import '../style/Linkitem.css';

const Linkitem = (props) => {
  let timestamp;
  let date;
  let time;
  if (props.timestamp) {
    timestamp = new Date(props.timestamp);
    date = `${timestamp.getFullYear()}/${timestamp.getMonth() + 1 < 10 ? '0' : ''}${timestamp.getMonth() + 1}/${timestamp.getDate() < 10 ? '0' : ''}${timestamp.getDate()}`;
    time = `${timestamp.getHours() < 10 ? '0' : ''}${timestamp.getHours()}:${timestamp.getMinutes() < 10 ? '0' : ''}${timestamp.getMinutes()}:${timestamp.getSeconds() < 10 ? '0' : ''}${timestamp.getSeconds()}`;
  }
  return (
    <ListGroupItem action>
      <Link to={props.enable ? `/${props.id}` : ''}>
        <ListGroupItemHeading>
          第{props.index + 1}周
        </ListGroupItemHeading>
        <div className="d-flex justify-content-between">
          <ListGroupItemText>
            {props.theme}
          </ListGroupItemText>
          {props.timestamp ?
            <p className="m-0">
              完成時間: {date}  {time}
            </p> : ''}
        </div>
      </Link>
    </ListGroupItem>
  );
};

export default Linkitem;
