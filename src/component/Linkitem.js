import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroupItem, ListGroupItemHeading, ListGroupItemText } from "reactstrap";
import '../style/Linkitem.css'

const Linkitem = (props) => (
  <ListGroupItem action>
    <Link to={props.enable ? `/${props.id}` : ''}>
      <ListGroupItemHeading>
          第{props.index + 1}周
      </ListGroupItemHeading>
      <ListGroupItemText>
        {props.theme}
      </ListGroupItemText>
    </Link>
  </ListGroupItem>
)

export default Linkitem