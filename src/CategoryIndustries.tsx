import { useState } from 'react';

import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import ToggleButton from 'react-bootstrap/ToggleButton';

function CategoryIndustries(props: any) {
    const [industry, setIndustry] = useState(props.industries[0]);

    function ChangeValue(update: any) {
        setIndustry((prevState: any) => ({
            ...prevState,
            ...update,
        }));
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
                                        onChange={() => ChangeValue({"available": true})}
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
                                        onChange={() => ChangeValue({"available": false})}
                                        >
                                            Disabled
                                    </ToggleButton>
                                </ButtonGroup>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </Col>
        </Row>
    );
}

export default CategoryIndustries;
