import React, { useState, DragEvent, useRef  } from 'react';
import ReactFlow, {
    ReactFlowProvider,
    addEdge,
    removeElements,
    Controls,
    OnLoadParams,
    Elements,
    Connection,
    Edge,
    ElementId,
    Node,
    Position,
    updateEdge,
    isEdge,
} from 'react-flow-renderer';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import EditorSidebar from './EditorSidebar';
import { NumberNode, VariableNode, MathNode, CompareNode, OutputNode } from './EditorNode';

import './Editor.css';

const onDragOver = (event: DragEvent) => {
  event.preventDefault();
  event.dataTransfer.dropEffect = 'move';
};

let id = 0;
const getId = (): ElementId => `editor_${id++}`;

const nodeTypes = {
    number: NumberNode,
    variable: VariableNode,
    math: MathNode,
    compare: CompareNode,
    output: OutputNode,
};

function Editor(props: any) {
    const reactFlowWrapper = useRef(null);
    const [reactFlowInstance, setReactFlowInstance] = useState<OnLoadParams>();

    const elements: Elements = props.elements;
    const setElements: React.Dispatch<React.SetStateAction<Elements>> = props.setElements;

    /* Find the last "id" value. */
    elements.map((e) => {
        let eid = parseInt(e.id.split("_")[1]);
        if (eid >= id) {
            id = eid + 1;
        }
        return 0;
    });

    const onConnect = (params: Connection | Edge) => setElements((els) => addEdge({...params, animated: true}, els));
    const onElementsRemove = (elementsToRemove: Elements) => setElements((els) => removeElements(elementsToRemove, els));
    const onLoad = (_reactFlowInstance: OnLoadParams) => {
        setReactFlowInstance(_reactFlowInstance);

        setElements((prevState) => prevState.map((e) => {
            if (isEdge(e)) {
                return e;
            }

            return {
                ...e,
                data: {
                    ...e.data,
                    onChange: (value: any) => onNodeChange(e.id, value),
                },
            };
        }));
    }
    const onEdgeUpdate = (oldEdge: Edge, newConnection: Connection) => setElements((els) => updateEdge(oldEdge, newConnection, els));

    const onNodeDragStop = (event: any, node: Node<any>) => {
        setElements((prevState) => prevState.map((e) => {
            if (isEdge(e) || e.id !== node.id) {
                return e;
            }

            return node;
        }));
    }

    function onNodeChange(id: string, value: any) {
        setElements((prevState) => prevState.map((e) => {
            if (isEdge(e) || e.id !== id) {
                return e;
            }

            return {
                ...e,
                data: {
                    ...e.data,
                    value,
                },
            };
        }));
    }

    const onDrop = (event: DragEvent) => {
        event.preventDefault();

        if (reactFlowInstance) {
            const currentWrapper: any = reactFlowWrapper?.current;
            const reactFlowBounds = currentWrapper.getBoundingClientRect();
            const type = event.dataTransfer.getData('application/reactflow');
            const position = reactFlowInstance.project({
                x: event.clientX - reactFlowBounds.left,
                y: event.clientY - reactFlowBounds.top,
            });

            const id = getId();
            const newNode: Node = {
                id: id,
                type: type,
                position,
                sourcePosition: Position.Right,
                targetPosition: Position.Left,
                data: {
                    onChange: (value: any) => onNodeChange(id, value),
                    value: undefined,
                },
            };

            setElements((es) => es.concat(newNode));
        }
    };

    return (
        <Container className="editor">
            <Row>
                <ReactFlowProvider>
                    <Col>
                        <Container ref={reactFlowWrapper} style={{ height: 600 }}>
                            <ReactFlow
                                elements={elements}
                                onConnect={onConnect}
                                onElementsRemove={onElementsRemove}
                                onNodeDragStop={onNodeDragStop}
                                onLoad={onLoad}
                                onDrop={onDrop}
                                onDragOver={onDragOver}
                                onEdgeUpdate={onEdgeUpdate}
                                nodeTypes={nodeTypes}
                                snapToGrid={true}
                            >
                                <Controls />
                            </ReactFlow>
                        </Container>
                    </Col>
                    <Col sm={3}>
                        <EditorSidebar />
                    </Col>
                </ReactFlowProvider>
            </Row>
        </Container>
    );
};

export default Editor;
