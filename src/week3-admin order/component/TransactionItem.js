import React from 'react';
import { Row, Col, Popover, PopoverBody } from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

class TransactionItem extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ popoverOpen: !this.state.popoverOpen });
  }

  render() {
    const amount = this.props.amount.replace(/(\d{1,3})(?=(\d{3})+$)/g, $1 => `${$1},`);
    return (
      <Row className="trans-item d-flex justify-content-between align-items-center">
        <Col md="2" className="p-0">
          <FontAwesomeIcon icon={this.props.brand} className="fa-3x" />
        </Col>
        <Col md="5">
          <span className="text-secondary">{this.props.description}</span>
        </Col>
        <Col md="3" className="text-right">
          <span className="font-weight-bold">{amount}</span>
        </Col>
        <Col md="2" className={`p-0 text-right ${this.props.arrow.iconName}`}>
          <FontAwesomeIcon icon={this.props.arrow} />
          <span 
            id={this.props.id} 
            onMouseEnter={this.toggle} 
            onMouseLeave={this.toggle}
          >
            {this.props.percent}
          </span>
          <Popover 
            className="bg-dark" 
            placement="top" 
            isOpen={this.state.popoverOpen} 
            target={this.props.id} 
            toggle={this.toggle}
          >
            <PopoverBody className="text-center">
              <div className="text-white">
                INCREASE <span className={this.props.arrow.iconName}>899</span> VIEWS
              </div>
              <div className="text-grey">
                last week: 44,937
              </div>
            </PopoverBody>
          </Popover>
        </Col>
      </Row>
    );
  }
}

export default TransactionItem;
