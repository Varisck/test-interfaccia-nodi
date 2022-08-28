export class Node {
    constructor(x, y, value) {
        this.x = x;
        this.y = y;
        this.radius = 20;
        this.val = value;
    }

    changeValue(newValue){
        this.val = newValue;
    }

    draw(ctx, color) {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = 2;
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.stroke();
        ctx.closePath();
    }
}

export function isInsideSelected(node, selectedNodes){
    let trovato = false;
    selectedNodes.forEach((sel) => {
        if(sel.x === node.x && sel.y === node.y){
            trovato = true;
            return;
        }
    })
    return trovato;
}