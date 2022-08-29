import React, { useEffect, useState } from 'react';
import Canvas from './Components/Canvas';
import { Node, isInsideSelected } from './Components/Node';
import NodeInfo from './Components/NodeInfo';

const Page = () => {

    const [nodes, setNodes] = useState([]);
    const [modifiers, setModifiers] = useState({
        aggiungiNodo: false,
        aggiungiNodoConnesso: false
    })
    const [connections, setConnections] = useState([]);
    const [selectedNodes, setSelectedNodes] = useState([]);

    const addNode = (x, y) => {
        setNodes([...nodes, new Node(x, y, `${nodes.length}`)]);
    }

    const aggiungiNodo = () => {
        setModifiers({ ...modifiers, aggiungiNodo: !modifiers.aggiungiNodo });
    }

    const aggiungiNodoConnesso = () => {
        setModifiers({ ...modifiers, aggiungiNodoConnesso: !modifiers.aggiungiNodoConnesso });
    }

    const aggiungiConnessione = () => {
        let newConnections = [];
        for (let i = 0; i < selectedNodes.length; i++) {
            for (let j = i + 1; j < selectedNodes.length; j++) {
                if (!connections.some((conn) =>
                    ((conn[0] === selectedNodes[i] && conn[1] === selectedNodes[j]) || (
                        (conn[1] === selectedNodes[i] && conn[0] === selectedNodes[j])
                    )))) {
                    newConnections.push([selectedNodes[i], selectedNodes[j]]);
                }
            }
        }
        setConnections([...connections, ...newConnections])
    }

    const eliminaNodi = () => {

    };

    return (
        <div className="App">
            <div className="App-header">
                <NodeInfo 
                    selected={selectedNodes}
                />
                <Canvas
                    nodes={nodes}
                    addNode={addNode}
                    modifiers={modifiers}
                    switchAggiungiNodo={aggiungiNodo}
                    addSelectedNode={(node) => {
                        if (!isInsideSelected(node, selectedNodes)) {
                            setSelectedNodes([...selectedNodes, node]);
                        }
                    }}
                    selectedNodes={selectedNodes}
                    clearSelectedNodes={() => {
                        setSelectedNodes([]);
                    }}
                    connections={connections}
                />
                <div className="button-list">
                    <button className="btn btn-dark" onClick={aggiungiNodo}>Aggiungi nodo</button>
                    <button className="btn btn-dark" onClick={aggiungiNodoConnesso}>Aggiungi nodo connesso</button>
                    <button className="btn btn-dark" onClick={aggiungiConnessione}>Aggiungi connessione</button>
                    <button className="btn btn-dark" onClick={eliminaNodi}>Elimina nodi</button>
                </div>
            </div>
        </div>
    )
};

export default Page;
