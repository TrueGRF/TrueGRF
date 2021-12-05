import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import ToggleButton from 'react-bootstrap/ToggleButton';

const disabledCargoes = [0, 2, 5, 12, 20, 26];

function CargoItem({cargo, setCargo}: any) {
    function setValue(update: any) {
        setCargo((prevState: any) => {
            return {
                ...prevState,
                ...update,
            }
        });
    }

    return (
        <>
            <p className="lead">Properties</p>
            <Table>
                <tbody>
                    <tr>
                        <th scope="row">Index</th>
                        <td>{cargo.id}</td>
                    </tr>
                    <tr>
                        <th scope="row">Available</th>
                        <td>
                            <ButtonGroup>
                                <ToggleButton
                                    variant="outline-success"
                                    size="sm"
                                    id="cargo-available-enabled"
                                    type="radio"
                                    name="cargo-available"
                                    value="enabled"
                                    checked={cargo.available === true}
                                    onChange={() => setValue({available: true})}
                                    >
                                        Enabled
                                </ToggleButton>
                                <ToggleButton
                                    variant="outline-danger"
                                    size="sm"
                                    id="cargo-available-disabled"
                                    type="radio"
                                    name="cargo-available"
                                    value="disabled"
                                    checked={cargo.available === false}
                                    onChange={() => setValue({available: false})}
                                    disabled={disabledCargoes.includes(cargo.id)}
                                    >
                                        Disabled
                                </ToggleButton>
                            </ButtonGroup>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">Name</th>
                        <td>
                            <Form.Control placeholder="Name of the cargo" size="sm" value={cargo.name} onChange={(e) => setValue({name: e.target.value})} />
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">Unit</th>
                        <td>
                            <Form.Control placeholder="Unit of the cargo" size="sm" value={cargo.unit} onChange={(e) => setValue({unit: e.target.value})} />
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">Label</th>
                        <td>
                            <Form.Control disabled={disabledCargoes.includes(cargo.id)} placeholder="Label of the cargo" size="sm" value={cargo.label} onChange={(e) => setValue({label: e.target.value})} />
                        </td>
                    </tr>
                </tbody>
            </Table>
        </>
    );
}

export default CargoItem;
