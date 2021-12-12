import { useLayoutEffect, useState } from 'react';

import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import ToggleButton from 'react-bootstrap/ToggleButton';

import Editor from '../Editor/Editor';
import Sprite from '../Sprite';

import DataPlacement from './DataPlacement';
import DataType from './DataType';

import './IndustryItem.css';

function IndustryItem({industry, setIndustry, deleteIndustry}: any) {
    const [deleteShow, setDeleteShow] = useState(false);
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

    useLayoutEffect(() => {
        if (industry.layout.length <= layoutSelection) {
            setLayoutSelection(0);
        }
    }, [industry, layoutSelection]);

    function setType(type: string) {
        setIndustry((prevState: any) => {
            delete prevState[prevState.type];

            let update = {}
            switch (type) {
                case "primary":
                    update = {
                        type: type,
                        primary: [],
                    };
                    break;
                case "secondary":
                    update = {
                        type: type,
                        secondary: {
                            acceptance: [],
                            production: [],
                        },
                    };
                    break;
                case "tertiary":
                    update = {
                        type: type,
                        tertiary: [],
                    };
                    break;
            }

            return {
                ...prevState,
                ...update,
            }
        });
    }

    function newLayout() {
        setIndustry((prevState: any) => {
            let layout = [...prevState.layout];
            layout.push([[0, 0, 0], [0, 0, 0], [0, 0, 0]]);

            return {
                ...prevState,
                layout,
            }
        });
        setLayoutSelection(industry.layout.length);
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
                        <th style={{width: "180px"}} scope="row">Index</th>
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
                                    name="industry-available"
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
                                    name="industry-available"
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
                            Type
                        </th>
                        <td>
                            <Dropdown onSelect={(e) => setType(e || "primary")} as="span">
                                <Dropdown.Toggle size="sm">
                                    {DataType[industry.type].label}
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    {Object.entries(DataType).map((option) => (
                                    <Dropdown.Item active={option[0] === industry.type} key={`type-${option[0]}`} eventKey={option[0]}>{option[1].label}</Dropdown.Item>
                                    ))}
                                </Dropdown.Menu>
                            </Dropdown>
                        </td>
                    </tr>
                    {industry.type === "primary" && <tr>
                        <th scope="row">
                            Production
                        </th>
                        <td>
                            <Table>
                                <thead>
                                    <tr>
                                        <th>Cargo label</th>
                                        <th>Multiplier</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Object.entries(industry.primary).map(([key, value]: any) => (
                                    <tr key={`primary-${key}`}>
                                        <th scope="row">{value.cargoLabel}</th>
                                        <td>
                                            <Form.Control size="sm" type="number" value={value.multiplier} onChange={(e) => setValue({primary: Object.values({...industry.primary, [key]: { cargoLabel: value.cargoLabel, multiplier: parseInt(e.target.value)}})})} />
                                        </td>
                                    </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </td>
                    </tr>}
                    {industry.type === "secondary" && <tr>
                    <th scope="row">
                            Production<br/> Acceptance<br/> Matrix
                        </th>
                        <td>
                            <Table>
                                <thead>
                                    <tr>
                                        <th></th>
                                        {Object.entries(industry.secondary.acceptance).map(([id, acceptance]: any) => (
                                            <th key={`secondary-acceptance-${id}`}>{acceptance.cargoLabel}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {Object.entries(industry.secondary.production).map(([id, production]: any) => (
                                    <tr key={`secondary-production-${id}`}>
                                        <th scope="row">{production.cargoLabel}</th>
                                        {Object.entries(production.multiplier).map(([aid, value]: any) => (
                                            <td key={`secondary-production-${id}-${aid}`}>
                                                <Form.Control size="sm" type="number" value={value} onChange={(e) => setValue({secondary: {...industry.secondary, production: Object.values({...industry.secondary.production, [id]: { cargoLabel: production.cargoLabel, multiplier: Object.values({...production.multiplier, [aid]: parseInt(e.target.value)})}})}})} />
                                            </td>
                                        ))}
                                    </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </td>
                    </tr>}
                    {industry.type === "tertiary" && <tr>
                        <th scope="row">
                            Acceptance
                        </th>
                        <td>
                            <Table>
                                <thead>
                                    <tr>
                                        <th>Cargo label</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Object.entries(industry.tertiary).map(([key, value]: any) => (
                                    <tr key={`tertiary-${key}`}>
                                        <th scope="row">{value.cargoLabel}</th>
                                    </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </td>
                    </tr>}
                    <tr>
                        <th scope="row">
                            <ListGroup activeKey={ layoutSelection }>
                                <ListGroup.Item variant="dark">
                                    <h5 className="mb-1" style={{float: "left"}}>Layouts</h5>
                                    <Button style={{float: "right"}} variant="success" size="sm" onClick={() => newLayout()}>+</Button>
                                </ListGroup.Item>

                                {industry.layout.map((layout: any, layout_id: number) => (
                                    <ListGroup.Item variant="light" action eventKey={ layout_id } key={`layout-${layout_id}`} onClick={() => setLayoutSelection(layout_id)}>
                                        <h5 className="mb-1">Layout #{layout_id}</h5>
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </th>
                        <td>
                            <small>(layout images are an estimation; click an image to change it)</small>
                            <div className="layout-container">
                                {layoutSelection < industry.layout.length && industry.layout[layoutSelection].map((row: any, row_index: number) => (
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
                                    {layoutSelection < industry.layout.length && industry.layout[layoutSelection].map((row: any, row_index: number) => (
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
                                    {DataPlacement[industry.placement].label}
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    {Object.entries(DataPlacement).map((option) => (
                                    <Dropdown.Item active={option[0] === industry.placement} key={`placement-${option[0]}`} eventKey={option[0]}>{option[1].label}</Dropdown.Item>
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
                    <tr>
                        <td></td>
                        <td>
                            <Button variant="danger" onClick={() => setDeleteShow(true)}>Delete industry</Button>
                            <Modal show={deleteShow} onHide={() => setDeleteShow(false)}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Delete Industry?</Modal.Title>
                                </Modal.Header>

                                <Modal.Body>
                                    <p>Are you sure you want to delete '{industry.name}'?</p>
                                </Modal.Body>

                                <Modal.Footer>
                                    <Button variant="secondary" onClick={() => setDeleteShow(false)}>Close</Button>
                                    <Button variant="danger" onClick={() => { setDeleteShow(false); deleteIndustry(); }}>Delete</Button>
                                </Modal.Footer>
                            </Modal>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </>
    );
}

export default IndustryItem;
