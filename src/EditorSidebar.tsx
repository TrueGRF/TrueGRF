import React, { DragEvent } from 'react';

import Toast from 'react-bootstrap/Toast';

const onDragStart = (event: DragEvent, nodeType: string) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
};

const EditorSidebar = () => {
    return (
        <aside>
            <p className="lead">You can drag these nodes to the pane on the left</p>
            <Toast onDragStart={(event: DragEvent) => onDragStart(event, 'number')} draggable>
                <Toast.Header closeButton={false}>
                    <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                    <strong className="me-auto">Number</strong>
                </Toast.Header>
                <Toast.Body>A fixed number.</Toast.Body>
            </Toast>
            <Toast onDragStart={(event: DragEvent) => onDragStart(event, 'variable')} draggable>
                <Toast.Header closeButton={false}>
                    <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                    <strong className="me-auto">Variable</strong>
                </Toast.Header>
                <Toast.Body>Read values to use in your callback.</Toast.Body>
            </Toast>
            <Toast onDragStart={(event: DragEvent) => onDragStart(event, 'math')} draggable>
                <Toast.Header closeButton={false}>
                    <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                    <strong className="me-auto">Math</strong>
                </Toast.Header>
                <Toast.Body>Do math operations.</Toast.Body>
            </Toast>
            <Toast onDragStart={(event: DragEvent) => onDragStart(event, 'compare')} draggable>
                <Toast.Header closeButton={false}>
                    <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                    <strong className="me-auto">Compare</strong>
                </Toast.Header>
                <Toast.Body>Compare values.</Toast.Body>
            </Toast>
            <Toast onDragStart={(event: DragEvent) => onDragStart(event, 'output')} draggable>
                <Toast.Header closeButton={false}>
                    <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                    <strong className="me-auto">Output</strong>
                </Toast.Header>
                <Toast.Body>Output a value to the game.</Toast.Body>
            </Toast>
        </aside>
    );
};

export default EditorSidebar;
