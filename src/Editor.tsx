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
} from 'react-flow-renderer';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import EditorSidebar from './EditorSidebar';
import { VariableNode, MathNode, CompareNode, OutputNode } from './EditorNode';

import './Editor.css';

const onDragOver = (event: DragEvent) => {
  event.preventDefault();
  event.dataTransfer.dropEffect = 'move';
};

let id = 0;
const getId = (): ElementId => `dndnode_${id++}`;

const nodeTypes = {
    variable: VariableNode,
    math: MathNode,
    compare: CompareNode,
    output: OutputNode,
};

const DnDFlow = () => {
    const reactFlowWrapper = useRef(null);
    const [reactFlowInstance, setReactFlowInstance] = useState<OnLoadParams>();
    const [elements, setElements] = useState<Elements>([]);

    const onConnect = (params: Connection | Edge) => setElements((els) => addEdge({...params, animated: true}, els));
    const onElementsRemove = (elementsToRemove: Elements) => setElements((els) => removeElements(elementsToRemove, els));
    const onLoad = (_reactFlowInstance: OnLoadParams) => setReactFlowInstance(_reactFlowInstance);
    const onEdgeUpdate = (oldEdge: Edge, newConnection: Connection) => setElements((els) => updateEdge(oldEdge, newConnection, els));

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
            const newNode: Node = {
                id: getId(),
                type: type,
                position,
                sourcePosition: Position.Right,
                targetPosition: Position.Left,
                data: {},
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

export default DnDFlow;
