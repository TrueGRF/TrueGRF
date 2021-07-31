import React, { memo, FC, CSSProperties } from 'react';

import { Handle, Position, NodeProps } from 'react-flow-renderer';

import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import Toast from 'react-bootstrap/Toast';

const targetHandleStyle: CSSProperties = { background: '#555' };
const sourceHandleStyleA: CSSProperties = { ...targetHandleStyle, top: 14 };
const sourceHandleStyleB: CSSProperties = { ...targetHandleStyle, bottom: 6, top: 'auto' };

const variableOptions: {[key: string] : any} = {
    "distance-to-town": {
        label: "Distance to town",
    },
}

const mathOptions: {[key: string] : any} = {
    "addition": {
        label: "Addition",
    },
    "subtract": {
        label: "Subtract",
    },
    "multiply": {
        label: "Multiply",
    },
}

const compareOptions: {[key: string] : any} = {
    "gt": {
        label: "Greater Than",
    },
    "lt": {
        label: "Less Than",
    },
}

const VariableNode: FC<NodeProps> = ({ data, isConnectable }) => {
    if (data.value === undefined) {
        data.value = "distance-to-land";
    }

    return (
        <>
            <Toast>
                <Toast.Body>
                    <Dropdown onSelect={data.onChange}>
                        <Dropdown.Toggle variant="success" size="sm">
                            {variableOptions[data.value].label}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            {Object.entries(variableOptions).map((option: any) => (
                            <Dropdown.Item key={`variable-${option[0]}`} eventKey={option[0]}>{option[1].label}</Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
                </Toast.Body>
            </Toast>
            <Handle type="source" position={Position.Right} style={targetHandleStyle} isConnectable={isConnectable} />
        </>
    );
};
const VariableNodeMemo = memo(VariableNode);
export { VariableNodeMemo as VariableNode };

const MathNode: FC<NodeProps> = ({ data, isConnectable }) => {
    if (data.value === undefined) {
        data.value = "addition";
    }

    return (
        <>
            <Handle type="target" position={Position.Left} id="a" style={sourceHandleStyleA} />
            <Handle type="target" position={Position.Left} id="b" style={sourceHandleStyleB} />
            <Toast>
                <Toast.Body>
                    <Dropdown onSelect={data.onChange}>
                        <Dropdown.Toggle variant="success" size="sm">
                            {mathOptions[data.value].label}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            {Object.entries(mathOptions).map((option: any) => (
                            <Dropdown.Item key={`math-${option[0]}`} eventKey={option[0]}>{option[1].label}</Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
                </Toast.Body>
            </Toast>
            <Handle type="source" position={Position.Right} style={targetHandleStyle} isConnectable={isConnectable} />
        </>
    );
};
const MathNodeMemo = memo(MathNode);
export { MathNodeMemo as MathNode };

const CompareNode: FC<NodeProps> = ({ data, isConnectable }) => {
    if (data.value === undefined) {
        data.value = "gt";
    }

    return (
        <>
            <Handle type="target" position={Position.Left} id="a" style={sourceHandleStyleA} />
            <Handle type="target" position={Position.Left} id="b" style={sourceHandleStyleB} />
            <Toast>
                <Toast.Body>
                    <Dropdown onSelect={data.onChange}>
                        <Dropdown.Toggle variant="success" size="sm">
                            {compareOptions[data.value].label}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            {Object.entries(compareOptions).map((option: any) => (
                            <Dropdown.Item key={`math-${option[0]}`} eventKey={option[0]}>{option[1].label}</Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
                </Toast.Body>
            </Toast>
            <Handle type="source" position={Position.Right} style={targetHandleStyle} isConnectable={isConnectable} />
        </>
    );
};
const CompareNodeMemo = memo(CompareNode);
export { CompareNodeMemo as CompareNode };

const NumberNode: FC<NodeProps> = ({ data, isConnectable }) => {
    if (data.value === undefined) {
        data.value = 0;
    }

    return (
        <>
            <Toast>
                <Toast.Body>
                    <Form.Control size="sm" value={data.value} onChange={(e) => data.onChange(e.target.value)} />
                </Toast.Body>
            </Toast>
            <Handle type="source" position={Position.Right} style={targetHandleStyle} isConnectable={isConnectable} />
        </>
    );
};
const NumberNodeMemo = memo(NumberNode);
export { NumberNodeMemo as NumberNode };

const OutputNode: FC<NodeProps> = ({ data, isConnectable }) => {
    return (
        <>
            <Handle type="target" position={Position.Left} style={targetHandleStyle} />
            <Toast>
                <Toast.Body>Allow placement</Toast.Body>
            </Toast>
        </>
    );
};
const OutputNodeMemo = memo(OutputNode);
export { OutputNodeMemo as OutputNode };
