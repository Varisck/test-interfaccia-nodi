import React, { useEffect, useState } from 'react';
import Canvas from './Components/Canvas';

const Page = () => {

    const [nodes, setNodes] = useState([]);

    const addNode = (x, y) => {
        setNodes([...nodes, new Node(x, y)]);
    }

    return (
        <div className="App">
            <div className="App-header">
                <Canvas
                    nodes={nodes}
                    addNode={addNode}
                />
            </div>
        </div>
    )
};

export default Page;

class Node {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.radius = 20;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.strokeStyle = 'red';
        ctx.lineWidth = 2;
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.stroke();
        ctx.closePath();
    }
}