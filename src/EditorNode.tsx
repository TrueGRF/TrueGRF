import React, { memo, FC, CSSProperties } from 'react';

import { Handle, Position, NodeProps } from 'react-flow-renderer';

import Dropdown from 'react-bootstrap/Dropdown';
import Toast from 'react-bootstrap/Toast';

const targetHandleStyle: CSSProperties = { background: '#555' };
const sourceHandleStyleA: CSSProperties = { ...targetHandleStyle, top: 14 };
const sourceHandleStyleB: CSSProperties = { ...targetHandleStyle, bottom: 6, top: 'auto' };

const VariableNode: FC<NodeProps> = ({ data, isConnectable }) => {
    return (
        <>
            <Toast>
                <Toast.Body>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic" size="sm">
                            Distance to land
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item>Distance to land</Dropdown.Item>
                            <Dropdown.Item>Distance to town</Dropdown.Item>
                            <Dropdown.Item>Layout number</Dropdown.Item>
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
    return (
        <>
            <Handle type="target" position={Position.Left} id="a" style={sourceHandleStyleA} />
            <Handle type="target" position={Position.Left} id="b" style={sourceHandleStyleB} />
            <Toast>
                <Toast.Body>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic" size="sm">
                            Addition
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item>Addition</Dropdown.Item>
                            <Dropdown.Item>Subtract</Dropdown.Item>
                            <Dropdown.Item>Multiply</Dropdown.Item>
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
    return (
        <>
            <Handle type="target" position={Position.Left} id="a" style={sourceHandleStyleA} />
            <Handle type="target" position={Position.Left} id="b" style={sourceHandleStyleB} />
            <Toast>
                <Toast.Body>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic" size="sm">
                            Greater Than
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item>Greater Than</Dropdown.Item>
                            <Dropdown.Item>Smaller Than</Dropdown.Item>
                            <Dropdown.Item>Equal</Dropdown.Item>
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

const OutputNode: FC<NodeProps> = ({ data, isConnectable }) => {
    return (
        <>
            <Handle type="target" position={Position.Left} style={targetHandleStyle} />
            <Toast>
                <Toast.Body>Result</Toast.Body>
            </Toast>
        </>
    );
};
const OutputNodeMemo = memo(OutputNode);
export { OutputNodeMemo as OutputNode };
