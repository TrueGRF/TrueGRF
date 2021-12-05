import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import ToggleButton from 'react-bootstrap/ToggleButton';

const disabledCargoes = [0, 2, 5, 12, 20, 26];

const classesOptions = [
    {
        value: 0x01,
        label: "Passengers",
    },
    {
        value: 0x02,
        label: "Mail",
    },
    {
        value: 0x04,
        label: "Express",
    },
    {
        value: 0x08,
        label: "Armored",
    },
    {
        value: 0x10,
        label: "Bulk",
    },
    {
        value: 0x20,
        label: "Piece Goods",
    },
    {
        value: 0x40,
        label: "Liquid",
    },
];

const optionalClassesOptions = [
    {
        name: "Refrigerated",
        value: 0x0080,
        available: 0x20,
    },
    {
        name: "Hazardous",
        value: 0x0100,
        available: 0x04 | 0x10 | 0x20 | 0x40,
    },
    {
        name: "Covered",
        value: 0x0200,
        available: 0x10 | 0x20,
    },
    {
        name: "Oversized",
        value: 0x0400,
        available: 0x20,
    },
    {
        name: "Powderized",
        value: 0x0800,
        available: 0x10,
    },
    {
        name: "Not Pourable",
        value: 0x1000,
        available: 0x10,
    },
];

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
                                                    {classesOptions.filter((val: any, index, arr) => val.value === (cargo.classes & 0x7f))[0].label}
                                                </Dropdown.Toggle>

                                                <Dropdown.Menu>
                                                    {Object.entries(classesOptions).map(([id, option]: any) => (
                                                    <Dropdown.Item key={`classes-${id}`} eventKey={option.value}>{option.label}</Dropdown.Item>
                                                    ))}
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </td>
                                        <td>
                                            {Object.entries(optionalClassesOptions).map(([id, option]: any) => (
                                                <Form.Check
                                                    type="checkbox"
                                                    id={`cargo-classes-${option.name}`}
                                                    label={option.name}
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
