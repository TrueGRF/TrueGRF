import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Table from 'react-bootstrap/Table';
import ToggleButton from 'react-bootstrap/ToggleButton';

function CategoryIndustries(props: any) {
    return (
        <Tab.Container id="categories" defaultActiveKey="coalmine">
            <Row>
                <Col sm={3}>
                    <ListGroup>
                        <ListGroup.Item variant="light" action eventKey="coalmine">
                            <h5 className="mb-1">Coal Mine</h5>
                            <small>Built-in Industry</small>
                        </ListGroup.Item>
                        <ListGroup.Item variant="light" action eventKey="powerstation">
                            <h5 className="mb-1">Power Station</h5>
                            <small>Built-in Industry</small>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col>
                    <p className="lead">Properties</p>
                    <Tab.Content>
                        <Tab.Pane eventKey="coalmine">
                            <Table>
                                <tbody>
                                    <tr>
                                        <th scope="row">Index</th>
                                        <td>#0</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Available</th>
                                        <td>
                                            <ButtonGroup>
                                                <ToggleButton
                                                    variant="outline-success"
                                                    id="enabled"
                                                    type="radio"
                                                    name="radio"
                                                    value="enabled"
                                                    checked={props.radioValue === "enabled"}
                                                    onChange={(e) => props.setRadioValue(e.currentTarget.value)}
                                                    >
                                                        Enabled
                                                </ToggleButton>
                                                <ToggleButton
                                                    variant="outline-danger"
                                                    id="disabled"
                                                    type="radio"
                                                    name="radio"
                                                    value="disabled"
                                                    checked={props.radioValue === "disabled"}
                                                    onChange={(e) => props.setRadioValue(e.currentTarget.value)}
                                                    >
                                                        Disabled
                                                </ToggleButton>
                                            </ButtonGroup>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Tab.Pane>
                        <Tab.Pane eventKey="powerstation">
                            <Table>
                                <tbody>
                                    <tr>
                                        <th scope="row">Index</th>
                                        <td>#1</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    );
}

export default CategoryIndustries;
