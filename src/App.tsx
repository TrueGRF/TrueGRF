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

import CargoList from './CargoList';
import CargoItem from './CargoItem';

const startCargoes = [
    {
        id: 1,
        available: true,
        name: "Coal",
        label: "COAL",
    },
    {
        id: 32,
        available: true,
        name: "Chemicals",
        label: "RFPR",
    },
]

const startIndustries = [
    {
        id: 0,
        available: true,
        name: "Coal Mine",
        description: "Built-in Industry",
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
        tiles: [],
    },
    {
        id: 1,
        available: true,
        name: "Power Station",
        description: "Built-in Industry",
        layout: [
            [
                [ 0x07, 0x07, 0x07, 0x0a ],
                [ 0x09, 0x08, 0x08, 0x0a ],
            ]
        ],
        placement: "anywhere",
        placementCustom: [],
        tiles: [],
    },
    {
        id: 2,
        available: true,
        name: "Chemical Plant",
        description: "",
        layout: [
            [
                [ 0xFE0001, 0xFE0000, 0xFE0002 ],
                [ 0xFE0003, 0xFE0004, 0xFE0005 ],
            ]
        ],
        placement: "anywhere",
        placementCustom: [],
        tiles: [
            {
                sprite: {
                    base64Data: "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",
                    width: 64,
                    height: 114,
                    left: -31,
                    top: -83,
                },
            },
            {
                sprite: {
                    base64Data: "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",
                    width: 64,
                    height: 114,
                    left: -31,
                    top: -83,
                },
            },
            {
                sprite: {
                    base64Data: "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",
                    width: 64,
                    height: 114,
                    left: -31,
                    top: -83,
                },
            },
            {
                sprite: {
                    base64Data: "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",
                    width: 64,
                    height: 114,
                    left: -31,
                    top: -83,
                },
            },
            {
                sprite: {
                    base64Data: "iVBORw0KGgoAAAANSUhEUgAAAEAAAAByCAYAAADj29d4AAAAAXNSR0IArs4c6QAACPBJREFUeF7tXC1w6lwQ3TdTEYGIQEQgEAhEBQJRgahAICoQCATiiYqKioqKTyAqKhAVFYgKxBOICkTFE08gEBUIRAUCgUBEICIiEBGd4Zu9YTPLbQIhCVCaZKZTSEOTc+7Zs3t/uL8g5sevmOOHhIBEATFnIAmBmAsgMcEkBJIQiDkDSQjEXABJFkhCIAmBmDOQhEDMBZBkgSQEkhCIOQNJCMRcAEkW2FsIXF9fL1VVdQQ2nU7h7e1tb/cLquS9PBCCL1tzMAwDDNOEsT4Hw7IgV21Ap9PZyz2/FQHVatUmwDTBWCxgPDdgZlrQ6r5CvV7/eQS4yT2dTgOGQDabBXrd6/XEOTq+Q1iEbo1NcucE9Pt9+I5hEZoAL7mXf19/ae3vGBaRECDLfVNry2FhmuZRfSE0AanczbJ++bkW76+vr7bcXUxwNBqt+cJd14BJtxH6OY6SBVRVXX6m66CoaVBUFVKaJp4jv+g5xsdNEFv7vqM716kZDUx9DpregcFgcBQSQt0UCUBJL9KNNQL04TvIqsDrsLUX8/kaAfPXa6GIkyUAWxzBUXrDVjbOKl9UQa2tjJ+ESvA6PBB8sViEp6enUI1xtBCgG/P8judkVSAB1r/7tcxQLpcdMk6WAALOCaDW5efoNbY2Vw1eiz8/hgA30Jgm5VDhIfPjCCBwHDgRIIfMSSugUCgsZblzQ/RLAH7m9vb29EwQCeBSlmW+jYBcLueY4LF6iaFYJwJ43CNoHAfAw40AAk1KoRA4eQJksDzmuSfwEKF64Jj9gcgUsMnp3ZSARFDrnywB2Wx2iZUcgqEeoZvbb/ICBI8DIydrggRYjm1OBCeHnycF4LmT9wDK7wgWVSETQO8RNK8eY2uCP8IDeBpMTHA1Crwp/fEymCvgx5ogkeGVBRITZLXAyWeBpBLc0OePZSUod5Bkc4yFCcokyMNniQkmJmgPj59sb1AeEKFOjyz12Jig18hvbLvDvBJ0Gy5PTDAxwR9kgkl3WOoOB6kE2+32kg+nH6KDFHpU2M+YIIHaVAniXAKtIqNhs3q9LoYQ9klEaALkcf6gY4K4rIaA0+TKIYiIjICw3eGXlxcxWIqgcYQZFUEE0Pzjzc1N5IqIjAAu8yCVIFcAHzmmYTSaRcLfURIRigB5YiRMJYhL6+igFsf3T88dmE118ad2+8FRSVREhCIA+wKbTHCXSpBCgLc0Kunxtgzvw6EgoHj1sEYGERZGEaEJiMoEkQA+eULgGr9vofunbSugWXPI+DdaiHNcLUGIiIyAsCaIHkCAyAz52gN8fVVtOGQQWas0KT6Lw+t4NJtN37h8X8jNiF4HnRjhD08dIiKA+wAvpuTz+DlqcQL+MlDEGsRdVp6GIkCY4GIO55q9CEqp2IWLnyzAASEANEG31WWyzPF/U4EkAxf3zmgwbJV94/J9oZcCcsYMLs/zMBhPQK3UnEWTXuOBbq2P52QFuClhG3B99HFYBWAIIAGamgI9Z6//C1MJupG8SerU4gS8Pn0E3TSgMzF8N6zvCzcpAAmwLipr8vcKBa8lMlj5ybWAV4zLwJXJG9SqVfj8+yi+n9TTTd+4fF+4CwF+PECeHsc0WKvVHBVxVydz8wLe7w+gXL4UBBxUAWiCL3ULCpcWNHv2w1ML79odHrSaYOQK4n/QGmK/wEejDygWC6C+t+FjNj1sCNTLClzl5/A8tBc+c4nvMjHy/ngPc9Mubob55tqSeopxkjq1OAGfzXTIZjOHVwCaIBHQ/Gu3XlATRALo6BdaIp35BT6bDSAzfhfyx+OgJuimAALi5gVeJsgJeNPuhAK2tbgMPKOmD+sBPA1iFpAB0/tNCySQLEx1RACGwXnG/urNQCkJc5Ol7gacSD+4CRY/TVEH8DTo1fI8k/A6Hyu60Z9HSFlndhilUuL3h3YlzI1i3At4WlXFF7ToeBhOfGc33xcGSYNkin6WyPAQQAIQ1EemKszNCzi2du256zza8OHueHVA2ErQLQT089KauWGMc6mXH+xu8sI6g4xmq6Z31zisCbYq8y91QBATfLn97XSqKATI1Qk4qgIPlDv+Ldu4E++51+DrSqXiW9m+L/QKAT91wLbZYfSAyUvLqQPUlO0FMnB6BiIASlWHAFqdSjPUfkkIRQBWgjc1zSmEvLKAMDaXdYR4fjabCRCyBxBYanXeAETAVDtfW6iN99cyeUgpn77nEkIRwAsht0rQjwniNZQGqRKkNMjjnRTBHZ9CxMiX1gowHFb3GwqhCYiqO+yWBailXz9roGZzcL3oiOwgH31FcxSGwGlewc8S/MgICNsd9goBbGU3ApAcboofWt5RAX430e/y20gJ2KUSlLvDvfsbUVBRJUhS9yKAsgH+xmt4GBxMAWiCXpXgrt1hzAKO8a0qQQInK4CqPvIAzAY4oEIdsYMRgCboVgdsK4V5GUwDoTwERNZYkSArgEgRZJWqwuz+zu2eaEkZOF/W6E7sL21sGyEOHAIPF/nlm6VAVN1h488zTHR7CozAywqo6CuVrPI/bcmDmzhkLkp2TbDqSInPjj5A799vxBiIAAQ/mM7AzOQdAngaJClv6g67eQCmPxzT42mQK6CSnawlAE4AbuKAB27kgAd2p3Gvgr0QUMuoS3xINKrFOWwdEdq0TG7WfnQ2XEJS04riEMDzvFDGakG222ZM6WJTzFNyArbJH68PpIBxJ7u8/W8uHhYPdO9SoQCYj/0OiXHgtNPUa1eBesOCXNru2GClR99GQ5Pbx1ZcgQhoVy6W2BqtsQ5UCFEXFs9P8xd2PK7kyBVgdttfttjCXabuyxeik0P5HD9/iG23AhHAQwBnhFABuF0WyRdDgxOBYHKT4VfgZxbcF2yyEDyGwMCwAj3Tmjns8CbwzS7TylIOgfPLMVBokEfQeh++qRpKfdAtfSHk0OADewAnmIjggDE0VH3iKIJifHZmQat89S2AE4bACpBV5kXEv9YMLn6b3w545ATQP3Qjgu8ruMu83Q6hHPjSyBQgPwH1E6i4+W7A96aAwE1xpA/uTQFHwrPzbRMCdqbsh30g9gr4HybESdzGxwa0AAAAAElFTkSuQmCC",
                    width: 64,
                    height: 114,
                    left: -31,
                    top: -83,
                },
            },
            {
                sprite: {
                    base64Data: "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",
                    width: 64,
                    height: 66,
                    left: -31,
                    top: -35,
                },
            },
            {
                sprite: {
                    base64Data: "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",
                    width: 64,
                    height: 66,
                    left: -31,
                    top: -35,
                },
            },
            {
                sprite: {
                    base64Data: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABCCAYAAADnodDVAAAAAXNSR0IArs4c6QAAAgdJREFUeF7tlaFvwkAUxl8TBAJRcaKiAjExgZiYmJyomEAgEBMIxAR/AGICiUBOTEwgEBMTiMkJRAViYnISMYGoQCAQc13eLSS3C6xbuNJe7iNBNC99fe/3fd+dR47/PMf3JwCAAxwngAg4bgAcgogAIuA4AUTAcQPgFkAEEAHHCSACjhsAtwAigAg4TgARcNwAuAUQAUTAcQKIgOMGwC2ACCACBRG4uJ2lfj2kl95poS4s5OO8/HqZ0CZJqNFuFgrhaABUxcX5ID2JLokdsP5Y0uso8opyxFEA6Iq/jR+p6vtUCwLyw0CGsChH5AbgN8UXs5hUB+jP7IhjHU25fOi/iuuOUAGMJ9OUYdx027nMmktTPeOssGr5XQ5Q61sAvHyyWkkzBELkAiE3AOpC3dqEhvGZzPxd9E6d+8oPIGq9H1Xlwqx41Oyk1+2WfGYQg37P+LzGG/Kw7ABd0YdhJ62HIV11R96+eiVsyUW3ij9Nn0kIIf9BIOwBwMuqivPS6qG2r64rHsdzOwHwsqriu070XXUGoCouPucUL74d0GxspHtM3w7GGx4yoA6AM58F8pDv8bulAsDL5q24DqxUAP4SnUMVLz0A0wtm9SudA7IGNl0HANNEbesHB9immOl54QDTRG3rBwfYppjpeeEA00Rt6wcH2KaY6XnhANNEbesHB9immOl5vwBXx+FDZ09VQQAAAABJRU5ErkJggg==",
                    width: 64,
                    height: 66,
                    left: -31,
                    top: -35,
                },
            },
        ],
    }
]

