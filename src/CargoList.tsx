import ListGroup from 'react-bootstrap/ListGroup';

function CargoList({ onChangeCargo, cargoes }: any) {
     return (
        <ListGroup defaultActiveKey="0">
            {cargoes.map((cargo: any, cargo_id: number) => (
                <ListGroup.Item variant="light" action eventKey={ cargo_id } key={`cargo-${cargo.id}`} onClick={() => onChangeCargo(cargo_id)}>
                    <h5 className="mb-1">{ cargo.name }</h5>
                    <small>{ cargo.description }</small>
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
}

export default CargoList;
