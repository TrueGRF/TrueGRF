import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

function CargoList({ onChangeCargo, newCargo, cargoes, cargoId }: any) {
    return (
        <ListGroup activeKey={ cargoId }>
            <ListGroup.Item variant="dark">
                <h5 className="mb-1" style={{float: "left"}}>Cargoes</h5>
                <Button style={{float: "right"}} variant="success" size="sm" onClick={() => newCargo()}>+</Button>
            </ListGroup.Item>

            {cargoes.map((cargo: any, cargo_id: number) => (
                <ListGroup.Item variant="light" action eventKey={ cargo_id } key={`cargo-${cargo.id}`} onClick={() => onChangeCargo(cargo_id)}>
                    <h5 className="mb-1">{ cargo.name }</h5>
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
}

export default CargoList;
