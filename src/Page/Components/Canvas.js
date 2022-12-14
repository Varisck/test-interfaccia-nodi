import React from 'react'
import { isInsideSelected } from './Node';
class Canvas extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    
    ctx;

    hadleClick = (e) => {
        e.preventDefault();
        if(this.props.modifiers.aggiungiNodo){
            this.props.addNode(e.x - e.target.offsetLeft, e.y - e.target.offsetTop);
            this.props.switchAggiungiNodo();
        }else{
            let x = e.x - e.target.offsetLeft,
                y = e.y - e.target.offsetTop;
            this.props.nodes.forEach((node) => {
                if(this.isClicked(node, x, y)){
                    this.props.addSelectedNode(node);
                }
            });
            if(this.props.nodes.every((node) => !this.isClicked(node, x, y))){
                this.props.clearSelectedNodes();
            }
        }
    }

    componentDidMount(){
        let canvas = document.getElementById('c');
        let ctx = canvas.getContext('2d');
        this.ctx = ctx;

        canvas.addEventListener('click', this.hadleClick)

        canvas.width = this.props.width;
        canvas.height = this.props.height;
        // this.cw = canvas.width;
        // this.cy = canvas.height;

        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    
        this.draw(ctx, this.props.nodes, this.props.connections);
    };

    componentDidUpdate(){
        this.draw(this.ctx, this.props.nodes, this.props.connections);
    }

    isClicked = (node, x, y) => {
        if(Math.sqrt(Math.pow((node.x - x), 2) + Math.pow(node.y - y, 2)) < node.radius){
            return true;
        }else{
            return false;
        }
    };   

    draw = (ctx, nodes, connections) => {
        ctx.clearRect(0, 0, this.props.width, this.props.height);
        
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, this.props.width, this.props.height);
    
        nodes.forEach((node) => {
            if(!isInsideSelected(node, this.props.selectedNodes)){
                node.draw(ctx, 'red');
            }else{
                node.draw(ctx, 'green');
            }
        });

        connections.forEach((conn) => {
            ctx.beginPath();
            ctx.strokeStyle = 'purple';
            ctx.moveTo(conn[0].x, conn[0].y);
            ctx.lineTo(conn[1].x, conn[1].y);
            ctx.stroke();
        })

    };
    
    render() {
        return(
            <canvas id='c' width={this.props.width} height={this.props.height}/>
        );
    }

};

export default Canvas;