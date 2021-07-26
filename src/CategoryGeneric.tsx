import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

function CategoryGeneric() {
    return (
        <Tab.Container id="categories" defaultActiveKey="generic">
            <Row>
                <Col sm={3}>
                    <ListGroup>
                        <ListGroup.Item variant="light" action eventKey="generic">
                            <h5 className="mb-1">Generic</h5>
                            <small>GRF ID, Description, etc</small>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col>
                    <Tab.Content>
                        <Tab.Pane eventKey="generic">
                            Test
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    );
}

export default CategoryGeneric;
