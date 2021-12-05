import ListGroup from 'react-bootstrap/ListGroup';

function IndustryList({ onChangeIndustry, industries }: any) {
     return (
        <ListGroup defaultActiveKey="0">
            {industries.map((industry: any, industry_id: number) => (
                <ListGroup.Item variant="light" action eventKey={ industry_id } key={`industry-${industry.id}`} onClick={() => onChangeIndustry(industry_id)}>
                    <h5 className="mb-1">{ industry.name }</h5>
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
}

export default IndustryList;
