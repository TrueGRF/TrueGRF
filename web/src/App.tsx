import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Tab from 'react-bootstrap/Tab';

import HeaderWIP from './HeaderWIP';
import GenerateGRF from './GenerateGRF';

function Main() {
    return (
        <Container>
            <Row>
                <HeaderWIP />
            </Row>
            <Row>
                <Col>
                    <h1 className="display-6">Welcome to TrueGRF - <small className="text-muted">NewGRFs made easy.</small></h1>
                    <p className="lead">Make a selection below to modify your NewGRF.</p>
                </Col>
            </Row>
            <Row>
                <GenerateGRF />
            </Row>
            <Tab.Container id="categories" defaultActiveKey="generic">
                <Row>
                    <Col sm={3}>
                        <ListGroup>
                            <ListGroup.Item variant="light" action eventKey="generic">
                                <h5 className="mb-1">Generic</h5>
                                <small>GRF ID, Description, etc</small>
                            </ListGroup.Item>
                            <ListGroup.Item variant="light" action eventKey="industries">
                                <h5 className="mb-1">Industries</h5>
                                <small>Create new industries or modified existing</small>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col sm={8}>
                        <Tab.Content>
                            <Tab.Pane eventKey="generic">
                                Test
                            </Tab.Pane>
                            <Tab.Pane eventKey="industries">
                                Test2
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </Container>
    )
}

ReactDOM.render(
    <React.StrictMode>
        <Main />
    </React.StrictMode>,
    document.getElementById('root')
);
