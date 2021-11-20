import ListGroup from 'react-bootstrap/ListGroup';

function IndustryList({ onChangeIndustry, industries }: any) {
     return (
        <ListGroup defaultActiveKey="0">
            {industries.map((industry: any, industr_id: number) => (
                <ListGroup.Item variant="light" action eventKey={ industry.id } onClick={() => onChangeIndustry(industry.id)}>
                    <h5 className="mb-1">{ industry.name }</h5>
                    <small>{ industry.description }</small>
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
}

export default IndustryList;
