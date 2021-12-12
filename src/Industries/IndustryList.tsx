import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

function IndustryList({ onChangeIndustry, newIndustry, industries, industryId }: any) {
     return (
        <ListGroup activeKey={ industryId }>
            <ListGroup.Item variant="dark">
                <h5 className="mb-1" style={{float: "left"}}>Industries</h5>
                <Button style={{float: "right"}} variant="success" size="sm" onClick={() => newIndustry()}>+</Button>
            </ListGroup.Item>

            {industries.map((industry: any, industry_id: number) => (
                <ListGroup.Item variant="light" action eventKey={ industry_id } key={`industry-${industry.id}`} onClick={() => onChangeIndustry(industry_id)}>
                    <h5 className="mb-1">{ industry.name }</h5>
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
}

export default IndustryList;
