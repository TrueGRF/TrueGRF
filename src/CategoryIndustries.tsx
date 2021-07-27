import { useState } from 'react';

import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import ToggleButton from 'react-bootstrap/ToggleButton';

function CategoryIndustries(props: any) {
    const [industry, setIndustry] = useState(props.industries[0]);
    const [layoutSelection, setLayoutSelection] = useState(0);

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
                                        Layout #0
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        {industry.layout.map((layout: any, layout_index: number) => (
                                        <Dropdown.Item key={`layout-selection-${layout_index}`} eventKey={layout_index}>Layout #{layout_index}</Dropdown.Item>
                                        ))}
                                    </Dropdown.Menu>
                                </Dropdown>
                            </th>
                            <td>
                                {industry.layout[layoutSelection].map((row: any, row_index: number) => (
                                <div key={`layout-${layoutSelection}-${row_index}`}>
                                    {row.map((col: any, col_index: number) => (
                                    <Dropdown onSelect={(e) => ChangeLayout(layoutSelection, row_index, col_index, parseInt(e || "0xfd"))} key={`layout-${layoutSelection}-${row_index}-${col_index}`} as="span">
                                        <Dropdown.Toggle as="span" bsPrefix="layout">
                                            {col === 0xfd ? "_" : col.toString(16)}
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item eventKey="0xfd">(none)</Dropdown.Item>
                                            <Dropdown.Item eventKey="0x00">00</Dropdown.Item>
                                            <Dropdown.Item eventKey="0x01">01</Dropdown.Item>
                                            <Dropdown.Item eventKey="0x02">02</Dropdown.Item>
                                            <Dropdown.Item eventKey="0x03">03</Dropdown.Item>
                                            <Dropdown.Item eventKey="0x04">04</Dropdown.Item>
                                            <Dropdown.Item eventKey="0x05">05</Dropdown.Item>
                                            <Dropdown.Item eventKey="0x06">06</Dropdown.Item>
                                            <Dropdown.Item eventKey="0x07">07</Dropdown.Item>
                                            <Dropdown.Item eventKey="0x08">08</Dropdown.Item>
                                            <Dropdown.Item eventKey="0x09">09</Dropdown.Item>
                                            <Dropdown.Item eventKey="0x0a">0a</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    ))}
                                </div>
                                ))}
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </Col>
        </Row>
    );
}

export default CategoryIndustries;
