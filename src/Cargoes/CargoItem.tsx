import { useState } from 'react';

import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import ToggleButton from 'react-bootstrap/ToggleButton';

import DataClasses from './DataClasses';
import DataClassesOptional from './DataClassesOptional';
import DataUnits from './DataUnits';

const disabledCargoes = [0, 2, 5, 12, 20, 26];

function CargoItem({cargo, setCargo, deleteCargo}: any) {
    const [deleteShow, setDeleteShow] = useState(false);

    function setValue(update: any) {
        setCargo((prevState: any) => {
            return {
                ...prevState,
                ...update,
            }
        });
    }

    return (
        <>
            <p className="lead">Properties</p>
            <Table>
                <tbody>
                    <tr>
                        <th style={{width: "180px"}} scope="row">Index</th>
                        <td>{cargo.id}</td>
                    </tr>
                    <tr>
                        <th scope="row">Available</th>
                        <td>
                            <ButtonGroup>
                                <ToggleButton
                                    variant="outline-success"
                                    size="sm"
                                    id="cargo-available-enabled"
                                    type="radio"
                                    name="cargo-available"
                                    value="enabled"
                                    checked={cargo.available === true}
                                    onChange={() => setValue({available: true})}
                                    >
                                        Enabled
                                </ToggleButton>
                                <ToggleButton
                                    variant="outline-danger"
                                    size="sm"
                                    id="cargo-available-disabled"
                                    type="radio"
                                    name="cargo-available"
                                    value="disabled"
                                    checked={cargo.available === false}
                                    onChange={() => setValue({available: false})}
                                    disabled={disabledCargoes.includes(cargo.id)}
                                    >
                                        Disabled
                                </ToggleButton>
                            </ButtonGroup>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">Name</th>
                        <td>
                            <Form.Control placeholder="Name of the cargo" size="sm" value={cargo.name} onChange={(e) => setValue({name: e.target.value})} />
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">Unit Name</th>
                        <td>
                            <Dropdown onSelect={(e) => setValue({ unitName: e })} as="span">
                                <Dropdown.Toggle size="sm">
                                    {DataUnits.filter((val) => val.value === cargo.unitName)[0].label}
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    {Object.entries(DataUnits).map(([id, option]) => (
                                    <Dropdown.Item active={option.value === cargo.unitName} key={`unit-${id}`} eventKey={option.value}>{option.label}</Dropdown.Item>
                                    ))}
                                </Dropdown.Menu>
                            </Dropdown>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">Long Name</th>
                        <td>
                            <Form.Control placeholder="Long name of the cargo" size="sm" value={cargo.longName} onChange={(e) => setValue({unit: e.target.value})} />
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">Label</th>
                        <td>
                            <Form.Control disabled={disabledCargoes.includes(cargo.id)} placeholder="Label of the cargo" size="sm" value={cargo.label} onChange={(e) => setValue({label: e.target.value})} />
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">
                            Cargo class
                        </th>
                        <td>
                            <Container style={{ paddingLeft: 0 }}>
                                <Row>
                                    <Col sm={3}>
                                        <Dropdown onSelect={(e) => setValue({ classes: parseInt(e || "0") })} as="span">
                                            <Dropdown.Toggle size="sm" disabled={disabledCargoes.includes(cargo.id)}>
                                                {DataClasses.filter((val) => val.value === (cargo.classes & 0x7f))[0].label}
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                {Object.entries(DataClasses).map(([id, option]) => (
                                                <Dropdown.Item active={option.value === (cargo.classes & 0x7f)} key={`classes-${id}`} eventKey={option.value}>{option.label}</Dropdown.Item>
                                                ))}
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </Col>
                                    <Col>
                                        {DataClassesOptional.map((option) => (
                                            <Form.Check
                                                type="checkbox"
                                                id={`cargo-classes-${option.label}`}
                                                key={`cargo-classes-${option.label}`}
                                                label={option.label}
                                                checked={(cargo.classes & option.value) !== 0}
                                                onChange={(e) => setValue({ classes: (cargo.classes & ~option.value) | (e.target.checked ? option.value : 0) })}
                                                disabled={disabledCargoes.includes(cargo.id) || (cargo.classes & option.available) === 0}
                                            />
                                        ))}
                                    </Col>
                                </Row>
                            </Container>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <Button variant="danger" onClick={() => setDeleteShow(true)} disabled={disabledCargoes.includes(cargo.id)}>Delete cargo</Button>
                            <Modal show={deleteShow} onHide={() => setDeleteShow(false)}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Delete Cargo?</Modal.Title>
                                </Modal.Header>

                                <Modal.Body>
                                    <p>Are you sure you want to delete '{cargo.name}'?</p>
                                </Modal.Body>

                                <Modal.Footer>
                                    <Button variant="secondary" onClick={() => setDeleteShow(false)}>Close</Button>
                                    <Button variant="danger" onClick={() => { setDeleteShow(false); deleteCargo(); }}>Delete</Button>
                                </Modal.Footer>
                            </Modal>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </>
    );
}

export default CargoItem;
