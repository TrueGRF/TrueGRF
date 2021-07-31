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
import GenerateGRF from './GenerateGRF';
import HeaderWIP from './HeaderWIP';

import IndustryList from './IndustryList';
import IndustryItem from './IndustryItem';

const startIndustries = [
    {
        id: 0,
        available: true,
        name: "Coal Mine",
        layout: [
            [
                [ 0x05, 0x06, 0x03 ],
                [ 0xfd, 0x00, 0xfd ],
                [ 0xfd, 0x02, 0x03 ],
            ],
            [
                [ 0x03, 0x03, 0x00 ],
                [ 0x04, 0x00, 0x02 ],
                [ 0x04, 0x02, 0x04 ],
            ],
        ],
        placement: "custom",
        placementCustom: [
            {
              "id": "editor_0",
              "type": "number",
              "position": {
                "x": 195,
                "y": 315
              },
              "data": {
                "value": "64"
              }
            },
            {
              "id": "editor_1",
              "type": "variable",
              "position": {
                "x": 210,
                "y": 225
              },
              "data": {
                "value": "distance-to-town"
              }
            },
            {
              "id": "editor_2",
              "type": "compare",
              "position": {
                "x": 465,
                "y": 270
              },
              "sourcePosition": "right",
              "targetPosition": "left",
              "data": {
                "value": "gt"
              }
            },
            {
              "id": "editor_3",
              "type": "output",
              "position": {
                "x": 690,
                "y": 240
              },
              "sourcePosition": "right",
              "targetPosition": "left",
              "data": {}
            },
            {
              "source": "editor_2",
              "sourceHandle": null,
              "target": "editor_3",
              "targetHandle": null,
              "animated": true,
              "id": "reactflow__edge-editor_2null-editor_3null"
            },
            {
              "source": "editor_1",
              "sourceHandle": null,
              "target": "editor_2",
              "targetHandle": "a",
              "animated": true,
              "id": "reactflow__edge-editor_1null-editor_2a",
              "type": "default"
            },
            {
              "source": "editor_0",
              "sourceHandle": null,
              "target": "editor_2",
              "targetHandle": "b",
              "animated": true,
              "id": "reactflow__edge-editor_0null-editor_2b",
              "type": "default"
            }
          ],
    },
    {
        id: 1,
        available: true,
        name: "Power Station",
        layout: [
            [
                [ 0x07, 0x07, 0x07, 0x0a ],
                [ 0x09, 0x08, 0x08, 0x0a ],
            ]
        ],
        placement: "anywhere",
        placementCustom: [],
    },
]

function Main() {
    const [industries, setIndustries] = useState(startIndustries);
    const [industryId, setIndustryId] = useState(0);

    const [generic, setGeneric] = useState({
        name: "TrueGRF",
        description: "Your first NewGRF with TrueGRF",
    });
    const [tab, setTab] = useState("generic");

    function onChangeIndustry(id: number) {
        //setLayoutSelection(0);
        setIndustryId(id);
    }

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
                                <Row>
                                    <Col sm={3}>
                                        <IndustryList onChangeIndustry={onChangeIndustry} />
                                    </Col>
                                    <Col>
                                        <IndustryItem industry={industries[industryId]} setIndustry={(e: React.SetStateAction<any>) => setIndustries((prevState) => { let newState = [...prevState]; newState[industryId] = e(prevState[industryId]); return newState } )} />
                                    </Col>
                                </Row>
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
