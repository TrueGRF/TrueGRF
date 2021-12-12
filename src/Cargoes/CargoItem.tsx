import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import ToggleButton from 'react-bootstrap/ToggleButton';

import DataClasses from './DataClasses';
import DataClassesOptional from './DataClassesOptional';
import DataUnits from './DataUnits';

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
                        <th scope="row">Unit Name</th>
                        <td>
                            <Dropdown onSelect={(e) => setValue({ unitName: e })} as="span">
                                <Dropdown.Toggle size="sm">
                                    {DataUnits.filter((val) => val.value === cargo.unitName)[0].label}
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    {Object.entries(DataUnits).map(([id, option]) => (
                                    <Dropdown.Item key={`unit-${id}`} eventKey={option.value}>{option.label}</Dropdown.Item>
                                    ))}
                                </Dropdown.Menu>
                            </Dropdown>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">Long Name</th>
                        <td>
                            <Form.Control placeholder="Long name of the cargo" size="sm" value={cargo.longName} onChange={(e) => setValue({unit: e.target.value})} />
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">Label</th>
                        <td>
                            <Form.Control disabled={disabledCargoes.includes(cargo.id)} placeholder="Label of the cargo" size="sm" value={cargo.label} onChange={(e) => setValue({label: e.target.value})} />
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">
                            Cargo class
                        </th>
                        <td>
                            <Table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <Dropdown onSelect={(e) => setValue({ classes: parseInt(e || "0") })} as="span">
                                                <Dropdown.Toggle size="sm" disabled={disabledCargoes.includes(cargo.id)}>
                                                    {DataClasses.filter((val) => val.value === (cargo.classes & 0x7f))[0].label}
                                                </Dropdown.Toggle>

                                                <Dropdown.Menu>
                                                    {Object.entries(DataClasses).map(([id, option]) => (
                                                    <Dropdown.Item key={`classes-${id}`} eventKey={option.value}>{option.label}</Dropdown.Item>
                                                    ))}
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </td>
                                        <td>
                                            {DataClassesOptional.map((option) => (
                                                <Form.Check
                                                    type="checkbox"
                                                    id={`cargo-classes-${option.label}`}
                                                    label={option.label}
                                                    checked={(cargo.classes & option.value) !== 0}
                                                    onChange={(e) => setValue({ classes: (cargo.classes & ~option.value) | (e.target.checked ? option.value : 0) })}
                                                    disabled={disabledCargoes.includes(cargo.id) || (cargo.classes & option.available) === 0}
                                                />
                                            ))}
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </>
    );
}

export default CargoItem;
