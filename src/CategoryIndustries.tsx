import { useState } from 'react';

import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import ToggleButton from 'react-bootstrap/ToggleButton';

import Editor from './Editor';
import Sprite from './Sprite';

const placementOptions: {[key: string] : any} = {
    "anywhere": {
        label: "Anywhere",
    },
    "in-town": {
        label: "In town",
    },
    "in-large-town": {
        label: "In large town",
    },
    "custom": {
        label: "Customize",
    },
};

function CategoryIndustries(props: any) {
    const [industry, setIndustry] = useState(props.industries[0]);
    const [layoutSelection, setLayoutSelection] = useState(0);
    const [customPlacement, setCustomPlacement] = useState(false);

    function ChangeValue(update: any) {
        setIndustry((prevState: any) => ({
            ...prevState,
            ...update,
        }));
        props.setIndustry((prevState: any) => {
            prevState[industry.id] = {
                ...prevState[industry.id],
                ...update,
            }
            return prevState;
        });
    }

    function ChangeLayout(layout: number, row: number, col: number, value: any) {
        industry.layout[layout][row][col] = value;
        ChangeValue({layout: industry.layout});
    }

    function IndustryClick(id: number) {
        props.setIndustry((prevState: any) => {
            prevState[industry.id] = industry;
            return prevState;
        });
        setLayoutSelection(0);
        setIndustry(props.industries[id]);
    }

    return (
        <Row>
            <Col sm={3}>
                <ListGroup defaultActiveKey="coalmine">
                    <ListGroup.Item variant="light" action eventKey="coalmine" onClick={() => IndustryClick(0)}>
                        <h5 className="mb-1">Coal Mine</h5>
                        <small>Built-in Industry</small>
                    </ListGroup.Item>
                    <ListGroup.Item variant="light" action eventKey="powerstation" onClick={() => IndustryClick(1)}>
                        <h5 className="mb-1">Power Station</h5>
                        <small>Built-in Industry</small>
                    </ListGroup.Item>
                </ListGroup>
            </Col>
            <Col>
                <p className="lead">Properties</p>
                <Table>
                    <tbody>
                        <tr>
                            <th scope="row">Index</th>
                            <td>{industry.id}</td>
                        </tr>
                        <tr>
                            <th scope="row">Available</th>
                            <td>
                                <ButtonGroup>
                                    <ToggleButton
                                        variant="outline-success"
                                        size="sm"
                                        id="enabled"
                                        type="radio"
                                        name="radio"
                                        value="enabled"
                                        checked={industry.available === true}
                                        onChange={() => ChangeValue({available: true})}
                                        >
                                            Enabled
                                    </ToggleButton>
                                    <ToggleButton
                                        variant="outline-danger"
                                        size="sm"
                                        id="disabled"
                                        type="radio"
                                        name="radio"
                                        value="disabled"
                                        checked={industry.available === false}
                                        onChange={() => ChangeValue({available: false})}
                                        >
                                            Disabled
                                    </ToggleButton>
                                </ButtonGroup>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">Name</th>
                            <td>
                                <Form.Control placeholder="Name of the industry" size="sm" value={industry.name} onChange={(e) => ChangeValue({name: e.target.value})} />
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">
                                Layout
                                <Dropdown onSelect={(e) => setLayoutSelection(parseInt(e || "0"))}>
                                    <Dropdown.Toggle size="sm">
                                        Layout #{layoutSelection}
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        {industry.layout.map((layout: any, layout_index: number) => (
                                        <Dropdown.Item key={`layout-selection-${layout_index}`} eventKey={layout_index}>Layout #{layout_index}</Dropdown.Item>
                                        ))}
                                    </Dropdown.Menu>
                                </Dropdown>
                            </th>
                            <td>
                                <small>(layout images are an estimation; click an image to change it)</small>
                                {industry.layout[layoutSelection].map((row: any, row_index: number) => (
                                <div key={`layout-${layoutSelection}-${row_index}`} className="layout-row">
                                    {row.map((col: any, col_index: number) => (
                                    <Dropdown onSelect={(e) => ChangeLayout(layoutSelection, row_index, col_index, parseInt(e || "0xfd"))} key={`layout-${layoutSelection}-${row_index}-${col_index}`} as="span">
                                        <Dropdown.Toggle as="span" bsPrefix="layout">
                                            <Sprite old_tile_id={col} />
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item eventKey="0xfd">(none)</Dropdown.Item>
                                            <Dropdown.Item eventKey="0x00"><Sprite old_tile_id={0x00} /></Dropdown.Item>
                                            <Dropdown.Item eventKey="0x02"><Sprite old_tile_id={0x02} /></Dropdown.Item>
                                            <Dropdown.Item eventKey="0x03"><Sprite old_tile_id={0x03} /></Dropdown.Item>
                                            <Dropdown.Item eventKey="0x04"><Sprite old_tile_id={0x04} /></Dropdown.Item>
                                            <Dropdown.Item eventKey="0x05"><Sprite old_tile_id={0x05} /></Dropdown.Item>
                                            <Dropdown.Item eventKey="0x06"><Sprite old_tile_id={0x06} /></Dropdown.Item>
                                            <Dropdown.Item eventKey="0x07"><Sprite old_tile_id={0x07} /></Dropdown.Item>
                                            <Dropdown.Item eventKey="0x08"><Sprite old_tile_id={0x08} /></Dropdown.Item>
                                            <Dropdown.Item eventKey="0x09"><Sprite old_tile_id={0x09} /></Dropdown.Item>
                                            <Dropdown.Item eventKey="0x0a"><Sprite old_tile_id={0x0a} /></Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    ))}
                                </div>
                                ))}
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">
                                Placement (WIP)
                                <p className="lead">Not working yet</p>
                            </th>
                            <td>
                                <Dropdown onSelect={(e) => ChangeValue({placement: e })} as="span">
                                    <Dropdown.Toggle size="sm">
                                        {placementOptions[industry.placement].label}
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        {Object.entries(placementOptions).map((option: any) => (
                                        <Dropdown.Item key={`placement-${option[0]}`} eventKey={option[0]}>{option[1].label}</Dropdown.Item>
                                        ))}
                                    </Dropdown.Menu>
                                </Dropdown>

                                {industry.placement === "custom" &&
                                    <span>
                                        <Button variant="primary" onClick={() => setCustomPlacement(true)} size="sm" style={{marginLeft: 10}}>
                                            Editor
                                        </Button>

                                        (resets every time you open it)
                                    </span>
                                }

                                <Modal show={customPlacement} onHide={() => setCustomPlacement(false)} dialogClassName="modal-fixed">
                                    <Modal.Header closeButton>
                                        <Modal.Title>Custom Placement</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Editor />
                                    </Modal.Body>
                                </Modal>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </Col>
        </Row>
    );
}

export default CategoryIndustries;