function Main() {
    const [industries, setIndustries] = useState(startIndustries);
    const [cargoes, setCargoes] = useState(startCargoes);
    const [industryId, setIndustryId] = useState(0);
    const [cargoId, setCargoId] = useState(0);

    const [generic, setGeneric] = useState({
        name: "TrueGRF",
        description: "Your first NewGRF with TrueGRF",
    });
    const [tab, setTab] = useState("generic");

    function onChangeIndustry(id: number) {
        //setLayoutSelection(0);
        setIndustryId(id);
    }
    function onChangeCargo(id: number) {
        setCargoId(id);
    }

    function openGame() {
        setTab("test");
        onGameClick();
    }

    function onGameClick() {
        let game: any = document?.getElementById("game");
        game.contentWindow.focus();
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
                <GenerateGRF industries={industries} cargoes={cargoes} generic={generic} openGame={openGame} />
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
                            <ListGroup.Item variant="light" action eventKey="cargoes">
                                <h5 className="mb-1">Cargoes</h5>
                                <small>Create or modify cargoes</small>
                            </ListGroup.Item>
                            <ListGroup.Item variant="light" action eventKey="test" onClick={onGameClick}>
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
                                        <IndustryList onChangeIndustry={onChangeIndustry} industries={industries} />
                                    </Col>
                                    <Col>
                                        <IndustryItem industry={industries[industryId]} setIndustry={(e: React.SetStateAction<any>) => setIndustries((prevState) => { let newState = [...prevState]; newState[industryId] = e(prevState[industryId]); return newState } )} />
                                    </Col>
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="cargoes">
                                <Row>
                                    <Col sm={3}>
                                        <CargoList onChangeCargo={onChangeCargo} cargoes={cargoes} />
                                    </Col>
                                    <Col>
                                        <CargoItem cargo={cargoes[cargoId]} setCargo={(e: React.SetStateAction<any>) => setCargoes((prevState) => { let newState = [...prevState]; newState[cargoId] = e(prevState[cargoId]); return newState } )} />
                                    </Col>
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="test">
                                <p className="lead">Test your NewGRF in-game. Press one of the green button first above!</p>
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
