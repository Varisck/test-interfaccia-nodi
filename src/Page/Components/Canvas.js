import React from 'react'

class Canvas extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    
    cw = 500;
    cy = 500;
    ctx;

    componentDidMount(){
        let canvas = document.getElementById('c');
        let ctx = canvas.getContext('2d');
        this.ctx = ctx;

        canvas.addEventListener('click', (e) => {
            this.props.addNode(e.x - e.target.offsetLeft, e.y - e.target.offsetTop);
        })

        canvas.width = this.cw;
        canvas.height = this.cy;

        ctx.fillStyle = "rgba(0, 0, 0, 0, 0.5)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    
        this.draw(ctx, this.props.nodes);
    };

    componentDidUpdate(){
        this.draw(this.ctx, this.props.nodes);
    }

    draw = (ctx, nodes) => {
        ctx.clearRect(0, 0, this.cw, this.cy);
        
        ctx.fillStyle = "rgba(0, 0, 0, 0, 0.5)";
        ctx.fillRect(0, 0, this.cw, this.cy);
    
        nodes.forEach((node) => node.draw(ctx));
    };
    
    render() {
        return(
            <canvas id='c'/>
        );
    }

};

export default Canvas;