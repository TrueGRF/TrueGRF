import { useState } from 'react';

import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import ToggleButton from 'react-bootstrap/ToggleButton';

import Editor from './Editor';
import Sprite from './Sprite';

import './IndustryItem.css';

const placementOptions: {[key: string] : any} = {
    "anywhere": {
        label: "Anywhere",
    },
    "on-water": {
        label: "On water",
    },
    "in-town": {
        label: "In town",
    },
    "in-large-town": {
        label: "In large town",
    },
    "near-town": {
        label: "Near town",
    },
    "custom": {
        label: "Customize",
    },
};

function IndustryItem({industry, setIndustry}: any) {
    const [layoutSelection, setLayoutSelection] = useState(0);
    const [placementEditorVisible, setPlacementEditorVisible] = useState(false);

    function setValue(update: any) {
        setIndustry((prevState: any) => {
            return {
                ...prevState,
                ...update,
            }
        });
    }

    function setLayout(layout_id: number, row: number, col: number, value: any) {
        setIndustry((prevState: any) => {
            let layout = prevState.layout;
            layout[layout_id][row][col] = value;

            return {
                ...prevState,
                layout,
            }
        });
    }

    function setPlacementCustom(e: React.SetStateAction<any>) {
        setIndustry((prevState: any) => {
            return {
                ...prevState,
                placementCustom: e(prevState.placementCustom),
            }
        })
    }

    return (
        <>
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
                                    onChange={() => setValue({available: true})}
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
                                    onChange={() => setValue({available: false})}
                                    >
                                        Disabled
                                </ToggleButton>
                            </ButtonGroup>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">Name</th>
                        <td>
                            <Form.Control placeholder="Name of the industry" size="sm" value={industry.name} onChange={(e) => setValue({name: e.target.value})} />
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
                            <div className="layout-container">
                                {industry.layout[layoutSelection].map((row: any, row_index: number) => (
                                    <div key={`layout-${layoutSelection}-${row_index}`} className="layout-row">
                                        {row.map((col: any, col_index: number) => (
                                            <Dropdown onSelect={(e) => setLayout(layoutSelection, row_index, col_index, parseInt(e || "0xfd"))} key={`layout-${layoutSelection}-${row_index}-${col_index}`} as="span" bsPrefix="layout">
                                                <Dropdown.Toggle as="span" bsPrefix="layout-dropdown">
                                                    <Sprite tile_id={col} />
                                                </Dropdown.Toggle>

                                                <Dropdown.Menu>
                                                    <Dropdown.Item eventKey="0xfd">(none)</Dropdown.Item>
                                                    {industry.id === 0 &&
                                                        <>
                                                            <Dropdown.Item eventKey="0x00"><Sprite tile_id={0x00} /></Dropdown.Item>
                                                            <Dropdown.Item eventKey="0x02"><Sprite tile_id={0x02} /></Dropdown.Item>
                                                            <Dropdown.Item eventKey="0x03"><Sprite tile_id={0x03} /></Dropdown.Item>
                                                            <Dropdown.Item eventKey="0x04"><Sprite tile_id={0x04} /></Dropdown.Item>
                                                            <Dropdown.Item eventKey="0x05"><Sprite tile_id={0x05} /></Dropdown.Item>
                                                            <Dropdown.Item eventKey="0x06"><Sprite tile_id={0x06} /></Dropdown.Item>
                                                        </>
                                                    }
                                                    {industry.id === 1 &&
                                                        <>
                                                            <Dropdown.Item eventKey="0x07"><Sprite tile_id={0x07} /></Dropdown.Item>
                                                            <Dropdown.Item eventKey="0x08"><Sprite tile_id={0x08} /></Dropdown.Item>
                                                            <Dropdown.Item eventKey="0x09"><Sprite tile_id={0x09} /></Dropdown.Item>
                                                            <Dropdown.Item eventKey="0x0a"><Sprite tile_id={0x0a} /></Dropdown.Item>
                                                        </>
                                                    }
                                                    {industry.id === 2 &&
                                                        <>
                                                            <Dropdown.Item eventKey="0xfe0000"><Sprite tile_id={0xfe0000} /></Dropdown.Item>
                                                            <Dropdown.Item eventKey="0xfe0001"><Sprite tile_id={0xfe0001} /></Dropdown.Item>
                                                            <Dropdown.Item eventKey="0xfe0002"><Sprite tile_id={0xfe0002} /></Dropdown.Item>
                                                            <Dropdown.Item eventKey="0xfe0003"><Sprite tile_id={0xfe0003} /></Dropdown.Item>
                                                            <Dropdown.Item eventKey="0xfe0004"><Sprite tile_id={0xfe0004} /></Dropdown.Item>
                                                            <Dropdown.Item eventKey="0xfe0005"><Sprite tile_id={0xfe0005} /></Dropdown.Item>
                                                            <Dropdown.Item eventKey="0xfe0006"><Sprite tile_id={0xfe0006} /></Dropdown.Item>
                                                            <Dropdown.Item eventKey="0xfe0007"><Sprite tile_id={0xfe0007} /></Dropdown.Item>
                                                        </>
                                                    }
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        ))}
                                    </div>
                                ))}

                                <div style={{ right: `0px`, top: `20px`, position: `absolute` }}>
                                    {industry.layout[layoutSelection].map((row: any, row_index: number) => (
                                        row.map((col: any, col_index: number) => (
                                            <span key={`layout-preview-${layoutSelection}-${row_index}-${col_index}`} style={{ right: `${col_index * 32 - row_index * 32}px`, top: `${col_index * 16 + row_index * 16}px`, position: `absolute` }}>
                                                <Sprite tile_id={col} />
                                            </span>
                                    ))))}
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">
                            Placement
                        </th>
                        <td>
                            <Dropdown onSelect={(e) => setValue({placement: e })} as="span">
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
                                <Button variant="primary" onClick={() => setPlacementEditorVisible(true)} size="sm" style={{marginLeft: 10}}>
                                    Editor
                                </Button>
                            }

                            <Modal show={placementEditorVisible} onHide={() => setPlacementEditorVisible(false)} dialogClassName="modal-fixed">
                                <Modal.Header closeButton>
                                    <Modal.Title>Custom Placement</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <p className="lead">
                                        WIP: ensure inputs have exactly one connection (not zero, not two: exactly one).<br/>
                                        WIP: ensure only one output block is placed.
                                    </p>
                                    <Editor elements={industry.placementCustom} setElements={setPlacementCustom} />
                                </Modal.Body>
                            </Modal>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </>
    );
}

export default IndustryItem;
