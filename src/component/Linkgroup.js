import React from 'react';
import Linkitem from './Linkitem';
import { signUpTotal, stageCheck } from '../api';
import { Container, Row, Col, Jumbotron, ListGroup } from 'reactstrap';
import '../style/Linkgroup.css';

class Linkgroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signuptotal: 0,
      challenges: [
        {
          id: 'week1',
          status: true,
          theme: 'ToDoList',
        },
        {
          id: 'week2',
          status: true,
          theme: 'Filter',
        },
        {
          id: 'week3',
          status: true,
          theme: 'Admin Order',
        },
        {
          id: 'week4',
          status: true,
          theme: 'Product Gallery',
        },
        {
          id: 'week5',
          status: true,
          theme: 'Comic Viewer',
        },
        {
          id: 'week6',
          status: true,
          theme: 'Validation',
        },
        {
          id: 'week7',
          status: false,
          theme: '???',
        },
        {
          id: 'week8',
          status: false,
          theme: '???',
        },
        {
          id: 'week9',
          status: true,
          theme: 'Skill Tree',
        },
      ],
    };
  }

  componentWillMount() {
    const email = {
      email: 'youchenliang@gmail.com',
    };
    signUpTotal()
      .then(res => this.setState({ signuptotal: res.total }));

    stageCheck(email)
      .then((res) => {
        const passStage = this.state.challenges.map((item, i) => Object.assign(item, res[i]));
        this.setState({ challenges: passStage });
      });
  }

  render() {
    const linkgroup = this.state.challenges.map((week, i) => (
      <Linkitem
        key={i}
        index={i}
        id={week.id}
        enable={week.status}
        theme={week.theme}
        timestamp={week.timeStamp}
        tag={week.tag}
      />
    ));

    return (
      <Container>
        <Jumbotron>
          <h1>The F2E - 前端修練精神時光屋</h1>
          <p>活動說明 : <a href="https://github.com/hexschool/TheF2E">https://github.com/hexschool/TheF2E</a></p>
          <p>目前參與人數 : {this.state.signuptotal}</p>
        </Jumbotron>

        <Row className="mb-5">
          <Col md={{ size: 10, offset: 1 }}>
            <ListGroup>
              {linkgroup}
            </ListGroup>
          </Col>
        </Row>

      </Container>
    );
  }
}

export default Linkgroup;
