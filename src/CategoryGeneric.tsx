import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';

function CategoryGeneric(props: any) {
    function ChangeValue(update: any) {
        props.setGeneric((prevState: any) => ({
            ...prevState,
            ...update,
        }));
    }

    return (
        <Row>
            <Col sm={3}>
                <ListGroup defaultActiveKey="generic">
                    <ListGroup.Item variant="light" action eventKey="generic">
                        <h5 className="mb-1">Generic</h5>
                        <small>GRF ID, Description, etc</small>
                    </ListGroup.Item>
                </ListGroup>
            </Col>
            <Col>
                <p className="lead">Properties</p>
                <Table>
                    <tbody>
                        <tr>
                            <th scope="row">GRFID</th>
                            <td>TRU1</td>
                        </tr>
                        <tr>
                            <th scope="row">Name</th>
                            <td>
                                <Form.Control placeholder="Name of your NewGRF" size="sm" value={props.generic.name} onChange={(e) => ChangeValue({"name": e.target.value})} />
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">Description</th>
                            <td>
                                <Form.Control as="textarea" rows={3} placeholder="Description explaining what your NewGRF is about" size="sm" value={props.generic.description} onChange={(e) => ChangeValue({"description": e.target.value})} />
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </Col>
        </Row>
    );
}

export default CategoryGeneric;
