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

const startIndustries = [
    {
        id: 0,
        available: true,
        name: "Coal Mine",
    },
    {
        id: 1,
        available: true,
        name: "Power Station",
    },
]

function Main() {
    const [industries, setIndustry] = useState(startIndustries);
    const [generic, setGeneric] = useState({
        name: "TrueGRF",
        description: "Your first NewGRF with TrueGRF",
    });
    const [tab, setTab] = useState("generic");

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
                <GenerateGRF industries={industries} generic={generic} openGame={() => setTab("test") } />
            </Row>
            <Tab.Container id="categories" activeKey={tab} onSelect={(eventKey) => setTab(eventKey || "generic") }>
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
                            <ListGroup.Item variant="light" action eventKey="test">
                                <h5 className="mb-1">Test</h5>
                                <small>Try your NewGRF in-game</small>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col>
                        <Tab.Content>
                            <Tab.Pane eventKey="generic">
                                <CategoryGeneric generic={generic} setGeneric={setGeneric} />
                            </Tab.Pane>
                            <Tab.Pane eventKey="industries">
                                <CategoryIndustries industries={industries} setIndustry={setIndustry} />
                            </Tab.Pane>
                            <Tab.Pane eventKey="test">
                                <p className="lead">Test your NewGRF in-game. Press the green button first, go to NewGRF settings in-game and activate your GRF!</p>
                                <Iframe url="openttd.html" width="966px" height="800px" id="game" />
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
            <Row>
                <Col>

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
