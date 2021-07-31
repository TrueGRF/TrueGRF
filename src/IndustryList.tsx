import ListGroup from 'react-bootstrap/ListGroup';

function IndustryList({ onChangeIndustry }: any) {
     return (
        <ListGroup defaultActiveKey="coalmine">
            <ListGroup.Item variant="light" action eventKey="coalmine" onClick={() => onChangeIndustry(0)}>
                <h5 className="mb-1">Coal Mine</h5>
                <small>Built-in Industry</small>
            </ListGroup.Item>
            <ListGroup.Item variant="light" action eventKey="powerstation" onClick={() => onChangeIndustry(1)}>
                <h5 className="mb-1">Power Station</h5>
                <small>Built-in Industry</small>
            </ListGroup.Item>
        </ListGroup>
    );
}

export default IndustryList;
