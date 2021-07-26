import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Iframe from 'react-iframe';
import 'bootstrap/dist/css/bootstrap.min.css';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

import CategoryGeneric from './CategoryGeneric';
import CategoryIndustries from './CategoryIndustries';
import GenerateGRF from './GenerateGRF';
import HeaderWIP from './HeaderWIP';

function Main() {
    const [radioValue, setRadioValue] = useState('disabled');

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
                <GenerateGRF radioValue={radioValue} />
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
                                <small>Create or modify industries</small>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col>
                        <Tab.Content>
                            <Tab.Pane eventKey="generic">
                                <CategoryGeneric />
                            </Tab.Pane>
                            <Tab.Pane eventKey="industries">
                                <CategoryIndustries radioValue={radioValue} setRadioValue={setRadioValue} />
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
            <Row>
                <Col>
                    <Iframe url="openttd.html" width="1280px" height="1024px" id="game" />
                </Col>
            </Row>
        </Container>
    )
}

ReactDOM.render(
    <React.StrictMode>
        <Main />
    </React.StrictMode>,
    document.getElementById('root')
);
