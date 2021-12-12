import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Iframe from 'react-iframe';
import 'bootstrap/dist/css/bootstrap.min.css';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

import Generic from './Generic';
import GenerateGRF from './GenerateGRF';
import HeaderWIP from './HeaderWIP';

import IndustryList from './Industries/IndustryList';
import IndustryItem from './Industries/IndustryItem';

import CargoList from './Cargoes/CargoList';
import CargoItem from './Cargoes/CargoItem';

import DataCargoNew from './DataCargoNew';

import { startCargoes, startIndustries } from './ConfigDefault';

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
    function newCargo() {
        let newCargo = {...DataCargoNew};

        /* Find first available id above 32. */
        newCargo.id = 32;
        for (let i = 0; i < cargoes.length; i++) {
            if (cargoes[i].id >= newCargo.id) {
                newCargo.id = cargoes[i].id + 1;
            }
        }

        setCargoes((prevState: any) => {
            return [
                ...prevState,
                newCargo,
            ];
        });
        setCargoId(cargoes.length);
    }
    function deleteCargo() {
        if (cargoId === cargoes.length - 1) {
            setCargoId(cargoId - 1);
        }
        setCargoes((prevState: any) => {
            let newState = [...prevState];
            newState.splice(cargoId, 1);
            return newState;
        });
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
            <Row style={{paddingBottom: "20px"}}>
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
                                <Generic generic={generic} setGeneric={setGeneric} />
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
                                        <CargoList onChangeCargo={onChangeCargo} newCargo={newCargo} cargoes={cargoes} cargoId={cargoId} />
                                    </Col>
                                    <Col>
                                        <CargoItem cargo={cargoes[cargoId]} setCargo={(e: React.SetStateAction<any>) => setCargoes((prevState) => { let newState = [...prevState]; newState[cargoId] = e(prevState[cargoId]); return newState } )} deleteCargo={deleteCargo} />
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
